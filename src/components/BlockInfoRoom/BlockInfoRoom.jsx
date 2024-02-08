import { useState } from 'react'
import foto from '../../assets/Mask Group (1).jpeg'
import arrow_right from '../../assets/svg/arrow-right-336-svgrepo-com.svg'
import arrow from '../../assets/svg/right-arrow-svgrepo-com.svg'
import styles from '../../pages/Home/Home.module.scss'

export const BlockInfoRoom = () => {
	const [imageRoomOpen, setImageRoomOpen] = useState(false)

	return (
		<div className='w-full flex flex-row justify-between gap-16 overflow-hidden xl:gap-0'>
			<div className=''>
				<img
					src={foto}
					alt='foto'
					onClick={() => setImageRoomOpen(false)}
					className={`w-[85%] lg:w-[85%]  transition-all duration-200 ease-out xl:absolute z-10 ${
						!imageRoomOpen ? '-left-[100%]' : '-left-[21%]'
					}`}
				/>
				<button
					onClick={() => setImageRoomOpen(!imageRoomOpen)}
					className='hidden py-2 px-4 bg-[#564E4E] absolute left-0 top-[60%] z-10 xl:block'
				>
					<img src={arrow} alt='arrow' className='w-6 h-6' />
				</button>
			</div>
			<div className='w-[60%] xl:w-full xl:flex flex-col items-center'>
				<div className='flex flex-col space-y-6 xl:items-center  '>
					<h2 className={`text-[#564E4E] text-4xl font-[500] xl:text-center ${styles.title}`}>
						Visualize your ideas with us
					</h2>
					<p
						className={`text-lg text-[#564E4E] font-[400] xl:text-base xl:text-center ${styles.info}`}
					>
						We help people not only to make the room at home better, but we help
						people to feel a more homey and comfortable room, you don’t have to
						worry about the result because of these interiors are made by people
						who are professionals in their dields with an elegant and lucuriois
						style and with premium quality materials
						<br />
						<span className='font-[500] '>
							Contact us if you are interested in working with us
						</span>
					</p>
				</div>
				<div className='w-[400px] relative flex items-center mt-10 sm:w-full'>
					<input
						placeholder='Insert your email address'
						className='text-[#F79489] text-sm font-[400] py-4 pl-5 pr-16 w-full border-[2px] border-[#FADCD9] bg-transparent rounded-full placeholder:text-[#F79489] placeholder:text-sm placeholder:font-[400] focus:outline-none'
						type='email'
					/>
					<button className='absolute right-[12px] w-[40px] h-[40px] rounded-full bg-[#FADCD9] flex justify-center items-center'>
						<img
							className='w-4 h-5 hover:scale-125 duration-200 ease-in'
							src={arrow_right}
							alt='arrow_right'
						/>
					</button>
				</div>
			</div>
		</div>
	)
}
