import React from 'react';

import useHttpErrorHandler from '../../hooks/http-error-handler';

import Modal from '../../components/UI/Modal';
import Aux from '../Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
        
        const [error, errorConfirmHandler] = useHttpErrorHandler(axios);

        return (
            <Aux>
                <Modal 
                    show={error}
                    modalClosed={errorConfirmHandler}
                >
                    {error ? error.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </Aux>
        );    
    }
}

export default withErrorHandler;