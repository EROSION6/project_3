import search from '../../assets/svg/Search.svg'

export const SectionTitleHome = () => {
	return (
		<div className='flex flex-col items-center w-full absolute top-[30%] z-10 text-center px-2'>
			<h1 className='text-[58px] font-[600] text-white w-[800px] mb-[40px] md:w-full md:text-[35px]'>
				Make Your Interior More Minimaistic & Modern
			</h1>
			<p className='text-xl font-[400] text-white w-[600px] mb-[40px] sm:w-full sm:text-sm'>
				Bringing interiors to life, understanding the person or people living in
				a home is far greater need in design.
			</p>
			<div className='relative flex items-center'>
				<input
					className='py-4 pl-4 pr-16 w-[360px] bg-white bg-opacity-40 rounded-[30px] outline-none text-white text-sm font-[500] placeholder:text-white placeholder:text-sm placeholder:font-[500] sm:w-full'
					placeholder='Search Furniture'
					type='text'
				/>
				<button className='w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center absolute right-[10px]'>
					<img
						className='w-[28px] h-[28px] hover:scale-125 duration-200 ease-in'
						src={search}
						alt='search'
					/>
				</button>
			</div>
		</div>
	)
}
