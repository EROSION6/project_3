import { useState } from 'react'

export const Accordion = ({ title, info }) => {
	const [accordionOpen, setAccordionOpen] = useState(false)
	return (
		<div className='py-4 bg-transparent'>
			<div className='py-2'>
				<button
					onClick={() => setAccordionOpen(!accordionOpen)}
					className='flex justify-between w-full'
				>
					<span className='text-lg text-[#564E4E] font-[400]'>{title}</span>
					{!accordionOpen ? <span>+</span> : <span>-</span>}
				</button>
				<div
					className={`grid overflow-hidden transition-all duration-300 ease-out text-slate-600 text-sm ${
						accordionOpen
							? 'grid-rows-[1fr] opacity-100'
							: 'grid-rows-[0fr] opacity-0'
					}`}
				>
					<p className='overflow-hidden'>{info}</p>
				</div>
			</div>
		</div>
	)
}
