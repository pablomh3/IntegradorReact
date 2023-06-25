export const addItemToCart = (cartItems, product) => {
    const productInCart = cartItems.find(item => item.id === product.id);
  alert(` Agregaste ${product.name} al carrito`)
    if (productInCart) {
      return cartItems.map(item =>
        item.id === productInCart.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
  
    return [...cartItems, { ...product, quantity: 1 }];
  };

export const removeItemFromCart = (cartItems, id) =>{
    const productToRemove = cartItems.find(item => item.id === id)

    if(productToRemove.quantity > 1 ){
        return cartItems.map(item => item.id === productToRemove.id ? {...item, quantity: item.quantity - 1} : item)
    }
        return cartItems.filter(item => item.id !== productToRemove.id)
    };

export const resetShippingCost = (cartItems, shippingCost ) =>{
    if (cartItems.length > 5){
        return 2000
    }
    return shippingCost
}