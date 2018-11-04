var productImg = document.getElementsByClassName('product-img');
var plus=document.getElementsByClassName('plus');
var qt = document.getElementsByClassName('qt');
var minus = document.getElementsByClassName('minus');


for(i=0;i<productImg.length;i++){ // delet product content
productImg[i].addEventListener('click',function(){
(this).parentElement.classList.add("removed");
});
}

// Incrment

var productContents = document.querySelectorAll('.product-content')

productContents.forEach(function(productContent){
productContent.querySelector('.plus').addEventListener('click',function(){
++productContent.querySelector('.qt').innerText;

// Total in increment

var totalPrice = productContent.querySelector('.total-price');
var price = productContent.querySelector('.price')
var qt= productContent.querySelector('.qt');

totalPrice.textContent=parseFloat(Array.from(price.textContent).filter(x=> x != "$").join("") *10 /10) * (qt.textContent *10 /10)+"$";


});
});

//DeCrement

productContents.forEach(function(productContent){
productContent.querySelector('.minus').addEventListener('click',function(){
if(productContent.querySelector('.qt').innerText >0){
	--productContent.querySelector('.qt').innerText}

//Total in Decrement 
var totalPrice = productContent.querySelector('.total-price');
var price = productContent.querySelector('.price')
var qt= productContent.querySelector('.qt');

totalPrice.textContent=parseFloat(Array.from(price.textContent).filter(x=> x != "$").join("") *10 /10) * (qt.textContent *10 /10)+"$";

// Toal price 

});
});


//Total Price 






//Show Total box

var checkLink =document.querySelector('.check-link');


checkLink.addEventListener('click',function(){
var checkTotal = document.querySelector('.check-total');
checkTotal.classList.toggle('show');

//Total Price
var yourTotal =document.querySelector('.your-total')

var priceTotal =document.querySelectorAll('.total-price');

var sum =0
for(i=0;i<productContents.length;i++){

	sum +=parseFloat(Array.from(priceTotal[i].textContent).filter(x=> x != "$").join("") *10 /10);
}

yourTotal.textContent=sum +"$"

});


