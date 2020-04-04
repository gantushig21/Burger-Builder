import React, { Component } from 'react';

import Order from '../../components/Order';
import Spinner from '../../components/UI/Spinner';

import axios from '../../utils/axios';
import withErrorHandler from '../../hoc/WithErrorHandler';

class Orders extends Component {
    componentDidMount() {
        this.props.getOrders(this.props.token);
    }

    render() {
        let orders = <Spinner />;
        
        if (!this.props.loading) {
            orders = this.props.orders.map((order) => 
                <Order 
                    key={order._id} 
                    ingredients={order.ingredients}
                    price={order.price}
                />
            );
        }

        return (
            <div>
                {orders}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);