var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


    function CalculateOutput(){

        var e = document.getElementById("quantity").value;

        if(document.getElementById("60").style.background=="rgba(155, 153, 153, 0.56)"){
        amt= e*50000;}
        else if(document.getElementById("70").style.background=="rgba(155, 153, 153, 0.56)"){
        amt= e*75000;}

        // else {amt=0;
        //     alert(document.getElementById("60").style.background);
        // }

       amt= "Rs "+amt+"/-";
     document.getElementById("amt").innerHTML = amt;
    }


 function SixtyFeet(){
     document.getElementById("60").style.background= "rgba(155, 153, 153, 0.562)";
     // document.getElementById("70").style.background = "#d1b94c";
     document.getElementById("70").style.background = "white";
     document.getElementById("price").innerHTML = "Rs:50,000";
     document.getElementById("name").innerHTML= "Carbon Fibre Telescopic poles(60 ft)"
    var dropdown= document.getElementById("quantity");
    dropdown.selectedIndex=0;
    document.getElementById("amt").innerHTML = "";


 }
 function SeventyFeet(){
    document.getElementById("70").style.background= "rgba(155, 153, 153, 0.562)";
    // document.getElementById("60").style.background = "#d1b94c";
    document.getElementById("60").style.background = "white";
    document.getElementById("price").innerHTML = "Rs:75,000";
    document.getElementById("name").innerHTML= "Carbon Fibre Telescopic poles(70 ft)"
    var dropdown= document.getElementById("quantity");
    dropdown.selectedIndex=0;
    document.getElementById("amt").innerHTML = "";

}

function Size1(){
  document.getElementById("1").style.background= "rgba(155, 153, 153, 0.562)";
  // document.getElementById("60").style.background = "#d1b94c";
  document.getElementById("2").style.background = "white";
  document.getElementById("3").style.background = "white";
  document.getElementById("pricelock").innerHTML = "Rs:500";
  document.getElementById("namelock").innerHTML= "Locks for Carbon Telescopic Poles (size1)"
  var dropdown= document.getElementById("quantitylock");
  dropdown.selectedIndex=0;
  document.getElementById("amtlock").innerHTML = "";

}

function Size2(){
  document.getElementById("2").style.background= "rgba(155, 153, 153, 0.562)";
  // document.getElementById("60").style.background = "#d1b94c";
  document.getElementById("1").style.background = "white";
  document.getElementById("3").style.background = "white";
  document.getElementById("Pack").style.background = "white";
  document.getElementById("pricelock").innerHTML = "Rs:600";
  document.getElementById("namelock").innerHTML= "Locks for Carbon Telescopic Poles (size2)"
  var dropdown= document.getElementById("quantitylock");
  dropdown.selectedIndex=0;
  document.getElementById("amtlock").innerHTML = "";

}
function Size3(){
  document.getElementById("3").style.background= "rgba(155, 153, 153, 0.562)";
  // document.getElementById("60").style.background = "#d1b94c";
  document.getElementById("1").style.background = "white";
  document.getElementById("2").style.background = "white";
  document.getElementById("Pack").style.background = "white";
  document.getElementById("pricelock").innerHTML = "Rs:700";
  document.getElementById("namelock").innerHTML= "Locks for Carbon Telescopic Poles (size3)"
  var dropdown= document.getElementById("quantitylock");
  dropdown.selectedIndex=0;
  document.getElementById("amtlock").innerHTML = "";


}
function Pack(){
  document.getElementById("Pack").style.background= "rgba(155, 153, 153, 0.562)";
  // document.getElementById("60").style.background = "#d1b94c";
  document.getElementById("1").style.background = "white";
  document.getElementById("2").style.background = "white";
  document.getElementById("3").style.background = "white";
  document.getElementById("pricelock").innerHTML = "Rs:1,750";
  document.getElementById("namelock").innerHTML= "Locks for Carbon Telescopic Poles(Pack)"
  var dropdown= document.getElementById("quantitylock");
  dropdown.selectedIndex=0;
  document.getElementById("amtlock").innerHTML = "";

}

function FourBelt(){
  document.getElementById("4").style.background= "rgba(155, 153, 153, 0.562)";
  // document.getElementById("70").style.background = "#d1b94c";
  document.getElementById("6").style.background = "white";
  document.getElementById("pricemachine").innerHTML = "Rs:1,50,000";
  document.getElementById("namemachine").innerHTML= "Dehusking Machine(4 belt)"
 var dropdown= document.getElementById("quantitymachine");
 dropdown.selectedIndex=0;
 document.getElementById("amtmachine").innerHTML = "";


}

function SixBelt(){
  document.getElementById("6").style.background= "rgba(155, 153, 153, 0.562)";
  // document.getElementById("60").style.background = "#d1b94c";
  document.getElementById("4").style.background = "white";
  document.getElementById("pricemachine").innerHTML = "Rs: 2,25,000";
  document.getElementById("namemachine").innerHTML= "Dehusking Machine(6 belt)"
  var dropdown= document.getElementById("quantitymachine");
  dropdown.selectedIndex=0;
  document.getElementById("amtmachine").innerHTML = "";

}

function CalculateOutputLock(){
   amt="";
  var e = document.getElementById("quantitylock").value;

  if(document.getElementById("1").style.background=="rgba(155, 153, 153, 0.56)"){
    amt= e*500;}
    else if(document.getElementById("2").style.background=="rgba(155, 153, 153, 0.56)"){
    amt= e*600;}
    else if(document.getElementById("3").style.background=="rgba(155, 153, 153, 0.56)"){
      amt= e*700;}
      else if(document.getElementById("Pack").style.background=="rgba(155, 153, 153, 0.56)"){
        amt= e*1700;}
       
 amt= "Rs "+amt+"/-";

document.getElementById("amtlock").innerHTML = amt;
}


function CalculateOutputmachine(){

  var e = document.getElementById("quantitymachine").value;

  if(document.getElementById("4").style.background=="rgba(155, 153, 153, 0.56)"){
  amt= e*150000;}
  else if(document.getElementById("6").style.background=="rgba(155, 153, 153, 0.56)"){
  amt= e*225000;}

  // else {amt=0;
  //     alert(document.getElementById("60").style.background);
  // }

 amt= "Rs "+amt+"/-";

document.getElementById("amtmachine").innerHTML = amt;
}