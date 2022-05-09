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
     document.getElementById("price").innerHTML = "Rs:50000/-";
     document.getElementById("name").innerHTML= "Carbon Fibre Telescopic poles(60 ft)"
    var dropdown= document.getElementById("quantity");
    dropdown.selectedIndex=0;
    document.getElementById("amt").innerHTML = "Rs 50000/-";


 }
 function SeventyFeet(){
    document.getElementById("70").style.background= "rgba(155, 153, 153, 0.562)";
    // document.getElementById("60").style.background = "#d1b94c";
    document.getElementById("60").style.background = "white";
    document.getElementById("price").innerHTML = "Rs:75000/-";
    document.getElementById("name").innerHTML= "Carbon Fibre Telescopic poles(70 ft)"
    var dropdown= document.getElementById("quantity");
    dropdown.selectedIndex=0;
    document.getElementById("amt").innerHTML = "Rs 75000/-";

}

function Size1(){
  document.getElementById("1").style.background= "rgba(155, 153, 153, 0.562)";
  // document.getElementById("60").style.background = "#d1b94c";
  document.getElementById("2").style.background = "white";
  document.getElementById("3").style.background = "white";
  document.getElementById("pricelock").innerHTML = "Rs:500/-";
  document.getElementById("namelock").innerHTML= "Locks for Carbon Telescopic Poles (size1)"
  var dropdown= document.getElementById("quantitylock");
  dropdown.selectedIndex=0;
  document.getElementById("amtlock").innerHTML = "Rs 500/-";

}

function Size2(){
  document.getElementById("2").style.background= "rgba(155, 153, 153, 0.562)";
  // document.getElementById("60").style.background = "#d1b94c";
  document.getElementById("1").style.background = "white";
  document.getElementById("3").style.background = "white";
  document.getElementById("Pack").style.background = "white";
  document.getElementById("pricelock").innerHTML = "Rs:600/-";
  document.getElementById("namelock").innerHTML= "Locks for Carbon Telescopic Poles (size2)"
  var dropdown= document.getElementById("quantitylock");
  dropdown.selectedIndex=0;
  document.getElementById("amtlock").innerHTML = "Rs 600/-";

}
function Size3(){
  document.getElementById("3").style.background= "rgba(155, 153, 153, 0.562)";
  // document.getElementById("60").style.background = "#d1b94c";
  document.getElementById("1").style.background = "white";
  document.getElementById("2").style.background = "white";
  document.getElementById("Pack").style.background = "white";
  document.getElementById("pricelock").innerHTML = "Rs:700/-";
  document.getElementById("namelock").innerHTML= "Locks for Carbon Telescopic Poles (size3)"
  var dropdown= document.getElementById("quantitylock");
  dropdown.selectedIndex=0;
  document.getElementById("amtlock").innerHTML = "Rs 700/-";


}
function Pack(){
  document.getElementById("Pack").style.background= "rgba(155, 153, 153, 0.562)";
  // document.getElementById("60").style.background = "#d1b94c";
  document.getElementById("1").style.background = "white";
  document.getElementById("2").style.background = "white";
  document.getElementById("3").style.background = "white";
  document.getElementById("pricelock").innerHTML = "Rs:1750/-";
  document.getElementById("namelock").innerHTML= "Locks for Carbon Telescopic Poles(Pack)"
  var dropdown= document.getElementById("quantitylock");
  dropdown.selectedIndex=0;
  document.getElementById("amtlock").innerHTML = "Rs 1750/-";

}

function FourBelt(){
  document.getElementById("4").style.background= "rgba(155, 153, 153, 0.562)";
  // document.getElementById("70").style.background = "#d1b94c";
  document.getElementById("6").style.background = "white";
  document.getElementById("pricemachine").innerHTML = "Rs:150000/-";
  document.getElementById("namemachine").innerHTML= "Dehusking Machine(4 belt)"
 var dropdown= document.getElementById("quantitymachine");
 dropdown.selectedIndex=0;
 document.getElementById("amtmachine").innerHTML = "Rs 150000/-";


}

function SixBelt(){
  document.getElementById("6").style.background= "rgba(155, 153, 153, 0.562)";
  // document.getElementById("60").style.background = "#d1b94c";
  document.getElementById("4").style.background = "white";
  document.getElementById("pricemachine").innerHTML = "Rs: 225000/-";
  document.getElementById("namemachine").innerHTML= "Dehusking Machine(6 belt)"
  var dropdown= document.getElementById("quantitymachine");
  dropdown.selectedIndex=0;
  document.getElementById("amtmachine").innerHTML = "Rs 225000/-";

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


"use strict";                        
let cart = [];
let cartTotal = 0;
const cartDom = document.querySelector(".cart");
const addtocartbtnDom = document.querySelectorAll('[data-action="add-to-cart"]');

addtocartbtnDom.forEach(addtocartbtnDom => {
  addtocartbtnDom.addEventListener("click", () => {
    const productDom = addtocartbtnDom.parentNode;
    const product = {
      // img: productDom.querySelector(".product-img").getAttribute("src"),
      name: productDom.querySelector(".product-name").innerText,
      price: productDom.querySelector(".product-price").innerText.split(":")[1].split("/")[0],
      quantity: productDom.querySelector(".product-quantity").selectedIndex + 1
   };

const IsinCart = cart.filter(cartItem => cartItem.name === product.name).length > 0;
if (IsinCart === false) {
  cartDom.insertAdjacentHTML("beforeend",`
  <div class="d-flex flex-row shadow-sm card cart-items mt-2 mb-3 animated flipInX">
    
    <div class="p-2 mt-3">
        <p class="text-info cart_item_name">${product.name}</p>
    </div>
    <div class="p-2 mt-3">
        <p class="text-success cart_item_price">Rs. ${product.price}</p>
    </div>
    <div class="p-2 mt-3 ml-auto">
        <button class="btn badge badge-secondary" type="button" data-action="increase-item">&plus;
    </div>
    <div class="p-2 mt-3">
      <p class="text-success cart_item_quantity"> ${product.quantity}</p>
    </div>
    <div class="p-2 mt-3">
      <button class="btn badge badge-info" type="button" data-action="decrease-item">&minus;
    </div>
    <div class="p-2 mt-3">
      <button class="btn badge badge-danger" type="button" data-action="remove-item">&times;
    </div>
  </div> `);

  if(document.querySelector('.cart-footer') === null){
    cartDom.insertAdjacentHTML("afterend",  `
      <div class="d-flex flex-row shadow-sm card cart-footer mt-2 mb-3 animated flipInX" style="width: 85%; margin-left: 5%">
        <div class="p-2">
          <button class="btn badge-danger" type="button" data-action="clear-cart">Clear Cart
        </div>
        <div class="p-2 ml-auto">
          <button class="btn badge-dark" type="button" data-action="check-out" onclick="window.location.href='payment.html'">Pay <span class="pay"></span> 
            &#10137;
        </div>
      </div>`); }

    addtocartbtnDom.innerText = "In cart";
    addtocartbtnDom.disabled = true;
    cart.push(product);

    const cartItemsDom = cartDom.querySelectorAll(".cart-items");
    cartItemsDom.forEach(cartItemDom => {

    if (cartItemDom.querySelector(".cart_item_name").innerText === product.name) {

      cartTotal += parseInt(cartItemDom.querySelector(".cart_item_quantity").innerText) 
      * parseInt(cartItemDom.querySelector(".cart_item_price").innerText.split(" ")[1].split("/")[0]);
      console.log(cartItemDom.querySelector(".cart_item_price").innerText);
      document.querySelector('.pay').innerText = cartTotal + " Rs.";

      // increase item in cart
      cartItemDom.querySelector('[data-action="increase-item"]').addEventListener("click", () => {
        cart.forEach(cartItem => {
          if (cartItem.name === product.name) {
            cartItemDom.querySelector(".cart_item_quantity").innerText = ++cartItem.quantity;
            cartItemDom.querySelector(".cart_item_price").innerText = parseInt(cartItem.quantity) *
            parseInt(cartItem.price) + " Rs.";
            cartTotal += parseInt(cartItem.price)
            document.querySelector('.pay').innerText = cartTotal + " Rs.";
          }
        });
      });

      // decrease item in cart
      cartItemDom.querySelector('[data-action="decrease-item"]').addEventListener("click", () => {
        cart.forEach(cartItem => {
          if (cartItem.name === product.name) {
            if (cartItem.quantity > 1) {
              cartItemDom.querySelector(".cart_item_quantity").innerText = --cartItem.quantity;
              cartItemDom.querySelector(".cart_item_price").innerText = parseInt(cartItem.quantity) *
              parseInt(cartItem.price) + " Rs.";
              cartTotal -= parseInt(cartItem.price)
              document.querySelector('.pay').innerText = cartTotal + " Rs.";
            }
          }
        });
      });

      //remove item from cart
      cartItemDom.querySelector('[data-action="remove-item"]').addEventListener("click", () => {
        cart.forEach(cartItem => {
          if (cartItem.name === product.name) {
              cartTotal -= parseInt(cartItemDom.querySelector(".cart_item_price").innerText);
              document.querySelector('.pay').innerText = cartTotal + " Rs.";
              cartItemDom.remove();
              cart = cart.filter(cartItem => cartItem.name !== product.name);
              addtocartbtnDom.innerText = "Add to cart";
              addtocartbtnDom.disabled = false;
          }
          if(cart.length < 1){
            document.querySelector('.cart-footer').remove();
          }
        });
      });

      //clear cart
      document.querySelector('[data-action="clear-cart"]').addEventListener("click" , () => {
        cartItemDom.remove();
        cart = [];
        cartTotal = 0;
        if(document.querySelector('.cart-footer') !== null){
          document.querySelector('.cart-footer').remove();
        }
        addtocartbtnDom.innerText = "Add to cart";
        addtocartbtnDom.disabled = false;
      });

      // document.querySelector('[data-action="check-out"]').addEventListener("click" , () => {
      //   if(document.getElementById('paypal-form') === null){
      //     checkOut();
      //   }
      // });
    }
  });
}
});
});

function animateImg(img) {
  img.classList.add("animated","shake");
}

function normalImg(img) {
  img.classList.remove("animated","shake");
}

function checkOut() {
  let paypalHTMLForm = `
  <form id="paypal-form" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
    <input type="hidden" name="cmd" value="_cart">
    <input type="hidden" name="upload" value="1">
    <input type="hidden" name="business" value="gmanish478@gmail.com">
    <input type="hidden" name="currency_code" value="INR">`;
   
  cart.forEach((cartItem,index) => {
   ++index;
   paypalHTMLForm += ` <input type="hidden" name="item_name_${index}" value="${cartItem.name}">
    <input type="hidden" name="amount_${index}" value="${cartItem.price.replace("Rs.","")}">
    <input type="hidden" name="quantity_${index}" value="${cartItem.quantity}">`;
  });
   
  paypalHTMLForm += `<input type="submit" value="PayPal" class="paypal">
  </form><div class="overlay">Please wait...</div>`;
  document.querySelector('body').insertAdjacentHTML("beforeend", paypalHTMLForm);
  document.getElementById("paypal-form").submit();
}