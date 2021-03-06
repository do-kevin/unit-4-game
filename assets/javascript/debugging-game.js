$(document).ready(function () {

    // Global Variables
    //==============================================================================================================
    var currentScoreCounter = 0;
    var targetScoreCounter = targetScoreCounter(); // Establish target score the player would need to get.
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

    // To prevent from getting NaN, return functoin value to targetScoreCounter
    function targetScoreCounter(min, max) {
        min = Math.ceil(19);
        max = Math.round(120);
        return Math.round(Math.random() * (max - min) + min);
      }

    function gameStart() {
        currentScoreCounter = 0;
        targetScoreCounter = Math.round(Math.random() * 120) + 19; 
        increasingCurrentScore1 = randomCrystalNum1[Math.round(Math.random() * 12) + 1];
        increasingCurrentScore2 = randomCrystalNum2[Math.round(Math.random() * 12) + 1];
        increasingCurrentScore3 = randomCrystalNum3[Math.round(Math.random() * 12) + 1];
        increasingCurrentScore4 = randomCrystalNum4[Math.round(Math.random() * 12) + 1];
        $("#targetScoreCounter").text(targetScoreCounter);
    }
 

    // Functions
    //==============================================================================================================



    // Show target score to see if it's working
    $("#targetScoreCounter").text(targetScoreCounter);

    $("#crystalOne").on("click", function () {

        // Player's score goes up for every time the crystal's selected.
        currentScoreCounter += increasingCurrentScore1;

        // Register crystal selection & current score
        document.getElementById("currentScoreCounter").innerHTML = currentScoreCounter;
        console.log("Player picked a crystal. Current score: " + currentScoreCounter);


    });

    $("#crystalTwo").on("click", function () {

        // Player's score goes up for every time the crystal's selected.
        currentScoreCounter += increasingCurrentScore2;

        // Register crystal selection & current score
        document.getElementById("currentScoreCounter").innerHTML = currentScoreCounter;
        console.log("Player picked a crystal. Current score: " + currentScoreCounter);

    });

    $("#crystalThree").on("click", function () {

        // Player's score goes up for every time the crystal's selected.
        currentScoreCounter += increasingCurrentScore3;

        // Register crystal selection & current score
        document.getElementById("currentScoreCounter").innerHTML = currentScoreCounter;
        console.log("Player picked a crystal. Current score: " + currentScoreCounter);

    });

    $("#crystalFour").on("click", function () {

        // Player's score goes up for every time the crystal's selected.
        currentScoreCounter += increasingCurrentScore4;

        // Register crystal selection & current score
        document.getElementById("currentScoreCounter").innerHTML = currentScoreCounter;
        console.log("Player picked a crystal. Current score: " + currentScoreCounter);

    });

    $(".crystal-image").on("click", function () {
        // Win condition
        if (currentScoreCounter === targetScoreCounter) {
            winCounter++;
            document.getElementById("winCounter").innerHTML = winCounter;
            alert("You won this round.");
            console.log("You won this round.");
            gameStart();
        }

        // Lose condition
        else if (currentScoreCounter > targetScoreCounter) {
            lossCounter++;
            document.getElementById("lossCounter").innerHTML = lossCounter;
            alert("You lose this round.");
            console.log("You lose this round.");
            gameStart();
        }
    });






    // Main Process
    //==============================================================================================================

    // Initiate game


});

