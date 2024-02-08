import { useState } from 'react'
import burger from '../../assets/svg/burger.svg'
import carts from '../../assets/svg/cart.svg'
import cross from '../../assets/svg/cross.svg'
import logo from '../../assets/svg/logo.svg'
import cart from '../../store/cart'
import { Cart } from '../Cart/Cart'

const navigation = ['Furniture', 'Shop', 'About Us', 'Contact']

const Navbar = () => {
	const [open, setOpen] = useState(false)
	const [cartOpen, setCartOpen] = useState(false)

	const totalCounterCart = cart.cart.reduce(
		(sum, count) => count.count + sum,
		0
	)

	return (
		<div className='fixed z-50 h- w-full bg-[#959392] bg-opacity-35 border-b border-[#c4c4c44b]'>
			<header className='w-full flex p-[20px] justify-between items-center'>
				<div className='relative'>
					<img className='w-[120px] h-[35px]' src={logo} alt='logo' />
				</div>
				<nav
					className={`flex space-x-16 md:fixed md:flex-col top-0 left-0 md:w-full md:bg-[#959392] items-center md:space-x-0 md:space-y-5 md:py-3 transition-all duration-200 ease-linear z-50 ${
						open ? 'md:top-0' : 'md:-top-[50%]'
					}`}
				>
					{navigation.map(link => (
						<a className='text-white text-xl font-[400]' key={link} href='#'>
							{link}
						</a>
					))}
					<button
						onClick={() => setOpen(false)}
						className='hidden absolute -bottom-12 w-[50px] h-[50px] md:block z-50'
					>
						<img
							className='hover:rotate-180 duration-300 ease-out '
							src={cross}
							alt='cross'
						/>
					</button>
				</nav>
				<div className='flex space-x-4 items-center '>
					<button
						onClick={() => setCartOpen(!cartOpen)}
						className='w-[30px] h-[30px] relative'
					>
						<span>
							<img src={carts} alt='cart' />
						</span>
						<span
							className={`absolute flex items-center justify-center top-0 w-4 h-4 bg-orange-200 rounded-full -right-1`}
						>
							<b className='text-[12px]'>{totalCounterCart}</b>
						</span>
					</button>
					<button
						onClick={() => setOpen(!open)}
						className='hidden w-[30px] h-[30px] md:block'
					>
						<img src={burger} alt='burger' />
					</button>
				</div>
			</header>
				<Cart cartOpen={cartOpen} />
		</div>
	)
}

export default Navbar
