import fon from '../../assets/fon.png'
import { BlockInfo } from '../../components/BlockInfo/BlockInfo'
import { BlockInfoRoom } from '../../components/BlockInfoRoom/BlockInfoRoom'
import { Card } from '../../components/Card/Card'
import { Comment } from '../../components/Comment/Comment'
import { Product } from '../../components/Product/Product'
import { SectionTitleHome } from '../../components/SectionTitleHome/SectionTitleHome'
import styles from './Home.module.scss'
import { cards } from './date'

const Home = () => {
	return (
		<main>
			<section className='relative w-full h-screen'>
				<img src={fon} alt='fon' className='w-full h-full object-cover' />
				<SectionTitleHome />
			</section>
			<section className='w-full mt-20 px-7 relative overflow-hidden'>
				<h2 className='text-[#564E4E] text-4xl font-[500] mb-4'>
					Why Choosing Us
				</h2>
				<div className={`grid grid-cols-4 lg:grid-cols-2 gap-3 ${styles.grid}`}>
					{cards.map(card => (
						<Card key={card.title} {...card} />
					))}
				</div>
				<BlockInfo />
			</section>
			<section className='mt-[200px] px-7 md:px-2'>
				<Product />
			</section>
			<section className='mt-56 px-7 md:px-2'>
				<Comment />
			</section>
			<section className='w-full relative overflow-hidden mt-56 px-7 md:px-2 h-screen'>
				<BlockInfoRoom/>
			</section>
		</main>
	)
}

export default Home
