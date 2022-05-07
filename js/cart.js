// $('.minus-btn').on('click', function(e) {
//     e.preventDefault();
//     var $this = $(this);
//     var $input = $this.closest('div').find('input');
//     var value = parseInt($input.val());
 
//     if (value > 1) {
//         value = value - 1;
//     } else {
//         value = 0;
//     }
 
//   $input.val(value);
 
// });

// $('.plus-btn').on('click', function(e) {
//     e.preventDefault();
//     var $this = $(this);
//     var $input = $this.closest('div').find('input');
//     var value = parseInt($input.val());
 
//     if (value < 100) {
//         value = value + 1;
//     } else {
//         value =100;
//     }
 
//     $input.val(value);
// });

function total(){
    var tprice = Number(document.getElementsByClassName("total-price")[0].innerHTML.split("₹")[1]) + Number(document.getElementsByClassName("total-price")[1].innerHTML.split("₹")[1]);
    document.getElementById("total").innerHTML = "Total : ₹" + tprice;
}

function price(){
    // console.log("Here");
    var num = document.activeElement.value;
    // console.log(num);
    var quantity = document.activeElement.parentElement.getElementsByTagName("input")[0].value;
    // num = num/(quantity-1);
    num = num*quantity;
    document.activeElement.parentElement.parentElement.getElementsByClassName("total-price")[0].innerHTML = "₹" + num;
    // document.body.getElementsByClassName("total-price")[1].innerHTML = "₹" + num;
    total();
    
}

// function pricedec(){
//     console.log("Here");
//     var num = document.body.getElementsByClassName("total-price")[0].innerHTML.split("₹")[1];
//     var quantity = document.activeElement.parentElement.getElementsByTagName("input")[0].value;
//     num = num/(quantity);
//     num = num*quantity;
//     console.log(num);
//     document.body.getElementsByClassName("total-price")[0].innerHTML = "₹" + num;
    
// }


function increment(){
    document.activeElement.parentElement.getElementsByTagName("input")[0].value++;
    price();
}

function decrement(){
    document.activeElement.parentElement.getElementsByTagName("input")[0].value--;
    price();
}





total();