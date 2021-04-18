import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RenderMovieCard from './MovieCard';
import PropTypes from 'prop-types';

const renderList = (list, nowShowing = true) =>
	list.map((item, index) => (
		<div key={index}>{RenderMovieCard(item, nowShowing)}</div>
	));
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

const list = [
	{
		maPhim: 1315,
		tenPhim: 'LỪA ĐỂU GẶP LỪA ĐẢO',
		biDanh: 'lua-deu-gap-lua-dao',
		trailer: 'https://www.youtube.com/embed/T36HGZagV5w',
		hinhAnh:
			'http://movie0706.cybersoft.edu.vn/hinhanh/lua-deu-gap-lua-dao_gp02.jpg',
		moTa:
			'Lừa Đểu Gặp Lừa Đảo xoay quanh lần gặp gỡ "oan gia" giữa siêu lừa đảo Tower cùng cô nàng bị lừa tình Ina, cả 2 sẽ cùng hợp tác trong phi vụ "lừa lại tên lừa đểu" Petch - tên bạn trai bội bạc của Ina bằng những chiêu trò lừa đảo không hồi kết.',
		maNhom: 'GP02',
		ngayKhoiChieu: '2021-02-24T00:00:00',
		danhGia: 10,
	},
	{
		maPhim: 1330,
		tenPhim: 'CHỊ MƯỜI BA: BA NGÀY SINH TỬ',
		biDanh: 'chi-muoi-ba-ba-ngay-sinh-tu',
		trailer: 'https://www.youtube.com/embed/Ncwkodt5dA4',
		hinhAnh:
			'http://movie0706.cybersoft.edu.vn/hinhanh/chi-muoi-ba-ba-ngay-sinh-tu_gp02.jpg',
		moTa:
			'Chị Mười Ba đưa Kẽm Gai, tay đàn em cũ vừa mới ra tù, lên Đà Lạt để làm việc cho tiệm Gara của mình. Tại đây, Kẽm Gai dường như đã tìm lại được sự bình yên và hạnh phúc. Tuy vậy, anh sớm trở thành đối tượng bị tình nghi giết hại Đức Mát - em trai của đại ca Thắng Khùng khét tiếng đất Đà Lạt - và phải trốn chạy. Với thời hạn chỉ ba ngày, liệu Chị Mười Ba có minh oan được cho Kẽm Gai và cứu anh em An Cư Nghĩa Đoàn khỏi mối đe doạ mới? Liệu có bí mật khủng khiếp nào khác đang được che giấu? Tất cả sẽ được hé lộ vào ngày 25/12/2020',
		maNhom: 'GP02',
		ngayKhoiChieu: '2021-02-22T00:00:00',
		danhGia: 10,
	},
	{
		maPhim: 1345,
		tenPhim: 'Inside Out',
		biDanh: 'inside-out',
		trailer: 'https://www.youtube.com/embed/seMwpP0yeu4',
		hinhAnh: 'http://movie0706.cybersoft.edu.vn/hinhanh/insideout.jpg',
		moTa:
			'After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.',
		maNhom: 'GP02',
		ngayKhoiChieu: '2021-02-24T00:00:00',
		danhGia: 10,
	},
	{
		maPhim: 1360,
		tenPhim: 'Home',
		biDanh: 'home',
		trailer: 'https://www.youtube.com/embed/MyqZf8LiWvM',
		hinhAnh: 'http://movie0706.cybersoft.edu.vn/hinhanh/home.jpg',
		moTa:
			'Oh, an alien on the run from his own people, lands on Earth and makes friends with the adventurous Tip, who is on a quest of her own.',
		maNhom: 'GP02',
		ngayKhoiChieu: '2019-07-29T00:00:00',
		danhGia: 5,
	},
	{
		maPhim: 1375,
		tenPhim: 'Batman v Superman: Dawn of Justice',
		biDanh: 'batman-v-superman-dawn-of-justice',
		trailer: 'https://www.youtube.com/embed/0WWzgGyAH6Y',
		hinhAnh: 'http://movie0706.cybersoft.edu.vn/hinhanh/batmanvssuperman.jpg',
		moTa:
			"Fearing the actions of a god-like Super Hero left unchecked, Gotham City's own formidable, forceful vigilante takes on Metropolis most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it's ever known before.",
		maNhom: 'GP02',
		ngayKhoiChieu: '2019-07-29T00:00:00',
		danhGia: 5,
	},
	{
		maPhim: 1390,
		tenPhim: 'Ant-Man',
		biDanh: 'ant-man',
		trailer: 'https://www.youtube.com/embed/1HpZevFifuo',
		hinhAnh: 'http://movie0706.cybersoft.edu.vn/hinhanh/antman.jpg',
		moTa:
			'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.',
		maNhom: 'GP02',
		ngayKhoiChieu: '2019-07-29T00:00:00',
		danhGia: 5,
	},
	{
		maPhim: 1405,
		tenPhim: 'Jurassic World',
		biDanh: 'jurassic-world',
		trailer: 'https://www.youtube.com/embed/RFinNxS5KN4',
		hinhAnh: 'http://movie0706.cybersoft.edu.vn/hinhanh/jurassicworld.jpg',
		moTa:
			"A new theme park is built on the original site of Jurassic Park. Everything is going well until the park's newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.",
		maNhom: 'GP02',
		ngayKhoiChieu: '2019-07-29T00:00:00',
		danhGia: 5,
	},
	{
		maPhim: 1420,
		tenPhim: 'Fantastic Four',
		biDanh: 'fantastic-four',
		trailer: 'https://www.youtube.com/embed/AAgnQdiZFsQ',
		hinhAnh: 'http://movie0706.cybersoft.edu.vn/hinhanh/fantasticfour.jpg',
		moTa:
			'Four young outsiders teleport to an alternate and dangerous universe which alters their physical form in shocking ways. The four must learn to harness their new abilities and work together to save Earth from a former friend turned enemy.',
		maNhom: 'GP02',
		ngayKhoiChieu: '2019-07-29T00:00:00',
		danhGia: 5,
	},
	{
		maPhim: 1435,
		tenPhim: 'Mad Max: Fury Road',
		biDanh: 'mad-max-fury-road',
		trailer: 'https://www.youtube.com/embed/hEJnMQG9ev8',
		hinhAnh: 'http://movie0706.cybersoft.edu.vn/hinhanh/madmax.jpg',
		moTa:
			'In a stark desert landscape where humanity is broken, two rebels just might be able to restore order: Max, a man of action and of few words, and Furiosa, a woman of action who is looking to make it back to her childhood homeland.',
		maNhom: 'GP02',
		ngayKhoiChieu: '2019-07-29T00:00:00',
		danhGia: 5,
	},
	{
		maPhim: 1450,
		tenPhim: 'True Detective',
		biDanh: 'true-detective',
		trailer: 'https://www.youtube.com/embed/TXwCoNwBSkQ',
		hinhAnh: 'http://movie0706.cybersoft.edu.vn/hinhanh/truedetective.jpg',
		moTa:
			'An anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.',
		maNhom: 'GP02',
		ngayKhoiChieu: '2019-07-29T00:00:00',
		danhGia: 5,
	},
	{
		maPhim: 1465,
		tenPhim: 'The Longest Ride',
		biDanh: 'the-longest-ride',
		trailer: 'https://www.youtube.com/embed/FUS_Q7FsfqU',
		hinhAnh: 'http://movie0706.cybersoft.edu.vn/hinhanh/thelongestride.jpg',
		moTa:
			'After an automobile crash, the lives of a young couple intertwine with a much older man, as he reflects back on a past love.',
		maNhom: 'GP02',
		ngayKhoiChieu: '2019-07-29T00:00:00',
		danhGia: 5,
	},
	{
		maPhim: 1480,
		tenPhim: 'The Walking Dead',
		biDanh: 'the-walking-dead',
		trailer: 'https://www.youtube.com/embed/R1v0uFms68U',
		hinhAnh: 'http://movie0706.cybersoft.edu.vn/hinhanh/thewalkingdead.jpg',
		moTa:
			"Sheriff's Deputy Rick Grimes leads a group of survivors in a world overrun by zombies.",
		maNhom: 'GP02',
		ngayKhoiChieu: '2019-07-29T00:00:00',
		danhGia: 5,
	},
	{
		maPhim: 1495,
		tenPhim: 'Southpaw',
		biDanh: 'southpaw',
		trailer: 'https://www.youtube.com/embed/Mh2ebPxhoLs',
		hinhAnh: 'http://movie0706.cybersoft.edu.vn/hinhanh/southpaw.jpg',
		moTa:
			'Boxer Billy Hope turns to trainer Tick Willis to help him get his life back on track after losing his wife in a tragic accident and his daughter to child protection services.',
		maNhom: 'GP02',
		ngayKhoiChieu: '2019-07-29T00:00:00',
		danhGia: 5,
	},
	{
		maPhim: 1510,
		tenPhim: 'Specter',
		biDanh: 'specter',
		trailer: 'https://www.youtube.com/embed/LTDaET-JweU',
		hinhAnh: 'http://movie0706.cybersoft.edu.vn/hinhanh/spectre.jpg',
		moTa:
			"A cryptic message from Bond's past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
		maNhom: 'GP02',
		ngayKhoiChieu: '2019-07-29T00:00:00',
		danhGia: 5,
	},
	{
		maPhim: 1525,
		tenPhim: 'Avengers: Cuộc Chiến Vô Cực1',
		biDanh: 'avengers-cuoc-chien-vo-cuc1',
		trailer: 'https://www.youtube.com/embed/DKqu9qc-5f4',
		hinhAnh:
			'http://movie0706.cybersoft.edu.vn/hinhanh/avengers-cuoc-chien-vo-cuc1_gp02.jpg',
		moTa:
			'Sau chuyến hành trình độc nhất vô nhị không ngừng mở rộng và phát triển vụ trũ điện ảnh Marvel, bộ phim Avengers: Cuộc Chiến Vô Cực sẽ mang đến màn ảnh trận chiến cuối cùng khốc liệt nhất mọi thời đại. Biệt đội Avengers và các đồng minh siêu anh hùng của họ phải chấp nhận hy sinh tất cả để có thể chống lại kẻ thù hùng mạnh Thanos trước tham vọng hủy diệt toàn bộ vũ trụ của hắn',
		maNhom: 'GP02',
		ngayKhoiChieu: '2021-01-25T00:00:00',
		danhGia: 10,
	},
	{
		maPhim: 1540,
		tenPhim: 'TAY XẠ THỦ',
		biDanh: 'tay-xa-thu',
		trailer: 'https://www.youtube.com/embed/wiFXHfW-ddA',
		hinhAnh: 'http://movie0706.cybersoft.edu.vn/hinhanh/tay-xa-thu_gp02.jpg',
		moTa:
			'Jim - một cựu thủy quân lục chiến tại biên giới bang Arizona vô tình bị cuốn theo cuộc truy lùng của băng Vasquez khi cố giúp đưa Miguel thoát khỏi chúng. Nhiệm vụ giờ đây của Jim là "vận chuyển" Miguel về Chicago cùng gia đình trước sự truy giết máu lạnh của băng đảng Vasquez.',
		maNhom: 'GP02',
		ngayKhoiChieu: '2021-01-24T23:15:15.24',
		danhGia: 10,
	},
	{
		maPhim: 4125,
		tenPhim: 'Ròm',
		biDanh: 'rom',
		trailer: 'https://www.youtube.com/watch?v=XRm1P7oGpMQ',
		hinhAnh: 'http://movie0706.cybersoft.edu.vn/hinhanh/rom_gp02.jpg',
		moTa:
			'Lấy bối cảnh từ một khu chung cư cũ đang chờ giải tỏa tại Sài Gòn, Ròm kể câu chuyện về cuộc sống của những người dân lao động nơi đây. Họ đều chơi số đề với hy vọng kiếm được một khoản tiền lớn để đổi đời. Ròm là cậu bé làm “cò đề” để kiếm sống qua ngày, chuyên tư vấn cho người dân những con số may mắn để họ có cơ may trúng đề. Một hôm cậu giúp bà già kia trúng đề lớn nên được mọi người tin tưởng nhưng sau nhiều lần thua cậu bị người dân mất tin tưởng',
		maNhom: 'GP02',
		ngayKhoiChieu: '2020-10-11T00:00:00',
		danhGia: 10,
	},
	{
		maPhim: 5956,
		tenPhim: 'phim 500',
		biDanh: 'phim-500',
		trailer: 'https://www.youtube.com/watch?v=43ecnyXFyoE',
		hinhAnh: 'http://movie0706.cybersoft.edu.vn/hinhanh/phim-500_gp02.jpg',
		moTa: 'phim 500',
		maNhom: 'GP02',
		ngayKhoiChieu: '2020-10-10T00:00:00',
		danhGia: 10,
	},
	{
		maPhim: 6078,
		tenPhim: 'death Stranding',
		biDanh: 'death-stranding',
		trailer: 'https://www.youtube.com/embed/tCI396HyhbQ',
		hinhAnh:
			'http://movie0706.cybersoft.edu.vn/hinhanh/death-stranding_gp02.jpg',
		moTa:
			'From legendary game creator Hideo Kojima comes an all-new, genre-defying experience. Sam Bridges must brave a world utterly transformed by the Death Stranding. Carrying the disconnected remnants of our future in his hands, he embarks on a journey to reconnect the shattered world one step at a time.',
		maNhom: 'GP02',
		ngayKhoiChieu: '2021-04-02T20:21:06.027',
		danhGia: 10,
	},
	{
		maPhim: 6079,
		tenPhim: 'Bố già',
		biDanh: 'bo-gia',
		trailer: 'https://www.youtube.com/embed/jluSu8Rw6YE',
		hinhAnh: 'http://movie0706.cybersoft.edu.vn/hinhanh/bo-gia_gp02.jpg',
		moTa:
			'Bố già là một bộ phim điện ảnh hài tình cảm của Việt Nam do Trấn Thành Town, HKFilm và Galaxy Studio sản xuất, dựa trên bộ phim chiếu mạng cùng tên của Trấn Thành được phát hành vào dịp Tết Nguyên Đán 2020',
		maNhom: 'GP02',
		ngayKhoiChieu: '2021-10-02T00:00:00',
		danhGia: 10,
	},
];

const MovieList = (data = list, nowShowing = true) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    rows: 2,
    slidesPerRow: 4,
    slidesToScroll: 1,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div style={{margin: '0 auto', width: '95%'}}>
      <Slider {...settings}>
        {renderList(list, nowShowing)}
      </Slider>
    </div>
  );


}
export default MovieList;
MovieList.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object),
};
