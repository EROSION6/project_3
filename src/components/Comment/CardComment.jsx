export const CardComment = ({ title, text, name, avatar }) => {
	return (
		<div className='bg-transparent w-full h-[300px] rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500 sm:px-3 sm:py-2'>
			<div className='mt-4'>
				<h2 className='text-lg text-gray-700 font-semibold hover:underline cursor-pointer'>
					{title}
				</h2>
				<p className='mt-4 text-sm text-gray-600'>{text}</p>
				<div className='flex justify-between items-center'>
					<div className='mt-4 flex items-center space-x-4 py-6 sm:mt-2 sm:py-3'>
						<div className=''>
							<img className='w-12 h-12 rounded-full' src={avatar} alt={name} />
						</div>
						<b className='text-sm font-semibold'>{name}</b>
					</div>
				</div>
			</div>
		</div>
	)
}
