$(document).ready(function(){

    // Global Variables
    //==============================================================================================================
    
    var currentScoreCounter = 0;
    var targetScoreCounter = 120; // Establish target score the player would need to get.
    var winCounter = 0;
    var lossCounter = 0;
    
    // Setting up random generator to trigger lose condition or win condition
    var randomCrystalNum1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var increasingCurrentScore1 = randomCrystalNum1[Math.round(Math.random() * 12) + 1];

    var randomCrystalNum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var increasingCurrentScore2 = randomCrystalNum2[Math.round(Math.random() * 12) + 1];

    var randomCrystalNum3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var increasingCurrentScore3 = randomCrystalNum3[Math.round(Math.random() * 12) + 1];

    var randomCrystalNum4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var increasingCurrentScore4 = randomCrystalNum4[Math.round(Math.random() * 12) + 1];


    // Functions
    //==============================================================================================================
    
    function gameStart() {

        // Show target score to see if it's working
        $("#targetScoreCounter").text(targetScoreCounter);

        $("#crystalOne").on("click", function() {
            
            // Player's score goes up for every time the crystal's selected.
            currentScoreCounter += increasingCurrentScore1;

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

        $("#crystalTwo").on("click", function() {
            
            // Player's score goes up for every time the crystal's selected.
            currentScoreCounter += increasingCurrentScore2;

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

        $("#crystalThree").on("click", function() {
            
            // Player's score goes up for every time the crystal's selected.
            currentScoreCounter += increasingCurrentScore3;

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

        $("#crystalFour").on("click", function() {
            
            // Player's score goes up for every time the crystal's selected.
            currentScoreCounter += increasingCurrentScore4;

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

