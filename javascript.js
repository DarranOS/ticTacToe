// turn order function

// Create & return board values

const boardGen = (() => {
  const board = {
    space0: " ",
    space1: " ",
    space2: " ",
    space3: " ",
    space4: " ",
    space5: " ",
    space6: " ",
    space7: " ",
    space8: " ",
  };
  return {
    space: [
      board.space0,
      board.space1,
      board.space2,
      board.space3,
      board.space4,
      board.space5,
      board.space6,
      board.space7,
      board.space8,
    ],
  };
})();

//add listeners
/**
 * @param  {} clickEvent passed
 * Check current player?
 * Update the board array with "X" or "0".
 * Refresh display().
 * Calculate Winner().
 *
 *
 */
const playerClick = (e) => {
  // console.log("playerClick func - Current Player: " + gameFlow.currentPlayer);
  if (boardGen.space[e.target.id] === " ") {
    boardGen.space[e.target.id] = gameFlow.currentPlayer === "1" ? "X" : "O";
    reRender();
    switchPlayer.switcher();
    gameFlow.currentTurn++;
    if (gameFlow.currentTurn < 10) {
      console.log(`Current Turn: ${gameFlow.currentTurn}`);
    } else {
      console.log("Game Over");
    }
    calculator();
  }
};

const drawBoard = (() => {
  const render = (() => {
    const gameBoard = document.querySelector("#gameBoard");

    while (gameBoard.hasChildNodes())
      gameBoard.removeChild(gameBoard.childNodes[0]);
    // console.log("removing OldChild Boards");

    for (let i = 0; i < 9; i++) {
      let newSpace = document.createElement(`div${i}`);
      newSpace.setAttribute("Id", i);
      newSpace.classList.add("gameSpace");
      // console.log(boardGen.space[i]);
      newSpace.textContent = boardGen.space[i];
      gameBoard.appendChild(newSpace);
    }
  })();

  const gameSpaces = gameBoard.childNodes;
  // console.log("Listen");
  gameSpaces.forEach((gameSpace) =>
    gameSpace.addEventListener("click", playerClick)
  );

  return {
    gameSpaces: gameSpaces,
    render: render,
  };
})();

const gameFlow = (() => {
  let currentPlayer;
  let currentTurn;

  if (!currentPlayer) {
    currentPlayer = "1";
    console.log("Setting player 1");
  }

  if (!currentTurn) {
    currentTurn = 1;
    console.log("Setting turn 1");
  }

  return {
    currentTurn: currentTurn,
    currentPlayer: currentPlayer,
  };
})();

const switchPlayer = (() => {
  let switcher = () => {
    // console.log("Switching 2");
    gameFlow.currentPlayer = gameFlow.currentPlayer === "1" ? "2" : "1";
    console.log(gameFlow.currentPlayer);
    return gameFlow.currentPlayer;
  };

  return {
    switcher: switcher,
  };
})();

const reRender = () => {
  drawBoard.gameSpaces.forEach(
    (gameSpace) => (gameSpace.textContent = boardGen.space[gameSpace.id])
  );
};

// Store player choices

// Render Gameboard Function
/**
 * @param  {} (
 */

// const gameInit = () => {
//   drawBoard.render;
// };

// document.addEventListener("DOMContentLoaded", gameInit());

// const gameFlow = (() => {
//   let currentPlayer;
//   let i = 0;

//   while (i < 10) {
//     console.log(`Current Round: ${i}`);
//     i++;
//   }

//   if (!currentPlayer) {
//     currentPlayer = "1";
//     console.log("Setting player 1");
//   }

//   let switchPlayer = () => {
//     console.log("Switching 2");
//     currentPlayer = currentPlayer === "1" ? "2" : "1";
//     console.log(currentPlayer);
//     return currentPlayer;
//   };

//   return {
//     currentPlayer: currentPlayer,
//     switch: switchPlayer,
//   };
// })();

const calculator = () => {
  if (
    boardGen.space[0] !== " " &&
    boardGen.space[0] === boardGen.space[1] &&
    boardGen.space[1] === boardGen.space[2]
  ) {
    console.log("victory(1h)");
  }
  if (
    boardGen.space[3] !== " " &&
    boardGen.space[3] === boardGen.space[4] &&
    boardGen.space[4] === boardGen.space[5]
  ) {
    console.log("victory(2h)");
  }
  if (
    boardGen.space[6] !== " " &&
    boardGen.space[6] === boardGen.space[7] &&
    boardGen.space[7] === boardGen.space[8]
  ) {
    console.log("victory(3h)");
  }
  if (
    boardGen.space[0] !== " " &&
    boardGen.space[0] === boardGen.space[3] &&
    boardGen.space[3] === boardGen.space[6]
  ) {
    console.log("victory(1v)");
  }
  if (
    boardGen.space[1] !== " " &&
    boardGen.space[1] === boardGen.space[4] &&
    boardGen.space[4] === boardGen.space[7]
  ) {
    console.log("victory(2v)");
  }
  if (
    boardGen.space[2] !== " " &&
    boardGen.space[2] === boardGen.space[5] &&
    boardGen.space[5] === boardGen.space[8]
  ) {
    console.log("victory(3v)");
  }
  if (
    boardGen.space[0] !== " " &&
    boardGen.space[0] === boardGen.space[4] &&
    boardGen.space[4] === boardGen.space[8]
  ) {
    console.log("victory(1d)");
  }
  if (
    boardGen.space[2] !== " " &&
    boardGen.space[2] === boardGen.space[4] &&
    boardGen.space[4] === boardGen.space[6]
  ) {
    console.log("victory(2d)");
  }
};
