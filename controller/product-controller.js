import Product from "../model/defaultProductsSchema.js";

export const getProducts = async (req, res) => {
	try {
		//need all the products
		//find() is an async call hence async-await
		const products = await Product.find({});

		//need to send the data back to client
		res.json(products);
	} catch (error) {
		console.log("Error:", error.message);
	}
};

export const getProductById = async (req, res) => {
	try {
		const productId = req.params.id;
		const product = await Product.findOne({ id: productId });
		res.json(product);
	} catch (error) {
		console.log("Error:", error.message);
	}
};
