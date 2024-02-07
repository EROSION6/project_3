import { SliderComment } from './SliderComment'

export const Comment = () => {
	return (
		<div className='flex flex-col justify-center items-center mb-24'>
			<h2 className='text-[#564E4E] text-4xl font-[500] mb-24'>
				What they say about our services
			</h2>
			<div className='w-full overflow-hidden'>
				<SliderComment />
			</div>
		</div>
	)
}
