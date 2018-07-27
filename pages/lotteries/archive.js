import React, { Component } from 'react';
import { Container, Card, Header } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import api from '../../helpers/rwBlockchain';
import { Link } from '../../routes';


class Archive extends Component {

    state = {
        factoryAddress: this.props.url.query.factoryAddress, 
        lotteries: []
    }

    async componentDidMount() {
        const lotteries = await api.getLotteries(this.props.url.query.factoryAddress);
        this.setState({lotteries});
    }


    renderLotteries() {
        const {lotteries} = this.state;
        if(lotteries && lotteries.length > 0) {
            const items = lotteries.map(address => {
                return {
                    header: address,
                    description: (
                        <Link route={ `/lotteries/${address}`}>
                            <a>View Lottery</a>
                        </Link>
                    ),
                    fluid: true
                };
            });
            return <Card.Group id="lotteries" items={items} />;
        }
        return null;
    }

    render() {
        return (
            <Layout>
                <Container style={{marginTop:'100px'}} >
                    <Container id='indexHeaderContainer'  >
                        <Header as='h1' id='indexHeader' block align='center'>
                            ARCHIVE
                        </Header> 
                    </Container>
                    {this.renderLotteries()}
                </Container>
            </Layout>
        ) 
    }
}

export default Archive;