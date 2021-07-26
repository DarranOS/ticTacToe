// turn order function

// Create & return board values

const boardGen = (() => {
  const board = {
    space0: "1",
    space1: "2",
    space2: "3",
    space3: "4",
    space4: "5",
    space5: "6",
    space6: "7",
    space7: "8",
    space8: "9",
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

// const gameFlow = (() => {
//   let currentPlayer = 1;
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
//   };

//   return {
//     currentPlayer: currentPlayer,
//     switch: switchPlayer,
//   };
// })();

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
  boardGen.space[e.target.id] = "O" || "X";
  reRender();
};

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
const drawBoard = (() => {
  const render = (() => {
    const gameBoard = document.querySelector("#gameBoard");

    while (gameBoard.hasChildNodes())
      gameBoard.removeChild(gameBoard.childNodes[0]);
    console.log("Bye");

    for (let i = 0; i < 9; i++) {
      let newSpace = document.createElement(`div${i}`);
      newSpace.setAttribute("Id", i);
      newSpace.classList.add("gameSpace");
      console.log(boardGen.space[i]);
      newSpace.textContent = boardGen.space[i];
      gameBoard.appendChild(newSpace);
    }
  })();

  const gameSpaces = gameBoard.childNodes;
  console.log("Listen");
  gameSpaces.forEach((gameSpace) =>
    gameSpace.addEventListener("click", playerClick)
  );

  return {
    gameSpaces: gameSpaces,
    render: render,
  };
})();

// const gameInit = () => {
//   drawBoard.render();
// };

// document.addEventListener("DOMContentLoaded", gameInit());
