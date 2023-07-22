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
   a. displayMark() : display the latest change in the array. **//displayController Module**.
   b. makeMove() : displayMark() calls this function to switch turns and check conditions. **//gameBoard module**.  
   c. swiitchTurn() : switch turns and push the move into gameBoard aray. **//gameBoard module**.

9. Creating the logic behind the game:
   a. We define an array win[], and have it store all of the winning possibilities.
   b. create a function checkWin() to run the logic.
   c. loop over the win entire win[]'s length.
   d. at each iteration,
      i. create const box0, box1 and box2.
      ii. Each of these const stores the value of target index concatenated with the target sign. (eg. "3X", "5O").
      iii. Each box ultimately stores either true or false based on the result of 'includes()' method.
      iv. includes() method tells wether the target exist in the board array or not.
   e. an if statement in the loop checks if all three box const evaluate to true, and if they do, executes the win statement.
   f. checkWin() is called in the displayController module everytime a new button is clicked.
   g. A tie can be determined if the boardPosition array reaches the length of 8, since no one has won yet, it must be a tie.
   **p.s. the logic at this point exists only for 'cross'**.

10. Added players funtion so that the names and sign would only have to be assigned once. 
11. I scratched the previously implemented decisiomn box in favour of a form. Now the user can also enter their name. 
12. Added functionality to the reset button to reload the screen on every press. 
