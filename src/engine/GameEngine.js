export function generateGameBoard(x,y) {
    //We require a minimum of 2x2
    if (x <= 1 || y <= 1) {
        throw new Error('board must be a minimum of 2x2');
    }

    var board = new Array(x);

    for (var i = 0; i < board.length; i++) {
        board[i] = new Array(y);
    }

    for (i = 0; i < x; i++) {
        for (var j = 0; j < y; j++) {
            board[i][j] = 2;
        }
    }

    return board;
}

// export function HasTileAbove(tileArray, x, y) {
//     return (y !== 0);
// }

// export function TileAboveHasValue(tileArray, x, y) {
//     return (tileArray[x][y-1].tileValue > 0);
// }

// export function HasTileBelow(tileArray, x, y) {
//     return (y !== tileArray[0].length-1);
// }
