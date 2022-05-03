class Convert {
    static arrayToString(explorers) {
        let str = "";
        explorers.map(explorer => {
            str += explorer.name + ",";
        });
        return str.substring(0, str.length - 1);
    }
}

module.exports = Convert;