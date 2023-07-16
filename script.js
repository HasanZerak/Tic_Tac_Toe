const player = (playerName, sign) => {
  //assign signs to player
  const getPlayerName = () => playerName;
  const getPlayerSign = () => sign;

  return {getPlayerName, getPlayerSign};
};

const gameBoard = (() => {
  //module for the game board
  let board = ["X","O","X","O","X","O","X","O","X"];     //gameBoard array to store player moves.

  return { board };
})();

const displayController = (() => {
  //module for the display on screen
  //cacheDOM
  let popup = document.querySelectorAll(".popup");
  let decision_card_container = document.querySelector(
    ".decision_card_container"
  );
  let decision_card = document.querySelector(".decision_card");
  let game_board = document.querySelector(".game_board");
  let box = document.querySelectorAll(".box");

  popup.forEach((btn) => {      //popup function to take sign input from the user
    btn.addEventListener("click", function () {
      decision_card_container.removeChild(decision_card);
      game_board.classList.add("open_game_board");
      // console.log(btn.textContent);
    });
  });
  
  for(let i = 0; i<gameBoard.board.length; i++){
    box[i].textContent = gameBoard.board[i];
  }

})();

