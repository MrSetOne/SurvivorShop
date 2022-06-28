
 #  <center>SURVIVOR-STORE</center> 

 ## :bookmark: Indice 

 - [Sobre el proyecto](#sobre-el-proyecto)

    - [Instalación y despliegue](#instalación-y-despliegue)

    - [Tecnologías utilizadas](#tecnologías-utilizadas)

    - [Origen](#origen)

    - [Concepto e inspiración](#concepto-e-inspiración)

    - [Organizacion](#organizacion)

- [Retos presentados](#retos-presentados)

    - [Nombre en el Navbar](#)

    - [Filtro por genero](#)

    - [Cantidad en la cesta](#)

    - [Buscador de productos](#)

- [Agradecimientos](#agradecimientos)

- [En el tintero](#en-el-tintero)

- [Autores](#autores)

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

La idea fue realizar una tienda online en un apocalipsis zombie, donde puedes comprar todo lo necesario para sobrevivir o al menos intenterlo... Algunos productos están puestos de forma comica, como por ejemplo "Zombie high heels" (¡Estás invitado a encontrarlo con nuesto buscador :D!), los precios están en Tenge kazajo (moneda de Kazajistán) y no hay envio, tu te las apañas para ir a recoger los articulos (Si sobrevives a los zombies :D)

### Inicio de sesion
![Pagina de inicio de sesion](./toReadme/Screenshot_1.png)

### Tienda y carrito
![Tienda y carrito](./toReadme/Screenshot_2.png)

### Pedidos y pago
![Pedidos y pago](./toReadme/Screenshot_3.png)

## Organizacion

Para organizar las tareas hemos utilizado el aplicativo [Trello](https://trello.com/) con el que se puede gestionar comodamente las tareas y "Tickets"

### Captura del Trello
![Captura del Trello](./toReadme/Trello.png)

# Retos presentados

## Nombre en el Navbar
![NavBar](./toReadme/NavBar_Screenshot.png)

Queriamos mostrar la inicial del usuario logueado dentro de la barra de navegación, el problema estaba en que en el localStorage solo almacenabamos el token actual, y no el username, entonces, al abrir la aplicación crasheaba, esto lo solucionamos haciendo que cuando se haga login se almacene el username en el localStorage.

### Captura de la solución

![Captura de la solución](./toReadme/NavBar_code.png)

## Filtro por genero

![Filtro por genero](./toReadme/Store_Screenshot.png)

El objetivo era hacer que el selector de categorias tuviese tantas opciones como categorias en el servidor



# Agradecimientos

Agradecer a nuestros profesores [Sofia](https://github.com/SofiaPinilla) [Germán](https://github.com/GeerDev) e [Ivan](https://github.com/ivanpuebla10) por enseñarnos a usar React y su paciencia con nosotros. Tambien agradecer a todos mis compañeros del Bootcamp por siempre estar ahí para aportar soluciones o simplemente un punto de vista critico.

# En el tintero

- Implementar imagen de perfil.

- Opcion para varios carritos

- Lista de deseos

- Vista de Admin

- Sistema de comentarios

# Autores

### [Michael L. Sánchez](https://github.com/MrSetOne)

### [Alex Tebbitt](https://github.com/alextebbitt)