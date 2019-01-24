import web3 from './web3';
import AuctionCreator from './build/AuctionCreator.json';

const instance = new web3.eth.Contract(
    JSON.parse(AuctionCreator.interface),
    '0x931438ff2dDD357194267e48712cdcE5Db8c0b1f'
)

export default instance;