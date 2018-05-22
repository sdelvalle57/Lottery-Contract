import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return (
        <Menu style={{ marginTop: '10px' }}>
            <Link route="/">
                <a className="item">Lottery Factory</a>
            </Link>

            <Menu.Menu position="right">
                <Link route="/">
                    <a className="item">Lotteries</a>
                </Link>
                <Link route="/lotteries/new">
                    <a className="item">+</a>
                </Link>
            </Menu.Menu>
        </Menu>
    )
}