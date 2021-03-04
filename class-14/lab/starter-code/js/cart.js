'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
let table = document.getElementById( 'cart' );
table.addEventListener( 'click', removeItemFromCart );
let cart;

function loadCart() {
  let cartItems = JSON.parse( localStorage.getItem( 'cart' ) ) || [];
  cart = new Cart( cartItems );
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let remove = document.getElementsByTagName( 'tbody' )[0];
  console.log( remove );
  remove.innerHTML = '';

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart



function showCart() {
  let TableB = document.getElementsByTagName( 'tbody' )[0];

  for ( let i = 0; i < cart.items.length; i++ ) {
    let TableR = document.createElement( 'tr' );
    let deleteLink = document.createElement( 'a' );
    let quantity = document.createElement( 'td' );
    let itemElement = document.createElement( 'td' );
    let deletedLink = document.createElement( 'td' );
    let ltimg = document.createElement( 'td' );
    // delete link is just an "x" with an anchor tag around it
    // quanitity comes from this.quantity = quantity;
    // item comes from this.name = name;
    deleteLink.textContent = 'X';
    deleteLink.setAttribute( 'href', '#' );
    deleteLink.setAttribute( 'dlt', i );
    quantity.textContent = cart.items[i].quantity;
    itemElement.textContent = cart.items[i].product.name;
    quantity.textContent = cart.items[i].quantity;
    ltimg.innerHTML = `<img src='${cart.items[i].product.filePath}'/>`;
    console.log( cart.items[i] );
    deletedLink.appendChild( deleteLink );
    TableR.appendChild( deletedLink );
    TableR.appendChild( quantity );
    TableR.appendChild( itemElement );
    TableR.appendChild( ltimg );
    TableB.appendChild( TableR );

  }
  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart( event ) {
  console.log( event.target.getAttribute( 'dlt' ) );
  if( event.target.getAttribute( 'dlt' ) ){
    let index2 = event.target.getAttribute( 'dlt' );

    cart.removeItem( Number( index2 ) );
    cart.saveToLocalStorage();
    renderCart();
  }

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
