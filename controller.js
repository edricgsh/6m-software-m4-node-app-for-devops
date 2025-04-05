
// This file contains controller functions for the application endpoints
function print(req, res){
    res.send("Hello world!");
}

// New MCP server health check endpoint
function mcpServerHealth(req, res) {
    const status = {
        service: "MCP Server",
        version: "1.0.0",
        status: "healthy",
        timestamp: new Date().toISOString()
    };
    res.json(status);
}

// New MCP server data endpoint
function mcpServerData(req, res) {
    const mockData = {
        nodes: [
            { id: 1, name: "Node-A", status: "active", connections: 12 },
            { id: 2, name: "Node-B", status: "active", connections: 8 },
            { id: 3, name: "Node-C", status: "standby", connections: 0 },
            { id: 4, name: "Node-D", status: "active", connections: 5 }
        ],
        systemLoad: 0.67,
        uptime: "3d 12h 45m",
        lastUpdate: new Date().toISOString()
    };
    res.json(mockData);
}

module.exports = {
    print,
    mcpServerHealth,
    mcpServerData
};
