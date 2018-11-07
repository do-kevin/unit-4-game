$(document).ready(function() {
  // Global Variables
  //==============================================================================================================
  var currentScoreCounter = 0;
  var targetScoreCounter = targetScoreCounterFunction(); // Establish target score the player would need to get. 102 = 121 - 19
  var winCounter = 0;
  var lossCounter = 0;

  // Setting up random generator to trigger lose condition or win condition
  var randomCrystalNum1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  var increasingCurrentScore1 =
    randomCrystalNum1[Math.round(Math.random() * 12) + 1];

  var randomCrystalNum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  var increasingCurrentScore2 =
    randomCrystalNum2[Math.round(Math.random() * 12) + 1];

  var randomCrystalNum3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  var increasingCurrentScore3 =
    randomCrystalNum3[Math.round(Math.random() * 12) + 1];

  var randomCrystalNum4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  var increasingCurrentScore4 =
    randomCrystalNum4[Math.round(Math.random() * 12) + 1];

  var crystalOneImage = $("#crystalOne");
  var crystalTwoImage = $("#crystalTwo");
  var crystalThreeImage = $("#crystalThree");
  var crystalFourImage = $("#crystalFour");

  // Functions
  //==============================================================================================================

  // To prevent from getting NaN, return functoin value to targetScoreCounter
  // This function could be used to do the same for the increasingCurrentScore variables
  //   to make code more reusable.
  function targetScoreCounterFunction(min, max) {
    min = Math.ceil(19);
    max = Math.round(120);
    return Math.round(Math.random() * (max - min) + min);
  }

  // Only reset the necessary vars
  function gameReset() {
    currentScoreCounter = 0;
    targetScoreCounter = targetScoreCounterFunction();

    $("#currentScoreCounter").html(0);

    increasingCurrentScore1 =
      randomCrystalNum1[Math.round(Math.random() * 12) + 1];
    increasingCurrentScore2 =
      randomCrystalNum2[Math.round(Math.random() * 12) + 1];
    increasingCurrentScore3 =
      randomCrystalNum3[Math.round(Math.random() * 12) + 1];
    increasingCurrentScore4 =
      randomCrystalNum4[Math.round(Math.random() * 12) + 1];

    $("#targetScoreCounter").text(targetScoreCounter);
  }

  // Show target score to see if it's working
  $("#targetScoreCounter").text(targetScoreCounter);

  $("#crystalOne").on("click", function() {
    if (isNaN(currentScoreCounter)) {
      currentScoreCounter = 0;
      gameReset();
    } else {
      // Player's score goes up for every time the crystal's selected.
      currentScoreCounter += increasingCurrentScore1;
    }

    // Register crystal selection & current score
    $("#currentScoreCounter").html(currentScoreCounter);
    console.log(
      "Player picked a crystal. Current score: " + currentScoreCounter
    );
  });

  $("#crystalTwo").on("click", function() {
    if (isNaN(currentScoreCounter)) {
      currentScoreCounter = 0;
      gameReset();
    } else {
      // Player's score goes up for every time the crystal's selected.
      currentScoreCounter += increasingCurrentScore2;
    }
    // Register crystal selection & current score
    $("#currentScoreCounter").html(currentScoreCounter);
    console.log(
      "Player picked a crystal. Current score: " + currentScoreCounter
    );
  });

  $("#crystalThree").on("click", function() {
    if (isNaN(currentScoreCounter)) {
      currentScoreCounter = 0;
      gameReset();
    } else {
      // Player's score goes up for every time the crystal's selected.
      currentScoreCounter += increasingCurrentScore3;
    }
    // Register crystal selection & current score
    $("#currentScoreCounter").html(currentScoreCounter);
    console.log(
      "Player picked a crystal. Current score: " + currentScoreCounter
    );
  });

  $("#crystalFour").on("click", function() {
    if (isNaN(currentScoreCounter)) {
      currentScoreCounter = 0;
      gameReset();
    } else {
      // Player's score goes up for every time the crystal's selected.
      currentScoreCounter += increasingCurrentScore4;
    }
    // Register crystal selection & current score
    $("#currentScoreCounter").html(currentScoreCounter);
    console.log(
      "Player picked a crystal. Current score: " + currentScoreCounter
    );
  });

  $(".crystal-image").on("click", function() {
    // Win condition
    if (currentScoreCounter === targetScoreCounter) {
      winCounter++;
      $("#winCounter").html(winCounter);
      alert("You won this round.");
      console.log("You won this round.");
      gameReset();
    }

    // Lose condition
    else if (currentScoreCounter > targetScoreCounter) {
      lossCounter++;
      $("#lossCounter").html(lossCounter);
      alert("You lose this round.");
      console.log("You lose this round.");
      gameReset();
    }

    // Sometimes, currentScoreCounter would produce NaN.
    // Possible solution?
    else if (targetScoreCounter === NaN) {
      gameReset();
    }
  });

  // jQuery animations
  $("#crystalOne").on({
    mouseenter: function() {
      crystalOneImage.animate({ height: "300px", width: "300px" });
    },
    mouseleave: function() {
      crystalOneImage.animate({ height: "200px", width: "200px" });
    }
  });

  $("#crystalTwo").on({
    mouseenter: function() {
      crystalTwoImage.animate({ height: "300px", width: "300px" });
    },
    mouseleave: function() {
      crystalTwoImage.animate({ height: "200px", width: "200px" });
    }
  });

  $("#crystalThree").on({
    mouseenter: function() {
      crystalThreeImage.animate({ height: "300px", width: "300px" });
    },
    mouseleave: function() {
      crystalThreeImage.animate({ height: "200px", width: "200px" });
    }
  });

  $("#crystalFour").on({
    mouseenter: function() {
      crystalFourImage.animate({ height: "300px", width: "300px" });
    },
    mouseleave: function() {
      crystalFourImage.animate({ height: "200px", width: "200px" });
    }
  });
});
