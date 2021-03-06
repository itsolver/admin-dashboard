# React Firebase Admin ⚛️ 🚀

![ci](https://github.com/CreateThrive/react-firebase-admin/workflows/ci/badge.svg?branch=master)
[![license: MIT](https://badgen.net/github/license/micromatch/micromatch)](https://github.com/CreateThrive/react-firebase-admin/blob/feature/badges-rename-workflows/LICENSE.md)

Boilerplate with React ⚛️ and Firebase 🔥designed to quickly spin up a fully functional admin dashboard with authentication, authorization, realtime database, built-in CI/CD, file upload and more. We're using up to date industry standards and next-gen technologies like React (with hooks), redux, bulma, sass, webpack, routing and a serverless architecture.

![Boilerplate - Users page](https://i.imgur.com/Z2TgfHp.png)

---

## Table of Contents

<!-- To update this table of contents, ensure you have run `npm install` then `npm run doctoc` -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [What is this?](#what-is-this)
- [Why should I use it?](#why-should-i-use-it)
- [Features](#features)
- [Tech Stack](#tech-stack)
  - [Core](#core)
  - [Unit Testing](#unit-testing)
  - [Linting](#linting)
  - [Cloud functions](#cloud-functions)
- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
  - [Setting up the Firebase project locally](#setting-up-the-firebase-project-locally)
  - [Setting up the React frontend](#setting-up-the-react-frontend)
- [React frontend](#react-frontend)
  - [Folder structure](#folder-structure)
  - [Installing dependencies](#installing-dependencies)
  - [Development server](#development-server)
  - [Running tests](#running-tests)
  - [How to deploy](#how-to-deploy)
- [Cloud functions](#cloud-functions-1)
  - [Folder structure](#folder-structure-1)
  - [Installing dependencies](#installing-dependencies-1)
  - [Authenticate to your Firebase account](#authenticate-to-your-firebase-account)
  - [Listing Firebase projects](#listing-firebase-projects)
  - [Listing aliases available in the project](#listing-aliases-available-in-the-project)
  - [Selecting an alias](#selecting-an-alias)
  - [Creating a new cloud function](#creating-a-new-cloud-function)
  - [Testing functions locally](#testing-functions-locally)
  - [Deployment](#deployment)
- [Continuous integration/deployment](#continuous-integrationdeployment)
  - [Workflows folder structure](#workflows-folder-structure)
  - [Active workflows in the project](#active-workflows-in-the-project)
  - [Setting up GitHub Actions in your repo](#setting-up-github-actions-in-your-repo)
  - [Writing new workflows](#writing-new-workflows)
- [Environment Variables](#environment-variables)
- [Demo](#demo)
- [Contributors](#contributors)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---

This project is using a customized version ported into React of the [Admin Dashboard Template](https://github.com/vikdiesel/admin-one-bulma-dashboard) made by [Viktor Kuzhelny](https://github.com/vikdiesel).

## What is this?

React Firebase Admin is our in-house admin dashboard boilerplate, used in many of our software projects here at [CreateThrive](https://createthrive.com/). After months of hard work, we decided to make it public and support the open source community.

## Why should I use it?

- This project was bootstrapped with CRA (Create React App), this means it comes with all the good features we all know and love such as built-in scripts, to make our app a PWA (Progressive Web App) and much more!.
- It is customizable.
- It uses Firebase.
- It has all the basic features you want in your app.
- It is easy to use.

## Features

- Bulma CSS framework (Mobile friendly 🔥)
- Redux implementation
- Firebase/Redux implementation
- Authentication & authorization
- Create/modify/delete users
- Automatic email invitation to new users
- Image uploading
- Change/Reset Password built into the dasbhoard.
- User filtering and search
- Built-in CI (Continous integration)
- Built-in CD (Continous deployment)
- PWA ready thanks to CRA and Firebase
- Multi-tenancy

## Tech Stack

### Core

- [Create React App](https://github.com/facebook/create-react-app) (★ 76.5k) this project was bootstrapped with create react app (see [user guide](https://create-react-app.dev/docs/getting-started)).
- [Bulma](https://bulma.io/) (★ 38.7k) CSS framework to reduce development time and have a nice UI.
- [Redux](https://redux.js.org/) (★ 52.4k) for in-app state management (see [docs](https://redux.js.org/introduction/getting-started)).
- [React-redux](https://react-redux.js.org/) (★ 19k) official react bindings for redux (see [docs](https://react-redux.js.org/introduction/quick-start)).
- [Redux-act](https://github.com/pauldijou/redux-act) (★ 1.4k) opinionated library to create actions and reducers.
- [Redux-thunk](https://github.com/reduxjs/redux-thunk) (★ 14.1k) redux [middleware](https://redux.js.org/advanced/middleware) for asynchronous actions.
- [Redux-persist](https://github.com/rt2zz/redux-persist) (★ 9.8k) persists store state between sessions.
- [React-redux-toastr](https://github.com/diegoddox/react-redux-toastr) (★ 703) a toastr message implemented with Redux.
- [React-router](https://github.com/ReactTraining/react-router) (★ 39.6k) declarative routing for React.
- [Axios](https://github.com/axios/axios) (★ 70.2k) promise-based HTTP client.
- [Prop-Types](https://reactjs.org/docs/typechecking-with-proptypes.html) (★ 3.4k) typechecking for react component props.
- [Classnames](https://github.com/JedWatson/classnames) (★ 11.9k) a simple javascript utility for conditionally joining classNames together.
- [React-datepicker](https://github.com/Hacker0x01/react-datepicker) (★ 4.5k) a simple and reusable datepicker component for React.
- [React-table](https://github.com/tannerlinsley/react-table) (★ 9.6k) hooks for building fast and extendable tables and datagrids for React.
- [React-spinners](https://github.com/davidhu2000/react-spinners) (★ 1.2k) a collection of loading spinner components for React.
- [Firebase](https://firebase.google.com/) for serverless architecture - CDN Hosting, Realtime Database, Authentication, Storage and Cloud Functions (see [docs](https://firebase.google.com/docs/web)).

### Unit Testing

- [Jest](https://jestjs.io/) (★ 29.9k) as testing framework (see [docs](https://jestjs.io/docs/en/getting-started)).
- [Enzyme](https://airbnb.io/enzyme/) (★ 18.5k) to test react components in Jest.
- [Redux-mock-store](https://github.com/dmitry-zaets/redux-mock-store) (★ 2.1k) to test redux actions, reducers and store state in Jest.

### Linting

- [ESLint](https://eslint.org/) (★ 15.9k) configured to follow the coding style of [Airbnb](https://github.com/airbnb/javascript).
- [Prettier](https://prettier.io/) (★ 35.5k) as code formatter.
- [Lint-staged](https://github.com/okonet/lint-staged) (★ 6.5k) run linters on git staged files.

### Cloud functions

- [Express](https://github.com/expressjs/express) (★ 47.5k) fast, unopinionated, minimalist web framework for node.
- [Cors](https://github.com/expressjs/cors) (★ 4.4k) Node.js CORS middleware.
- [Nodemailer](https://github.com/nodemailer/nodemailer) (★ 12.2k) send e-mails with Node.js.
- [Firebase-admin](https://github.com/firebase/firebase-admin-node) (★ 790) Firebase Admin Node.js SDK.
- [Firebase-functions](https://github.com/firebase/firebase-functions) (★ 658) Firebase SDK for Cloud Functions.
- [@google-cloud/storage](https://github.com/googleapis/nodejs-storage) (★ 421) Node.js client for Google Cloud Storage.
- [Firebase-function-tools](https://github.com/TarikHuber/react-most-wanted) (★ 780) a tool for naming and loading our Cloud Functions.
- [Cookie-parser](https://github.com/expressjs/cookie-parser) (★ 1.4k) parse HTTP request cookies.
- [Uuid](https://github.com/uuidjs/uuid) (★ 8.7k) generate RFC-compliant UUIDs in JavaScript.
- [Busboy](https://github.com/mscdex/busboy) (★ 1.8k) a streaming parser for HTML form data for Node.js.
- [Sharp](https://github.com/lovell/sharp) (★ 15.8k) high performance Node.js image processing.
- [Glob](https://github.com/isaacs/node-glob) (★ 6.2k) glob functionality for Node.js.
- [Fs-extra](https://github.com/jprichardson/node-fs-extra) (★ 6.6k) Node.js: extra methods for the fs object like copy(), remove(), mkdirs().

## Prerequisites

- [Firebase](https://firebase.google.com/) account in order to set up the serverless BaaS for the project.
- [Node.js](https://nodejs.org/) v12.15.0 or higher (React frontend) and v8.17.0 (Cloud Functions) (You can install them using [NVM](https://github.com/nvm-sh/nvm)).
- [VSCode](https://code.visualstudio.com/) editor (preferred) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [Babel JavaScript ](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel) plug-ins.

You also need to be familiar with [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [SASS](https://sass-lang.com/), [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) ([ES2015](http://babeljs.io/learn-es2015/)) and [React](https://reactjs.org/) with [React Hooks](https://reactjs.org/docs/hooks-intro.html).

## Getting started

- Clone the project into your computer! (more info on [cloning a repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)).
- Create a Firebase Project in the [Firebase Console](https://console.firebase.google.com/).
- In the **_Database_** section set up your database as a **_Real Time Database_** as **_locked mode_** (later on we will setup our own custom rules).
- In the **_Storage_** section set up your storage bucket with the default values provided by Firebase.
- Setup your sign-in providers in the **_Authentication_** section. On the **_Sign in method_** tab, enable **_Email/Password_** provider with the **_Email Link_** feature.
- Copy the config values you get from you Firebase dashboard's **_Web Setup_** option and enter them into a `.env` file with the same structure as the `.env.example` in the root directory of the repository.

### Setting up the Firebase project locally

First we need to install the Firebase cli tool and then initialize our new Firebase project.

Run the following commands in the root of the repository:

- `npm install -g firebase-tools`
- `firebase init`

Select the firebase project you created in the previous step, when prompted select the services you want to setup and check **_Database_**, **_Functions_** and **_Hosting_**.

**_Database_**:

- Leave the default name for our rules `.json` file.
- Select **_No_** when prompted if you want to overwrite the file containing our rules.

**_Functions_**:

- For the language to be used in our functions select **_JavaScript_**.
- If we want to use ESLint as our linting tool select **_No_**.
- If we want to overwrite the `package.json`, `.gitignore` and `index.js` select **_No_**.
- Then select **_Yes_** so that we install our dependencies with npm.

**_Hosting_**:

- Set **build** as our public directory for our hosting files.
- Select **_Yes_** when asked if we want our hosting to be configured as a single page application.

Run the following commands in the `functions/` folder (Using Node v8.17.0):

- `npm run setup-firebase`

You'll get prompted to enter the path to you service account key file. To generate it, go to your **_Firebase Dashboard_**, **_Project settings_** tab and then to **_Service accounts_** option, right there you can generate your private key (more info on this [here](https://firebase.google.com/docs/admin/setup#initialize-sdk)).

You'll need to enter the **_email_** and **_password_** for the admin account of the admin dashboard. With this in place, you've successfully created your admin account for the dashboard.

### Setting up the React frontend

Run the following commands in the root of the repository (Using Node v12.15.0 or higher ):

- `npm run setup-admin-dashboard`

If you go to your dashboard you'll see all the Firebase services are now deployed, go to the **_Functons_** section and copy the Cloud Functions URL and paste it into the `REACT_APP_CLOUD_FUNCTIONS_REST_API` environment variable in your `.env` file.

It should look like this:

`REACT_APP_CLOUD_FUNCTIONS_REST_API = '<CLOUD FUNCTION URL>/requestsApp'`

At this point we have a fully functional admin dashboard. You can start a local development server with the command `npm run start`, and for the deployed project you can go to the Firebase Dashboard within the **_Hosting_** tab find out the url of the hosted project.

## React frontend

### Folder structure

```bash
src/
├── assets/
│   └── users-default-logo.svg                # Images and other static content
├── components/                               # UI components
│   └── Component/
│       ├── __snapshots__/
│       │     └── Component.test.js.snap
│       ├── Component.test.js
│       ├── Component.module.scss
│       └── index.js
├── pages/                                   # React components that represent website pages
│   ├── Page/
│   │   ├── __snapshots__/
│   │   │     └── Page.test.js.snap
│   │   ├── Page.test.js
│   │   ├── Page.module.scss
│   │   └── index.js
│   └── Router/                             # All the routing related stuff
│       ├── __snapshots__/
│       │     └── Router.test.js.snap
│       ├── Router.test.js
│       ├── paths.js
│       └── index.js
├── state/                                  # Where we have our actions and reducers
│   ├── actions/
│   │   └── action.js
│   ├── reducers/
│   │   ├── reducer/
│   │   │   ├── index.js
│   │   │   └── reducer.test.js
│   │   └── index.js
│   └── store.js
├── utils/                                 # Helper functions
│   ├── index.js
│   ├── util_1.js
|   └── util_2.js
├── hooks/                                 # Custom hooks
│   ├── index.js
│   ├── hook_1.js
|   └── hook_2.js
├── index.js
├── index.scss
├── serviceWorker.js
└── setupTests.js
```

### Installing dependencies

```javascript
npm install
```

You can use `yarn` as well if you want.

### Development server

```javascript
npm start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You'll also see any lint errors in the console.

### Running tests

```javascript
npm test
```

Launches the test runner in the interactive watch mode.

### How to deploy

`npm run deploy`

## Cloud functions

### Folder structure

```
functions/
├── auth/
│   ├── onCreate.function.js
|   └── onDelete.function.js
├── db/
│   ├── users/
│   │   ├── onCreate.function.js
│   │   └── onModify.function.js
│   └── ... other database functions ...
├── storage/
│    ... storage functions ...
├── requests/
│   ├── middlewares/
│   │   └── auth.js
│   ├── routes/
│   │   ├── users.js
│   │   └── establishments.js
|   └── app.function.js
├── index.js
├── production-key.json
└── staging-key.json
```

### Installing dependencies

From the functions folder run:

```javascript
npm install
npm install -g firebase-tools
```

### Authenticate to your Firebase account

```javascript
firebase login
```

### Listing Firebase projects

```javascript
firebase projects:list
```

### Listing aliases available in the project

```javascript
firebase use
```

### Selecting an alias

We should use staging alias while testing new functionality.

```javascript
firebase use staging
```

### Creating a new cloud function

Functions are automatically loaded from the index.js file if you follow the naming convention and folder structure, no need to add it manually.

Naming:

<ul>
    <li>The naming of functions should indicate the trigger and not what they are doing.</li>
    <li>Name your files according to the trigger you use ( onWrite, onCreate, onUpdate , onChange and onDelete).</li>
    <li>Functions should end with .function.js to get loaded.</li>
</ul>

Folders:

<ul>
    <li>Functions should be stored inside the folder that corresponds to the service that triggers the function. For example: the function onCreate.function.js inside `auth/` gets triggered when a new user is created on the authentication service of Firebase.</li>
</ul>

### Testing functions locally

We can test functions locally but currently we cannot test other services of Firebase like Realtime Database, Firestore, etc. So be cautious, your local functions will be interacting with services deployed in staging.

Cloud functions run in a Node.js environment with version 8 and the React frontend with > 12 or the latest one. So a tool like [Node Version Manager](https://github.com/nvm-sh/nvm) comes in handy in order to seamlessly change Node versions between terminal windows.

To initialize the emulator with functions only, run:

```javascript
firebase emulators:start --only functions
```

After it initializes, you should get your endpoints to test your HTTP functions:

```javascript
✔  functions[requestsApp]: http function initialized (http://localhost:5001/...../requestsApp).
```

More information about the [Firebase Emulator](https://firebase.google.com/docs/rules/emulator-setup).

### Deployment

When a pull request gets merged into development, functions are deployed automatically to the staging project in Firebase. Likewise, when merging/pushing into master, they're deployed to production.

We can manually deploy our project with the following command.

```javascript
firebase deploy
```

This will deploy Hosting, Functions and DB rules. Be sure to build the React frontend before deploying to Firebase.

If we want to deploy only certain services, we can do it with the following command. In this example we're only deploying our functions.

```
firebase deploy --only functions
```

It's possible to deploy only a specific function.

```
firebase deploy --only functions:myFunction
```

We can deploy more than one function at a time.

```
firebase deploy --only functions:myFunction,functions:anotherfunction
```

## Continuous integration/deployment

We use [GitHub Actions](https://github.com/features/actions) for our CI/CD. It consists of workflows written in a .yml file similar to other CI/CD tools like travis, jenkins, etc.

Each workflow is triggered by events like push, commits and other [GitHub API events](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows).

### Workflows folder structure

```bash
.github/
└── workflows/
    ├── production-deployment.yml
    ├── pull-requests.yml
    └── staging-deployment.yml
```

### Active workflows in the project

<ul>
    <li>Pull requests: gets triggered on pull request of branches: master, feature/* and development. It builds and runs the tests of the React frontend.</li>
    <li>Staging deployment: gets triggered on commits in the development branch. It builds the React frontend and deploys: hosting, functions and DB rules.</li>
    <li>Production deployment: gets triggered on commits in the master branch. It builds the React frontend and deploys: hosting, functions and DB rules.</li>
</ul>

### Setting up GitHub Actions in your repo

To get the workflows we mentioned previously up and running, you'll need to have two Firebase Projects, one will be your production environment and the other one your staging environment.

You will need to set up your environment variables as [GitHub Secrets](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets), both for your staging and production projects.

Also, you'll need to set up your `FIREBASE_TOKEN` secret. You get this token by logging in using the command `firebase login:ci` in your terminal. More info on this [Firebase login CI](https://firebase.google.com/docs/cli#cli-ci-systems).

After setting up all your github secrets, they should look like this:

![Boilerplate - GitHub Secrets](https://i.imgur.com/wjNw4fC.png)


### Writing new workflows

You can refer to this on the [GitHub Actions documentations](https://help.github.com/en/actions).

## Environment Variables

Refer to the .env.example file in the root folder of the project to see what variables are currently in use.

## Demo

For requesting access to the [demo](https://react-firebase-admin-eeac2.firebaseapp.com/) site please [contact us](https://createthrive.com/contact).

## Contributors

We'd like to thank these awesome people who made this whole thing happen:

<ul>
  <li><a href="https://github.com/MateoKruk">Mateo Kruk</a></li>
    <li><a href="https://github.com/tpiaggio">Tomas Piaggio</a></li>
    <li><a href="https://github.com/jbheber">Juan Heber</a></li>
    <li><a href="https://github.com/vikdiesel">Viktor Kuzhelny</a></li>
</ul>

## License

This project is licensed under the MIT license, Copyright (c) 2020 <a href="https://createthrive.com">CreateThrive</a>. For more information see LICENSE.md.
