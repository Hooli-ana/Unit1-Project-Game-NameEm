$(document).ready(function() {
    alert('Welcome to Name Em');
    console.log('test 1');

// var score =0;
// var answers =$(".answers").val();
// var answers=document.form.answers.val()
// $("form").submit(function(event) {
//     alert("thanks!");
//     event.preventDefault

    $("#form").submit(function(event) {
        console.log($(this).serializeArray());
        // var answers =($(this).serializeArray());
        event.preventDefault();
//values is new array or values=array[]

        // if (($(".answer").val()) === ( $(".answer").attr("name"))) {
        //     $(this).css('background-color', 'green')
        // } else {
        //     $(this).css('background-color', 'red')
        // }

        if ($("#tbJorge").val() === "jorge") {
            $("#tbJorge").css('background-color', 'green')
        } else if
            ($("#tbJorge").val() != "jorge") {
            $("#tbJorge").css('background-color', 'red')
            }
            if ($("#tbSalman").val() === "salman") {
                $("#tbSalman").css('background-color', 'green')
            } else if
                ($("#tbSalman").val() != "salman") {
                $("#tbSalman").css('background-color', 'red')
                }
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
    })
});

// if .answer name =.answer value then correct
//
//
// function checkAnswers() {
//   $("input[type='text']").each(function() {
//     if ($("#tbJorge").val() === 'jorge') {
//
//     function formSubmission() {
//         var x=document.getElementById('#form');
//         var text="";
//         var i;
//         for (i=0; i<x.length; i++) {
//             text+= x.elements[i].value + "<br>";
//         }
//
//         console.log('submit');
//
//         if ($("#tbJorge").val() === 'jorge') {


  //       $("#tbJorge").css('background-color', 'green');
  //       return;
  //     } else {
// }
  // $('button').click(function() {
  //   var text=$(this).text();
  //   $('input').val(text);
  // })
  // $("#submit").on('click', function() {
  //   alert('you clicked!');
    // var answer1= $("#tbJorge").val();
    //   if answer1 == 'Jorge' {
    //
  // })
    // var $answer1 = $("#tbJorge").val();
    //   if ( $answer1 === 'Jorge') {
    //     $('#tbJorge').css('background-color', 'green')
    //   } else {
    //    $('#tbJorge').css('background-color', 'red')
    //   //no points and
    //   }
    // })
    //   //first evaluate class of answers??







// var x = document.createElement("input");
// x.setAttribute("type", "text" )

//create arrays with names of ppl

//on submitevaluate how many textboxes match name of person, giev score

// $('submit').on('click', function() {
//   if
// var answers = $('.answers').val();
//
// if $('.answers #tbJorge').valueOf(
//
//   if $('#tbJorge').val() == "Jorge" {
//     add one point
//   } else if !== "jorge"
//   no point
// )

// or this['#tbJorge'].value == "jorge"
//
//   function validateAnswer ()
//     var x = document.getElementByClassName('answer'). value;
//       if
//   $(textbox[i]).user input  == names[i]
//   then then 1 point
//   if $('#tbMattT').
//
//
// does name typed in equal person name
// })
