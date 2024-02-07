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
			slidesPerView={3}
			pagination={{ clickable: true }}
			breakpoints={{
				1024: {
					width: 640,
					slidesPerView: 1,
				},
				768: {
					width: 768,
					slidesPerView: 2,
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
