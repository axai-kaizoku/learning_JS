import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';

const Product = ({ id, name, img, price }) => {
	const dispatch = useDispatch();
	return (
		<div
			key={id}
			className='product'>
			<img
				src={img}
				alt={name}
			/>
			<h3>{name}</h3>
			<h5>Price : {price} $</h5>
			<button onClick={() => dispatch(addItem({ name: name, price: price }))}>
				Add to Cart
			</button>
		</div>
	);
};

export default Product;
