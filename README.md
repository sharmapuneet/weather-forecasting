# Weather Forecasting

Weather Forecasting consists of the the sidebar which shows the weather of the city, delayed routes and ramp chart.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Context

We are using context api to store the data fetched from the mock api and wrapping the component with the context provider to consume the data.

## Mock API

The mock api is created for the demo to generate data on an interval of every half second.

## Components

There are 5 components in total to create the sidebar as per the designs supplied -

### Sidebar

This component is the container component of all the other small components to make up a single sidebar.

### TopContent

This component is the first section of sidebar. It includes city name, temperature, date and time, weather icon and the rest of data consists of weather information.

### MiddleContent

This component is the second section of the sidebar. It includes the accordion with all the delayed routes information. This component is build using MiddleContentItem component.

### MiddleContentItem

This component is build to create a single row of the MiddleContent component.

### BottomComponent

This component is the third section of sidebar. It includes the ramp chart which consumes data from the context.
