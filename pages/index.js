import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import creator from '../ethereum/creator';
import Layout from '../components/Layout';
import { Link } from '../routes';

class AuctionIndex extends Component {
    static async getInitialProps() {
        const auctions = await creator.methods.getAuctions().call();
        return { auctions };

    }   

    renderAuctions() {
        const items = this.props.auctions.map(address => {
            return {
                header: address,
                description: (
                    <Link route={`/auctions/${address}`}>
                      <a>View Auction</a>
                    </Link>                   
                    
                ),
                fluid: true
            }
        })

        return <Card.Group items={items} />;
    }

    render() {
        return <div>
            <Layout>
    
        <h3>Auctions</h3>

        <Link route="/auctions/new">
          <a>
          <Button 
        floated="right"
        content="Create Auction" 
        icon="add"
        positive
        />
          </a>
        </Link>        
        
        {this.renderAuctions()}
        </Layout>
        </div>
    }
}

export default AuctionIndex;
