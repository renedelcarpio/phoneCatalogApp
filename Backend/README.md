# Phone Catalog App  - Backend

First you have to clone the project. After that, you have to go to Backend folder.

## Requirements

You must have a database; you could visit [mongodb](https://www.mongodb.com/es) and create a free database.

You must have [nodejs](https://nodejs.org/es/) installed in your pc. This project is working with v14.17.6

## Installation

Use the package manager [npm](https://www.npmjs.com/) make the installations.


```bash
npm install
```

## Usage

Before run the project you have to create three .env file in the Backend folder:

//development.env

NODE_ENV=development
HOST=host for development
PORT=port for development
MONGO_DB_URI=put here your database url
MONGO_DB=name of the database
APP_NAME=the name of your app

### To run this project you can type in the terminal

```bash

// To run the project in development environment
npm run dev

// To run the project for production
npm start

// To run de tests
npm run test:watch

```