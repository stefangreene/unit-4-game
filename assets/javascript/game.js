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
compContain.addClass('comp-box');

for (var i = 1; i < 5; i++) {
    var random = Math.floor(Math.random() * 15) + 2;
    console.log(random);
    var image="assets/images/gem" +i +".png";
    var crystal = $("<img>");
    crystal.attr({"class": 'crystal', "data-random": random, "src":image });
    $(".container-crystal").append(crystal);
}
    //$(function(){
    //var newPhoto = $(".container-crystal").find("<img>").eq(4)
   //newPhoto.attr("src", "../assets/images/gem1.png");

    //var photo = $(".container-crystal")
    //photo.append("<img>");
    //photo.attr("src", "assets/images/gem1.png");
    //$(".newPhoto").append(photo);
        //});

}

startGame();



$(".container-crystal").on("click", ".crystal" , function () {

   var num = parseInt ($(this).attr("data-random"));
    counter += num;$("#goal").html("Score: " + counter );

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