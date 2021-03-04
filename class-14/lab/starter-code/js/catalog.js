/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    const option = document.createElement('option');
    selectElement.appendChild(option);
    option.innerText= `${Product.allProducts[i].name}`;
    

  }
  document.querySelector('#itemCount').textContent = ` (${cart.items.length})`;
  if (localStorage.cart) {
    const tempLocalstorageItems = JSON.parse(localStorage.getItem('cart'));
    for (let i = 0; i < tempLocalstorageItems.length; i++) {
      console.log(tempLocalstorageItems[i]);

      cart.addItem(
        tempLocalstorageItems[i].product,
        tempLocalstorageItems[i].quantity
      );

      updateCounter();
      updateCartPreview();
    }
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
event.preventDefault();
  // TODO: Prevent the page from reloading

  // Do all the things ...
  
  addSelectedItemToCart();
  
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  let list = document.getElementById('items');
  let selectedItem = list.selectedIndex;
  let itemPicked = list.options[selectedItem].text;

  
  // TODO: get the quantity
  
  // TODO: using those, add one item to the Cart
  
  // TODO: get the quantity
  let quantity = document.getElementById("quantity").value;
  // TODO: using those, add one item to the Cart
  cart.addItem(itemPicked,quantity);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  document.querySelector('#itemCount').textContent = ` (${cart.items.length})`;
}
// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  const paragraphItem = document.createElement('p');

  let cartNumber = document.createElement('span');
  cartNumber.textContent = `${cart.items[cart.items.length - 1].quantity}:   `;
  paragraphItem.appendChild(cartNumber);
  document.querySelector('#cartContents').appendChild(paragraphItem);
  let name = document.createElement('span');
  name.textContent = `${cart.items[cart.items.length - 1].product.name}`;
  paragraphItem.appendChild(name);
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
