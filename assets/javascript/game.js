$(document).ready(function(){

    // Global Variables
    //==============================================================================================================
    
    var currentScoreCounter = 0;
    var targetScoreCounter = 120; // Establish target score the player would need to get.
    var winCounter = 0;
    var lossCounter = 0;
    
    // Setting up random generator to trigger lose condition or win condition
    var randomCrystalNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var increasingCurrentScore = randomCrystalNum[Math.round(Math.random() * 12) + 1];


    // Functions
    //==============================================================================================================
    
    function gameStart() {

        // Show target score to see if it's working
        $("#targetScoreCounter").text(targetScoreCounter);

        $(".crystal-image").on("click", function() {
            
            // Player's score goes up for every time the crystal's selected.
            currentScoreCounter += increasingCurrentScore;

            // Register crystal selection & current score
            document.getElementById("currentScoreCounter").innerHTML = currentScoreCounter;
            console.log("Player picked a crystal. Current score: " + currentScoreCounter);

            // Win condition
            if (currentScoreCounter === targetScoreCounter) {
                winCounter++;
                document.getElementById("winCounter").innerHTML = winCounter;
                alert("You won this round.");
                console.log("You won this round.");
            }
            
            // Lose condition
            else if (currentScoreCounter > targetScoreCounter) {
                lossCounter++;
                document.getElementById("lossCounter").innerHTML = lossCounter;
                alert("You lose this round.");
                console.log("You lose this round.");
            }

            
        
        });
    }
    
    // Main Process
    //==============================================================================================================

    // Initiate game
    gameStart();


});

