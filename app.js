// Part 1 Read json file ===========================
const Reader = require("./lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json"); 

const ExplorerService = require('./lib/services/ExplorerService');
// Aplicación del ExplorerService sobre la lista de explorers
ExplorerService.filterByMission(explorers, "node");
ExplorerService.getAmountOfExplorersByMission(explorers, "node");
ExplorerService.getExplorersUsernamesByMission(explorers, "node");
