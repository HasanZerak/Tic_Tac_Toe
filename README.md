# Tic_Tac_Toe

A tic tac toe game to play with your friends or a bot.

1. I began by structuring the HTML and adding basic CSS to the DOM.
2. Added a popup function to take user data, that leads to the game board right after.
3. Created two modules, namely,
   a. gameBoard, to manage the flow of the game and the logic.
   b. display controller, to display the board and manipulate DOM elements.
4. Created a factory,
   a. player, to create two players and assign them a sign each.
5. gameboard has an array gameboard[] to store and run the game.

6. Content of the gameBoard array is printed on the webpage using a for loop in the displayController module.
7. Add two loops, to:
   a. first loop over the button nodelist and attach an event listener to each button.
   b. when the user hits a button, execute function mark().
   c. mark() loops over each box grid and finds the target div.
   d. target div's text content is replaced with the last element in the gameBoard array.

8. Make seperate functions for displaying, switching turns and checking conditions, namely:
   a. displayMark() : display the latest change in the array. //displayController Module.
   b. makeMove() : displayMark() calls this function to switch turns and check conditions. //gameBoard module.  
   c. swiitchTurn() : switch turns and push the move into gameBoard aray. //gameBoard module.
