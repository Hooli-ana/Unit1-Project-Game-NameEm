$(document).ready(function() {
    alert('Welcome to Name Em');
    console.log('test 1');

// var score =0;
// var answers =$(".answers").val();
// var answers=document.form.answers.val()
// $("form").submit(function(event) {
//     alert("thanks!");
//     event.preventDefault
    // function score() {
    //     var totalNames=23;
    //     var correct=0;
    //     var alertScore;
    //
    // function function(event) {
    //     console.log($(this).serializeArray());
    //     // var answers =($(this).serializeArray());
    //     event.preventDefault();
    // }
    //
    // function allSubmitFnc() {
    //     score();
    //     function(event);
    // }
    //     $("#form").submit(allSubmitFnc() {


    $("#form").submit(function(event) {
        console.log($(this).serializeArray());
        // var answers =($(this).serializeArray());
        event.preventDefault();

        //score function attemps
        // function score() {
        //     var totalNames=23;
        //     var correct=0;
        //     var alertScore;

            // if ($("#tbJorge").val() === "jorge") {
            //     correct +=1;
            // } else {
            //     correct +=0;
            // }
            // return correct;
            //
            // if (correct === totalNames) {
            //     alert("Congrats! You got all the names right!")
            //     } else {
            //         alert("You got" + correct + "out of" + totalNames + "correct!")
            //     }


        // }
//values is new array or values=array[]

        // if (($(".answer").val()) === ( $(".answer").attr("name"))) {
        //     $(this).css('background-color', 'green')
        // } else {
        //     $(this).css('background-color', 'red')
        // }

        // if ((($(".answer").val()) ===  ($(".answer").attr("name"))).each(function() {
        // $(".answer").css('background-color', 'green')
        // } else {
        // $(".answer").css('background-color', 'red')
        // })

            //jorge
            if ($("#tbJorge").val() === "jorge") {
                $("#tbJorge").css('background-color', 'green')
            } else {
                  $("#tbJorge").css('background-color', 'red')
            }
            //salman
            if ($("#tbSalman").val() === "salman") {
                $("#tbSalman").css('background-color', 'green')
            } else {
                  $("#tbSalman").css('background-color', 'red')
            }
            //Tanya
            if ($("#tbTanya").val() === "tanya") {
                $("#tbTanya").css('background-color', 'green')
            } else {
                  $("#tbTanya").css('background-color', 'red')
            }
            //Rene
            if ($("#tbRene").val() === "rene") {
                $("#tbRene").css('background-color', 'green')
            } else {
                  $("#tbRene").css('background-color', 'red')
            }
            //Remington
            if ($("#tbRemington").val() === "remington") {
                $("#tbRemington").css('background-color', 'green')
            } else {
                  $("#tbRemington").css('background-color', 'red')
            }
            //Dan
            if ($("#tbDan").val() === "dan") {
                $("#tbDan").css('background-color', 'green')
            } else {
                  $("#tbDan").css('background-color', 'red')
            }
            //Melissa
            if ($("#tbMelissa").val() === "melissa") {
                $("#tbMelissa").css('background-color', 'green')
            } else {
                  $("#tbMelissa").css('background-color', 'red')
            }
            //Rob
            if ($("#tbRob").val() === "rob") {
                $("#tbRob").css('background-color', 'green')
            } else {
                  $("#tbRob").css('background-color', 'red')
            }
            //Erik
            if ($("#tbErik").val() === "erik") {
                $("#tbErik").css('background-color', 'green')
            } else {
                  $("#tbErik").css('background-color', 'red')
            }
            //Barbara
            if ($("#tbBarbara").val() === "barbara") {
                $("#tbBarbara").css('background-color', 'green')
            } else {
                  $("#tbBarbara").css('background-color', 'red')
            }
            //Chris
            if ($("#tbChris").val() === "chris") {
                $("#tbChris").css('background-color', 'green')
            } else {
                  $("#tbChris").css('background-color', 'red')
            }
            //Matt H
            if ($("#tbMattH").val() === "matt h") {
                $("#tbMattH").css('background-color', 'green')
            } else {
                  $("#tbMattH").css('background-color', 'red')
            }
            //Sam
            if ($("#tbSam").val() === "sam") {
                $("#tbSam").css('background-color', 'green')
            } else {
                  $("#tbSam").css('background-color', 'red')
            }
            //Jon
            if ($("#tbJon").val() === "jon") {
                $("#tbJon").css('background-color', 'green')
            } else {
                  $("#tbJon").css('background-color', 'red')
            }
            //Ronak
            if ($("#tb Ronak").val() === "ronak") {
                $("#tbRonak").css('background-color', 'green')
            } else {
                  $("#tbRonak").css('background-color', 'red')
            }
            //Andrew
            if ($("#tbAndrew").val() === "andrew") {
                $("#tbAndrew").css('background-color', 'green')
            } else {
                  $("#tbAndrew").css('background-color', 'red')
            }
            //Peter
            if ($("#tbPeter").val() === "peter") {
                $("#tbPeter").css('background-color', 'green')
            } else {
                  $("#tbPeter").css('background-color', 'red')
            }
            //Jacob
            if ($("#tbJacob").val() === "jacob") {
                $("#tbJacob").css('background-color', 'green')
            } else {
                  $("#tbJacob").css('background-color', 'red')
            }
            //Sarah
            if ($("#tbSarah").val() === "sarah") {
                $("#tbSarah").css('background-color', 'green')
            } else {
                  $("#tbSarah").css('background-color', 'red')
            }
            //Juli
            if ($("#tbJuli").val() === "juli") {
                $("#tbJuli").css('background-color', 'green')
            } else {
                  $("#tbJuli").css('background-color', 'red')
            }
            //Matt T
            if ($("#tbMattT").val() === "matt t") {
                $("#tbMattT").css('background-color', 'green')
            } else {
                  $("#tbMattT").css('background-color', 'red')
            }
            //Komal
            if ($("#tbKomal").val() === "komal") {
                $("#tbKomal").css('background-color', 'green')
            } else {
                  $("#tbKomal").css('background-color', 'red')
            }
            //Charlie
            if ($("#tbCharlie").val() === "charlie") {
                $("#tbCharlie").css('background-color', 'green')
            } else {
                  $("#tbCharlie").css('background-color', 'red')
            }



            //
            //if input.val === inuput name then correct
                // var inputAnswers =[];
                //     if ($('input[name = ""]') === ($('input[class=="answer"]').value))


                // if                          $(input[class:answers].val) === (input).attr('name')
            // function score() {
            //     var totalNames=23;
            //     var correct=0;
            //     var alertScore;
            //



    });
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


        // // var answer1 =$("#tbJorge").val();
        //    if (($(input:name"#tbJorge").val()) == 'JORGE') {
        //        $("#tbJorge").css('background-color', 'green');
        //    } else {
        //        $("#tbJorge").css('background-color', 'red');
        //    }
        //    if input name=== input value,
        //    var test = $("")


// if .answer name =.answer value then correct
//
