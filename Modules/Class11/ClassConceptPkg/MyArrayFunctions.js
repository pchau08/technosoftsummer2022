class MyArrayFunctions {

    findMaxInArray(inputArray) {
        let max = inputArray[0];
        for (let index=1 ; index <= inputArray.length-1 ; index++) {
            if (inputArray[index] > max) {
                max = inputArray[index];
            }
        }
        return max;
    }

    findMaxInArray1(inputArray) {
        let max = inputArray[0];
        for (const num of inputArray) {
            if (num > max) {
                max = num;
            }
        }
        return max;
    }

    findMaxInArray2(inputArray) {
        let max = inputArray[0];
        inputArray.forEach(function (num) {
            if (num > max) {
                max = num;
            }
        })
        return max;
    }
}
module.exports = MyArrayFunctions;