# FoodRescue API Documentation

## Endpoints:

### User

- `POST /signup`
- `POST /signin`
- `POST /signin-with-google`

### Food

- `GET /food`
- `GET /food/:id`

### Restaurant

- `GET /restaurants`
- `GET /restaurants/:id`

### Category

- `GET /categories`
- `GET /categories/:id`

### CategoryResto

- `GET /categoryresto`
- `GET /categoryresto/:id`

### Favorite

- `POST /favorite`
- `GET /favorite`
- `GET /favorite/:id`
- `DELETE /favorite/:id`

### RESTO

- `GET /resto/food`
- `GET /resto/food/:id`
- `POST /resto/food` 
- `DELETE /resto/food/:id` 
- `PUT /resto/food/:id` 
- `PATCH /resto/food/:id`   

### 1. POST /signup

#### Description

- register as a new user

Request:

- body:

```json
{
  "fullName":STRING,
  "email": STRING,
  "password": STRING,
  "phoneNumber":INTEGER,
  "address":STRING
}
```

#### Response

_201 - Created_

```json
{
  "id": INTEGER,
  "fullName": STRING,
  "email": STRING,
  "phoneNumber": INTEGER,
  "address": STRING,
  "updatedAt": DATE,
  "createdAt": DATE,
}
```

_400 - Bad Request_

```json
{
  "message": "Email can't null"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Name can't null"
}
OR
{
  "message": "Phone Number can't null"
}
OR
{
  "message": "Password can't null"
}
```

### 2. POST /signin

#### Description

- Sign in as a user

Request:

- body:

```json
{
  "email": STRING,
  "password": STRING,
}
```

#### Response

_200 - OK_

```json
{
  "accessToken": STRING,
  "user": {
    "id": INTEGER,
    "fullName": STRING,
    "email": STRING,
    "phoneNumber": INTEGER,
    "address": STRING,
    "createdAt": DATE,
    "updatedAt": DATE
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Required Email or Password"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid Email or Password"
}
```

### 3. POST /signin-with-google

#### Description

- Sign in as a user by google

Request:

- headers:

```json
{
  "google_token": STRING
}

```

#### Response

_200 - OK_

```json
{
  "accessToken": STRING,
  "user": {
    "id": INTEGER,
    "fullName": STRING,
    "email": STRING,
    "phoneNumber": INTEGER,
    "address": STRING,
    "createdAt": DATE,
    "updatedAt": DATE
  }
}
```

### 4. GET /food

#### Description

- Get all the food data

#### Response

_200 - OK_

```json
[
  {
    "id": Integer,
    "name": String,
    "price": Integer,
    "discount":Integer,
    "description": Text,
    "imageUrl": String,
    "quantity" : Integer,
    "sales":Integer,
    "status":String,
    "categoryId": Integer,
    "createdAt": Date,
    "updatedAt": Date,
    "Category": Obj,
    "RestaurantId":Integer,
    "Restaurant":obj,
  },
  ...
]
```

### 5. POST /food

#### Description

- Create a new food data

Request:

- headers:

```json
{
  "access_token": STRING
}
```

- body:

```json
{
  "name": String,
  "price": Integer,
  "discount":Integer,
  "description": Text,
  "imageUrl": String,
  "quantity" : Integer,
  "sales":Integer,
  "status":String,
  "categoryId": Integer,
  "RestaurantId":Integer,
},
```

#### Response

_201 - Created_

```json
{
  "data": {
    "id": Integer,
    "name": String
    },
  "message": String
}
```

_400 - Bad Request_

```json
{
  "message": "Name is required"
}
OR
{
  "message": "Category is required"
}
OR
{
  "message": "Description is required"
}
OR
{
  "message": "Price is required"
}
OR
{
  "message": "Image is required"
}
```

_401 - Unauthorized_

```json
{
  "message": "Invalid Token"
}
```

### 6. GET /food/:id

#### Description

- Get one food data

#### Response

_200 - OK_

```json
{
  "id": Integer,
  "name": String,
  "price": Integer,
  "discount":Integer,
  "description": Text,
  "imageUrl": String,
  "quantity" : Integer,
  "sales":Integer,
  "status":String,
  "categoryId": Integer,
  "createdAt": Date,
  "updatedAt": Date,
  "Category": Obj,
  "RestaurantId":Integer,
  "Restaurant":obj,
}
```

_404 - Not Found_

```json
{
  "message": "Data Not Found"
}
```

### 7. GET /restaurants

#### Description

- Show all restaurants from database

#### Response

_200 - OK_

```json
[
   {
      "id": Integer,
      "UserId": Integer,
      "name": String,
      "is_open": Boolean,
      "open_time": Time,
      "close_time": Time,
      "rating": Float,
      "review_count": Integer,
      "latitude": Float,
      "longitude": Float,
      "address":Text,
      "is_delivery":Boolean,
      "is_pickup":Boolean,
      "income":Integer,
      "type":String,
      "logoUrl":Text,
      "createdAt":Date,
      "updatedAt":Date,
    },
    ...
]
```

### 6. GET /categories

#### Description

- Show all category from database

Request:

- headers:

```json
{
  "access_token": STRING
}

```

#### Response

_200 - OK_

```json
[
    {
        "id": INTEGER,
        "name": STRING,
        "createdAt": DATE,
        "updatedAt": DATE
    },
    ...
]
```

### 7. POST /categories

#### Description

- Adding new category data to database

Request:

- headers:

```json
{
  "access_token": STRING
}

```

- body:

```json
{
  "name": STRING,
}
```

#### Response

_200 - OK_

```json
{
  "message": "category created successfully"
}
```

_400 - Bad Request_

```json
{
  "message": [
    "category required",
    ...
  ]
}
```

_401 - Unauthorized_

```json
{
  "message": "Invalid Token"
}
```

### 8. GET /histories

#### Description

- Show All data histories

Request:

- headers:

```json
{
  "access_token": STRING
}

```

#### Response

_200 - OK_

```json
[
    {
        "id": INSTEGER,
        "name": STRING,
        "description": STRING,
        "updatedBy": STRING,
        "createdAt": STRING,
        "updatedAt": STRING
    }
    ...
]
```

### 10. PUT /food/:id

#### Description

- Edited Food data value

Request:

- headers:

```json
{
  "access_token": STRING
}

```

- body:

```json
{
  "name": STRING,
  "description": STRING,
  "price": INTEGER,
  "imgUrl": STRING,
  "authorId": INTEGER,
  "categoryId": INTEGER
}
```

#### Response

_200 - OK_

```json
{
  "message": "Food has been updated!"
}
```

_401 - Unauthorized_

```json
{
  "message": "Invalid Token"
}
```

_403 - Forbidden_

```json
{
  "message": "Not Authorize"
}
```

_404 - Not Found_

```json
{
  "message": "Data Not Found"
}
```

### 11. PATCH /food/:id

#### Description

- updated status food

Request:

- headers:

```json
{
  "access_token": STRING
}

```

- body:

```json
{
  "status": STRING,
}
```

#### Response

_200 - OK_

```json
{
  "message": "Food status has been updated!"
}
```

_401 - Unauthorized_

```json
{
  "message": "Invalid Token"
}
```

_403 - Forbidden_

```json
{
  "message": "Not Authorize"
}
```

_404 - Not Found_

```json
{
  "message": "Data Not Found"
}
```

### 12. PUT /categories/:id

#### Description

- updated category

Request:

- headers:

```json
{
  "access_token": STRING
}

```

- body:

```json
{
  "name": STRING,
}
```

#### Response

_200 - OK_

```json
{
  "message": "Category has been updated!"
}
```

_401 - Unauthorized_

```json
{
  "message": "Invalid Token"
}
```

_403 - Forbidden_

```json
{
  "message": "Not Authorize"
}
```

_404 - Not Found_

```json
{
  "message": "Data Not Found"
}
```

### 13. DELETE /categories/:id

#### Description

- Remove a category data based on given id

Request:

- headers:

```json
{
  "access_token": STRING
}

```

#### Response

_200 - OK_

```json
{
  "message": " <category name> success to delete"
}
```

_401 - Unauthorized_

```json
{
  "message": "Invalid Token"
}
```

_403 - Forbidden_

```json
{
  "message": "Not Authorize"
}
```

_404 - Not Found_

```json
{
  "message": "Data Not Found"
}
```

### 14. POST /cus/signup

#### Description

- Sign Up / register as a new user

Request:

- body:

```json
{
  "username":STRING,
  "email": STRING,
  "password": STRING,
  "phoneNumber":INTEGER,
  "address":STRING
}
```

#### Response

_201 - Created_

```json
{
  "message": STRING,
  "data": {
    "id": INSTEGER,
    "username": STRING,
    "email": STRING,
    "phoneNumber": INTEGER,
    "address": STRING,
    "updatedAt": DATE,
    "createdAt": DATE,
    "role": "Customer"
  }
}
```

_400 - Bad Request_

```json
{
  "message": "Email can't null"
}
OR
{
  "message": "Username can't null"
}
OR
{
  "message": "Username must be unique"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Name can't null"
}
OR
{
  "message": "Password can't null"
}
```

### 15. POST /cus/signin

#### Description

- Sign in as a user

Request:

- body:

```json
{
  "email": STRING,
  "password": STRING,
}
```

&nbsp;

#### Response

_200 - OK_

```json
{
  "accessToken": STRING,
  "user": {
    "id": INTEGER,
    "username": STRING,
    "email": STRING,
    "role": "Customer",
    "phoneNumber": INTEGER,
    "address": STRING,
    "createdAt": DATE,
    "updatedAt": DATE
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Required Email or Password"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid Email or Password"
}
```

### 16. POST /cus/signin-with-google`

#### Description

- Sign in as a user by google

Request:

- headers:

```json
{
  "google_token": STRING
}

```

#### Response

_200 - OK_

```json
{
  "accessToken": STRING,
  "user": {
    "id": INTEGER,
    "username": STRING,
    "email": STRING,
    "role": "Customer",
    "phoneNumber": INTEGER,
    "address": STRING,
    "createdAt": DATE,
    "updatedAt": DATE
  }
}
```

### 17. GET /cus/food

#### Description

- Get all the food data

#### Response

_200 - OK_

```json
{
  "food":[
    {
      "id": Integer,
      "name": String,
      "description": Text,
      "price": Integer,
      "imgUrl": String,
      "authorId": Integer,
      "categoryId": ç,
      "createdAt": Date,
      "updatedAt": Date,
      "User": Obj,
      "Category": Obj
    },
    ...
  ],
  "pages":Integer,
}
```

### 17. GET /cus/categories

#### Description

- Show all category from database

#### Response

_200 - OK_

```json
[
    {
        "id": INTEGER,
        "name": STRING,
        "createdAt": DATE,
        "updatedAt": DATE
    },
    ...
]
```

### 18. GET /cus/food/:id

#### Description

- Get one food data

#### Response

_200 - OK_

```json
{
    "id": Integer,
    "name": String,
    "description": Text,
    "price": Integer,
    "imgUrl": String,
    "authorId": Integer,
    "categoryId": Integer,
    "createdAt": Date,
    "updatedAt": Date,
    "User": Obj,
    "Category": Obj

}
```

_401 - Unauthorized_

```json
{
  "message": "Invalid Token"
}
```

_404 - Not Found_

```json
{
  "message": "Data Not Found"
}
```

### 19. POST /cus/favorite

#### Description

- Added new data to favorites

Request:

- headers:

```json
{
  "access_token": STRING
}

```

#### Response

_201 - Created_

```json
{
  "message": "Added to favorite successfully"
}
```

_401 - Unauthorized_

```json
{
  "message": "Invalid Token"
}
```

_404 - Not Found_

```json
{
  "message": "Data Not Found"
}
```

### 20. GET /cus/favorite

#### Description

- Show all data from favorites user

Request:

- headers:

```json
{
  "access_token": STRING
}

```

#### Response

200 - OK\_

```json
[
  {
      "id": Integer,
      "FoodId": Integer,
      "UserId": Integer,
      "createdAt": Date,
      "updatedAt": Date,
      "Food": Obj,
      "User": Obj

  },
  ...
]
```

_401 - Unauthorized_

```json
{
  "message": "Invalid Token"
}
```

### Global Error

#### Response

_500 - Internal Server Error_

```json
{
  "message": "Internal Server Error"
}
```
