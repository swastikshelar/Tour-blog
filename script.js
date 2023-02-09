
// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }

var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 3000);

// flip cars script

const card = document.querySelector('.card-inner');
// const card = document.getElementsByClassName('card-inner');

const logCards = () => {
  console.log(document.querySelectorAll (".card-inner"))
}
  
  // card.addEventListener('click',() => {
  //     card.classList.toggle('is-flipped');
  //   });

    //how to create flipcard in javascript?
// function flipCard() {

  // "unflip" all cards other than the one clicked
//   cards.forEach((card) => {
//     if(card != this) {
//       card.classList.remove('is-flipped');
//     }
//   });
  
//   this.classList.toggle('is-flipped');
// };

// <!--DELIMITER-->Source: https://stackoverflow.com/questions/70102494

// DARK MODE

      let content = document.getElementsByTagName('body')[0];
      let darkmode = document.getElementById('dark-change');
      darkmode.addEventListener('click' , ()=>{
        darkmode.classList.toggle('active');
        content.classList.toggle('night')
      })

// Respomsive navbar

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}





