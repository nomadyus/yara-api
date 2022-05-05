# yara API
A simple web API that returns the weather for a provided city.

## tl;dr;
```
 npm install; npm start;
```

## Requirements
-   `npm` >= `8.3.1`
-   `Node.js` >= `v17.4.0`
-   `Express` >= `4.18.1`
-   `Axios` >= `0.27.2`

## Setup the app
1. Install [node](https://nodejs.org/en/download/) using a node version manager like **[nvm](https://github.com/creationix/nvm#install-script)** or **[n](https://www.npmjs.com/package/n)**
2. Clone this repo
3. In this project's directory, run `npm install` to install dependencies
4. Run the command `npm run build` to build the application
5. Duplicate the `.env.example` file as `.env` file and provide the required configurations. Reach out to a team member to securely get the secrets.

## Serve the app
1. Run `npm start`
2. App should be running on **[localhost:3000/](http://localhost:3000/)**

## Test the app
1. Go to route **[localhost:3000/api/v2/weather/Toronto](http://localhost:3000/weather/Toronto)** to get weather in **Toronto**

# Swagger
1. Run the following command `npm run swagger:serve` to serve the swagger UI.
2. The swagger UI will be available at **[localhost:3000/api-docs](http://localhost:3000/api-docs)**

**NOTE** There are some CORS issues with the Swagger UI so the endpoint will not function from the Swagger UI.


