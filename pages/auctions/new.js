import React, { Component } from 'react';
import {
    Form,
    Button,
    Input,
    Message
} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import creator from '../../ethereum/creator';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';


class AuctionNew extends Component {
    state = {
        bidding_time: 0,
        errorMessage: '',
        loading: false
    }

    onSubmit = async (event) => {
        event.preventDefault();

        this.setState({ loading: true , errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            await creator.methods
                .createAuction(this.state.bidding_time)
                .send({
                    from: accounts[0]
                })

          Router.pushRoute('/');
        } catch (err) {
            this.setState({
                errorMessage: err.message
            });
        }

        this.setState({ loading: false });

    }

    render() {
        return (
            <Layout >
                <h3 > Create an Auction! </h3>
                <Form
                    onSubmit={
                        this.onSubmit
                    }
                    error={!!this.state.errorMessage}
                >
                    <Form.Field>
                        <label > Bidding Time </label>
                        <Input
                            label="seconds"
                            labelPosition="right"
                            value={
                                this.state.bidding_time
                            }
                            onChange={
                                event => this.setState({
                                    bidding_time: event.target.value
                                })
                            }
                        />
                    </Form.Field>

                    <Message error header="Oops!" content={this.state.errorMessage} />
                    <Button loading={this.state.loading} positive > Create! </Button>
                </Form>
            </Layout>
        )
    }
}

export default AuctionNew;