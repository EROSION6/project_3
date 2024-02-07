import { useState } from 'react'
import arrow from '../../assets/svg/arrow-left-svgrepo-com.svg'
import foto from '../../assets/svg/image 5.svg'
import { Accordion } from './Accordion'
import { accrodions } from './date'

export const BlockInfo = () => {
	const [imagesOpen, setImageOpen] = useState(false)

	return (
		<div className='w-full mt-[200px] flex flex-row-reverse justify-between gap-16 overflow-hidden'>
			<div className='w-[750px] xl:w-0'>
				<img
					src={foto}
					alt='foto'
					onClick={() => setImageOpen(false)}
					className={`w-full h-[500px] transition-all duration-200 ease-out xl:absolute z-50 ${
						!imagesOpen ? '-right-[100%]' : '-right-[21%]'
					}`}
				/>
				<button
					onClick={() => setImageOpen(!imagesOpen)}
					className='hidden py-2 px-4 bg-[#564E4E] absolute right-0 top-[60%] z-40 xl:block'
				>
					<img src={arrow} alt='arrow' className='w-6 h-6' />
				</button>
			</div>
			<div className='w-[60%] xl:w-full'>
				<div className='flex flex-col space-y-6'>
					<h2 className='text-[#564E4E] text-4xl font-[500]'>
						Visualize your ideas with us
					</h2>
					<p className='text-lg text-[#564E4E] font-[400] xl:text-base'>
						We are ready to help you build and also realize the room design that
						you dream of, with our experts and also the best category
						recommendations from us
					</p>
					<p className='text-lg text-[#564E4E] font-[400] xl:text-base'>
						Modern design is a term in the design world that refers to a house
						with a clean design, simple color choices, the use of materials
						including metal, glass, and steel, and is usually accompanied by
						clean lines.
					</p>
				</div>
				{accrodions.map((acc, i) => (
					<Accordion key={i} {...acc} />
				))}
			</div>
		</div>
	)
}
