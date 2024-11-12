# RESTful API with Node.js and Express

### **1\. GET /products \- Fetch all products**

#### **Request:**

-   **Method**: `GET`
-   **URL**: `http://localhost:3000/products`

#### **Expected Response:**

-   **Status Code**: 200 OK
-   **Body**: Returns an array of product objects.

![GET all products](/images/get/get_all.png)

### **2\. GET /products/ \- Fetch a specific product by ID**

#### **Request:**

-   **Method**: `GET`
-   **URL**: `http://localhost:3000/products/1`

#### **Expected Response:**

-   **Status Code**: 200 OK (if product found)
-   **Body**: Returns a single product object if found.

![GET one product](/images/get/get_one.png)

#### **Response if Product Not Found:**

-   **Status Code**: 404 Not Found
-   **Body**: Returns an error message.

![GET Invalid ID](/images/get/get_invalid_id.png)

### **3\. POST /products \- Add a new product**

#### **Request:**

-   **Method**: `POST`
-   **URL**: `http://localhost:3000/products`
-   **Body** (JSON format):

```json
{
	"name": "Redmi Note 10 Pro Max",
	"description": "Amazing phone with 128 GB storage",
	"price": 39999,
	"quantity": 500
}
```

![POST new product](/images/post/post.png)

### **Test Case 1: Missing Name**

Request:

-   Method: `POST`
-   URL: `http://localhost:3000/products`
-   Body (JSON format):

```json
{
	"description": "Amazing phone with 128 GB storage",
	"price": 19999,
	"quantity": 500
}
```

#### **Expected Response:**

-   **Status Code**: 400 Bad Request
-   **Body**: Returns an error message indicating the missing `name` field.
    ![Name Missing](/images/post/name_missing.png)

### **Test Case 2: Missing Price**

#### **Request:**

-   **Method**: `POST`
-   **URL**: `http://localhost:3000/products`
-   **Body** (JSON format):

```json
{
	"name": "New phone",
	"description": "Amazing phone with 128 GB storage",
	"quantity": 500
}
```

![Price Missing](/images/post/price_missing.png)

### **Test Case 3: Missing Both Name and Price**

#### **Request:**

-   Method: `POST`
-   URL: `http://localhost:3000/products`
-   Body (JSON format):

```json
{
	"description": "Amazing phone with 128 GB storage",
	"quantity": 500
}
```

#### **Expected Response:**

-   **Status Code**: 400 Bad Request
-   **Body**: Returns an error message indicating both `name` and `price` are missing

![Missing Name and price](/images/post/name_price_missing.png)

### **4\. PUT /products/ \- Update an existing product**

#### **Request:**

-   **Method**: `PUT`
-   **URL**: `http://localhost:3000/products/1`
-   **Body** (JSON format):

```json
{
	"name": "Redmi Note 10 Pro Max (Updated)"
}
```

#### **Expected Response:**

-   **Status Code**: 200 OK (if product updated)
-   **Body**: Returns the updated product object.

![Put product](/images/put/put.png)

#### **Response if Product Not Found:**

-   **Status Code**: 404 Not Found
-   **Body**: Returns an error message.

![Incorrect put product](/images/put/put_invalid_id.png)

### **5\. DELETE /products/ \- Delete a product by ID**

#### **Request:**

-   **Method**: `DELETE`
-   **URL**: `http://localhost:3000/products/1`

#### **Expected Response:**

Assuming there are 4 items:  
![Four Items](/images/four_items.png)

**Status Code**: 204 No Content (if product deleted)
![Delete product](/images/delete/delete.png)

#### **Response if Product Not Found:**

-   **Status Code**: 404 Not Found
-   **Body**: Returns an error message.

![Delete: Product Not Found](/images/delete/delete_invalid_id.png)

### **6\. GET /products (with sorting) \- Fetch products with sorting**

#### **Request:**

-   **Method**: `GET`
-   **URL**: `http://localhost:3000/products?sortBy=price&order=desc`

#### **Expected Response:**

-   **Status Code**: 200 OK
-   **Body**: Returns a sorted array of products by price in descending order.

**Sorted by Price Descending:**

![Get products sort by price desc](/images/get/price_desc.png)

**Sort By Price in Ascending Order:**

![Sort by price ascending](/images/get/price_asc.png)

**Sort by Name in Ascending Order:**  
![Sort by name ascending](/images/get/name_asc.png)

**Sort By Name in Descending Order:**  
![Sort by name ascending](/images/get/name_desc.png)

**Invalid Sort By Param:**  
![Invalid Sort By Param](/images/get/sortby_invalid.png)
**Invalid Order By param:**  
![Sort by price ascending](/images/get/order_invalid.png)
