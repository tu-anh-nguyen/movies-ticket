import React from 'react';
import Slider from 'react-slick';
import RenderMovieCard from './MovieCard';
import PropTypes from 'prop-types';

function renderList(list = [], nowShowing = true) {
	return list.map((item, index) => (
		<div key={index}>{RenderMovieCard(item, nowShowing)}</div>
	));
}
renderList.propTypes = {
	list: PropTypes.arrayOf(PropTypes.object),
	nowShowing: PropTypes.bool,
};
// function Arrow(props) {
//   let className = props.type === "next" ? "nextArrow" : "prevArrow";
//   let direction = props.type === "next" ? "right" : "left";
//   className += " arrow `slick-arrow--${direction} slider-arrow--${direction}`";
//   const char = props.type === "next" ? "👉" : "👈";
//   return (
//     <span className={className} onClick={props.onClick}>
//       {char}
//     </span>
//   );
// }
function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: 'block',
				background: '#0000002f',
				borderRadius: '50%',
			}}
			onClick={onClick}
		/>
	);
}

const MovieList = ({ data, nowShowing = true }) => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		arrows: true,
		centerMode: true,
		slidesToScroll: 1,
		centerPadding: '20px',
		nextArrow: <SamplePrevArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	return (
		<div style={{ margin: '0 auto', width: '90%' }}>
			<Slider {...settings}>{renderList(data, nowShowing)}</Slider>
		</div>
	);
};
export default MovieList;
MovieList.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object),
};
