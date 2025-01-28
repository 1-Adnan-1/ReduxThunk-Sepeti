import { v4 } from "uuid";
import api from "../../utils/api";
import ActionTypes from "../actionTypes";

export const addToBasket = (product, rest) => (dispatch) => {
  const newItem = {
    id: v4(),
    productId: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    restaurantName: rest.name,
    amount: 1,
  };

  api.post("/cart", newItem).then(() =>
    dispatch({
      type: ActionTypes.ADD_TO_CART,
      payload: newItem,
    })
  );
};

export const updateItem = (id, newAmount) => (dispatch) => {
  api
    .patch(`/cart/${id}`, { amount: newAmount })
    .then((res) => {
      console.log(res);
      dispatch({
        type: ActionTypes.UPDATE_CART,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({ type: ActionTypes.ERROR_CART, payload: err.message })
    );
};

export const deleteItem = (id) => (dispatch) => {
  api.delete(`/cart/${id}`).then(() =>
    dispatch({
      type: ActionTypes.DELETE_FROM_CART,
      payload: id,
    })
  );
};
