import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return (
        <Menu style={{ marginTop: '10px' }}>
            <i class="fas fa-gavel fa-2x"></i>  
            <Link route="/">
                <a style={{ color: 'green' }} className="item"><b>Auction Market</b></a>              
            </Link>   
                 
            <Menu.Menu position="right">
            <Link route="/">
                <a style={{ color: 'green' }} className="item"><b>Auctions</b></a>
            </Link>

            <Link route="/auctions/new">
                <a style={{ color: 'green' }} className="item"><b>+</b></a>
            </Link>            
            </Menu.Menu>          
        </Menu>
    )
}
