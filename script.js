console.log("ok");
let cartBox = document.querySelector('.cart-box');
let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');
let ai = document.querySelector('.added-items');
let ac = document.querySelector('.add-cart');
let amt = document.getElementById('amount');

document.querySelector('.cart').addEventListener('click', () => {
    if (cartBox.style.display == 'none') {
        cartBox.style.display = 'block';
    }
    else {
        cartBox.style.display = 'none'
    }
})

document.querySelector('.noOfItems').style.height = "0.8rem" ;

let a = document.querySelector('.product-name').innerText;
let b = document.querySelector('.price').innerText;

ac.addEventListener('click', () => {
    ai.style.display = 'flex';
    document.querySelector('.empty-cart').style.display = 'none';
    document.querySelector('.noOfItems').style.width = "1rem";
})


plus.addEventListener('click', () => {
    amt.value = parseInt(amt.value) + 1;
    if (amt.value >= 5) {
        alert("Maximum amount reached.")
        amt.value = parseInt(amt.value) - 1;
    }
    else {
        document.querySelectorAll('.noi').forEach(el =>{
            el.innerText = amt.value;
        })
        document.querySelector('.total').innerHTML = '$' + amt.value * parseInt(b) + '.00';
    }
})

minus.addEventListener('click', () => {
    amt.value = parseInt(amt.value) - 1;
    if (amt.value <= 0) {
        amt.value = 0;
        document.querySelector('.total').innerHTML = '$' + amt.value * parseInt(b) + '.00';
        document.querySelectorAll('.noi').forEach(el =>{
            el.innerText = amt.value;
        })
        document.querySelector('.noOfItems').style.width = "0";
    }
    else {
        document.querySelector('.noi').innerText = amt.value;
        document.querySelector('.total').innerHTML = '$' + amt.value * parseInt(b) + '.00';
    }
})

document.querySelector('.pname').innerText = a;

document.querySelector('.amt').innerText = '$' + b;


//_________TRASH ICON________________

document.querySelector('.trash').addEventListener('click', () => {
    ai.style.display = 'none';
    document.querySelector('.empty-cart').style.display = 'grid';
    document.getElementById('amount').value = 0;
    document.querySelectorAll('.noi').forEach(el =>{
        el.innerText = amt.value;
    })
    document.querySelector('.noOfItems').style.width = "0";
})


// _________________IMAGE CHANGE____________

let si = document.querySelectorAll('.small-img');

si.forEach((e) => {
    e.addEventListener('click', (elem) => {
        var tPath = String(elem.target.src);
        var newPath = tPath.replace("-thumbnail", "");
        document.querySelector('.main-img').src = newPath;
        document.querySelector('.modal-img').src = newPath;
    })
})

// ___________MODAL_______________

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'none';
})



// __________MOBILE MENU_____________

document.getElementById("cls-m").addEventListener("click", () => {
    menu.style.width = '0';
    document.querySelector('.menu-inside').style.width = '0';
})

let menu = document.querySelector(".menu");

document.querySelector(".menu-button").addEventListener("click", () => {
    menu.style.width = '100vw';
    document.querySelector('.menu-inside').style.width = '60%';
})

// ____________MEDIA QUERY JS___________
var modal = document.querySelector('.modal');

function toggle() {
    if (modal.style.display == 'flex') {
        modal.style.display = 'none';
    }
    else {
        modal.style.display = 'flex'
    }

}

function customFunction(x) {

    var mainImg = document.querySelector('.main-img');

    if (x.matches) {
        mainImg.removeEventListener("click", toggle);
    } else {
        mainImg.addEventListener("click", toggle);
    }
}

var x = window.matchMedia("(max-width: 400px)");
x.addListener(customFunction);
customFunction(x);


// ___________SLIDES______________

let i = 1;

let n = document.querySelectorAll(".next");

n.forEach((elem) => {
    elem.addEventListener("click", () => {
        document.querySelector(".modal-img").src = `./images/image-product-${i + 1}.jpg`;
        document.querySelector(".main-img").src = `./images/image-product-${i + 1}.jpg`;
        if (i >= 3) {
            i = 0
        }
        else {
            i++;
        }
        console.log("hello");
    })
})

let p = document.querySelectorAll(".previous");
p.forEach((elem) => {
    elem.addEventListener("click", () => {
        if (i == 1 || i == 0) {
            i = 4;
        }
        else {
            i--;
        }
        document.querySelector(".modal-img").src = `./images/image-product-${i}.jpg`;
        document.querySelector(".main-img").src = `./images/image-product-${i}.jpg`;
    })
})
