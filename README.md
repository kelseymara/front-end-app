# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) as part of a web development training.

## Branches Overview
- main: stage 1, initial react app
- stage-02: a static version of the application that has the following features:
  - A title
  - A list of customers displaying "name", "email" and "password" for each
  - A customer form with:
  - A title that displays the form's state: "Add" or "Update"
  - Labelled Input fields for: "name", "email" and "password" o "delete", "save" and "cancel" buttons
  - stage-03: a dynamic version of the application that uses in-memory data that has the following features: 
  - added basic styling
  - add list-item selection: when you click on a customer it appears in **bold** and the customer's information
    appears in the form
  - add list-item deselection: if no items in the list are selected the formObject should be set to the "blankCustomer" variable
  - implement cancel button: clicking on cancel  takes the user back to the state where no customer is selected
  - upgrade memdb.js: replace hard-coded data array with a fully implemented memdb.js in-memory data store
  - update customers with a useEffect hook: after retrieving the list useEffect re-renders the application so that customer data appears in the list on-screen
  - implement delete button:  delete the currently selected customer using the memdb "deleteById" function
  - implement form modes: Set the mode variable's value based on the current formObject. The form should be in "Add" mode when it is displaying a new empty record (the "blankCustomer" with id=-1). The form should be in "Update" mode when it is displaying one of the customers from the customer list
  - implement save button: clicking on save adds new records and updates existing records
 - stage-04: refactor app into separate components: App, CustomerList, CustomerForm
 - stage-05: refactor app to use REST server and add testing

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
