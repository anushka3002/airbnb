import { GET_PRODUCTS, GET_PRODUCTS_FAIL, GET_PRODUCTS_SUCCESS, GET_SINGLE_PRODUCT, GET_SINGLE_PRODUCT_FAIL, GET_SINGLE_PRODUCT_SUCCESS, UPDATE_WISHLIST_FAIL, UPDATE_WISHLIST_SUCCESS, WISHLIST } from "../Constant/constant";

export const getProducts = (state = {data : []},action) =>{
    switch(action.type){
        case GET_PRODUCTS:
            return{
                loading: true,
                data: []
            } 
        case GET_PRODUCTS_SUCCESS:
            return{
                loading: false,
                data: action.payload
            }
        case GET_PRODUCTS_FAIL:
            return{
                loading: false,
                data: action.payload
            }
        default:
            return state;
    }
}

export const getSingleProduct = (state = {details : []},action) =>{
    switch(action.type){
        case GET_SINGLE_PRODUCT:
            return{
                loading: true,
                details: []
            }
        case GET_SINGLE_PRODUCT_SUCCESS:
            return{
                loading: false,
                details: action.payload
            }
        case GET_SINGLE_PRODUCT_FAIL:
            return{
                loading: false,
                details: action.payload
            }
        default:
            return state;
    }
}

export const updateWishlist = (state = {wishlistData : []},action) =>{
    switch(action.type){
        case WISHLIST:
            return{
                loading: true,
                wishlistData: []
            }
        case UPDATE_WISHLIST_SUCCESS:
            return{
                loading: false,
                wishlistData: action.payload
            }
        case UPDATE_WISHLIST_FAIL:
            return{
                loading: false,
                wishlistData: action.payload
            }
        default:
            return state;
    }
}
