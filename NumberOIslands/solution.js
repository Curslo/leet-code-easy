function numIslands(grid) {
    let count = 0;
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === '1') {
          count++;
          dfs(grid, row, col);
        }
      }
    }
    return count;
  }
  
  function dfs(grid, row, col) {
    const nr = grid.length;
    const nc = grid[0].length;
  
    // Check for valid land cell
    if (row < 0 || row >= nr || col < 0 || col >= nc || grid[row][col] === '0') return;
  
    // Mark as visited
    grid[row][col] = '0';
  
    // Explore neighbors recursively
    dfs(grid, row + 1, col); // Down
    dfs(grid, row - 1, col); // Up
    dfs(grid, row, col + 1); // Right
    dfs(grid, row, col - 1); // Left
  }
  