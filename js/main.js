var modalform = document.getElementsByClassName('modal-bg')[0];

let cart =[];



document.onclick = event => {
    if (event.target == modal) {
        modalform.style.display = "none";
    } else if(event.target.classList.contains('modal-close')) {
        modalform.style.display = "none"; 
    } else if (event.target.classList.contains('checkout-img')) {
        if (cart.length>0) { 
        modalform.style.display = "block";  } else {alert('Сначала выберите товар!')} 
    } else if (event.target.classList.contains('item-checkout')) {
        PlusFunction(event.target.dataset.id); 
    } else if (event.target.classList.contains('delete-item-arrow')) {
        MinusFunction(event.target.dataset.id); 
    }

}


const PlusFunction = id => {
var items = document.getElementsByClassName('item');

 cart[cart.length]={"Name" : 'ugly from young '+items[id-1].querySelector('.fit').textContent,
"Size": items[id-1].getElementsByClassName("dropdown")[0].options[items[id-1].getElementsByClassName("dropdown")[0].options.selectedIndex].value};
   RenderCart(); 

}

const MinusFunction = id => {
     cart.splice(id,1);
    RenderCart();
}



const RenderCart = () => {
    console.log(cart);
    var CountCart = document.querySelector(".checkout-text");
    CountCart.textContent=cart.length;
    
    var ModalCart = document.querySelector(".item-info-wrapper");
    if (cart.length>0) {
        ModalCart.innerHTML ='';
    document.querySelector('.order-price').textContent=4000*cart.length+' rub';
    cart.forEach (function(item, i, arr) {
        ModalCart.innerHTML = 
        ModalCart.innerHTML + '<div class="item-info"><img src="./img/tshirt.svg" class="modal-img" /><img src="./img/close.svg" data-id='+i+' class="delete-item-arrow" /><div class="modal-info-wrap"><h2 class="modal-info-name">'+item["Name"]+'</h2><div class="modal-info-size-wrap"><h3 class="modal-info-size">Размер</h3><h2 class="modal-size">'+item["Size"]+'</h2></div></div></div>'; 
    }); } else {
        ModalCart.innerHTML = '<div class="empty-cart">Корзина пуста</div>'
        document.querySelector('.order-price').textContent='0 rub';
    }
}

