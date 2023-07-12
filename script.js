let popup = document.querySelectorAll(".popup");
let decision_card_container = document.querySelector(
  ".decision_card_container"
);
let decision_card = document.querySelector(".decision_card");
let game_board = document.querySelector(".game_board");

popup.forEach((btn) => {
  btn.addEventListener("click", function () {
    decision_card_container.removeChild(decision_card);
    game_board.classList.add("open_game_board");
    console.log(btn.textContent);
  });
});

// function openPopup(){
//     popup.classList.add("open-decision-card");
// }
