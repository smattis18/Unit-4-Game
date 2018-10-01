// Hidden rules card
$("#rules-hdr").on("mouseover", function() {
    $("#rules-display").addClass("card-body");
    $("#rules-display").append(
    "<br /><p>You will be given a goal number at the start of the game.</p><p>There are four crystals below.  By clicking on a crystal you will add a specific amount of points to your total score.</p><p>You win the game by matching your total score to the goal number, you lose if your total score goes above the goal number.</p><p>The value of each crystal is hidden from you until you click on it.</p><p>Each time when the game starts, the game will change the values of each crystal.</p>");
});
$("#rules-hdr").on("mouseout", function() {
    $("#rules-display").removeClass("card-body text-center");
    $("#rules-display").empty();
});

// Random number generation call for goal
var random = getRandomGoal();
$("#goal-display").text(random);

// Random numbers generation call for crystals
var arrayCrystals = [];
arrayCrystals.length = 4;
getCrystalVals();


var crystalTotal = 0;
var wins = 0;
var losses = 0;
// On click event listener for game play and results determination
$("img").on("click", function() {
    var crystalValue = ($(this).attr("data-value"));
    crystalValue = parseInt(crystalValue);

    crystalTotal += crystalValue;
    $("#score-display").text(crystalTotal);

    if (crystalTotal === random) {
        $("#result-display").text("You Win!");
        wins++;
        $("#wins-display").text(wins);
        random = getRandomGoal();
        $("#goal-display").text(random);
        getCrystalVals();
        crystalTotal = 0;
        $("#score-display").text(crystalTotal);
    } else if (crystalTotal > random) {
        $("#result-display").text("You Lose!");
        losses++;
        $("#losses-display").text(losses);
        random = getRandomGoal();
        $("#goal-display").text(random);
        getCrystalVals();
        crystalTotal = 0;
        $("#score-display").text(crystalTotal);
    }
});

// FUNCTION - Random number generation for game goal
function getRandomGoal() {
    min = Math.ceil(19);
    max = Math.floor(121);
    return Math.floor(Math.random() * (max - min)) + min;
}

// FUNCTION - Random numbers generation for crystals
function getCrystalVals() {
    for (var i = 0; i != arrayCrystals.length;) {
            var x = Math.floor(Math.random() * 12) + 1;
        if (x === arrayCrystals[0])
            { continue; }
        else if (x === arrayCrystals[1])
            { continue; }
        else if (x === arrayCrystals[2])
            { continue; }
        else if (x === arrayCrystals[3])
            { continue; }
        else {
        arrayCrystals[i] = x;
        console.log(arrayCrystals[i]);
        $("#" + i).attr("data-value", arrayCrystals[i]);
        i++;
        }
    }
}