$(document).ready(function() {

// variables that comprise a person object :
//names of everyone, photos, text box,nameList
var names = ['MattT', 'Sam','Rob', 'Barbara', 'Peter', 'Sarah', 'Salman', 'Jorge','Tanya', 'Ronak', 'Dan', 'Chris', 'Jacob','Juli','Remington','Jon', 'Andrew', 'Melissa', 'MattH','Charlie','Rene', 'Komal', 'Erik'];

var pic = ['images/mattT.jpg','images/sam.jpg', 'images/rob.jpg','images/barbara.jpg', 'images/peter.jpg','images/sarah.jpg', 'images/salman.jpg','images/jorge.jpg', 'images/tanya.jpg', 'images/ronak.jpg','images/dan.jpg', 'images/chris.jpg', 'images/jacob.jpg','images/juli.jpg', 'images/remington.jpg','images/jon.jpg', 'images/andrew.jpg','images/melissa.jpg', 'images/mattH.jpg','images/charlie.jpg', 'images/rene.jpg', 'images/komal.jpg','images/erik.jpg'];

var textbox=['#tbMattT', '#tbSam','#tbRob', '#tbBarbara', '#tbPeter', '#tbSarah', '#tbSalman', '#tbJorge','#tbTanya', '#tbRonak', '#tbDan', '#tbChris', '#tbJacob','#tbJuli','#tbRemington','#tbJon', '#tbAndrew', '#tbMelissa', '#tbMattH','#tbCharlie','#tbRene', '#tbKomal', '#tbErik'];


var userAnswers= [];
var answersPlayer1=[];

//have to create player 1 and player 2
var cohort=[];

  for (i=0; i <names.length; i++) {
    var person = {
      name: names[i],
      photo: pic[i],
      textbox: textbox[i]
    }
    cohort.push(person);
  }

console.log(cohort);
      //make person card



  $("#form").submit(function(event) {
      console.log($(this).serializeArray());
      answersPlayer1=$(this).serializeArray();
      // var answers =($(this).serializeArray());
      event.preventDefault();

      $(this).find('input.answer').each(function(index, element){
        console.log('element: ',element);
        console.log('index: ', index);
        console.log('attribute: ', $(element).attr('name'));

        if($(element).val() === $(element).attr('name')){
          $(element).css('background-color', 'green')
          } else {
          $(element).css('background-color', 'red')
          }

      })


  })


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
          // prog1?? of progn to execute 2 blocks code for 1 if statement
          //     jorge

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
});
