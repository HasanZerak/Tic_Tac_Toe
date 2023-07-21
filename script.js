const player = (playerName, sign) => {
  //assign signs to player
  const getPlayerName = () => playerName;
  const getPlayerSign = () => sign;

  return { getPlayerName, getPlayerSign };
};

gameBoard = (() => {
  //module for the game board
  let board = []; //gameBoard array to store player moves.
  let boardPosition = [];

  let globalFlag = 0; //variable to decide the whose turn it is.
  let player1 = player("player1", "X");
  let player2 = player("player2", "O");

  const switchTurn = (sign, flag, index) => {
    //function to switch turns.
    globalFlag = flag; //swaps the current player.
    board.push(sign); //push the sign to the end of array.
    displayController.displayMark(index); //display the new array, func resides in the displayController module.
    boardPosition.push(`${index}${sign}`);
    checkWin(sign);
    // console.log(boardPosition);
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

  const win = [     //array to store all win possibilities. 
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWin = (playerSign) => {      //function to check if a player has won.
    for (let i = 0; i < win.length; i++) {  //each winning possibility
      const options = win[i]; //a single winning possibility

      const box0 = boardPosition.includes(options[0] + playerSign);  //concatenate the index and sign.
      const box1 = boardPosition.includes(options[1] + playerSign);  //each box is the element of the current winning possibilty 
      const box2 = boardPosition.includes(options[2] + playerSign);  //in succession.

      if (box0 && box1 && box2) {   //check if every box evaluates to true, e.i.box has target value.
        return console.log("win");
      }
    }
    if(boardPosition.length > 8){
      console.log("tie");
    }
  };

  return { board, makeMove, checkWin };
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
          // console.log(i);
          // gameBoard.checkWin(); //executes the checkWin() residing in the gameBoard module. 
        }
      }
    }
  }

  return { displayMark };
})();
