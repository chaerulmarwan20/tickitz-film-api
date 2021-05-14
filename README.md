<h1 align="center">Backend - Tickitz</h1>
<p align="center">
  <a href="https://booking-tickitz-film.netlify.app/" target="_blank"><img src="https://i.ibb.co/tzSzq4x/Tickitz-2.png" alt="Tickitz-2" border="0" /></a>
</p>

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Built With](#built-with)
- [Prerequisites](#prerequisites)
- [Endpoint](#endpoint)
- [Installation](#installation)
- [Related Project](#related-project)

## Introduction

The Tickitz application is a web application created using node.js and its framework called express.js. This application will make it easier for users to order or purchase tickets to watch movies in their favorite cinemas. This application will also allow users to find out the details of a film, such as the players, the director and even the synopsis. So, you can see in advance who the players are, who is the director who made the film, and what the synopsis looks like.

## Features

- JWT authentication

- Multilevel authorization

- Nodemailer for email verification

- Upload image using multer

- Redis server

- CRUD for all tables required in the application

## Built With

- [ExpressJs](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Redis](https://redis.io/)
- [JWT](https://jwt.io/)
- [Nodemailer](https://nodemailer.com/)

## Prerequisites

- [NodeJs](https://nodejs.org/en/download/)
- [XAMPP](https://www.apachefriends.org/index.html)

## Endpoint

- User

|  METHOD  |              API               |
| :------: | :----------------------------: |
|  `GET`   |           /v1/users            |
|  `GET`   |       /v1/users/find-one       |
|  `POST`  |           /v1/users            |
|  `GET`   |     /v1/users/auth/verify      |
|  `PUT`   |         /v1/users/:id          |
|  `PUT`   |      /v1/users/moviegoers      |
|  `POST`  |      /v1/users/auth/login      |
|  `POST`  |   /v1/users/auth/check-email   |
|  `POST`  | /v1/users/auth/forgot-password |
|  `PUT`   | /v1/users/auth/reset-password  |
| `DELETE` |         /v1/users/:id          |

- Movie

|  METHOD  |              API               |
| :------: | :----------------------------: |
|  `GET`   |           /v1/movies           |
|  `GET`   |      /v1/movies/realesed       |
|  `GET`   | /v1/movies/find-movies/by-date |
|  `GET`   |     /v1/movies/is-realese      |
|  `GET`   |   /v1/movies/is-not-realese    |
|  `GET`   |         /v1/movies/:id         |
|  `POST`  |           /v1/movies           |
|  `PUT`   |         /v1/movies/:id         |
| `DELETE` |         /v1/movies/:id         |

- Cinema

|  METHOD  |       API       |
| :------: | :-------------: |
|  `GET`   |   /v1/cinemas   |
|  `GET`   | /v1/cinemas/:id |
|  `POST`  |   /v1/cinemas   |
|  `PUT`   | /v1/cinemas/:id |
| `DELETE` | /v1/cinemas/:id |

- City

|  METHOD  |      API       |
| :------: | :------------: |
|  `GET`   |   /v1/cities   |
|  `GET`   | /v1/cities/:id |
|  `POST`  |   /v1/cities   |
|  `PUT`   | /v1/cities/:id |
| `DELETE` | /v1/cities/:id |

- Ticket

|  METHOD  |       API       |
| :------: | :-------------: |
|  `GET`   |   /v1/tickets   |
|  `GET`   | /v1/tickets/:id |
|  `POST`  |   /v1/tickets   |
|  `PUT`   | /v1/tickets/:id |
| `DELETE` | /v1/tickets/:id |

- Transaction

|  METHOD  |            API             |
| :------: | :------------------------: |
|  `GET`   |      /v1/transactions      |
|  `GET`   |    /v1/transactions/:id    |
|  `POST`  |      /v1/transactions      |
|  `PUT`   |    /v1/transactions/:id    |
| `DELETE` |    /v1/transactions/:id    |
|  `GET`   | /v1/transactions/users/:id |

- Payment

|  METHOD  |       API        |
| :------: | :--------------: |
|  `GET`   |   /v1/payments   |
|  `GET`   | /v1/payments/:id |
|  `POST`  |   /v1/payments   |
|  `PUT`   | /v1/payments/:id |
| `DELETE` | /v1/payments/:id |

## Installation

1. Open your terminal or command prompt. Then, clone the repository `git clone https://github.com/chaerulmarwan20/tickitz-film-api.git`
2. Create database named `tickitz-film` and import `tickitz-film.sql` from this repository
3. Go to directory `cd tickitz-film-api`
4. Install all required packages `npm install`
5. Create a new file named `.env`, add it's content from `.env.example`
6. Run server `npm run dev`

## Related Project

- :white_check_mark: [`Frontend Tickitz`](https://github.com/chaerulmarwan20/tickitz-film-frontend)
- :rocket: [`Production`](https://booking-tickitz-film.netlify.app/)
