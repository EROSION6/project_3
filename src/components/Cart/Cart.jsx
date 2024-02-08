export const Cart = ({ cartOpen }) => {
	return (
		<div
			className={`fixed right-5 w-[300px] h-[300px] bg-white border border-[#FADCD9] rounded-lg p-3 overflow-hidden duration-300 ease-in-out ${
				cartOpen ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<div className='h-full overflow-y-scroll space-y-3'></div>
		</div>
	)
}
