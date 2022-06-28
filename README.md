 #  <center>SURVIVOR-STORE</center> 

 ## :bookmark: Indice 

 - [About the project](#)

    - [Installation and deployment](#)

    - [Technologies used](#)

    - [Source](#)

    - [Objectives](#)

    - [Concept and inspiration](#)

- [Challenges presented](#)

    - [XXXXXXXXXX](#)

    - [XXXXXXXXXX](#)

- [Acknowledgment](#)

- [Things we would have liked to have added](#)

- [Authors](#)

## About the project

This project unifies everything learned so far. We will develop an e-commerce where users will register, login, view products and create orders using the e-commerce API we created in the 1st Backend Project.

## Installation and deployment

BackEnd

    1. Download the repository from ["Frikishop"](https://github.com/MrSetOne/Frikishop.git) using `git clone https://github.com/MrSetOne/Frikishop.git`  From the terimal in whichever folder you like.  

    2. Once the repository has been cloned, all the packages needed for the project must be installed with `npm i` 

    3. It is necessary to have the Sequelize CLI installed globally, to do this enter in the terminal `npm i sequelize-cli -g`

    4. Inside the config folder, you must copy the file called `config.example.json` and name it `config.json`, inside you have to enter the following information:
    
```JSON
{
    "development": {
        "username": "Your user", // Here enter your mysql username 
        "password": "Your pass", //Enter your mysql password
        "database": "Your db", // The name of your database
        "host": "Your host", //Your host
        "dialect": "mysql",
        "jwt_secret": "YourJWTPass", //The password to verify that the sender of the JWT is who they say they are
        "auth": {
            "user": "yourMail@gmail.com", //Name of the email address with which you want to send the confirmation email to register
            "pass": "YourPass" //Password of that email account
        }
    },
    ...
}
```

    5. Once the information has been entered, the database must be created with the following sequence `sequelize db:create` `sequelize db:migrate` `sequelize db:seed:all` 

    6. Inside the cloned folder of ["Frikishop"](https://github.com/MrSetOne/Frikishop.git) you have to run the command `npm start`

- FrontEnd

    1. Download the repository from ["SurvivorShop"](https://github.com/MrSetOne/SurvivorShop) using `git clone https://github.com/MrSetOne/SurvivorShop.git` From the terimal in whichever folder you like.

    2. Once the repository is cloned, you have to install all the packages that the project needs with `npm i`

    3. Inside the cloned folder of ["SurvivorShop"](https://github.com/MrSetOne/SurvivorShop) you have to run the command `npm start`

## Tecnologías utilizadas

```JavaScript
const project = {
    frontEnd:{
        main:["JavaScript","React","sass"],
        modules:[
            "react-router-dom",
            "antd",
            "@ant-design/icons",
            "axios",
            "normalize.css"
        ]
    },
    backEnd:{
        main:["JavaScript","MySQL","NodeJS","Express","Sequelize"],
        modules:[
            "Nodemailer",
            "Bcrypt",
            "Jsonwebtoken",
            "Multer",
            "Postman"
        ]
    }
} 
```
 


## Technologies used


## Source


## Objectives


## Concept and inspiration


## Challenges presented



## Acknowledgment


## Things we would have liked to have added


## Authors