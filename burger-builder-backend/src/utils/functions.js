function validationError(errs) {
    errs.forEach(err => {
        switch (err.type) {
            case 'string.regex.base':
                err.message = 'wrong value';
                break;
            default: 
                break;
        }
    });

    return errs;
}

export default {
    validationError
}