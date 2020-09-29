# Dashboard Server

This project was generated with 
* [NodeJs](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/) (for data handling)


 ## Clone project: 
 ```bash
 git clone https://github.com/droornir/risk-dashboard
 cd risk-dashboard/risk-dashboard-server
 ```

## Install
Run `npm install` to download and install dependencies

## Populate the Database
Run `npm run seed` to seed mongo-db with risks values

## DEV
Run `npm run start` for a dev server.

## Docker
Run `npm run env-up` (to generate image)
Run `npm run env-seed` (to populate DB)
Run `npm run env-down` (to detach image)

## Running unit tests
Run `npm run test` to execute the unit tests via [Mocha](https://mochajs.org/).

## Validating the code
Run `npm run lint` to execute [eslint](https://eslint.org/)

# Logs
Logs will be saved in logs folder

