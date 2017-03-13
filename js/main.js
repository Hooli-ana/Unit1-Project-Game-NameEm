$(document).ready(function() {

// variables that comprise a person object :
//names of everyone, photos, text box,nameList
var names = [mattT, sam, rob, barbara, peter, sarah, salman, jorge, tanya, ronak, dan, chris, jacob, juli, remington, jon, andrew, melissa, mattH, charlie, rene, komal, erik];

var pic = ['images/mattT.jpg','images/sam.jpg', 'images/rob.jpg', 'images/barbara.jpg', 'images/peter.jpg', 'images/sarah.jpg', 'images/salman.jpg', 'images/jorge.jpg', 'images/tanya.jpg', 'images/.jpg', 'images/.jpg', 'images/ronak.jpg', 'images/dan.jpg', 'images/chris.jpg', 'images/jacob.jpg', 'images/juli.jpg', 'images/remington.jpg', 'images/jon.jpg', 'images/andrew.jpg','images/melissa.jpg', 'images/mattH.jpg', 'images/charlie.jpg', 'images/rene.jpg','images/.jpg', 'images/.jpg', 'images/komal.jpg',  'images/erik.jpg'];

var textbox=
var cohort=[];

function makeCohort() {
  cohort = [];
  for (i=0; i <names.length; i++) {
    for (j=0; j <pic.length; j++) {

      //make person card
      var person = {};
        person.names = names[i];
        person.pic = pic[j];

        cohort.push(person);

    }
  }
  console.log('made cohort and each person')

}

var person =[
  names[i],
  pic[j],
  text-box
  nameonList:
];

if person.names ===


//create arrays with names of ppl

var names = [];

$('submit').on('click', function() {
  if ()
does name typed in equal person name
})
