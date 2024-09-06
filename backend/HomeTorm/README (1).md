User Home API Documentation

This API documentation provides details on the endpoints and operations related to users and homes. Below are the available API endpoints with their corresponding methods, parameters, and responses.

## User Home APIs

## Endpoint: /user/find-all

- **Method:** Get
- **Summary:** Retrieve all users from the database
- **Operation ID:** cgetAllUsers
- **Tags:** User
- **Responses:**
  - **200:** List of all users
    ### Example:
```bash
[
  {
    "id": "1",
    "username": "johndoe",
    "email": "johndoe@example.com"
  },
  {
    "id": "2",
    "username": "janedoe",
    "email": "janedoe@example.com"
  }
]


fetch("http://baseUrl/user/find-all", {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));

```
## Create CancelOrder

###  /Order/{Id}    Create CancelOrder

- **Method:** POST
- **Summary:** Create CancelOrder
- **Operation ID:** create CancelOrder
- **Tags:** Request
- **Responses:**
  - **200:** Successful operation
    ### Example:
```bash
const myHeaders = new Headers();
myHeaders.append("", "");

const raw = "";

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: JSON.stringify({
    "Status": "Cancell Order")
  }
  redirect: "follow"
};

fetch("baseUrl/dev/order/{Id}", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

```
## Create CloseOrder

###  /Order/{Id}    Create CloseOrder

- **Method:** POST
- **Summary:** Create CloseOrder
- **Operation ID:** create CloseOrder
- **Tags:** Request
- **Responses:**
  - **200:** Successful operation
    ### Example:
```bash
const myHeaders = new Headers();
myHeaders.append("", "");

const raw = "";

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: JSON.stringify({
    "Status": "Close Order")
  }
  redirect: "follow"
};

fetch("baseUrl/dev/order/{Id}", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

```
## Get Order

### /Order - Get Order

- **Method:** GET
- **Summary:** Get Order
- **Operation ID:** getOrder
- **Tags:** Request
- **Responses:**
  - **200:** Successful operation

  ### Example:

``` bash

const myHeaders = new Headers();
myHeaders.append("", "");

const raw = "";

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("baseUrl/dev/order", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

  ```

## Get Order By ID

### /Order{Id} - Get Order By ID

- **Method:** GET
- **Summary:** Get Order By ID
- **Operation ID:** getOrderByID
- **Tags:** Request
- **Responses:**
  - **200:** Successful operation
  - **400:** Order ID is missing or invalid
  - **404:** Order not found

  ### Example:
```bash
const myHeaders = new Headers();
myHeaders.append("", "");

const raw = "";

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("baseUrl/dev/order/{id}", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

  ```

  ## Update Order 

### /Order{Id} - Update Order

- **Method:** PUT
- **Summary:** Update Order 
- **Operation ID:** updateOrder
- **Tags:** Request
- **Responses:**
  - **200:** Update successful
  - **400:** Invalid OrderId or request body
  - **500:** Internal Server Error

  ### Example:
```bash
const myHeaders = new Headers();
myHeaders.append("", "");
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "products": [
    {
      "name": "Product 1",
      "price": 10.99
    },
    {
      "name": "Product 2",
      "price": 20.49
    }
  ],
  "totalPrice": "31.48",
  "createdAt": "2024-02-07T10:00:00Z"
});

const requestOptions = {
  method: "PUT",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("baseUrl/dev/order/12", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
  ```

## Delete Order

### /Order/{Id} - Delete Order

- **Method:** Delete
- **Summary:** Delete Order
- **Operation ID:** deleteOrder
- **Tags:** Request
- **Responses:**
  - **200:** Deletion successful
  - **400:** Invalid Order Id
  - **500:** Internal Server Error

   ### Example:
```bash
const myHeaders = new Headers();
myHeaders.append("", "");

const raw = "";

const requestOptions = {
  method: "DELETE",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("baseUrl/dev/order/{id}", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

  ```

## Inventory APIS
 
### insert inventory details
 
### /inventory - insert inventory details
 
- **Method:** POST
- **Summary:** insert inventory
- **Operation ID:** insert inventory
- **Tags:** Request
- **Responses:**
  - **200:** Successful operation
 
  ### Example:
 
```bash
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
 
const raw = JSON.stringify({
  "product_id": 28,
  "availableQuantity": 24
});
 
const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};
 
fetch("baseUrl/dev/inventory", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
  ```
 
## Get all inventory details
 
### /inventory - Get all inventories
 
- **Method:** GET
- **Summary:** Get all inventories
- **Operation ID:** Get all inventories
- **Tags:** Request
- **Responses:**
  - **200:** Successful operation
 
  ### Example:
```bash
const raw = "";
 
const requestOptions = {
  method: "GET",
  body: raw,
  redirect: "follow"
};
 
fetch("baseUrl/dev/inventory", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
  ```
 
 
## Get inventory By ID
 
### /inventory/{inventory_id} - Get inventory By ID
 
- **Method:** GET
- **Summary:** Get inventory By ID
- **Operation ID:** getInventoryByID
- **Tags:** Request
- **Responses:**
  - **200:** Successful operation
 
 
  ### Example:
```bash
const requestOptions = {
  method: "GET",
  redirect: "follow"
};
 
fetch("baseUrl/dev/inventory/95792b6b-5a86-4caf-8900-92d46ce1062b", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
  ```
 
## Update inventory details
 
### /inventory/{inventory_id} - Update inventory details
 
- **Method:** PUT
- **Summary:** Update inventory details
- **Operation ID:** updateInventoryDetails
- **Tags:** Request
- **Responses:**
  - **200:** Update successful
 
 
  ### Example:
```bash
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
 
const raw = JSON.stringify({
  "updatedQuantity": 54
});
 
const requestOptions = {
  method: "PUT",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};
 
fetch("baseUrl/dev/inventory/95792b6b-5a86-4caf-8900-92d46ce1062b", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
   ```
 
 
## Delete inventory
 
### /inventory/{inventory_id} - Delete Node
 
- **Method:** DELETE
- **Summary:** Delete inventory
- **Operation ID:** deleteinventory
- **Tags:** Request
- **Responses:**
  - **200:** Deletion successful
 
 
   ### Example:
```bash
  const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
 
const raw = JSON.stringify({
  "updatedQuantity": 54
});
 
const requestOptions = {
  method: "DELETE",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};
 
fetch("baseUrl/dev/inventory/95792b6b-5a86-4caf-8900-92d46ce1062b", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
  ```


  
## Product APIS
 
## Insert Product
 
### /Product - insert Product
 
- **Method:** POST
- **Summary:** insert Product
- **Operation ID:** insert Product
- **Tags:** Request
- **Responses:**
  - **200:** Successful operation
 
  ### Example:
```bash
  const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
 
const raw = JSON.stringify({
  "name": {
    "S": "washine machine"
  },
  "description": {
    "S": "Updated Product Description"
  },
  "price": {
    "N": 50
  },
  "quantity": {
    "N": 50
  },
  "unit": {
    "M": {
      "kg": {
        "N": 50
      }
    }
  },
  "category": {
    "S": "electronics"
  },
  "image": {
    "S": "C:\\Users\\Hi\\Pictures\\Screenshots\\Screenshot 2024-01-16 161402.png"
  }
});
 
const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};
 
fetch("baseUrl/dev/product", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
  ```
 
 
## Get Product
 
### /Product - get Product
 
- **Method:** GET
- **Summary:** get Product
- **Operation ID:** get Product
- **Tags:** Request
- **Responses:**
  - **200:** Successful operation
 
  ### Example:
```bash
  const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};
 
fetch("baseUrl/dev/product", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
  ```
 
## Product get by id
 
  ### /Product - Product get by id
 
- **Method:** GET
- **Summary:** Product get by id
- **Operation ID:** Product get by id
- **Tags:** Request
- **Responses:**
  - **200:** Successful operation
 
  ### Example:
```bash
  const requestOptions = {
  method: "GET",
  redirect: "follow"
};
 
fetch("baseUrl/dev/product/04ee1f11-09e8-488e-91c9-f64aede3eee1", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
 ```
## Update Product
 
### /Product - update Product
 
- **Method:** PUT
- **Summary:** update Product
- **Operation ID:** update Product
- **Tags:** Request
- **Responses:**
  - **200:** Successful operation
 
  ### Example:
```bash
  const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
 
const raw = JSON.stringify({
  "name": {
    "S": "apple"
  },
  "description": {
    "S": "Updated Product Description"
  },
  "price": {
    "N": 300
  },
  "quantity": {
    "N": 100
  },
  "unit": {
    "M": {
      "kg": {
        "N": 100
      }
    }
  },
  "category": {
    "S": "fruits"
  },
  "image": {
    "S": "https://example.com/image.jpg"
  }
});
 
const requestOptions = {
  method: "PUT",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};
 
fetch("baseUrl/dev/product/04ee1f11-09e8-488e-91c9-f64aede3eee1", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
  ```
 
## Delete Product
 
### /Product - delete Product
 
- **Method:** DELETE
- **Summary:** delete Product
- **Operation ID:** delete Product
- **Tags:** Request
- **Responses:**
  - **200:** Successful operation
 
  ### Example:
```bash
  const requestOptions = {
  method: "DELETE",
  redirect: "follow"
};
 
fetch("baseUrl/dev/product/04ee1f11-09e8-488e-91c9-f64aede3eee1", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
  ```



## Customer APIS

## Insert customer

### /customer - insert customer

- **Method:** POST
- **Summary:** insert customer
- **Operation ID:** insert customer
- **Tags:** Request
- **Responses:**

  - **200:** Successful operation

  ### Example:

```bash
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "customer_details": {
    "name": "mddsa",
    "email": "ssdd",
    "phno": "2",
    "address": "ddsfdsddsdffadddm",
    "city": "hydewfdsdd",
    "country": "india"
  }
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("baseUrl/customer", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```
## Get Customer

### /customer - get all customer

- **Method:** POST
- **Summary:** get all customer
- **Operation ID:** get all customer
- **Tags:** Request
- **Responses:**

  - **200:** Successful operation

  ### Example:

```bash
const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("baseUrl/customer", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

## Customer get by id

### /customer - customer get by id

- **Method:** GET
- **Summary:** customer get by id
- **Operation ID:** customer get by id
- **Tags:** Request
- **Responses:**

  - **200:** Successful operation

  ### Example:

```bash
const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("baseUrl/customer/9af5cc9e-38d7-4075-b0dc-840e5bcbfc1d", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

## Update customer

### /customer - update Product

- **Method:** PUT
- **Summary:** update customer
- **Operation ID:** update customer
- **Tags:** Request
- **Responses:**

  - **200:** Successful operation

  ### Example:

```bash
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "customer_details": {
    "name": "ahbvasdk",
    "email": "examplsdfsde.com",
    "phone": "732535"
  }
});

const requestOptions = {
  method: "PUT",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("baseUrl/customer/9af5cc9e-38d7-4075-b0dc-840e5bcbfc1d", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

## Delete customer

### /customer - delete customer

- **Method:** DELETE
- **Summary:** delete customer
- **Operation ID:** delete customer
- **Tags:** Request
- **Responses:**

  - **200:** Successful operation

  ### Example:

```bash
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const requestOptions = {
  method: "DELETE",
  headers: myHeaders,
  redirect: "follow"
};

fetch("baseUrl/customer/a35acb7c-92af-452e-add8-6619511b3fe9", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

 
## Cart APIS
 
## Insert cart
 
### /cart - insert cart
 
- **Method:** POST
- **Summary:** insert cart
- **Operation ID:** insert cart
- **Tags:** Request
- **Responses:**
  - **200:** Successful operation
 
  ### Example:
```bash
 const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "itemId": "7",
  "quantity": 67
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("baseUrl/insertCart", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
  ```
 
 
## Get cart
 
### /cart - get cart
 
- **Method:** GET
- **Summary:** get cart
- **Operation ID:** get cart
- **Tags:** Request
- **Responses:**
  - **200:** Successful operation
 
  ### Example:
```bash
 const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("baseUrl/dev/cart", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
  ```
 
## Cart get by id
 
  ### /cart - cart get by id
 
- **Method:** GET
- **Summary:** cart get by id
- **Operation ID:** cart get by id
- **Tags:** Request
- **Responses:**
  - **200:** Successful operation
 
  ### Example:
```bash
 const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("baseUrl/dev/cart/2", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
 ```
## Update cart
 
### /cart - update cart
 
- **Method:** PUT
- **Summary:** update cart
- **Operation ID:** update cart
- **Tags:** Request
- **Responses:**
  - **200:** Successful operation
 
  ### Example:
```bash
 const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "quantity": 22
});

const requestOptions = {
  method: "PUT",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("baseUrl/dev/cart/7", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
  ```
 
## Delete cart
 
### /cart - delete cart
 
- **Method:** DELETE
- **Summary:** delete cart
- **Operation ID:** delete cart
- **Tags:** Request
- **Responses:**
  - **200:** Successful operation
 
  ### Example:
```bash
 const requestOptions = {
  method: "DELETE",
  redirect: "follow"
};

fetch("baseUrl/dev/cart/3", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
  ```
  