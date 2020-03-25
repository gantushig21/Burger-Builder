import mongoose, { Schema } from 'mongoose';
import { hashSync, compareSync } from 'bcrypt-nodejs';

import { emailReg } from '../../utils/validations';
import messages from '../../utils/messages';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        trim: true,
        validate: {
            validator(email) {
                return emailReg.test(email);
            },
            message: '{VALUE} is not valid email'
        },
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: [true, messages.PASSWORD_REQUIRED]
    }
}, {
    timestamps: true
});


UserSchema.pre("save", function(next) {
    if (this.isModified("password")) {
        this.password = this._hashPassword(this.password)
    }

    return next();
});

UserSchema.methods = {
    authenticateUser(password) {
        return compareSync(password, this.password);
    },
    _hashPassword(password) {
        return hashSync(password);
    },
    toJSON() {
        return {
            _id: this._id,
            email: this.email    
        }
    }
}

export default mongoose.model("User", UserSchema);