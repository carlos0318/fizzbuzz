const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();

app.use(express.json());
const PORT = 3000;

app.get("/", (req, res) => {
    res.json({message: "Fizzbuzz api welcom!"});
});

app.get("/v1/explorers/:mission", (req, res) => {
    const {mission} = req.params;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);

    res.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (req, res) => {
    const {mission} = req.params;
    const explorersAmountInMission = ExplorerController.getExplorersAmountByMission(mission);

    res.json({mission, quantity: explorersAmountInMission});
});

app.get("/v1/explorers/usernames/:mission", (req, res) => {
    const {mission} = req.params;
    const explorersUsernameInMission = ExplorerController.getExplorersUsernamesByMission(mission);

    res.json(explorersUsernameInMission);
});

app.get("/v1/validation/:number", (req, res) => {
    const {number} = req.params;
    const validation = ExplorerController.getValidationInNumber(number);

    res.json({score: number, trick: validation});
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

