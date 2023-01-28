const utils = {
    generateContainerID: function* generateContainerID() {
        let i = 0;
        while (true) {
            yield i;
            i++;
        }
    },
    randomCompareFunction: function randomCompareFunction() { 
        return Math.random() - 0.5; 
    },
    generateRandomArray: function generateRandomArray(arr){
        return [...arr].sort(randomCompareFunction)
    },
    compareID: function compareID(id1, id2) {
        return id1 === id2
    },
    generatePercentageScore(trueMatches, total){
        return (100*(Number(trueMatches)/Number(total))).toFixed(2)
    }
}
export const {generateContainerID, generateRandomArray, randomCompareFunction, compareID, generatePercentageScore} = utils;