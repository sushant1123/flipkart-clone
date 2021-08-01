import { products } from "./constants/products.js";
import Product from "./model/defaultProductsSchema.js";

const DefaultData = async () => {
    try {
        const allProducts = Product.find({});
        if (allProducts.length < 0) {
            await Product.insertMany(products);
            console.log("data imported successfully");
        }
    } catch (error) {
        console.log(error.message);
    }
};

export default DefaultData;
