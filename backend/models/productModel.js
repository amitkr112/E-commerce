

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        brand: { type: String, required: true },
        category: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        countInStock: { type: Number, required: true },
        rating: { type: Number, required: true },
        numReviews: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

// CREATING A PRODUCT BASED ON THE ABOVE SCHEMA
// parameter 1- model name
// parameter 2- schema

const Product = mongoose.model('Product', productSchema);
export default Product;












