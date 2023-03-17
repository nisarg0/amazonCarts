
Solve Q1 and Q2/Q3

Q1. Write and sql query to find the highest salary of an employee for each month within a range of January 2023 to June 2023
Ans:  
SELECT max(SALARY), Month(depositedDate) AS Month 
FROM EMPLOYEE 
depositedDate between "01-01-2023" and "06-31-2023"
groupBy Month

Employee:
 1. id
 2. employeeName
 3. amount
 4. depositedDate
 


Q2. Design a cart system like the one in amazon:

    1. Customer -  multiple addresses
    2. Orders.  - 
    3. Cart - zero or multiple products (product)
    4. Product. - multiple products
    --

Design these 4 tables

Write apis :
 1. Add a product to a cart
 2. Convert the prouct from a cart to an order with entering the address details attached to it.
Note that the user might have mulitple address and one of them can be the delivery address for that order.


Customer [customerId PK, cartId, name, pass, email]

Order [OrderId PK, OrderTime, paymentStatus, AddressId]
Cart [cartId PK, CustomerId]
Address [AddressId PK, CusomterId, primary Address] 
Product [ProductId PK, name, price]

order_product [orderId, ProductId, quantity]
cart_product [cartId, ProductId, quantity] 
address_order [AddressId, OrderId]



API1: 
POST /cart/addProduct
{
    "customerId": 1,
    "productId": 1,
    "quantity": 1
}
// add a product to a cart
cartId = getCartIdFromCustomerId(customerId)
addProductToCart(cartId, productId, quantity)

API2: Requested by web-hook
POST /order/create
{
    "customerId": 1,
    "addressId": 1,
    "paymentStatus": "success"
}
// convert cart to Order
cartId = getCartIdFromCustomerId(customerId)
productsInCart = getProductListFromCart(cartId) 
deleteAllProductsFromCart(cartId)
createOrder(customerId, addressId, paymentStatus, productsInCart)


Q3. Display the data in the particular order:

Tables -
    Vendor
    1. name
    2. address
    3. id
    
    Invoice
    1. id
    2. vendor_id(fk to Vendor)
    3. invoice_desc
    4. status : (pending/open/closed)
    5. amount
Expected output:
Send a list of vendors with these details in a GET api:


{
  "vendors":[
    {
      "name":"vendor name 1",
      "address":"vendor address 2",
      "total_invoice_count":30
      "total_open_invoices_count":21,
      "total_closed_invoices_count":5
      "total_open_invoice_amount": 30000,
    },
    {
      "name":"vendor name 2",
      "address":"vendor address 2",
      "total_open_invoices_count":40
      "total_open_invoices_count":10,
      "total_closed_invoices_count":4,
      "total_open_invoice_amount": 20000,
    }
  ]
}

