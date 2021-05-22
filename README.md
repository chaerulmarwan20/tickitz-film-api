<h1 align="center">Backend - Tickitz</h1>
<p align="center">
  <a href="https://booking-tickitz-film.netlify.app/" target="_blank"><img src="https://i.ibb.co/tzSzq4x/Tickitz-2.png" alt="Tickitz-2" border="0" /></a>
</p>

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Built With](#built-with)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Documentation](#documentation)
- [Link](#link)
- [Author](#author)

## Introduction

The Tickitz application is a web application created using node.js and its framework called express.js. This application will make it easier for users to order or purchase tickets to watch movies in their favorite cinemas. This application will also allow users to find out the details of a film, such as the players, the director and even the synopsis. So, you can see in advance who the players are, who is the director who made the film, and what the synopsis looks like.

## Features

- JWT authentication

- Multilevel authorization

- Nodemailer for email verification

- Upload image using multer

- Redis server

- Form validation using joi

- CRUD for all tables required in the application

## Built With

- [ExpressJs](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Redis](https://redis.io/)
- [JWT](https://jwt.io/)
- [Nodemailer](https://nodemailer.com/)
- [Moment](https://momentjs.com/)
- [Standard](https://standardjs.com/)
- [Joi](https://www.npmjs.com/package/joi)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Multer](https://www.npmjs.com/package/multer)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Ip](https://www.npmjs.com/package/ip)

## Prerequisites

- [NodeJs](https://nodejs.org/en/download/)
- [XAMPP](https://www.apachefriends.org/index.html)

## Installation

1. Clone the repository

```
git clone https://github.com/chaerulmarwan20/tickitz-film-api.git
cd tickitz-film-api
```

2. Install package

```
npm install
```

3. Create database named `tickitz-film` and import `tickitz-film.sql` from this repository

4. Create .env file

```
# Host & Port
HOST=
PORT=
PORT_FRONTEND=

# Database
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=tickitz-film

# Secret Key
SECRET_KEY=

# Email
EMAIL_USER=
EMAIL_PASS=

# Redis
REDIS_PORT=6379
```

5. Run application

```
npm run dev
```

Or

```
npm start
```

## Documentation

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/11970262/TzXtJfm9)

## Link

- :white_check_mark: [`Frontend Tickitz`](https://github.com/chaerulmarwan20/tickitz-film-frontend)
- :rocket: [`Publication`](https://booking-tickitz-film.netlify.app/)

## Author

- [Chaerul Marwan](https://github.com/chaerulmarwan20)
