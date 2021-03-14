import PRODUCTS from '../../data/dummy-data'

/**
 * Inizializza lo stato in redux con i prodotti reduperati dal file dummy-data.js
 */
const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
}

export default (state = initialState, action) => {
    return state;
};