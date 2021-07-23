# POC to demonstrate a node postgres jwt based authentication
  This is a POC to demonstrate authentication and authorisation using
  node postgres and JWT. Further it implements a front-end using react to demonstrate the authentication. It uses containers to run the webserver, front-end and database.

## Technologies used
   
   Node Js, Docker, Postgres, React, Cypress, Sequelize

## How to run this project and automation tests
  
  Step:1 You need to have docker and docker compose installed in your
  machine, If not please refer the official docs
  https://docs.docker.com/compose/install/

  Step:2 You can run spin up all the containers by running
  ```
  docker-compose up --build
  ```
  This will create the following
  - a container for the postgres db 
  - a container for the webserver
  - a container for the react front-end

  Now you can visit http://localhost:3000 to see the app in action

  Step:3 Running the automation tests in cypress
  From the root directory run
  ```
  npm install
  ```
  this should cypress for you and now run 
  ```
  npm run cypress:open
  ```
  This will start the automation tests and you can click on 
  the desired tests in the cypress console and run it

## Next steps:
  - Containerising cypress
  - Add proper styling using SASS or CSS modules for react
  - Add proper unit tests in the front-end
  - Add proper integration tests for the APIs