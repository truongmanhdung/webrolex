export const getCartItems = () => {
    const cartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    return cartItems
}

export const setCartItems = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const addToCart = (newProduct) => {
    let cartItem = getCartItems();

    const existProduct = cartItem.find(product => product.id === newProduct.id);
    if(existProduct){
        existProduct.quantity += newProduct.quantity
    }else{
        cartItem = [...cartItem, newProduct];
    }

    setCartItems(cartItem);
}