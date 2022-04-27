class FizzbuzzService {
    static applyValidationInExplorer(explorer) {
        if (explorer.score % 15 === 0) {
            explorer.trick = "FIZZBUZZ";
        } else if(explorer.score % 3 === 0) {
            explorer.trick = "FIZZ";
        } else if(explorer.score % 5 === 0) {
            explorer.trick = "BUZZ";
        } else {
            explorer.trick = 1;
        }
        return explorer;
    }
}

module.exports = FizzbuzzService;