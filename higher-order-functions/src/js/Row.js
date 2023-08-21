export default (product, itemCost, quantity, cost) => `<div class="cart-row">
<div class="item">${product}</div>
<div class="perItemCost">${itemCost}</div>
<div class="quantity">${quantity}</div>
<div class="cost">${cost}</div>
</div>`;
