pragma solidity ^0.4.24;

contract AuctionCreator{
    //dynamic array with addresses of deployed auctions
    address[] public auctions; 
    
    function createAuction(uint _biddingTime) public{
        address newAuction = new Auction(_biddingTime, msg.sender);
        auctions.push(newAuction);
    }

    function getAuctions() public view returns (address[]) {
        return auctions;
    }
}

contract Auction{ 
    address public owner;
    uint public auctionEnd;
    
    enum State {Started, Running, Ended, Canceled}
    State public auctionState;
    
    uint public highestBid;
    address public highestBidder;
    
    mapping(address => uint) public bids;    

    // Events that will be fire on changes.
    event HighestBidIncreased(address bidder, uint amount);
    event AuctionEnded(address winner, uint amount); 
  
    constructor(
        uint _biddingTime,
        address _owner
    ) public{
        owner = _owner;
        auctionState = State.Running;        
        auctionEnd = now + _biddingTime;      
    }
    
    modifier notOwner(){
        require(msg.sender != owner);
        _;
    }    
    
    modifier onlyOwner(){
        require(msg.sender == owner);
        _;
    }    
        
    //cancel the auction, only by owner
    function cancelAuction() public onlyOwner{
        auctionState = State.Canceled;
    }
    
    /// Bid on the auction 
    function bid() public payable notOwner returns(bool){
        // Revert the call if the bidding is not in its Running state.
        require(auctionState == State.Running);   
        
        uint currentBid = bids[msg.sender] + msg.value;
        
        require(
            currentBid > highestBid,
            "There already is a higher bid"            
            );
        
        bids[msg.sender] = currentBid;
        highestBidder = msg.sender;
        highestBid = currentBid;        
        
        return true;
    }
        
    function finalizeAuction() public{    
        require(
            auctionState == State.Canceled || now >= auctionEnd,
            "Auction not yet ended."
        ); 
       
        require(msg.sender == owner || bids[msg.sender] > 0);
       
        address recipient;
        uint value;
       
        if(auctionState == State.Canceled){ //canceled 
            recipient = msg.sender;
            value = bids[msg.sender];
            // It is important to set this to zero because the recipient 
            // can call this function again before 'transfer' returns
            bids[msg.sender] = 0;
        }else{//ended not canceled
            if(msg.sender == owner){ //the owner finalizes the auction
                recipient = owner;
                value = highestBid;
            }else{//another user finalizes the auction
                if (msg.sender == highestBidder){
                    recipient = highestBidder;
                    bids[msg.sender] = 0;
                    value = bids[msg.sender];                    
               }else{//this is neiher the owner nor the highest bidder
                    recipient = msg.sender;
                    value = bids[msg.sender];
                    // It is important to set this to zero because the recipient 
                    // can call this function before 'transfer' returns
                    bids[msg.sender] = 0;
               }
           }
       }
       
        emit AuctionEnded(highestBidder, highestBid);

        //sends value to the recipient
        recipient.transfer(value);        
    }

    function getSummary() public view returns (
        address, uint256, State, uint256, address

    ) {
        return (
            owner,
            auctionEnd,
            auctionState,
            highestBid,
            highestBidder         

        );
    }   
 
}

