import React, { Component } from 'react';
import { Card, Grid, Button, Message } from 'semantic-ui-react'
import Layout from '../../components/Layout';
import Auction from '../../ethereum/auction';
import web3 from '../../ethereum/web3';
import PlaceBidForm from '../../components/PlaceBidForm';
import { Router } from '../../routes';

class AuctionShow extends Component {
    static async getInitialProps(props) {
        const auction = Auction(props.query.address);

        const summary = await auction.methods.getSummary().call();  
        
        return {
            address: props.query.address,
            owner: summary[0],
            auctionEnd: summary[1],
            auctionState: summary[2],
            highestBid: summary[3],
            highestBidder: summary[4]
        };
    }

    state = {   
        errorMessage: '',
        loadingFinalize: false,
        loadingCancel: false        
    }

    renderCards() {
        const {
            owner,
            auctionEnd,
            auctionState,
            highestBid,
            highestBidder
        } = this.props;
     
        const auctionEndTime = (new Date(auctionEnd*1000)).toString();   

        const getCurrentState = (x, y) => {
            let currentState = '';
            if (x !== 3 && y*1000 < Date.now()) {
                currentState = 'Ended';
            } else {
                switch (x) {
                    case 0:
                      currentState = 'Started';
                      break;
                    case 1:
                      currentState = 'Running';
                      break;
                    case 2:
                      currentState = 'Ended';
                      break;
                    case 3:
                      currentState = 'Canceled';
                      break;                      
                }
            }            
        
            return currentState;
        }

        let currentState = getCurrentState(Number(auctionState), Number(auctionEnd));    

        const items = [
            {
                header: owner,
                meta: 'Address of Owner',
                description: 'The owner created this auction.',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: auctionEndTime,
                meta: 'Auction ending time and date',
                description: 'This auction will end at this time and date.',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: currentState,
                meta: 'The state this auction is currently in',
                description: 'An auction has four states: Started, Running, Ended, Canceled',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: web3.utils.fromWei(highestBid, 'ether'),
                meta: 'Highest bid in (ether)',
                description: 'The highest bidding amount in ether .',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: highestBidder,
                meta: 'Highest Bidder',
                description: 'The person who bids the highest amount.',
                style: { overflowWrap: 'break-word' }
            }
        ]                  

        return <Card.Group items={items} />;
    }

  
    finalize = async event => {
        event.preventDefault();

        const auction = Auction(this.props.address);

        this.setState({ loadingFinalize: true, errorMessage: ''});

        try {
            const accounts = await web3.eth.getAccounts();
            await auction.methods.finalizeAuction().send({
                from: accounts[0]             
            });
          
          Router.replaceRoute(`/auctions/${this.props.address}`);
        } catch (err) {
          this.setState({ errorMessage: err.message });

        }
        this.setState({ loadingFinalize: false })
    }

    cancel = async event => {
        event.preventDefault();

        const auction = Auction(this.props.address);

        this.setState({ loadingCancel: true, errorMessage: ''});

        try {
            const accounts = await web3.eth.getAccounts();
            await auction.methods.cancelAuction().send({
                from: accounts[0]             
            });
          
            Router.replaceRoute(`/auctions/${this.props.address}`);
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }
        this.setState({ loadingCancel: false })
    }

    render() {
        return (
            <Layout> 
                <h3>Auction Show</h3>
             
                <Grid>
                    <Grid.Column width={10}>
                    {this.renderCards()}                       
                    </Grid.Column>
               
                <Grid.Column width={6}>
                    <PlaceBidForm address={this.props.address} /> 
              
                    <Button onClick={this.finalize} color='teal' style={{ marginTop: '70px' }}>Finallize</Button> 
                    <Button onClick={this.cancel} loading={this.state.loadingCancel} negative style={{ marginTop: '70px', float: 'right' }}>Cacel auction</Button>                  
                    <p>{this.state.errorMessage}</p>

                <div style={{ marginTop: '70px' }}>
                    <h5>Action Description</h5>
                    <ul>
                        <li>An auction will only accept bids when it is in the <b>Running</b> state.</li>
                        <li><b>Place bids</b>: If you never place a bid on this auction before, please enter an amount higher than the current highest bid; If you have already placed a bid on this auction, you can add an extra amount to increase your bid amount.</li>
                        <li><b>Finalize</b>: Only finalize if the auction is canceled or after the auction ends. If you are not the highest bidder, you will get all your bidding amount sent back to you.</li>
                        <li><b>Cancel auction</b>: <b>Only the auction owner</b> can cancel the auction in case of emergencies. This is to protect the bidders from any financial loss.</li>
                    </ul>
                </div>             

                </Grid.Column>
                </Grid>
            </Layout>   
        );
    }
}

export default AuctionShow;