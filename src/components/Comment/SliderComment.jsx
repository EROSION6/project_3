import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CardComment } from './CardComment'
import { comments } from './data'

export const SliderComment = () => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			slidesPerView={1}
			pagination={{ clickable: true }}
			breakpoints={{
				1860: {
					width: 1860,
					slidesPerView: 3,
				},
				1024: {
					width: 1024,
					slidesPerView: 2,
				},
				768: {
					width: 768,
					slidesPerView: 1,
				},
				425: {
					width: 425,
					slidesPerView: 1,
				},
			}}
		>
			{comments.map(comment => (
				<SwiperSlide key={comment.title}>
					<CardComment {...comment} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}
