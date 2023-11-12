import React from 'react';
import { useSelector } from 'react-redux';
import { getItemSelector } from '../redux/slices/cartSlice';

const Cart = () => {
	const items = useSelector(getItemSelector);
	const totalPrice = items.reduce((a, b) => a + b.price, 0);
	console.log('Items:', items);
	return (
		<div className='cart-title'>
			<div className='cart'>
				<p>Product Count: {items.length}</p>
				<br />

				<p> Total Price: {totalPrice} $ </p>
			</div>
		</div>
	);
};

export default Cart;
