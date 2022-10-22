# Clean architecture React Example

This repository consists of a sample React application to get weather data from https://open-meteo.com/en/docs

## Project Overview

This React application uses  ports and adapters clean architecture to seprate business logic from UI. Business logic is wrapped in a node project and can be tested independently of the UIs.
The current example demonstrates a React Website located in the UI part of the infrastructure. The react application reaches outside its src folder (using React-App-Rewired) to utilise
the business logic (domains and infrastructure). 

source
    src
        domains
            models
        infrastucture
            repository
                ports
                adapters
            ui
                react-ui //full react app
                Other UI projects, e.g. React-Native
        test


## Scripts and setup

After cloning the repo 
1. Business Logic - Navigate to the source folder and run `npm install` to install the business logic and enable jest testing.
2. React app UI - Navigate to the source/src/infrastructure/ui/react-ui and run `npm install` to install the react app.

### Testing

1. Business Logic navigate to source folder and run `npm run test`
2. React app UI - Navigate to the source/src/infrastructure/ui/react-ui and run `npm run test`

### Run the react app

Navigate to the source/src/infrastructure/ui/react-ui and run `npm start`




