import React from 'react';
import Cart from './components/Cart';
import Product from './components/Product';
import products from './products.json';

export function App() {
	return (
		<>
			<Cart />
			<div className='list'>
				{products.map((product) => (
					<Product
						key={product.id}
						{...product}
					/>
				))}
			</div>
		</>
	);
}
