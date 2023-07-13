// script.js

// Função para adicionar um item ao carrinho
function addToCart() {
    const product = this.closest('.product');
    const name = product.querySelector('h3').textContent;
    const price = product.querySelector('.price').textContent;
    
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    
    const itemName = document.createElement('h3');
    itemName.textContent = name;
    
    const itemPrice = document.createElement('span');
    itemPrice.classList.add('price');
    itemPrice.textContent = price;
    
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-from-cart');
    removeButton.textContent = 'Remover';
    
    cartItem.appendChild(itemName);
    cartItem.appendChild(itemPrice);
    cartItem.appendChild(removeButton);
    
    const cartItems = document.querySelector('.cart-items');
    cartItems.appendChild(cartItem);
    
    updateTotal();
    
    removeButton.addEventListener('click', removeFromCart);
  }
  
  // Função para remover um item do carrinho
  function removeFromCart() {
    const cartItem = this.closest('.cart-item');
    cartItem.remove();
    
    updateTotal();
  }
  
  // Função para atualizar o total do carrinho
  function updateTotal() {
    const prices = document.querySelectorAll('.cart-item .price');
    let total = 0;
    
    prices.forEach(price => {
      const priceValue = parseFloat(price.textContent.replace('R$ ', ''));
      total += priceValue;
    });
    
    const totalElement = document.querySelector('.total-price');
    totalElement.textContent = 'R$ ' + total.toFixed(2);
  }
  
  // Adicionar evento de clique aos botões "Adicionar ao carrinho"
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
  });
  