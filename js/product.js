
$(document).ready(function(){
    $('.container').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay : false , 
        autoplaySpeed : 1000 , 
        prevArrow :  '.prev' ,
        nextArrow :  '.next' ,
        responsive:[
            { 
             breakpoint: 1024,
                settings:{
                   slidesToShow: 2,
                //    slidesToScro11: 1,
                //    infinite: true,
                //    dots: true
                }
            },{
                breakpoint: 769,
                settings:{
                    slidesToShow: 1,
                }

            }
]
    });
});



let toTop = document.querySelector('.toTop')
let nav  = document.querySelector('nav')
let toggleMenue  = document.querySelector('.fa-bars')

let menueTogller  = document.querySelector('.down-nav ul')

let openCart  = document.querySelector('.fa-cart-shopping')
let closeCart  = document.querySelector('.fa-circle-xmark')

let cartTtems = document.querySelector('.cart')





toTop.onclick = function(){
    window.scrollTo({
        top: 0 , 
        behavior : 'smooth'
    })
}

toggleMenue.addEventListener('click', function(){
    this.classList.toggle('activ')
    menueTogller.classList.toggle('open')
})

openCart.addEventListener('click',function(){
   cartTtems.classList.add('open')
    
})

closeCart.addEventListener('click',function(){
   cartTtems.classList.remove('open')
    
})

// start protuct disblay
let condaine = document.querySelector('.product .condainpro')
let cartcontainer = document.querySelector('.cart .contain');
let amount = document.querySelector('.amount');
let totallprice = document.querySelector('.totallprice');
let cart = [];
let totall = 0;

if(localStorage.getItem('cart') === null){
    cart = [];
} else {
    cart = JSON.parse(localStorage.getItem('cart'));
}

let product = [
    {
        id : 1,
        img : 'imags/coffee.jpg',
        name:'Coffee',
        price: 40
    },
    {
        id : 2,
        img : 'imags/cupcake.png',
        name:'Cupcake',
        price: 50
    },
    {
        id : 3,
        img : 'imags/food-table.jpg',
        name:'Food Table',
        price: 40
    },
    {
        id : 4,
        img : 'imags/salad-table.jpg',

        name:'Salad Table',
        price: 100
    },
    {
        id : 5,
        img : 'imags/food-table.jpg',
        name:'Food Table',
        price: 70
    },
    {
        id : 6,
        img : 'imags/plate-1.png',
        name:'Plate',
        price: 80
    },
    {
        id : 7,
        img : 'imags/plate-3.png',
        name:'Plate-3 three',
        price: 60
    },
    {
        id : 8,
        img : 'imags/salad-table.jpg',
        name:'Salad Table',
        price: 55
    },
    {
        id : 9,
        img : 'imags/yogurt.png',
        name:'Yogurt ',
        price: 80
    },
]


function setitems(){

    var cards =''
   for(let i = 0; i < product.length ; i++ ){
    cards +=`
        <div class="card">
             <div class="img">
                 <img src="${product[i].img}" alt="">
             </div>
             <div class="card-dealis">
                <p>${product[i].name}</p>
                <b> $${product[i].price}</b>
                <button onclick="addtoCurt(${i})">Add to card</button>
           
    

             </div>
        </div>
    `
} 
condaine.innerHTML = cards
}


setitems()

function addtoCurt(num){
    
    for(let i = 0; i < cart.length; i++) {
        if(product[num].id === cart[i].id) {
            alert('This product is already in your cart!');
            // close_product.style.display='flex';
            // box.style.display='flex'

            //   close_product.style.display='flex';
            // box.style.display='flex'
            return;
       
            
        }
    } let item = {...product[num], quantity: 1};
        cart.push(item); 
         hide_product.style.display='flex';
            box.style.display='flex'

    
  
    localStorage.setItem('cart', JSON.stringify(cart));
    disblayproduct();
}

function addproduct(i){
    cart[i].quantity = (cart[i].quantity || 1) + 1;
    // localStorage.setItem('cart', JSON.stringify(cart));
    // disblayproduct();

    localStorage.setItem('cart', JSON.stringify(cart));
    disblayproduct();

}

function removeproduct(i){
    if(cart[i].quantity > 1){
        cart[i].quantity--;
    } else {
        cart.splice(i, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    disblayproduct();
}

function disblayproduct(){
    let itemss = '';
    totall = 0;
    
    cart.forEach((value, i) => {
        value.quantity = value.quantity || 1;
        totall += value.price * value.quantity;
        
        itemss += `
            <div class="cardd">
                <img src="${value.img}" alt="">
                <div>
                    <p>${value.name}</p>
                    <b>Total: $${value.price * value.quantity}</b>
                </div>
                <div>
                    <button onclick="addproduct(${i})">+</button>
                    <span>${value.quantity}</span>
                    <button onclick="removeproduct(${i})">-</button>
                </div>
                <i onclick="deleproduct(${i})" class="fa-solid fa-trash"></i>
            </div>
        `;
    });

    if(cart.length > 0){
        cartcontainer.innerHTML = itemss;
        amount.style.color = 'var(--main-color)';
    } else {
        cartcontainer.innerHTML = `<h3>Cart is Empty</h3>`;
        amount.style.color = 'red';
    }
    
    amount.innerHTML = cart.length;
    totallprice.innerHTML = `$${totall}.00`;
}
disblayproduct()
function deleproduct(del){
    cart.splice(del, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    disblayproduct();
}

let hide_product =document.querySelector('.hide-product')
let box =document.querySelector('.hide-product .box')



let closee =document.querySelector('.close_product .box')
// let close_product =document.querySelector('.close_product')
// console.log(close_product);
box.addEventListener('click', function(){
    
    // closee.style.display='none'
    hide_product.style.display='none'
    box.style.display='none'


    
})
