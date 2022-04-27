const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Test para ExplorerServices", () => {
    test("1) Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("2) Calcular cuantos explorers por misión", () => {
        const explorers = [{mission: "node"}, {mission: "node"}, {mission: "java"}];
        const explorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersInNode).toBe(2);
    });

    test("3) Obtener el username de los explores por misión", () => {
        const explorers = [{username: "explorer1" ,mission: "java"}];
        const explorersInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(explorersInNode.username).toBe(explorers.username);
    });
});
