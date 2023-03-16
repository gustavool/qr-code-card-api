# QRCode card API

## Description

A simple API to manage and save user data for business card generation. This api was developed to use with [QRCode card client](https://github.com/gustavool/qr-code-card-client)

## Technologies used

- NodeJs
- Typescript
- Express
- Mongoose
- MongoDB
- Tsyringe

## Endpoints

| Name                 | Method |         Endpoint |
| -------------------- | :----: | ---------------: |
| Get a user by ID     |  GET   |     /user/id/:id |
| Get a user by name   |  GET   | /user/name/:name |
| Get all users        |  GET   |           /users |
| Save a new user data |  POST  |       /user/save |
| Delete a user by id  |  DEL   | /user/delete/:id |

## Getting started

### Clone this repository

`git clone https://github.com/gustavool/qr-code-card-api.git`

### Run

`npm run dev`
