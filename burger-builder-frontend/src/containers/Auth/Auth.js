import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import Spinner from '../../components/UI/Spinner';

import classes from './Auth.css';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            confirmPassword: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Confirm Password'
                },
                hide: false,
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                    matchField: 'password'
                },
                valid: false,
                message: "Confirm password doesn't match the password!",
                touched: false
            }
        },
        isSignup: true
        // formIsValid: false
    }

    componentDidMount() {
        console.log("Hello");
        if (!this.props.buildingBurger && this.props.authRedirectPath !== '/') {
            this.props.setAuthRedirectPath("/");
        }
    }

    submitHandler = (event) => {
        event.preventDefault();

        if (this.state.isSignup) {
            this.props.signUp({
                email: this.state.controls.email.value, 
                password: this.state.controls.password.value,
                confirmPassword: this.state.controls.confirmPassword.value
            });
    
        } else {
            this.props.login({
                email: this.state.controls.email.value, 
                password: this.state.controls.password.value
            });
        }

    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {
                isSignup: !prevState.isSignup,
                controls: {
                    ...prevState.controls,
                    confirmPassword: {
                        ...prevState.controls.confirmPassword,
                        hide: prevState.isSignup
                    }
                }
            }
        });
    }

    checkValidation = (value, rules) => {
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

        if (rules.matchField) {
            isValid = isValid && this.state.controls[rules.matchField].value == value;
        }

        return isValid;
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidation(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        }

        this.setState({
            controls: updatedControls
        });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            if (!this.state.controls[key].hide) {
                formElementsArray.push({
                    id: key,
                    config: this.state.controls[key] 
                });
            }
        }

        let form = formElementsArray.map(formElement => (
            <Input 
                key={formElement.id}
                elementType={formElement.config.elementType} 
                elementConfig={formElement.config.elementConfig} 
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                touched={formElement.config.touched}
                shouldValidate={formElement.config.validation}
                message={formElement.config.message || null}
                changed={e => this.inputChangedHandler(e, formElement.id)}
            />
        ));

        if (this.props.loading)
            form = <Spinner />

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error}</p>
            );
        }

        if (this.props.isAuthenticated) 
            return <Redirect to={this.props.authRedirectPath} />

        return (
            <div className={classes.Auth}>
                {errorMessage}
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button 
                        btnType="Success" 
                        // disabled={!this.state.formIsValid} 
                        clicked={this.orderHandler}
                    >
                        SUBMIT
                    </Button>
                </form>
                <Button
                    btnType="Danger"
                    clicked={this.switchAuthModeHandler}
                >
                    {this.state.isSignup ? "SWITCH TO SIGNIN" : "SWITCH TO SIGNUP"} 
                </Button>
            </div>
        );
    }
}

export default Auth;