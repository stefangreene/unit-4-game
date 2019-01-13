var compNumber;
var loses = 0;
var win = 0;
var counter = 0;


 startGame = function(){
$(".container-crystal").empty();

compNumber = Math.floor(Math.random() * 20) + 60;
console.log("Random number is " + compNumber);
compContain = $("#comp-number");
compContain.html("Goal: " + compNumber);
compContain.addClass("comp-box");

for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 15) + 2;
    console.log(random);
    var crystal = $("<img>");
    crystal.attr({"class": 'crystal', "data-random": random});
    $(".container-crystal").append(crystal);
    
}
    $(function(){
    //var newPhoto = $("newPhoto").find("<img>").eq(1)
    //newPhoto.attr("src", "../images2/gem1.png");

    var photo = $("<img>")
    photo.attr("src", "../images/gem1.png");
    $(".newPhoto").append(photo);
        });

}

startGame();



$(".container-crystal").on("click", ".crystal" , function () {

   var num = parseInt ($(this).attr("data-random"));
    counter += num;$("#previous").html("Score: " + counter );

    console.log("this is the count " + counter);
    if (counter > compNumber) {
        loses++
        $("#loses").html("Loses: " + loses)
        alert("You Lost!")
        counter = 0;
        startGame()
    }
    else if (counter === compNumber) {
        win++
        $("#win").html("Wins: " + win)
        alert("You Won!")
        counter = 0;
        startGame()
    } 
});