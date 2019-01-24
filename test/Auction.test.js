const assert = require('assert');
const ganache = require("ganache-cli");
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledCreator = require('../ethereum/build/AuctionCreator.json');
const compiledAuction = require('../ethereum/build/Auction.json');

let accounts;
let creator;
let auctionAddress;
let auction;

beforeEach(async() => {
    accounts = await web3.eth.getAccounts();
    creator = await new web3.eth.Contract(JSON.parse(compiledCreator.interface))
    .deploy({ data: compiledCreator.bytecode })
    .send({ from: accounts[0], gas: '1000000' });

    await creator.methods.createAuction(0).send({
        from: accounts[0],
        gas: '1000000'
    });

    [auctionAddress] = await creator.methods.getAuctions().call();
    auction = await new web3.eth.Contract(
        JSON.parse(compiledAuction.interface),
        auctionAddress
    )
  
})

describe('Auctions', () => {
    it('deploys a creator and an auction', () => {
        assert.ok(creator.options.address);
        assert.ok(auction.options.address);
    })

    it('marks caller as the auction owner', async () => {
        const owner = await auction.methods.owner().call();
        assert.equal(accounts[0], owner);
    })

    it('allows people to place bids', async () => {
        await auction.methods.bid().send({
            value: '300',
            from: accounts[1]
        })

        const bidAmount = await auction.methods.bids(accounts[1]).call();
        assert.equal(300, bidAmount);

    })

    it('forbids the auction owner to bid', async () => {
        try {
            await auction.methods.bid().send({
                value: '300',
                from: accounts[0]
            });
        assert(false);
        } catch (err) {
            assert(err);
        }
    });

    it('allows the auction owner to cancel the auction', async () => {
        await auction.methods.cancelAuction().send({
            from: accounts[0],
            gas: '1000000'
        });
    const canceledState = await auction.methods.auctionState().call();

    assert.equal(3, canceledState);
    })

    it('processes bids', async () => {
        await auction.methods.bid().send({
            from: accounts[1],
            value: web3.utils.toWei('3', 'ether')
        });

        await auction.methods.bid().send({
            from: accounts[1],
            value: web3.utils.toWei('5', 'ether')
        });

        await auction.methods.bid().send({
            from: accounts[2],
            value: web3.utils.toWei('10', 'ether')
        });

        await auction.methods.bid().send({
            from: accounts[3],
            value: web3.utils.toWei('15', 'ether')
        });

        await auction.methods.finalizeAuction().send({
            from: accounts[0],
            gas: '1000000'
        })

        await auction.methods.finalizeAuction().send({
            from: accounts[1],
            gas: '1000000'
        })

        await auction.methods.finalizeAuction().send({
            from: accounts[2],
            gas: '1000000'
        })

        await auction.methods.finalizeAuction().send({
            from: accounts[3],
            gas: '1000000'
        })

        let balance_0 = await web3.eth.getBalance(accounts[0]);
        balance_0 = web3.utils.fromWei(balance_0, 'ether');
        balance_0 = parseFloat(balance_0);
        console.log(balance_0);
        assert(balance_0 > 114);

        let balance_1 = await web3.eth.getBalance(accounts[1]);
        balance_1 = web3.utils.fromWei(balance_1, 'ether');
        balance_1 = parseFloat(balance_1);
        console.log(balance_1);
        assert(balance_1 > 99);

        let balance_2 = await web3.eth.getBalance(accounts[2]);
        balance_2 = web3.utils.fromWei(balance_2, 'ether');
        balance_2 = parseFloat(balance_2);
        console.log(balance_2);
        assert(balance_2 > 99);

        let balance_3 = await web3.eth.getBalance(accounts[3]);
        balance_3 = web3.utils.fromWei(balance_3, 'ether');
        balance_3 = parseFloat(balance_3);
        console.log(balance_3);
        assert(balance_3 < 85);

    })
})
