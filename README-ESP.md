
 #  <center>SURVIVOR-STORE</center> 

 ## :bookmark: Indice 

 - [Sobre el proyecto](#sobre-el-proyecto)

    - [Instalación y despliegue](#instalación-y-despliegue)

    - [Tecnologías utilizadas](#tecnologías-utilizadas)

    - [Origen](#origen)

    - [Concepto e inspiración](#)

- [Retos presentados](#)

    - [XXXXXXXXXX](#)

    - [XXXXXXXXXX](#)

- [Agradecimientos](#)

- [En el tintero](#)

- [Autores](#)

# Sobre el proyecto

## Instalación y despliegue

- BackEnd

    1. Descargar el repositorio de ["Frikishop"](https://github.com/MrSetOne/Frikishop.git) usando `git clone https://github.com/MrSetOne/Frikishop.git` desde la terminal en la carpeta que desees.

    2. Una vez clonado el respositorio hay que instalar todos los paquetes que necesita el proyecto con `npm i` 

    3. Es necesario tener instalado de forma global el CLI de Sequelize, para ello introduce en la terminal `npm i sequelize-cli -g`

    4. Dentro de la carpeta config, debes copiarte el archivo llamado `config.example.json` y nombrarlo `config.json`, dentro tienes que introducir la siguiente información:

```JSON
{
    "development": {
        "username": "Your user", // Aquí introducir tu usuario de mysql 
        "password": "Your pass", //Introducir tu contraseña de mysql
        "database": "Your db", // Nombre de tu base de datos
        "host": "Your host", //Tu host
        "dialect": "mysql",
        "jwt_secret": "YourJWTPass", //La firma para verificar que el remitente del JWT es quien dice ser
        "auth": {
            "user": "yourMail@gmail.com", //Nombre de la dirección de email con la que quieras enviar el correo de confirmación para registrarte
            "pass": "YourPass" //Contraseña de esa cuenta de email
        }
    },
    ...
}
```

    5. Una vez introducida la informacion hay que levantar la base de datos con la siguiente secuencia `sequelize db:create` `sequelize db:migrate` `sequelize db:seed:all` 

    6. Dentro de la carpeta clonada de ["Frikishop"](https://github.com/MrSetOne/Frikishop.git) tienes que ejecutar el comando `npm start`

- FrontEnd

    1. Descargar el repositorio de ["SurvivorShop"](https://github.com/MrSetOne/SurvivorShop) usando `git clone https://github.com/MrSetOne/SurvivorShop.git` desde la terminal en la carpeta que desees.

    2. Una vez clonado el respositorio hay que instalar todos los paquetes que necesita el proyecto con `npm i`

    3. Dentro de la carpeta clonada de ["SurvivorShop"](https://github.com/MrSetOne/SurvivorShop) tienes que ejecutar el comando `npm start`

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

## Origen

![TheBridge](./toReadme/thebridgelogo.svg)

El proyecto se origina en el bootcam de FullStack en [TheBridge](https://www.thebridge.tech/), consiste en otrogar de frontEnd a un proyecto de backEnd anterior, consiguiendo así un proyecto Full-Stack. El objetivo principal es crear un e-comerce SPA (Single Page Aplication) funcional, usando Hooks y contexts.

## Concepto e inspiración


