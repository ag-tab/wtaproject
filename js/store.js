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

        else {amt=0;
            alert(document.getElementById("60").style.background);
        }

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
