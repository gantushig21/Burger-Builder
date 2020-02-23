import mongoose, { Schema } from 'mongoose';

const IngredientSchema = new Schema({
    type: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    number: {
        type: Number,
        default: 0
    }
});

export default mongoose.model('Ingredient', IngredientSchema);