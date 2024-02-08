import { List } from '../../UI/List'
import logo from '../../assets/svg/logo.svg'

const features = ['Our Features', 'Pricing', 'Affiliate Program', 'Press Kit']
const support = ['Account', 'Help', 'Contact Us']
const legal = ['Privacy Policy', 'Terms of  Use']
const social = ['Twitter', 'Product Hunt', 'Instagram', 'Github ']

const lists = [
	{ data: features, title: 'Features' },
	{ data: support, title: 'Support' },
	{ data: legal, title: 'Legal' },
	{ data: social, title: 'Social' },
]

export const Footer = () => {
	return (
		<footer className='w-full h-auto mt-52 bg-gradient-to-r from-[#535353] to-black p-7 flex justify-between md:flex-col'>
			<div>
				<img className='w-[230px] h-16 lg:w-[150px]' src={logo} alt='logo' />
			</div>
			<div className='w-[70%] flex justify-between md:mt-10 md:w-full sm:flex-col gap-10'>
				{lists.map(list => (
					<List
						container='flex flex-col space-y-5 lg:space-y-3'
						ul='space-y-4'
						titles='text-2xl text-[#FADCD9] font-[500] lg:text-xl'
						links='text-lg text-white font-[400] cursor-pointer hover:translate-x-1 duration-300 ease-in-out lg:text-base'
						key={list.title}
						title={list.title}
						data={list.data}
					/>
				))}
			</div>
		</footer>
	)
}
