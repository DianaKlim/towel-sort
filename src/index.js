module.exports = function towelSort (matrix) {
//   function towelSort (matrix) {
    if (matrix === undefined) {
        return []
    }
        for (i = 1; i < matrix.length; i = i+2) {
            matrix[i] = matrix[i].reverse();
        }
    let array = []
    for (key in matrix) {
    array = [...array, ...matrix[key]]
    }
    return array

}

// const example = [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ],
//     [ 10, 11, 12 ],
//    ]
// const example = []

// console.log(towelSort ())
