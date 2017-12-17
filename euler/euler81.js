function solution1(M) {
    var n = M.length - 1;

    for (var i = n; i >= 0; i--) {
        for (var j = n; j >= 0; j--) {

            if(i < n && j < n) {
                M[i][j] += Math.min(M[i + 1][j], M[i][j + 1]);
            }
            else if(i < n) {
                M[i][j] += M[i + 1][j];
            }
            else if(j < n) {
                M[i][j] += M[i][j + 1];
            }
        }
    }
    return M[0][0];
}

var m = [
    [131, 673, 234, 103, 18],
    [201, 96, 342, 965, 150],
    [630, 803, 746, 422, 111],
    [537, 699, 497, 121, 956],
    [805, 732, 524, 37, 331]
];

var mt = solution1(m);
console.log(mt);

