var Customer = [
	{
		customerId: "CU001",
		cartId: "CA001",
		name: "John",
		email: "john@gmail.com",
	},
	{
		customerId: "CU002",
		cartId: "CA002",
		name: "Peter",
		email: "peter@gmail.com",
	},
];

var Product = [
	{
		productId: "P001",
		name: "Apple",
		price: 1.0,
	},
	{
		productId: "P002",
		name: "Orange",
		price: 1.5,
	},
];

var Cart = [
	{
		cartId: "CA001",
		CustomerId: "CU001",
	},
	{
		cartId: "C002",
		CustomerId: "CU002",
	},
];

var Order = [
	{
		orderId: "O001",
		orderTime: "2020-01-01 12:00:00",
		customerId: "CU001",
		paymentStatus: "paid",
		paymentAmount: 3.5,
		AddressId: "A001",
	},
];

var cart_product = [
	{
		cartId: "CA001",
		productId: "P001",
		quantity: 2,
		price: 2.0,
	},
	{
		cartId: "CA001",
		productId: "P002",
		quantity: 1,
		price: 1.5,
	},
	{
		cartId: "CA002",
		productId: "P001",
		quantity: 1,
		price: 1.0,
	},
];

var product_order = [
	{
		orderId: "O001",
		productId: "P001",
		quantity: 2,
		price: 2.0,
	},
	{
		orderId: "O001",
		productId: "P002",
		quantity: 1,
		price: 1.5,
	},
];

var Address = [
	{
		addressId: "A001",
		customerId: "CU001",
		address: "123 ABC Street",
		isPrimary: true,
	},
	{
		addressId: "A002",
		customerId: "CU001",
		address: "456 DEF Street",
		isPrimary: false,
	},
];

module.exports = {
	Customer,
	Product,
	Cart,
	Order,
	cart_product,
	product_order,
	Address,
};
