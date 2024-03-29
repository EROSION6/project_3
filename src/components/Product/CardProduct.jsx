import { observer } from 'mobx-react-lite'
import star from '../../assets/svg/Star.svg'
import cart from '../../store/cart'

export const CardProduct = observer(({ id, title, image }) => {
	const addedCard = () => {
		const card = { id, title, image }
		cart.addCart(card)
	}

	return (
		<div className='relative p-5 w-full sm:w-auto h-[450px] bg-transparent rounded-lg sm:h-auto hover:bg-black hover:bg-opacity-60 duration-200 ease-out'>
			<div className='w-full h-[300px] flex items-center justify-center sm:h-[200px]'>
				<img className='w-[250px] h-[300px]' src={image} alt={title} />
				<div className='absolute top-[50%]'>
					<button
						type='button'
						onClick={addedCard}
						className='px-4 py-3 bg-[#c4c4c4] rounded-xl text-[#564E4E] text-sm sm:px-2 sm:py-2 sm:text-xs'
					>
						Add Product
					</button>
				</div>
			</div>
			<div className='w-full flex flex-col space-y-2'>
				<h5 className='text-lg text-[#564E4E] font-[400]'>{title}</h5>
				<b className='text-sm text-[#c4c4c4]'>Category</b>
				<span>
					<img src={star} alt='star' />
				</span>
			</div>
		</div>
	)
})
