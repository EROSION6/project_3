import { observer } from 'mobx-react-lite'
import cross from '../../assets/svg/cross.svg'
import cart from '../../store/cart'

export const CartCard = observer(({ id, title, image }) => {
	const counter = cart.cart.find(c => c.id === id)

	return (
		<div className='flex w-full p-2 items-center gap-5 bg-transparent border-2 rounded-lg border-[#FADCD9]'>
			<div>
				<img className='w-20 h-20 rounded-md' src={image} alt={title} />
			</div>
			<div>
				<h4 className='text-base text-[#564E4E] font-[500]'>{title}</h4>
				<div className='text-base text-[#564E4E] font-[400]'>
					Quantity:{' '}
					<span className='font-[600]'>{counter ? counter.count : 0}</span>
				</div>
				<button
					onClick={() => cart.removeCart(id)}
					className='w-10 h-10 rounded-lg flex items-center justify-center hover:border border-red-600 duration-200 ease-linear'
				>
					<img className='w-8 h-8' src={cross} alt='cross' />
				</button>
			</div>
		</div>
	)
})
