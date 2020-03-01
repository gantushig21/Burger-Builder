import React, { Component } from 'react';

import Order from '../../components/Order';
import Spinner from '../../components/UI/Spinner';

import axios from '../../utils/axios';
import withErrorHandler from '../../hoc/WithErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: false
    }

    componentDidMount() {
        this.setState({loading: true});
        axios.get('/orders').then(response => {
            this.setState({
                loading: false, 
                orders: response.data
            });
        }).catch(error => {
            this.setState({loading: false});
            console.log("Orders error");
        }) 
    }

    render() {
        let orders = <Spinner />;
        
        // if (!this.state.loading) {
        //     this.state.orders.map((order) => {

        //     });
        // }

        return (
            <div>
                {this.state.orders.map((order) => 
                    <Order 
                        key={order._id} 
                        ingredients={order.ingredients}
                        price={order.price}
                    />
                )}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);