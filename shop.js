
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

// Proceed to checkout function //
function ready() {
    // Remove item button
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    // Lets the User Select Quantity Of Items cant be minus or zero
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
    // Adds Item to Cart
    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

// Removes item from cart //
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

// Changes item quantity //
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
        event.preventDefault();
    }
    updateCartTotal()
}

// Adds item to cart //
function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)

    updateCartTotal()
}

// Adds item's title, price, and image onto cart section //
function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)

}

// Updates the total price in the cart //
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

function toLocalStorage(number) {
    localStorage.setItem("number", number);
    location.href = 'Albums/Illmatic.html';
}
// Search by word 
$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();

        $("#myList div").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
// Search by word 

var priceList = [];
    var price = document.getElementsByClassName("shop-item-price");
	var title = document.getElementsByClassName("shop-item-title");
	var div = document.getElementsByClassName("shop-item");
	var selected1 = document.getElementById("myInput-sort");
	
	
	
    for (var i=0; i<11; i++) {
        priceList.push(price[i].innerText + " | " + title[i].innerText);
	}
        console.log(priceList);
    priceList.sort();

console.log(priceList);

function Selected() {
	 if (selected1.value=="Price") {
		 liMaker(priceList);
	//} else {
		// liMaker2(albumoDataList);
	 }
	 };
	 
	 function liMaker(obj) {
	for (var i=0; i<priceList.length; i++) {
	let li = document.createElement("li");
		li.textContent = priceList[i];
		document.getElementById("kaina").append(li);
	} 
}


function liMaker2(obj) {
	for (var i=0; i<albumoData.length; i++) {
	let li = document.createElement("li");
		li.textContent = albumoDataList[i];
		document.getElementById("kaina3").append(li);
	} 
}

//sort By price

//    var priceList = [];
 //   var price = document.getElementsByClassName("shop-item-price");
//    var text;
//    for (var i = 0; i < 12; i++) {
 //       priceList.push(price[i].innerText);
   //     price.sort;
 //     console.log(priceList.sort((a, b) => (a - b)));
        
  //  }

//console.log(priceList);

    //sort By price