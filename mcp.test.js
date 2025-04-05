const controller = require("./controller");

describe("MCP Server Functions", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should return health status", () => {
        const mockReq = {};
        const mockRes = {
            json: jest.fn()
        };
        
        // Mock Date to ensure consistent test results
        const realDate = global.Date;
        const mockDate = new Date('2025-04-01T12:00:00Z');
        global.Date = jest.fn(() => mockDate);
        global.Date.toISOString = realDate.toISOString;
        
        controller.mcpServerHealth(mockReq, mockRes);
        
        expect(mockRes.json).toHaveBeenCalledWith({
            service: "MCP Server",
            version: "1.0.0",
            status: "healthy",
            timestamp: mockDate.toISOString()
        });
        
        // Restore the original Date
        global.Date = realDate;
    });

    it("should return server data", () => {
        const mockReq = {};
        const mockRes = {
            json: jest.fn()
        };
        
        // Mock Date to ensure consistent test results
        const realDate = global.Date;
        const mockDate = new Date('2025-04-01T12:00:00Z');
        global.Date = jest.fn(() => mockDate);
        global.Date.toISOString = realDate.toISOString;
        
        controller.mcpServerData(mockReq, mockRes);
        
        expect(mockRes.json).toHaveBeenCalledWith({
            nodes: [
                { id: 1, name: "Node-A", status: "active", connections: 12 },
                { id: 2, name: "Node-B", status: "active", connections: 8 },
                { id: 3, name: "Node-C", status: "standby", connections: 0 },
                { id: 4, name: "Node-D", status: "active", connections: 5 }
            ],
            systemLoad: 0.67,
            uptime: "3d 12h 45m",
            lastUpdate: mockDate.toISOString()
        });
        
        // Restore the original Date
        global.Date = realDate;
    });
});
