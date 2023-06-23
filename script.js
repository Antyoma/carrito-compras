//variables
let allContainerCart = document.querySelector('.products');

let busThings = [];

//funciones
loadEventListenrs();
function loadEventListenrs(){
    allContainerCart.addEventListener('click', addProduct);
}

function addProduct(e){
    e.preventDefault();
    if (e.target.classList.contains('btn-add-cart')){
        const selectProduct = e.target.parentElement;
        readTheContent(selectProduct);
        //console.log (e.target.parentElement);
    }   
}

function readTheContent(product){
    const infoproduct = {
        image: product.querySelector('div img').src,
        title: product.querySelector('.title').textContent,
        price: product.querySelector('div p span').textContent,
        id: product.querySelector('a').getAttribute('data-id'),
        amount: 1
    }

    busThings = [...buyThings, infoproduct]
    loadHtml();
    console.log(infoproduct);
}

function loadHtml(){
    buyThings.forEach(product => {
        const { image, title, price, amount, id } = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
        <img src="${image}" alt="">
            <div class="item-content">
                 <h5>${title}</h5>
                 <h5 class="cart-price">${price}</h5>
                    <h6>Amount: ${amount}</h6>
            </div>
        <span class="delete-product" data-id="${id}">X</span>
        `
    });
}