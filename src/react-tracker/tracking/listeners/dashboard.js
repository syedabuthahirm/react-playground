function trackAddToCart(event, eventsHistory) {
  console.log("Event", event);
  // window.dataLayer.push(event);
  return event;
}

// Allow `trackAddToCart` to listen only on `ADD_TO_CART` event
// trackAddToCart.eventType = "ADD_TO_CART";

export default trackAddToCart;
