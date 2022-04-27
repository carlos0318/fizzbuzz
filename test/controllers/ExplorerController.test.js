const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Test para ExplorerController", () => {
    test("1) Calcular todos los explorers en una misión", () => {
        let explorers = ExplorerController.getExplorersByMission("node");
        expect(explorers.length).toBe(10);
    });

    test("2) Calcular cuantos explorers por misión", () => {
        let lengthExplorers = ExplorerController.getExplorersAmonutByMission("java");
        expect(lengthExplorers).toBe(5);
    });

    test("3) Obtener el username de los explores por misión", () => {
        let usernamesExplorers = ExplorerController.getExplorersUsernamesByMission("node");
        expect(usernamesExplorers[0]).toBe("ajolonauta1");
        expect(usernamesExplorers[2]).toBe("ajolonauta3");
        expect(usernamesExplorers[1]).toBe("ajolonauta2");
    });
});