export default {
    namespace: 'cart',
    state: JSON.parse(localStorage.getItem("cart")) || [],
    reducers: {
        addCart(cart,action){
            const good = action.payload;
            const idx = cart.findIndex(v => v.id == good.id )
            const cartCopy = [...cart] ;
            if (idx > -1) {
                const itemCopy = {...cartCopy[idx]};
                itemCopy.count +=1;
                cartCopy.splice(idx,1,itemCopy);
            }else{
                cartCopy.push({...good,count:1});
            }
            localStorage.setItem("cart",JSON.stringify(cartCopy))
            return cartCopy;

        }
    },
    effects: {}
}