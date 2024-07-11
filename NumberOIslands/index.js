/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    //Init Count
    let Count = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === '1') {
                Count++;
                dfs(grid, row, col)
            }
        }
    }
    return Count
};

function dfs(grid, row, col) {
    let nr = grid.length;
    let nc = grid[0].length;

    //Set Boundaries
    if (row < 0 || row >= nr || col < 0 || col >= nc || grid[row][col] === '0') return;

    //Set the boundaries to 0
    grid[row][col] = '0';

    //Recall the dfs function Recursively
    dfs(grid, row + 1, col)
    dfs(grid, row - 1, col)
    dfs(grid, row, col + 1)
    dfs(grid, row, col - 1)
}
