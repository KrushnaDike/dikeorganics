import {
  addToCartRequest,
  addToCartSuccess,
  addToCartFail,
  removeFromCartRequest,
  removeFromCartSuccess,
  removeFromCartFail,
  updateQuantityRequest,
  updateQuantitySuccess,
  updateQuantityFail,
  clearCartRequest,
  clearCartSuccess,
  clearCartFail,
} from "../reducers/cartReducer";

export const addToCart = (product) => async (dispatch) => {
  try {
    dispatch(addToCartRequest());
    // Here you would typically make an API call to add the item to the cart on the server
    // For now, we'll just simulate a successful addition
    dispatch(addToCartSuccess(product));
  } catch (error) {
    console.error("Add to cart error:", error);
    dispatch(addToCartFail(error.message));
  }
};

export const removeFromCart = (productId) => async (dispatch) => {
  try {
    dispatch(removeFromCartRequest());
    // Here you would typically make an API call to remove the item from the cart on the server
    // For now, we'll just simulate a successful removal
    dispatch(removeFromCartSuccess(productId));
  } catch (error) {
    console.error("Remove from cart error:", error);
    dispatch(removeFromCartFail(error.message));
  }
};

export const updateQuantity = (productId, quantity) => async (dispatch) => {
  try {
    dispatch(updateQuantityRequest());
    // Here you would typically make an API call to update the quantity on the server
    // For now, we'll just simulate a successful update
    dispatch(updateQuantitySuccess({ id: productId, quantity }));
  } catch (error) {
    console.error("Update quantity error:", error);
    dispatch(updateQuantityFail(error.message));
  }
};

export const clearCart = () => async (dispatch) => {
  try {
    dispatch(clearCartRequest());
    // Here you would typically make an API call to clear the cart on the server
    // For now, we'll just simulate a successful clear
    dispatch(clearCartSuccess());
  } catch (error) {
    console.error("Clear cart error:", error);
    dispatch(clearCartFail(error.message));
  }
};
