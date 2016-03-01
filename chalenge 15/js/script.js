
(function(){

// when div is active change color
  var doc = document.getElementsByClassName("class1");

  for (var i = 0, len = doc.length; i < len; i++ ){
    doc[i].addEventListener("click", changeColor);
  }

  function changeColor() {
      var kids = document.getElementById('menu').children;
      for(var i = 0; i < kids.length; i++){
          kids[i].classList.remove("class2");
          var copii = kids[i].children;

          for (var j=0; j<copii.length; j++){
              copii[j].classList.remove("class2");
          }
      }

      event.currentTarget.classList.add("class2");
      event.currentTarget.children[0].classList.add("class2");
  };

// clone div for main first section
  document.getElementById('button').onclick = duplicate;


  var i = 0;
  var original = document.getElementById('duplicater');

  function duplicate() {
      var clone = original.cloneNode(true); // "deep" clone
      clone.id = "duplicetor" + ++i; // there can only be one element with an ID
      original.parentNode.appendChild(clone);
  }

// slider option go to prev
  document.getElementById("prev").addEventListener("click", goPrev);

  function goPrev() {
    var activeDiv = document.querySelector(".selected");
    var prevDiv = activeDiv.previousElementSibling;

   if (prevDiv === null) {
      prevDiv = document.querySelector(".slider div:last-child");console.log ("aici");
    }
    activeDiv.className = "";
    prevDiv.className = "  selected";
  }

  // slider option go to next
  document.getElementById("next").addEventListener("click", goNext);

  function goNext(){
  //o var pt verificare daca div-ul are clasa active
    var activeDiv = document.querySelector(".selected");
    // daca este activa, delete clasa active
    activeDiv.className = "";
    var nextDiv = activeDiv.nextElementSibling;

    if (nextDiv === null) {
    nextDiv = document.querySelector(".slider div:first-child");
    }
    nextDiv.className = "  selected";
  }


})();

// function goPrev(){
//
//   var slider = document.getElementsByClassName('slide');
//
//   if (slider[0].classList.contains("active")){
//      slider[0].classList.remove("active");
//      slider[0].classList.add("active");
//   }
// }







//
// function changeSlide(num){
//     var slider = document.getElementsByClassName('slide');
//     var Div_Number= 0;
//
//     console.log(slider);
//     for (var i = 0; i < slider.length; i++){
//         var slide_Number = slider[i]
//         var Div_Length = slider.length - 1;
//     	Div_Number = Div_Number + num;
//
//     	if (Div_Number > Div_Length){
//       Div_Number = 0;
//       }
//
//       if (Div_Number < 0){
//       Div_Number = Div_Length;
//       }
//
//       document.slideshow = slider[Div_Number];
//
//       return false;
//   }
// }




        // if (!sliderContent.classList.contains("selected")){
        //     sliderContent.classList.add("");
        // }
        // console.log(sliderContent);
        //
        // if (direction === 'prev') {
        //     console.log("am intrat la dir = prev");
        //     //verifies if the first element was visible then the last should become visible
        //     if (i === 0) {
        //         console.log("am intrat la prev");
        //         slider[slider.length - 1].className += " selected";
        //
        //         return; //stops execution
        //     }
        //     slider[i - 1].className += " selected"; //the previous element will become visible
        //     return;
        // }
        //
        // if (direction === 'next') {
        //     console.log("am intrat la dir next");
        //     //verifies if the visible element is the last one - then the first one should become visible
        //     if (i === slider.length - 1) {
        //         console.log("am intrat la next");
        //         slider[0].className += " selected";
        //         return; //stops execution
        //     }
        //     slider[i + 1].className += " selected"; //the next element becomes visible
        //     return;
        // }
//     }
// };




// function addElement () {
//     // create a new div element
//     // and give it some content
//     var newDiv = document.createElement("div");
//     var newContent = document.createTextNode("Hi there and greetings!");
//     newDiv.appendChild(newContent); //add the text node to the newly created div.
//
//     // add the newly created element and its content into the DOM
//     var currentDiv = document.getElementById("after");
//     document.body.insertAfter(newDiv, currentDiv);
// }

// var Scroller = function(slider, left, right){
//     var self = this;
//     this.c = slider;
//     this.l = left;
//     this.r = right;
//     // Define how to scroll
//     this.sID = 0; // Scroll ID so they don't fight eachother
//     this.prettyScroll = function(sto, sid){
//         var mid = sid || ++this.sID,
//             c = self.c,
//             w = c.scrollWidth,
//             x = c.scrollLeft,
//             t = (sto===undefined?x:sto),
//             dx = 10;
//         if(mid !== self.sID) return;
//         if(t > w) t = w;
//         else if (t < 0) t = 0;
//         if(Math.abs(t - x) <= dx) return c.scrollLeft = t;
//         if(t > x) c.scrollLeft = x + dx;
//         else c.scrollLeft = x - dx;
//         setTimeout(function(){self.prettyScroll(t, mid)},20);
//     };
//     // Add functions to left&right buttons
//     left.addEventListener('click',function(){s
//         var w = self.c.offsetWidth;
//         self.prettyScroll(self.c.scrollLeft - w);
//     },false);
//     right.addEventListener('click',function(){
//         var w = self.c.offsetWidth;
//         self.prettyScroll(self.c.scrollLeft + w);
//     },false);
//     // Remove Text from #slider so we get inserted spaces
//     (function(e){
//         var i = e.childNodes.length;
//         while(i-->0) if(e.childNodes[i].nodeType === 3) e.removeChild(e.childNodes[i]);
//     })(slider);
// };
// var myScroll = new Scroller(document.getElementById('slider'), document.getElementById('goLeft'),
// document.getElementById('goRight'));
