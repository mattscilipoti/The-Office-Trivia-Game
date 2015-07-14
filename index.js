$(document).ready(function(){

var runningScore = 0;
var answer = {
  els: {
    answerCorrect1: ("That is correct! You have won 100 points."),
    answerCorrect2: ("That is correct! You have won 200 points."),
    answerCorrect3: ("That is correct! You have won 300 points."),
    answerCorrect4: ("That is correct! You have won 400 points."),
    answerCorrect5: ("That is correct! You have won 500 points."),
    answerIncorrect: ("That is incorrect. You are a loo-hahoooo-zer!")
    }
  }

//////////////////////////////////////////////////
//500 Questions
/////////////////////////////////////////////////

$("#first500").on("click", function(){
  $(this).text("What name did Michael sign on the diversity day pledge? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id","onefive")
    $(this).after(input);

  $("#onefive").keypress(function(e) {
    if (e.which == 13) {
      e.preventDefault();
    var userInput = $("#onefive").val();
    if (userInput === "daffy duck") {
      score = 500;
      runningScore = score + runningScore;
      $("#secondH3").text("Scoreboard = " + runningScore)
        alert(answer.els.answerCorrect5);
    }
    else {
      $("#secondH3").text("Scoreboard = " + runningScore)
        alert(answer.els.answerIncorrect);
    }
    }
  })
})

$("#second500").on("click", function(){
  $(this).text("Name Michael's second boss when he worked as a telemarketer? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "twofive")
    $(this).after(input);

  $("#twofive").keypress(function(e) {
    if (e.which == 13) {
      e.preventDefault();
    var userInput = $("#twofive").val();
    if (userInput === "nick figgaro") {
      score = 500;
      runningScore = score + runningScore;
      $("#secondH3").text("Scoreboard = " + runningScore)
        alert(answer.els.answerCorrect5);
    }
    else {
      $("#secondH3").text("Scoreboard = " + runningScore)
        alert(answer.els.answerIncorrect);
    }
    }
  })
})

$("#third500").on("click", function(){
  $(this).text("Who wrote something about Michael in the women's bathroom? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "threefive")
    $(this).after(input);

  $("#threefive").keypress(function(e) {
    if (e.which == 13) {
      e.preventDefault();
    var userInput = $("#threefive").val();
    if (userInput === "pam") {
      score = 500;
      runningScore = score + runningScore;
      $("#secondH3").text("Scoreboard = " + runningScore)
        alert(answer.els.answerCorrect5);
    }
    else {
      $("#secondH3").text("Scoreboard = " + runningScore)
        alert(answer.els.answerIncorrect);
    }
    }
  })
})

$("#fourth500").on("click", function(){
  $(this).text("What was the big check made out to in the Fun Run episode? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "fourfive")
    $(this).after(input);

  $("#fourfive").keypress(function(e) {
    if (e.which == 13) {
      e.preventDefault();
    var userInput = $("#fourfive").val();
    if (userInput === "science") {
      score = 500;
      runningScore = score + runningScore;
      $("#secondH3").text("Scoreboard = " + runningScore)
        alert(answer.els.answerCorrect5);
    }
    else {
      $("#secondH3").text("Scoreboard = " + runningScore)
        alert(answer.els.answerCorrect5);
    }
    }
  })
})

$("#fifth500").on("click", function(){
  $(this).text("Name all three of Shrute Farms B&B rooms? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "fivefive")
    $(this).after(input);

  $("#fivefive").keypress(function(e) {
    if (e.which == 13) {
      e.preventDefault();
    var userInput = $("#fivefive").val();
    if (userInput === "irrigation america nighttime") {
      score = 500;
      runningScore = score + runningScore;
      $("#secondH3").text("Scoreboard = " + runningScore)
        alert(answer.els.answerCorrect5);
    }
    else {
      $("#secondH3").text("Scoreboard = " + runningScore)
        alert(answer.els.answerIncorrect);
    }
    }
  })
})

//////////////////////////////////////////////////////
//400 Questions
/////////////////////////////////////////////////////

$("#first400").on("click", function(){
  $(this).text("What is Michael and Jan's safe word? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "onefour")
    $(this).after(input);

  $("#onefour").keypress(function(e) {
    if (e.which == 13) {
      e.preventDefault();
    var userInput = $("#onefour").val();
    if (userInput === "foliage") {
      score = 400;
      runningScore = score + runningScore;
      $("#secondH3").text("Scoreboard = " + runningScore)
        alert(answer.els.answerCorrect4);
    }
    else {
      $("#secondH3").text("Scoreboard = " + runningScore)
        alert(answer.els.answerIncorrect);
    }
    }
  })
})

$("#second400").on("click", function(){
  $(this).text("Name Jim and Pam's kids' names? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "twofour")
    $(this).after(input);

  $("#twofour").keypress(function(e) {
    if (e.which == 13) {
      e.preventDefault();
    var userInput = $("#twofour").val();
    if (userInput === "cecilia phillip") {
      score = 400;
      runningScore = score + runningScore;
      $("#secondH3").text("Scoreboard = " + runningScore)
        alert(answer.els.answerCorrect4);
    }
    else {
      $("#secondH3").text("Scoreboard = " + runningScore)
        alert(answer.els.answerCorrect4);
    }
    }
  })
})

$("#third400").on("click", function(){
  $(this).text("What does Jim use to increase the weight of Dwight's phone then apruptly decreases the weight causing Dwight to smack himself in the face? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "threefour")
    $(this).after(input);

  $("#threefour").keypress(function(e) {
    if (e.which == 13) {
      e.preventDefault();
    var userInput = $("#threefour").val();
    if (userInput === "nickles") {
      score = 400;
      runningScore = score + runningScore;
      $("#secondH3").text("Scoreboard = " + runningScore)
        alert(answer.els.answerCorrect4);
    }
    else {
      $("#secondH3").text("Scoreboard = " + runningScore)
        alert(answer.els.answerIncorrect);
    }
    }
  })
})

$("#fourth400").on("click", function(){
  $(this).text("What is the name of the exclusive club, Pam, Oscar and Toby establish in the break room? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "fourfour")
    $(this).after(input);

  $("#fourfour").keypress(function(e) {
    if (e.which == 13) {
      e.preventDefault();
    var userInput = $("#fourfour").val();
    if (userInput === "finer things club") {
      score = 400;
      runningScore = score + runningScore;
      $("#secondH3").text("Scoreboard = " + runningScore)
        alert(answer.els.answerCorrect4);
    }
    else {
      $("#secondH3").text("Scoreboard = " + runningScore)
        alert(answer.els.answerIncorrect);
    }
    }
  })
})

$("#fifth400").on("click", function(){
  $(this).text("What radio station bumber sticker does Dwight have on his filing cabinet? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "fivefour")
    $(this).after(input);

  $("#fivefour").keypress(function(e) {
    if (e.which == 13) {
      e.preventDefault();
    var userInput = $("#fivefour").val();
    if (userInput === "froggy 101") {
      score = 400;
      runningScore = score + runningScore;
      $("#secondH3").text("Scoreboard = " + runningScore)
        alert(answer.els.answerCorrect4);
    }
    else {
      $("#secondH3").text("Scoreboard = " + runningScore)
        alert(answer.els.answerIncorrect);
    }
    }
  })
})

///////////////////////////////////////////////////////
//300 Questions
//////////////////////////////////////////////////////

$("#first300").on("click", function(){
  $(this).text("Who is Michael's favorite actress? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "onethree")
    $(this).after(input);

$("#onethree").keypress(function(e) {
  if (e.which == 13) {
    e.preventDefault();
  var userInput = $("#onethree").val();
  if (userInput === "meryl streep") {
    var score = 300;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerCorrect3);
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerIncorrect);
  }
  }
})
})

$("#second300").on("click", function(){
  $(this).text("What is Oscar's boyfriend's name? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "twothree")
    $(this).after(input);

$("#twothree").keypress(function(e) {
  if (e.which == 13) {
    e.preventDefault();
  var userInput = $("#twothree").val();
  if (userInput === "gil") {
    score = 300;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerCorrect3);
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answerIncorrect);
  }
  }
})
})

$("#third300").on("click", function(){
  $(this).text("What is the name of the game where people walk with paper boxes on their feet during Office Olympics? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "threethree")
    $(this).after(input);

$("#threethree").keypress(function(e) {
  if (e.which == 13) {
    e.preventDefault();
  var userInput = $("#threethree").val();
  if (userInput === "flonkerton") {
    score = 300;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerCorrect3);
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerIncorrect);
  }
  }
})
})

$("#fourth300").on("click", function(){
  $(this).text("Where does Jim transfer after telling Pam how he feels about her? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "fourthree")
    $(this).after(input);

$("#fourthree").keypress(function(e) {
  if (e.which == 13) {
    e.preventDefault();
  var userInput = $("#fourthree").val();
  if (userInput === "stanford connecticut") {
    score = 300;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerCorrect3);
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerIncorrect);
  }
  }
})
})

$("#fifth300").on("click", function(){
  $(this).text("What online game, do the employees play at the Stanford branch? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "fivethree")
    $(this).after(input);

$("#fivethree").keypress(function(e) {
  if (e.which == 13) {
    e.preventDefault();
  var userInput = $("#fivethree").val();
  if (userInput === "call of duty") {
    score = 300;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerCorrect3);
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerIncorrect);
  }
  }
})
})

//////////////////////////////////////////////////////
//200 Questions
//////////////////////////////////////////////////////

$("#first200").on("click", function(){
  $(this).text("Who gave Michael the World's Best Boss mug? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "onetwo")
    $(this).after(input);

$("#onetwo").keypress(function(e) {
  if (e.which == 13) {
    e.preventDefault();
  var userInput = $("#onetwo").val();
  if (userInput === "michael") {
    score = 200;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerCorrect2);
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerCorrect2);
  }
  }
})
})

$("#second200").on("click", function(){
  $(this).text("Name Angela's sick cat that Dwight later killed? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "twotwo")
    $(this).after(input);

$("#twotwo").keypress(function(e) {
  if (e.which == 13) {
    e.preventDefault();
  var userInput = $("#twotwo").val();
  if (userInput === "sprinkles") {
    var score = 200;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerCorrect2);
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerIncorrect);
  }
  }
})
})

$("#third200").on("click", function(){
  $(this).text("When Jim is impersonating Dwight, what 3 B's does he say? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "threetwo")
    $(this).after(input);

$("#threetwo").keypress(function(e) {
  if (e.which == 13) {
    e.preventDefault();
  var userInput = $("#threetwo").val();
  if (userInput === "bears beets battlestar gallatica") {
    score = 200;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerCorrect2);
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerCorrect2);
  }
  }
})
})

$("#fourth200").on("click", function(){
  $(this).text("What is Michaels movie called that the whole office participated in? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "fourtwo")
    $(this).after(input);

$("#fourtwo").keypress(function(e) {
  if (e.which == 13) {
    e.preventDefault();
  var userInput = $("#fourtwo").val();
  if (userInput === "threat level midnight") {
    score = 200;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerCorrect2);
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerIncorrect);
  }
  }
})
})

$("#fifth200").on("click", function(){
  $(this).text("What was the award that Kelly recieved in the Dundies episode? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "fivetwo")
    $(this).after(input);

$("#fivetwo").keypress(function(e) {
  if (e.which == 13) {
    e.preventDefault();
  var userInput = $("#fivetwo").val();
  if (userInput === "spicy curry award") {
    var score = 200;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerCorrect2);
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerIncorrect);
  }
  }
})
})

///////////////////////////////////////////////////////
//100 Questions
///////////////////////////////////////////////////////

$("#first100").on("click", function(){
  $(this).text("What is Michael Scott's catchphrase? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "oneone")
    $(this).after(input);

$("#oneone").keypress(function(e) {
  if (e.which == 13) {
    e.preventDefault();
  var userInput = $("#oneone").val();
  if (userInput === "thats what she said") {
    score = 100;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerCorrect1);
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerIncorrect);
  }
  }
})
})

$("#second100").on("click", function(){
  $(this).text("Name Andy's acapella group? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "twoone")
    $(this).after(input);

$("#twoone").keypress(function(e) {
  if (e.which == 13) {
    e.preventDefault();
  var userInput = $("#twoone").val();
  if (userInput === "here comes treble") {
    score = 100;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerCorrect1);
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerIncorrect);
  }
  }
})
})

$("#third100").on("click", function(){
  $(this).text("What restaurant does Pam get banned from in the Dundies episode? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "threeone")
    $(this).after(input);

$("#threeone").keypress(function(e) {
  if (e.which == 13) {
    e.preventDefault();
  var userInput = $("#threeone").val();
  if (userInput === "chilies") {
    var score = 100;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerCorrect1);
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerIncorrect);
  }
  }
})
})

$("#fourth100").on("click", function(){
  $(this).text("Who started their first day at Dunder Mifflin in the first episode? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "fourone")
    $(this).after(input);

$("#fourone").keypress(function(e) {
  if (e.which == 13) {
    e.preventDefault();
  var userInput = $("#fourone").val();
  if (userInput === "ryan howard") {
    score = 100;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerCorrect1);
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerIncorrect);
  }
  }
})
})

$("#fifth100").on("click", function(){
  $(this).text("What is Creed's job? ").fadeIn(2000);
    var input = $("<input>");
    input.attr("id", "fiveone")
    $(this).after(input);

$("#fiveone").keypress(function(e) {
  if (e.which == 13) {
    e.preventDefault();
  var userInput = $("#fiveone").val();
  if (userInput === "quality assurance") {
    score = 100;
    runningScore = score + runningScore;
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerCorrect1);
  }
  else {
    $("#secondH3").text("Scoreboard = " + runningScore)
      alert(answer.els.answerIncorrect);
  }
  }
})
})

});
