# React Training Application

This project is a React training application with topic completion tracking functionality. It includes a PostgreSQL database to store the completion status of topics.

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL database

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the root directory with the following content (adjust as needed):

   **For local PostgreSQL:**
   ```
   PORT=3000
   SERVER_PORT=5001
   DB_USER=postgres
   DB_HOST=localhost
   DB_NAME=react_training
   DB_PASSWORD=postgres
   DB_PORT=5432
   ```

   **For Neon DB or other cloud PostgreSQL services:**
   ```
   PORT=3000
   SERVER_PORT=5001
   DATABASE_URL=postgres://user:password@hostname:port/database?sslmode=require
   ```
   
   Replace the `DATABASE_URL` with your actual connection string from Neon DB.

3. Set up the database:
   
   **For local PostgreSQL:**
   ```
   npm run db:setup
   ```
   
   **For Neon DB:**
   
   When using Neon DB, you don't need to create the database manually. The database is already created when you set up your Neon project. Just run:
   ```
   npm run db:setup
   ```
   This will create the necessary tables in your existing Neon database.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the React app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run server`

Runs the backend server for the topic completion API.\
The server will be available at [http://localhost:5001](http://localhost:5001).

### `npm run dev`

Runs both the React app and the backend server concurrently.\
This is the recommended way to run the application during development.

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

## Topic Completion Feature

This application includes a feature to mark topics as completed:

1. Each topic card has a "Mark as Done" button next to the "View Topic" button
2. Clicking the button toggles the completion status of the topic
3. The completion status is stored in a PostgreSQL database
4. The UI updates to show a visual indicator of completed topics

The feature uses:
- A Node.js/Express backend server
- PostgreSQL database for persistent storage
- React Context API for state management
- Real-time database updates (no localStorage caching)
