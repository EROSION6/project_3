export const Card = ({ title, info, icon }) => {
	return (
		<article className='w-full h-[250px] border border-[#FADCD9] rounded-xl bg-[rgba(255, 255, 255, 0.2)] shadow shadow-[#FADCD9] px-5 py-4 overflow-hidden sm:px-7 sm:py-6 xl:h-[230px]'>
			<div className='w-[60px] h-[60px]'>
				<img className='w-[40px] h-[40px]' src={icon} alt='' />
			</div>
			<div>
				<h4 className='text-[#564E4E] text-lg font-[500] mb-[10px] lg:text-base'>
					{title}
				</h4>
				<p className='text-[#564E4E] text-lg font-[400] mb-5 xl:text-sm'>
					{info}
				</p>
			</div>
			<footer>
				<button className='text-[#F8B8B0] text-lg font-[400] outline-none hover:text-[#aa4a4a] duration-150 ease-in'>
					more info
				</button>
			</footer>
		</article>
	)
}
