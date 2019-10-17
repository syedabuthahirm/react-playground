export function getAddToCartEvent(id, price) {
  return {
    type: "ADD_TO_CART",
    data: {
      id: id,
      price: price
    }
  };
}

export function getRemoveToCartEvent(id, price) {
  return {
    type: "REMOVE_TO_CART",
    data: {
      id: id,
      price: price
    }
  };
}

export function inputOnChange(value, label) {
  return {
    type: "INPUT_ONCHANGE",
    data: {
      value,
      label
    }
  };
}
