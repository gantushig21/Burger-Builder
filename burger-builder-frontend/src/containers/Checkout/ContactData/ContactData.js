import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import Button from '../../../components/UI/Button';
import Spinner from '../../../components/UI/Spinner';
import Input from '../../../components/UI/Input';

import classes from './ContactData.css';
import axios from '../../../utils/axios';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (e) => {
        e.preventDefault();

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Gantushig',
        address: {
          street: 'North street 1000',
          zipCode: '52557',
          country: 'USA'
        },
        email: 'gantushig21@gmail.com'
      },
      deliveryMethod: 'fastest',
    };

    this.setState({ loading: true });
    axios.post('/orders', order)
      .then(response => {
        this.setState({ 
          loading: false,
        });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ 
          loading: false, 
        });
        this.props.history.push('/');
      });
    }

    render() {
        if (JSON.stringify(this.props.ingredients) === JSON.stringify({}))
            return <Redirect to="/"/>

        let form = (
            <form>
                <Input inputtype="input" type="text" name="name" placeholder="Your Name"/>
                <Input inputtype="input" type="email" name="email" placeholder="Your Email"/>
                <Input inputtype="input" type="text" name="street" placeholder="Street"/>
                <Input inputtype="input" type="text" name="postal" placeholder="Postal Code"/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );

        if (this.state.loading) 
            form = <Spinner />

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;