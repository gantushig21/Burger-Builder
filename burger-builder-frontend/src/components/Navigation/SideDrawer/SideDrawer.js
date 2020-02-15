import React from 'react';

import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';
import Backdrop from '../../UI/Backdrop';
import Aux from '../../../hoc/Aux';

import classes from './SideDrawer.css';

const sideDrawer = props => {
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (    
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo} >
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;