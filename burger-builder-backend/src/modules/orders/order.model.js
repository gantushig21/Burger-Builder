import mongoose, { Schema } from 'mongoose';
import validator from 'validator';

const IngredientsSchema = new Schema({
    salad: {
        type: Number,
        default: 0
    },
    cheese: {
        type: Number,
        default: 0
    },
    meat: {
        type: Number,
        default: 0
    },
    bacon: {
        type: Number,
        default: 0
    }
});

const AddressSchema = new Schema({
    street: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
});

const CusmoterSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: AddressSchema,
        required: true
    },
    email: {
        type: String,
        trim: true,
        validate: {
            validator(email) {
                return validator.isEmail(email)
            },
            message: '{VALUE} is not valid email'
        },
        default: null
    },
    phone: {
        type: String,
        default: null
    }
});

const OrderSchema = new Schema({
    ingredients: {
        type: IngredientsSchema,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    customer: {
        type: CusmoterSchema,
        required: true
    },
    deliveryMethod: {
        type: String,
        default: 'fastest',
        enum: ['fastest']
    }
});

export default mongoose.model('Order', OrderSchema);