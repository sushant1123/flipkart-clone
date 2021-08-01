import mongoose from "mongoose";

//product schema
const productSchema = new mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    description: String,
    discount: String,
    tagline: String,
});

//model of the collection using product's schema
const Product = mongoose.model("product", productSchema);

export default Product;
