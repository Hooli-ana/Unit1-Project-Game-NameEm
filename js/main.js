var currentPlayer=1;
var correct=0;
var totalNames=23;
var scorePlayer1= 0;
var scorePlayer2= 0;


$(document).ready(function() {
    alert("Welcome to Name \'\ Em! See if you can name everyone in your cohort. Type each person's name under his/her photo. Click on submit and see if you can beat your partner's score.");
    console.log('test 1');

    function updateScore(){
        correct +=1;
        if(currentPlayer === 1){
            scorePlayer1 += 1;
        } else if(currentPlayer === 2){
            scorePlayer2 += 1;
        }
    };


    $("#form").submit(function(event) {
        console.log($(this).serializeArray());
        // var answers =($(this).serializeArray());
        event.preventDefault();


        //logic of textbox answers
            if ($("#tbJorge").val() === "jorge") {
                $("#tbJorge").css('background-color', 'green');
                updateScore();
            } else {
                  $("#tbJorge").css('background-color', 'red');
            }
            //salman
            if ($("#tbSalman").val() === "salman") {
                $("#tbSalman").css('background-color', 'green');
                updateScore();
            } else {
                  $("#tbSalman").css('background-color', 'red')
            }
            //Tanya
            if ($("#tbTanya").val() === "tanya") {
                $("#tbTanya").css('background-color', 'green');
                updateScore();
            } else {
                  $("#tbTanya").css('background-color', 'red')
            }
            //Rene
            if ($("#tbRene").val() === "rene") {
                $("#tbRene").css('background-color', 'green');
                updateScore();
            } else {
                  $("#tbRene").css('background-color', 'red')
            }
            //Remington
            if ($("#tbRemington").val() === "remington") {
                $("#tbRemington").css('background-color', 'green');
                updateScore();
            } else {
                  $("#tbRemington").css('background-color', 'red')
            }
            //Dan
            if ($("#tbDan").val() === "dan") {
                $("#tbDan").css('background-color', 'green');
                updateScore();
            } else {
                  $("#tbDan").css('background-color', 'red')
            }
            //Melissa
            if ($("#tbMelissa").val() === "melissa") {
                $("#tbMelissa").css('background-color', 'green');
                updateScore();
            } else {
                  $("#tbMelissa").css('background-color', 'red')
            }
            //Rob
            if ($("#tbRob").val() === "rob") {
                $("#tbRob").css('background-color', 'green');
                updateScore();
            } else {
                  $("#tbRob").css('background-color', 'red')
            }
            //Erik
            if ($("#tbErik").val() === "erik") {
                $("#tbErik").css('background-color', 'green');
                updateScore();
            } else {
                  $("#tbErik").css('background-color', 'red')
            }
            //Barbara
            if ($("#tbBarbara").val() === "barbara") {
                $("#tbBarbara").css('background-color', 'green');
                updateScore();
            } else {
                  $("#tbBarbara").css('background-color', 'red')
            }
            //Chris
            if ($("#tbChris").val() === "chris") {
                $("#tbChris").css('background-color', 'green');
                updateScore();
            } else {
                  $("#tbChris").css('background-color', 'red')
            }
            //Matt H
            if ($("#tbMattH").val() === "matt h") {
                $("#tbMattH").css('background-color', 'green');
                updateScore();
            } else {
                  $("#tbMattH").css('background-color', 'red')
            }
            //Sam
            if ($("#tbSam").val() === "sam") {
                $("#tbSam").css('background-color', 'green');
                updateScore();
            } else {
                  $("#tbSam").css('background-color', 'red')
            }
            //Jon
            if ($("#tbJon").val() === "jon") {
                $("#tbJon").css('background-color', 'green');
                updateScore();
            } else {
                  $("#tbJon").css('background-color', 'red')
            }
            //Ronak
            if ($("#tbRonak").val() === "ronak") {
                $("#tbRonak").css('background-color', 'green');
                updateScore();
            } else {
                  $("#tbRonak").css('background-color', 'red')
            }
            //Andrew
            if ($("#tbAndrew").val() === "andrew") {
                $("#tbAndrew").css('background-color', 'green');
                updateScore();
            } else {
                  $("#tbAndrew").css('background-color', 'red')
            }
            //Peter
            if ($("#tbPeter").val() === "peter") {
                $("#tbPeter").css('background-color', 'green');
                updateScore();
            } else {
                  $("#tbPeter").css('background-color', 'red')
            }
            //Jacob
            if ($("#tbJacob").val() === "jacob") {
                $("#tbJacob").css('background-color', 'green');
                updateScore();
            } else {
                  $("#tbJacob").css('background-color', 'red')
            }
            //Sarah
            if ($("#tbSarah").val() === "sarah") {
                $("#tbSarah").css('background-color', 'green');
                updateScore();
            } else {
                  $("#tbSarah").css('background-color', 'red')
            }
            //Juli
            if ($("#tbJuli").val() === "juli") {
                $("#tbJuli").css('background-color', 'green');
                updateScore();
            } else {
                  $("#tbJuli").css('background-color', 'red')
            }
            //Matt T
            if ($("#tbMattT").val() === "matt t") {
                $("#tbMattT").css('background-color', 'green');
                updateScore();
            } else {
                  $("#tbMattT").css('background-color', 'red')
            }
            //Komal
            if ($("#tbKomal").val() === "komal") {
                $("#tbKomal").css('background-color', 'green');
                updateScore();
            } else {
                  $("#tbKomal").css('background-color', 'red')
            }
            //Charlie
            if ($("#tbCharlie").val() === "charlie") {
                $("#tbCharlie").css('background-color', 'green');
                updateScore();
            } else {
                  $("#tbCharlie").css('background-color', 'red')
            }

        //scoring
            console.log('correct', correct);

            if (currentPlayer ==1) {
                setTimeout(score, 750);
                currentPlayer = 2;
                $("#scoreP1").append(scorePlayer1);

            } else {
                setTimeout(function(){
                    score();
                    winner();
                }, 750);
                currentPlayer = 1;
                $("#scoreP2").append(scorePlayer2);
            };

        function score(){

            if (correct === totalNames) {
                alert("Congrats! You got all the names right!");
                $("#p")
            } else {
                alert("You got" + " " + correct + " " + "out of" + " " + totalNames + "correct!")
            }
            $("input, textbox").val("");
            $(".answer").css('background-color', 'white');
        }

//can you listen for append correct?
        function winner() {
            if (scorePlayer1 > scorePlayer2) {
                alert("Congrats Player 1, you won!");
            } else if
                (scorePlayer1 < scorePlayer2) {
                alert("Congrats Player 2, you won!");
            } else if
                (scorePlayer1 === scorePlayer2) {
                alert("uh oh..looks like we have a tie! Give it one more go!")
            }
            $("#scoreP1").text("");
            $("#scoreP2").text("");
        }
        // setTimeout(score, 900);


    })
});







        // var values=[];
        //     $('.answers').each(function(){
        //     values[$(this).attr('name')] = $(this).val()
        //     })
        //     for(i=0; i<values.length; i++) {
        //         if name[i] === val[i]
        //     }
        //
        // output = "";
        // for (property in values) {
        //     output += property + ':'  + values[property]+ ' ;';
        // }
        // alert(output);
