const convert = require("../../lib/utils/convert");

describe("Convert", () => {
    test("arrayToString", () => {
        const explorers = [
            {
                id: 1,
                name: "Juan",
                age: 30,
                mission: "node"
            },
            {
                id: 2,
                name: "Pedro",
                age: 40,
                mission: "node"
            },
            {
                id: 3,
                name: "Luis",
                age: 50,
                mission: "java"
            }
        ];
        const res = convert.arrayToString(explorers);
        expect(res).toBe("Juan,Pedro,Luis");
    });
});