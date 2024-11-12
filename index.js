const express = require("express");
const app = express();
app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

let products = [];

// get all prodcuts
app.get("/products", (req, res) => {
	const { sortBy, order } = req.query;
	const productsCopy = [...products];
	console.log("sortBy:", sortBy, "order:", order);
	if (sortBy) {
		if (sortBy === "price") {
			console.log("sorting by price");
			productsCopy.sort((p1, p2) => {
				if (order === "asc") return p1.price - p2.price;
				else if (order === "desc") return p2.price - p1.price;
				else {
					res.status(400).json({
						error: "Invalid order value, should be asc or desc",
					});
				}
			});
		} else if (sortBy === "name") {
			console.log("sorting by name");
			productsCopy.sort((p1, p2) => {
				if (order === "asc") return p1.name.localeCompare(p2.name);
				else if (order === "desc")
					return p2.name.localeCompare(p1.name);
				else {
					res.status(400).json({
						error: "Invalid order value, should be asc or desc",
					});
				}
			});
		} else {
			res.status(400).json({ error: "Invalid sortBy value" });
		}
	}
	res.status(200).json(productsCopy);
});

// single prod by id
app.get("/products/:id", (req, res) => {
	const productId = parseInt(req.params.id); // since id is num
	const product = products.find((p) => p.id === productId);

	if (product) {
		res.status(200).json(product);
	} else {
		res.status(404).json({ error: "Product not found" });
	}
});

// add new product
app.post("/products", (req, res) => {
	const { name, description, price, quantity } = req.body;

	if (!name || price == null) {
		return res.status(400).json({ error: "Name and price are required" });
	}

	const newProduct = {
		id: products.length + 1,
		name,
		description: description || "",
		price,
		quantity: quantity || 0,
	};

	products.push(newProduct);
	res.status(201).json(newProduct);
});

// update prod by id
app.put("/products/:id", (req, res) => {
	const productId = parseInt(req.params.id);
	const product = products.find((p) => p.id === productId);

	if (product) {
		const { name, description, price, quantity } = req.body;
		if (name !== undefined) product.name = name;
		if (description !== undefined) product.description = description;
		if (price !== undefined) product.price = price;
		if (quantity !== undefined) product.quantity = quantity;

		res.status(200).json(product);
	} else {
		res.status(404).json({ error: "Product not found" });
	}
});

// delete by id
app.delete("/products/:id", (req, res) => {
	const productId = parseInt(req.params.id);
	const productIndex = products.findIndex((p) => p.id === productId);

	if (productIndex !== -1) {
		products.splice(productIndex, 1); // remove '1' elements starting from productIndex
		res.status(204).send("Product deleted");
	} else {
		res.status(404).json({ error: "Product not found" });
	}
});
