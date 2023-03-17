const Customer = require("./db").Customer;
const Product = require("./db").Product;
const Cart = require("./db").Cart;
const Order = require("./db").Order;
const cart_product = require("./db").cart_product;
const product_order = require("./db").product_order;
const Address = require("./db").Address;

const addProduct = (req, res) => {
	try {
		const customerId = req.body.customerId;
		const productId = req.body.productId;
		const quantity = req.body.quantity;

		// Add cartId from UserId
		var cartId = Customer.find(
			(customer) => customer.customerId === customerId
		).cartId;

		// Add product to cart_product
		var productToAddIntoCart = {
			cartId: cartId,
			productId: productId,
			quantity: quantity,
			price: Product.find((product) => product.productId === productId)
				.price,
		};

		cart_product.push(productToAddIntoCart);
		console.log("cart_product: ", cart_product);
		res.status(200).send("Product added to cart");
	} catch (err) {
		console.log(err);
	}
};

const convertCartToOrder = (req, res) => {
	const customerId = req.body.customerId;
	const addressId = req.body.addressId;
	const orderTime = req.body.orderTime;
	const paymentStatus = req.body.paymentStatus;

	// get list of products associated with the cart of the customer
	var cartId = Customer.find(
		(customer) => customer.customerId === customerId
	).cartId;
	var products = cart_product.filter((product) => product.cartId === cartId);

	var orderId = "O" + "00" + (Order.length + 1).toString();
	// create order
	var order = {
		orderId: orderId,
		orderTime: orderTime,
		customerId: customerId,
		addressId: addressId,
		paymentStatus: paymentStatus,
	};
	Order.push(order);

	// create product_order
	products.forEach((product) => {
		var productOrder = {
			orderId: orderId,
			productId: product.productId,
			quantity: product.quantity,
			price: product.price,
		};
		product_order.push(productOrder);
	});

	// remove products from cart_product
	cart_product = cart_product.filter((product) => product.cartId !== cartId);

	res.status(200).send("Order created");
};
