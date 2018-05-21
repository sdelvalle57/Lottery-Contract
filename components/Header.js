import React from 'react';
import { Menu } from 'semantic-ui-react';

export default () => {
    return (
        <Menu style={{ marginTop: '10px' }}>
            <Menu.Item>
                Lottery Factory
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item>
                    Lotteries
                </Menu.Item>
                <Menu.Item>
                    +
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}