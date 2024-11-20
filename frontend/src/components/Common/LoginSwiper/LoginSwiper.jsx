import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import './LoginSwiper.scss';
import Typography from '../Typography/Typography';
const LoginSwiper = ({ slides }) => (
	<Swiper pagination={true} modules={[Pagination]} className="mySwiper">
		{slides.map((slide, index) => (
			<SwiperSlide key={index}>
				<div className="LoginSwiper--TitlesDiv">
					<img className="LoginSwiper--Images" src={slide.img} alt={slide.title} />
					<Typography className="LoginSwiper--SwiperTitle">{slide.title}</Typography>
					<Typography className="LoginSwiper--SwiperSubTitle">{slide.subTitle}</Typography>
				</div>
			</SwiperSlide>
		))}
	</Swiper>
);
export default LoginSwiper;
