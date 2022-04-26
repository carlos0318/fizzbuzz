const FizzbuzzService = require('../../lib/services/FizzbuzzService');

describe('FizzbuzzService', () => {
    test('Debera regresar una lista de explorers con fizzbuzz trick', () => {
        const explorer1 = {name: "Explorer1", score: 1};
        const explorer3 = {name: "Explorer3", score: 3}
        const explorer5 = {name: "Explorer5", score: 5}
        const explorer15 = {name: "Explorer15", score: 15}

        const explorers = [explorer1, explorer3, explorer5, explorer15];
        const explorersInNodeAndFizzBuzzTrick = explorers.map(explorer => FizzbuzzService.applyValidationInExplorer(explorer));
        expect(explorersInNodeAndFizzBuzzTrick[0].trick).toBe(1);
        expect(explorersInNodeAndFizzBuzzTrick[1].trick).toBe("FIZZ");
        expect(explorersInNodeAndFizzBuzzTrick[2].trick).toBe("BUZZ");
        expect(explorersInNodeAndFizzBuzzTrick[3].trick).toBe("FIZZBUZZ");
    })
})