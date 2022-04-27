class FizzbuzzService {
    static applyValidationInExplorer(explorer) {
        if (explorer.score % 15 === 0) {
            explorer.trick = "FizzBuzz";
        } else if(explorer.score % 3 === 0) {
            explorer.trick = "Fizz";
        } else if(explorer.score % 5 === 0) {
            explorer.trick = "Buzz";
        } else {
            explorer.trick = 1;
        }
        return explorer;
    }

    static applyValidationInNumber(number){
        if (number % 15 === 0) {
            return "FizzBuzz";
        } else if(number % 3 === 0) {
            return "Fizz";
        } else if(number % 5 === 0) {
            return "Buzz";
        } else {
            return 1;
        }
    }
}

module.exports = FizzbuzzService;