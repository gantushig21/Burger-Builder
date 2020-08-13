import React, { useState } from 'react';

import Button from '../../../components/UI/Button';
import Spinner from '../../../components/UI/Spinner';
import Input from '../../../components/UI/Input';

import classes from './ContactData.css';

const ContactData = props => {
    const [orderForm, setOrderForm] = useState({
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
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
                validation: {},
                value: 'fastest',
                valid: true
            }
        }, []);

    const [formIsValid, setFormIsValid] = useState(false);

    const orderHandler = (e) => {
        e.preventDefault();

        const formData = {};
        for (let formElementIdentifier in orderForm) {
            formData[formElementIdentifier] = orderForm[formElementIdentifier].value
        }

        const order = {
            ingredients: props.ingredients,
            price: props.price,
            orderData: formData,
            userId: props.userId
        };

        if (formIsValid) {
            props.orderBurger(order, props.token);
        }
    }

    const checkValidation = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = isValid && value.trim() !== '';
        }

        if (rules.minLength) {
            isValid = isValid && value.length >= rules.minLength;
        }

        if (rules.maxLength) {
            isValid = isValid && value.length >= rules.maxLength;
        }

        return isValid;
    }

    const inputChangedHandler = (e, inputIdentifier) => {
        const updatedOrderForm = {
            ...orderForm
        };

        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        }

        updatedFormElement.value = e.target.value;
        updatedFormElement.valid = checkValidation(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }

        setOrderForm(updatedOrderForm);
        setFormIsValid(formIsValid);
    }

    const formElementsArray = [];
    for (let key in orderForm) {
        formElementsArray.push({
            id: key,
            config: orderForm[key] 
        });
    }

    let form = (
        <form onSubmit={orderHandler}>
            {formElementsArray.map(formElement => (
                <Input 
                    key={formElement.id}
                    elementType={formElement.config.elementType} 
                    elementConfig={formElement.config.elementConfig} 
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    touched={formElement.config.touched}
                    shouldValidate={formElement.config.validation}
                    changed={e => inputChangedHandler(e, formElement.id)}
                />
            ))}
            <Button btnType="Success" disabled={!formIsValid} clicked={orderHandler}>ORDER</Button>
        </form>
    );

    if (props.loading) 
        form = <Spinner />

    return (
        <div className={classes.ContactData}>
            <h4>Enter your Contact Data</h4>
            {form}
        </div>
    );
}

export default ContactData;