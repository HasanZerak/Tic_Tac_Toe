const player = (playerName, sign) => {
  //assign signs and names to players
  const getPlayerName = () => playerName;
  const getPlayerSign = () => sign;

  return { getPlayerName, getPlayerSign };
};

gameBoard = (() => {
  //module for the game board
  let board = []; //gameBoard array to store player moves.
  let boardPosition = []; //stores `index + sign` to determine winning player.

  let globalFlag = 0; //variable to decide the whose turn it is.

  let player1 = player("", "X");
  let player2 = player("", "O");

  const players = (crossPlayer, zeroPlayer) => {
    //assign players.
    player1.playerName = crossPlayer;
    player2.playerName = zeroPlayer;
  };

  const switchTurn = (sign, flag, index) => {
    //function to switch turns.
    globalFlag = flag; //swaps the current player.
    board.push(sign); //push the sign to the end of array.
    displayController.displayMark(index); //display the new array, func resides in the displayController module.
    boardPosition.push(`${index}${sign}`); //push concatenated value of index + sign.
    checkWin(sign);
  };

  const makeMove = (index) => {
    //fucntion to execute switch and check turn conditions. Called in the displayController Module.
    if (globalFlag == 0) {
      switchTurn(player1.getPlayerSign(), "1", index);
    } else {
      switchTurn(player2.getPlayerSign(), "0", index);
    }
  };

  const win = [
    //array to store all win possibilities.
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const win_statement = () => {
    //executes when either player wins.
    if (globalFlag == 1) {
      displayController.score("c"); //update scorecard function.
      console.log(`${player1.playerName} wins this round!!`);
    } else {
      displayController.score("z"); //update scorecard function.
      console.log(`${player2.playerName} wins this round!!`);
    }
  };

  const checkWin = (playerSign) => {
    //function to check if a player has won.
    for (let i = 0; i < win.length; i++) {
      //each winning possibility
      const options = win[i]; //a single winning possibility

      const box0 = boardPosition.includes(options[0] + playerSign); //concatenate the index and sign.
      const box1 = boardPosition.includes(options[1] + playerSign); //each box is the element of the current winning possibilty
      const box2 = boardPosition.includes(options[2] + playerSign); //in succession.

      if (box0 && box1 && box2) {
        //check if every box evaluates to true, e.i.box has target value.
        win_statement();
      }
    }
    if (boardPosition.length > 8) {
      //if the boardPosition array reaches 8th index without any winner, the must be a tie.
      console.log("tie");
      displayController.score("d"); //update scorecard function.
    }
  };

  const nextRoundFunc = () => {
    //function to begin the next round.
    boardPosition = []; //since new positions will be assigned, array is emptied;
    globalFlag = 0; //keep track of player turn after each round.
  };

  return { board, makeMove, checkWin, players, nextRoundFunc };
})();

const displayController = (() => {
  //module to manuipulate display on screen.

  //cacheDOM
  let card_container = document.querySelector(".card_container");
  let game_board = document.querySelector(".game_board");
  let decision_card = document.querySelector(".decision_card");
  let box_button = document.querySelectorAll(".box_button");
  let popup = document.querySelector(".popup");
  let crossInput = document.querySelector("#player1");
  let zeroInput = document.querySelector("#player2");
  let resetBtn = document.querySelectorAll(".reset");
  let nextRoundBtn = document.querySelector(".nextRoundBtn");
  let crossScore = document.querySelector(".crossScore");
  let zeroScore = document.querySelector(".zeroScore");
  let drawScore = document.querySelector(".drawScore");

  const score = (sign) => {
    //score function to update score card
    if (sign == "c") {
      crossScore.textContent++; //increment score
    }
    if (sign == "z") {
      zeroScore.textContent++; //''
    }
    if (sign == "d") {
      drawScore.textContent++; //''
    }
  };

  popup.addEventListener("click", function () {
    //Event listener to remove the card and popup gameboard.
    if (crossInput.value.length > 3 && zeroInput.value.length > 3) {
      //lenght of the name
      gameBoard.players(crossInput.value, zeroInput.value); //function to pass input to the game.
      card_container.removeChild(decision_card); //remove
      game_board.style.visibility = "visible"; //popup
    }
  });

  nextRoundBtn.addEventListener("click", function () {
    //event listerner for next round btn press.
    gameBoard.nextRoundFunc(); //function calls, function resides at the end of gameBoard module.
    for (let i = 0; i < 9; i++) {
      box_button[i].textContent = ""; //removing the text content of each button by looping through them.
    }
  });

  resetBtn.forEach((btn) => {
    //event listerner for the reset and quit game button.
    btn.addEventListener("click", function () {
      reset();
    });
  });

  const reset = () => {
    location.reload(); //just read about this!!
  };

  //function to display the sign.
  const displayMark = (index) => {
    box_button[index].textContent = gameBoard.board[gameBoard.board.length - 1]; //push the last entry in the gameBoard array onto the board.
  };

  for (let i = 0; i < box_button.length; i++) {
    //loop over each button.
    box_button[i].addEventListener("click", mark); //find the target button.

    function mark() {
      //function to respond when the target button is pressed & to display the sign on the board.

      gameBoard.makeMove(i); //executes makeMove() residing in the gameBoard Module,  to decide the sign and player.
    }
  }

  return { displayMark, score };
})();
