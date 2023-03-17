## API Reference

#### Get all items

```http
  POST /api/v1/cart/addProduct
```

| Parameter    | Type     | Description                                                |
| :----------- | :------- | :--------------------------------------------------------- |
| `cusotmerId` | `string` | **Required**. unique Id per cusotmer                       |
| `productId`  | `string` | **Required** uniqueId per product                          |
| `quantity`   | Integer  | **Required** quantity of product should not be more than 5 |

#### Get item

```http
  POST /api/v1/cart/createOrder
```

| Parameter       | Type      | Description                                                  |
| :-------------- | :-------- | :----------------------------------------------------------- |
| `customerId`    | `string`  | **Required**. unique Id per cusotmer                         |
| `addressId`     | `string`  | **Required** Address where the order needs to be delievered. |
| `orderTime`     | `Date`    | **Required** Current time of order                           |
| `paymentStatus` | `Boolean` | **Required** If not paid we will not add cart to order       |

## Contributor

@Nisarg
