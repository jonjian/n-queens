/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


// Input: n*n board
// Output: [[1000]
        //  [0000]
       //   [0000]]
window.findNRooksSolution = function(n) {
  var board = new Board({n: n});

  var at = board.attributes;
  var solution = [];
  for (key in at) {
    solution.push(at[key]);
  }
  solution.splice(solution.length - 1, 1);
  
  var recursion = function(row) {
    //if row === n+1 end recursion
    if (row === n) { 
      return;
    }
    //iterate over every item
    for (var currColumn = 0; currColumn < n; currColumn++) {
      //toggle piece at row[i]
      board.togglePiece(row, currColumn);
      if (!board.hasAnyRooksConflicts()) {
        recursion(row + 1);
        break;
      }
      board.togglePiece(row, currColumn);
    }
      //check if board doesnt hasAnyRookConflicts
        //call recursion(row+1)
  };
  
  recursion(0);
    
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  
  var board = new Board({n: n});
  
  var recursion = function(row) {
    //if row === n+1 end recursion
    if (row === n) { 
      solutionCount++;
      return;
    }
    //iterate over every item
    for (var currColumn = 0; currColumn < n; currColumn++) {
      //toggle piece at row[i]
      board.togglePiece(row, currColumn);
      if (!board.hasAnyRooksConflicts()) {
        recursion(row + 1);
      }
      board.togglePiece(row, currColumn);
    }
  };
  
  recursion(0);
    
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  if (n === 0 ) {
    return [];
  }
  if (n === 1) {
    return [[1]];
  }
  
  var board = new Board({n: n});

  var at = board.attributes;
  var solution = [];
  for (key in at) {
    solution.push(at[key]);
  }
  solution.splice(solution.length - 1, 1);
  
  var recursion = function(row) {
    //if row === n+1 end recursion
    if (row === n) { 
      return true; 
    }
    //iterate over every item
    for (var currColumn = 0; currColumn < n; currColumn++) {
      //toggle piece at row[i]
      board.togglePiece(row, currColumn);
      if (!board.hasAnyQueensConflicts()) {
        if (recursion(row + 1)) {
          return true;
        }
      }
      board.togglePiece(row, currColumn);
    }
    return false;
  };
  
  recursion(0);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution; 
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  
  var board = new Board({n: n});
  
  var recursion = function(row) {
    //if row === n+1 end recursion
    if (row === n) { 
      solutionCount++;
      return;
    }
    //iterate over every item
    for (var currColumn = 0; currColumn < n; currColumn++) {
      //toggle piece at row[i]
      board.togglePiece(row, currColumn);
      if (!board.hasAnyQueensConflicts()) {
        recursion(row + 1);
      }
      board.togglePiece(row, currColumn);
    }
  };
  
  recursion(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
