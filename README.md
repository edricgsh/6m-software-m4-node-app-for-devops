# Application for Software Engineering DevOps (Module 4)


## Brief

Node application is lightweight and is easy to use as sample application for this DevOps module. Please read on to learn about the basic (Terminal) command to build, test and run a Node application.

## Commands

### npm install


The `npm install` is the first command you will use to install all dependencies specified in the `package.json` file [here](./package.json).

### npm run test

The `npm run test` is the command to run the test script specified in the `package.json` file. This command in turns run the `jest` command.

Sample Snippet from package.json:
```json
  "scripts": {
    "start": "node index.js",
    "test": "jest" // the test script
  }
```

### npm run start

The `npm run start` command will start the application. By default, it will use the `PORT` number specified in the `.env` file [here](./.env). Upon successful start, you will see the logging message:

```sh
Listening to port <port number>
```

## File Structure

This application follows a simple Node.js project structure:

### Core Files
- **index.js** - The main entry point of the application. It sets up the Express server, creates an in-memory SQLite database, and defines the API endpoints.
- **controller.js** - Contains controller functions for handling API requests. Currently implements a simple handler for the root endpoint.
- **.env** - Environment configuration file that defines the PORT the application runs on.

### Configuration Files
- **package.json** - Defines project dependencies, scripts, and metadata.
- **package-lock.json** - Lock file that ensures consistent dependency installations.

### Testing
- **controller.test.js** - Contains Jest tests for the controller functions.

### Workflows
- **.github/workflows/** - Contains GitHub Actions workflow definitions for CI/CD processes.

### Database
The application uses an in-memory SQLite database that is initialized with sample user data when the application starts.

### API Endpoints
- **/** - Root endpoint that returns "Hello world!"
- **/user** - Endpoint to query user data by ID
