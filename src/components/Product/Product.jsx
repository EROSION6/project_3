import { CardProduct } from './CardProduct'
import { products } from './data'

export const Product = () => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<h2 className='text-[#564E4E] text-4xl font-[500] mb-12'>
				Featured Product
			</h2>
			<div className='w-full grid grid-cols-4 gap-5 lgsm:grid-cols-2'>
				{products.map(product => (
					<CardProduct key={product.title} {...product} />
				))}
			</div>
		</div>
	)
}
