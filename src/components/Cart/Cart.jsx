import { observer } from 'mobx-react-lite'
import cart from '../../store/cart'
import { CartCard } from './CartCard'

export const Cart = observer(({ cartOpen }) => {
	return (
		<div
			className={`absolute m-2 w-[300px] h-[300px] bg-white border border-[#FADCD9] rounded-lg p-3 overflow-hidden duration-300 ease-in-out z-50 ${
				cartOpen ? 'opacity-100 right-0' : 'opacity-0 -right-full'
			}`}
		>
			<div className='h-full overflow-y-scroll space-y-3'>
				{cart.cart.map(card => (
					<CartCard key={card.id} {...card} />
				))}
			</div>
		</div>
	)
})
