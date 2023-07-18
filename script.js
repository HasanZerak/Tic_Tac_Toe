const player = (playerName, sign) => {
  //assign signs to player
  const getPlayerName = () => playerName;
  const getPlayerSign = () => sign;

  return { getPlayerName, getPlayerSign };
};

const gameBoard = (() => {
  //module for the game board
  let board = []; //gameBoard array to store player moves.

  let globalFlag = 0; //variable to decide the whose turn it is.
  let player1 = player("player1", "X");
  let player2 = player("player2", "O");

  const switchTurn = (sign, flag, index) => {
    //function to switch turns.
    globalFlag = flag; //swaps the current player.
    board.push(sign); //push the sign to the end of array
    displayController.displayMark(index); //display the new array, func resides in the displayController module.
  };

  const makeMove = (index) => {
    //fucntion to execute switch and check turn conditions. Called in the displayController Module.
    if (globalFlag == 0) {
      switchTurn("X", "1", index);
      // console.log("does this even work??");
    } else {
      switchTurn("O", "0", index);
      // console.log("what about this");
    }
  };

  return { board, makeMove };
})();

const displayController = (() => {
  //module for the display on screen
  //cacheDOM
  // let popup = document.querySelectorAll(".popup");
  // let decision_card_container = document.querySelector(
  //   ".decision_card_container"
  // );
  // let decision_card = document.querySelector(".decision_card");
  // let game_board = document.querySelector(".game_board");
  let box = document.querySelectorAll(".box");
  let box_button = document.querySelectorAll(".box_button");

  // popup.forEach((btn) => {
  //   //popup function to take sign input from the user
  //   btn.addEventListener("click", function () {
  //     decision_card_container.removeChild(decision_card);
  //     game_board.classList.add("open_game_board");
  //     // console.log(btn.textContent);
  //   });
  // });

  //function to display the sign.
  const displayMark = (index) => {
    box[index].textContent = gameBoard.board[gameBoard.board.length - 1]; //push the last entry in the gameBoard array onto the board.
  };

  for (let i = 0; i < box_button.length; i++) {
    //loop over each button.
    box_button[i].addEventListener("click", mark); //find the target button.

    function mark() {
      //function to respond when the target button is pressed & to display the sign on the board.

      for (let j = 0; j < box.length; j++) {
        //loop over each button, cross matching the target button and board.
        if (i == j) {
          gameBoard.makeMove(j); //exedutes makeMove() residing in the gameBoard Module, to decide the sign and player.
        }
      }
    }
  }

  return { displayMark };
})();
