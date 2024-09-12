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


dd Styling:
• CSS Styling should be added so that your app resembles the demo app
• Some styles already appear in the App.css file. You just need to make sure they are applied to
the App component.
 6
WA3488 ADP Phase 1 React Project - Overview & Work Steps
Add List-Item Selection:
Earlier, when you clicked on an item in the list, a message was output to the JavaScript console. But, the item was not selected. That is, the clicked-on item is not listed in bold and is not displayed in the form in the bottom half of the screen. The form in the bottom half of the screen currently shows a single, hard coded customer: Jack Jackson.
In this part of the project you should implement these requirements and make sure that the application's behavior when clicking on an item in the list matches what is written in the "Application Requirements.pdf" document.
• • • • •
Hints:
• •
Items in the list are selected by clicking on them
Only one item can be selected at a time
The selected list item should appear in bold lettering
The item selected in the list should appear in the input form
Clicking on an already selected item should cause it to lose its selection
Manage the currently selected item with a React useState() function. Manage the object shown in the form with useState() as well.
Before moving on, think about how you would approach getting a selected list item to be rendered in bold. Then check the application to see which parts of your solution idea may already be in place.
Keeping track of requirements
Your app currently implements some of the requirements outlined in the "Application Requirements.pdf" file.
Go to the list and take note of which requirements are already implemented and which still need to be implemented. You might want to copy the requirements list into a text file or word document where you can mark items DONE as you complete them.
Add List-Item De-Selection:
Sometimes after selecting an item in the list you may want to de-select the item. You can do this if needed by selecting another item in the list. But what if you want to return the list to a state where no items are selected?
For this part of the project you should update the application code so that clicking on an already selected list item deselects the item and clears the form below the list.
Hints:
• If no items in the list are selected the formObject should be set to the "blankCustomer" variable.
• Customer items will always have an id >= 0. The "blankCustomer" always has id = -1
7

WA3488 ADP Phase 1 React Project - Overview & Work Steps
• It might be a good idea to commit all existing changes to git before you start working on this. That way you can always revert the app back if you run into any issues while experimenting with the code.
Implement Cancel Function
When the app first opens, no customer is listed in the form at the bottom of the screen. Only after you click on a customer in the list is it shown in the form. After that you can change selected customers but you can't get back to the original state where no customer is selected.
In this part of the project you will implement the cancel button so that it takes the user back to the state where no customer is selected.
Before getting started think about how you might do this.
Hint: No items in the list will be highlighted if the formObject's value is taken from the "blankCustomer" variable.
After you've coded your implementation try testing it out:
• Refresh the app
• Click on an item to select it
• Click on the "Cancel" button.
• The customer should be de-selected and the form input fields are cleared.
This kind of manual testing can be done by following the test scripts that are located in the "application testing.pdf" file. Make it a habit to verify new feature functionality by running through the test scripts after each implementation.
Upgrade memdb.js
Depending on how you've proceeded up until now the data you see in the app has been provided by a hard coded array of customers:
• Inside the App.js file (if building on your own code) or
• Inside a minimal memdb.js file (if building on solution code)
In this part of the project you are going to replace this bare-bones data array with a fully implemented memdb.js in-memory data store.
The new implementation includes not only an array but several functions that can be used to interact with the array. The functions will allow you to add, update and delete items from the array thus simulating a more realistic data store.
1. Copy the ProjectAssets\memdb.js file into the \src directory of your project. (if you already have a memdb.js file then overwrite it)
1. Import all the functions from memdb.js into your App.js file. (excluding non-exported functions)
8

WA3488 ADP Phase 1 React Project - Overview & Work Steps
2. Create a "customers" variable in the App component that is managed by React's useState() function. (pass an empty array to useState([]) )
3. Save App.js
4. Go back to the browser and refresh the application. The compile errors should have gone away but no customers are showing in the application.
This should make sense. Remember we created the "customers" variable by passing an empty array to useState([]). To update the "customers" variable we'll need to use another React hook, this time it will be the useEffect hook.
Update Customers with the useEffect Hook
React's useEffect hook allows you to perform side effects like data fetching, direct DOM updates, and timer functions in React components.
In this part of the project you will add a useEffect hook to your app that retrieves a list of customers from the updated memdb.js code. After retrieving the list useEffect re-renders the application so that customer data appears in the list on-screen.


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
