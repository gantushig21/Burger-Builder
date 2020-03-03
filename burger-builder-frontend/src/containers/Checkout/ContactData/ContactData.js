import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import Button from '../../../components/UI/Button';
import Spinner from '../../../components/UI/Spinner';
import Input from '../../../components/UI/Input';

import classes from './ContactData.css';
import axios from '../../../utils/axios';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [{
                        value: 'fastest',
                        displayValue: 'Fastest'
                    }, {
                        value: 'cheapest',
                        displayValue: 'Cheapest'
                    }],
                },
                value: 'fastest'
            }
        },
        loading: false
    }

    orderHandler = (e) => {
        e.preventDefault();

        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
        }

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
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

    inputChangedHandler = (e, inputIdentifier) => {
        const { value } = e.target;
        this.setState(prevState => {
            return {
                orderForm: {
                    ...prevState.orderForm,
                    [inputIdentifier]: {
                        ...prevState.orderForm[inputIdentifier],
                        value
                    }
                }    
            }
        });
    }

    render() {
        // if (JSON.stringify(this.props.ingredients) === JSON.stringify({}))
        //     return <Redirect to="/"/>

        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key] 
            });
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType} 
                        elementConfig={formElement.config.elementConfig} 
                        value={formElement.config.value}
                        changed={e => this.inputChangedHandler(e, formElement.id)}
                    />
                ))}
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