export const initialState = {
    basket: []
}

const reducer = (state, action) =>{
    console.log(action);
    switch(action.type) {
        case "ADD_TO_BASKET":
            return {...state, basket:[...state.basket, action.item]}
    }
}

export default reducer;

/*reducer: we use it to push the data from product component after action(add to cart) to the datalayer
and then from the datalayer to the cart
*/