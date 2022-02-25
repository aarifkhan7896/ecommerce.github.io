const openMenu = document.querySelector('.bars');
const closeMenu = document.querySelector('.close');
const navbarItems = document.querySelector('.navbarItems');
const menu = document.querySelector('.menu');
const bigImage = document.querySelector('#bigImage');
const addCartBtn = document.querySelectorAll('.addCartBtn');
const loginModal = document.querySelector('.loginModal');
const loginModalClose = document.querySelector('.loginModalClose');
const loginBtn = document.querySelector('#loginBtn');
const loginModalBtn = document.querySelector('#loginModalBtn');
const signupBtn = document.querySelector('#signupBtn');
const tshirtImage = document.querySelector('#tshirtImage');
const cartVal = document.querySelector("#cartVal");
const allproducts = document.querySelector(".allproducts");
const navLink = document.querySelectorAll('.nav-link'); 
const productCard = document.querySelectorAll('.card');

const productsData = [{
    id:1,
    name: "Peter England Shirt",
    addClassFilter:"shirt",
    img: "./img/shirt1.png",
    price: 120
},{
    id:2,
    name: "Polo Shirt",
    addClassFilter:"shirt",
    img: "./img/shirt2.png",
    price: 110
},{
    id:3,
    name: "Wildcraft Tshirt",
    addClassFilter:"tshirt",
    img: "./img/tshirt1.png",
    price: 50
},{
    id:4,
    name: "Polo Tshirt",
    addClassFilter:"tshirt",
    img: "./img/tshirt2.png",
    price: 70
},{
    id:5,
    name: "Wildcraft Shirt",
    addClassFilter:"shirt",
    img: "./img/tshirt3.png",
    price: 100
},{
    id:6,
    name: "Titan Watch",
    addClassFilter:"watch",
    img: "./img/watch1.png",
    price: 200
},{
    id:7,
    name: "Xiaomi Watch",
    addClassFilter:"watch",
    img: "./img/watch2.png",
    price: 220
},{
    id:8,
    name: "boAt Watch",
    addClassFilter:"watch",
    img: "./img/watch3.png",
    price: 300
},{
    id:9,
    name: "Women's Suit",
    addClassFilter:"suit",
    img: "./img/suit.png",
    price: 350
},{
    id:10,
    name: "Gold Jewellery",
    addClassFilter:"jewellery",
    img: "./img/jewellery1.png",
    price: 1000
},{
    id:11,
    name: "Gold Jewellery",
    addClassFilter:"jewellery",
    img: "./img/jewellery2.png",
    price: 1110
},{
    id:12,
    name: "Gold Jewellery",
    addClassFilter:"jewellery",
    img: "./img/jewellery3.png",
    price: 1200
}]

let count = 0;
addCartBtn.forEach(element => {
    element.addEventListener('click',()=>{
        count++;
        cartVal.innerHTML=count;
        cartVal.style.display="block";
        const toast = document.createElement('div');
        toast.innerText="Added to cart";
        document.getElementById('toast').appendChild(toast);
        setInterval(()=>{
            toast.remove();
        },2000)
    })
});

openMenu.addEventListener('click',function(){
    if(closeMenu.classList.contains('close')){
        closeMenu.classList.add('menu')
        openMenu.classList.remove('menu');
    }
    navbarItems.style.display="block";
})
closeMenu.addEventListener('click',function(){
    if(openMenu.classList.contains('bars')){
        openMenu.classList.add('menu');
        closeMenu.classList.remove('menu');
    }
    navbarItems.style.display="none";
})

function changeImg(smallImg){
    bigImage.src = smallImg.src;
}
function changeTshirtImg(smallImg){
    tshirtImage.src=smallImg.src;
}
loginModalClose.addEventListener('click',function(){
    loginModal.classList.remove('openLoginModal');
})

loginBtn.addEventListener('click',()=>{
    if(loginModal.classList.contains('loginModal')){
        loginModal.classList.add('openLoginModal');
    }
})
loginModalBtn.addEventListener('click',function(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const emailReg = /[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+/;
    const passReg = /^[A-Z][a-zA-Z0-9\@\#]{8,15}/;
    

    if(!emailReg.test(email)){
        alert("Kindly enter correct email address");
    }
    if(!passReg.test(password)){
        alert("Kindly enter correct password");
    }
})


let allData = "";
productsData.forEach((element,index)=>{
    const myData = `<div class="card text-center ${element.addClassFilter}">
                    <div class="card-item">
                    <img src="${element.img}" alt="img" class="img-fluid" />
                    </div>
                    <hr />
                    <div class="card-body py-0">
                    <h3 class="text-dark fs-2 fw-bold">${element.name}</h3>
                    <p class="text-muted fs-4 fw-bold">M.R.P. $ ${element.price}</p>
                    </div>
                    <button id="addCartBtn" class="px-5 py-1 fs-2 shadow btn btn-dark rounded addCartBtn">
                    Add to Cart
                    </button>
                    </div>`;
    allData+=myData;
    allproducts.innerHTML=allData;
})


for (i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', (e) => {
        const productCard = document.querySelectorAll('.card');
        e.preventDefault();
        const filter = e.target.dataset.filter;
        
        productCard.forEach((product)=> {
           
            if (filter === 'all'){
                product.style.display = 'block'
            } else {
                if (product.classList.contains(filter)){
                    product.style.display = 'block'
                } else {
                    product.style.display = 'none'
                }
            }
        });
    });
};