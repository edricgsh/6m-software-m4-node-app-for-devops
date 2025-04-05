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

## API Endpoints

### Root Endpoint

- **URL**: `/`
- **Method**: GET
- **Description**: Returns "Hello world!"

### User Endpoint

- **URL**: `/user?id=<user_id>`
- **Method**: GET
- **Description**: Returns user information by ID

### MCP Server Endpoints

#### Health Check

- **URL**: `/mcp/health`
- **Method**: GET
- **Description**: Returns the health status of the MCP server
- **Response Format**:
  ```json
  {
    "service": "MCP Server",
    "version": "1.0.0",
    "status": "healthy",
    "timestamp": "2025-04-05T00:43:31Z"
  }
  ```

#### Server Data

- **URL**: `/mcp/data`
- **Method**: GET
- **Description**: Returns mock data from the MCP server nodes
- **Response Format**:
  ```json
  {
    "nodes": [
      { "id": 1, "name": "Node-A", "status": "active", "connections": 12 },
      { "id": 2, "name": "Node-B", "status": "active", "connections": 8 },
      { "id": 3, "name": "Node-C", "status": "standby", "connections": 0 },
      { "id": 4, "name": "Node-D", "status": "active", "connections": 5 }
    ],
    "systemLoad": 0.67,
    "uptime": "3d 12h 45m",
    "lastUpdate": "2025-04-05T00:43:31Z"
  }
  ```
