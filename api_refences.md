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

- `GET /restaurant`
- `GET /restaurant/:id`

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
  "data": {
    "id": INTEGER,
    "fullName": STRING,
    "email": STRING,
    "phoneNumber": INTEGER,
    "address": STRING,
    "updatedAt": DATE,
    "createdAt": DATE,
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

&nbsp;

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
      "description": Text,
      "imgUrl": String,
      "createdAt": Date,
      "updatedAt": Date,
      "categoryId": Integer,
      "Category": Obj,

  },
  {
      "id": 5,
      "name": "Nugget Tempe",
      "price": 50000,
      "discount":50,
      "CategoryId":2,
      "description": "Bahan :\r\n500 gr tempe (kukus)\r\nTelur ayam 2 butir\r\nMerica bubuk 1/2 sdt\r\nSecukupnya garam\r\nBawang polong 1 batang (dicincang halus)\r\nBawang putih 3 siung (dihaluskan)\r\nBawang merah 3 butir (dihaluskan)\r\nSeledri 1 batang (dicincang halus)\r\nSecukupnya tepung roti\r\n\r\nCara membuat :\r\n1. Tempe dikukus lebih dulu\r\n2. Haluskan tempe kukus tersebut\r\n3. Campur tempe dengan bumbu halus, telur dan tepung roti\r\n4. Tambahkan merica bubuk, garam, bawang polong dan seledri\r\n5. Semua bahan diaduk menggunakan tangan sampai tercampur rata\r\n6. Siapkan loyang kotak yang sudah dioles dengan sedikit minyak, lalu masukkan adonan ke dalamnya.\r\n7. Kukus nugget hingga matang (kira-kira 35 menit)",
      "imageUrl": "https://contohgambar.herokuapp.com/05.jpg",
      "quantity" : 10,
      "sales":19,
      "status":"popular"
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
  "name": STRING,
  "description": STRING,
  "price": INTEGER,
  "imgUrl": STRING,
  "authorId": INTEGER,
  "categoryId": INTEGER
}
```

#### Response

_201 - Created_

```json
{
  "id": Integer,
  "name": String,
  "description": String,
  "price": Integer,
  "imgUrl": String,
  "authorId": Integer,
  "categoryId": Integer,
  "updatedAt": Date,
  "createdAt": Date
}
```

_400 - Bad Request_

```json
{
  "message": [
      "name is required",
      "category is required",
      "description is required",
      "price is required",
      "image is required",
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

### 9. GET /food/:id

#### Description

- Get one food data

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
