import IconRatingHalf from "../assets/rating-half.png";
import IconRating from "../assets/rating.png";
import Img from "../assets/Doctor_Slump.jpg";
import IconPlay from "../assets/play-button.png";

const Banner = () => {
  return <div className="w-full h-[700px] bg-banner bg-center 
  bg-no-repeat bg-cover relative">
    <div className="absolute w-full h-full top-0 left-0 bg-black opacity-35"></div>
    <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4
    relative z-20">
      <div className="flex flex-col space-y-5 items-baseline w-[50%]">
        <p className="text-white bg-gradient-to-r from-blue-300
        to-blue-800 text-md py-2 px-3">TV Show</p>

        <div className="flex flex-col space-y-2">
          <h2 className="text-white text-5xl font-bold">Nốt Trầm Đời Bác Sĩ</h2>
          <div className="flex items-center space-x-3">
            <img src={IconRating} alt="rating" className='w-8 h-8'/>
            <img src={IconRating} alt="rating" className='w-8 h-8'/>
            <img src={IconRating} alt="rating" className='w-8 h-8'/>
            <img src={IconRating} alt="rating" className='w-8 h-8'/>
            <img src={IconRatingHalf} alt="ratinghalf" className='w-8 h-8'/>
          </div>

          <p className="text-white">Nốt Trầm Đời Bác Sĩ là bộ phim truyền hình Hàn Quốc thuộc thể loại hài - lãng mạn.
            Nội dung phim xoay quanh câu chuyện của 2 bác sĩ tài năng là Nam Ha Neul của Park Shin Hye thủ vai và Yeo Jung Woo do Park Hyung Sik đóng.
            Tuy nhiên, cả 2 lại đang trải qua giai đoạn khó khăn nhất trong cuộc đời, khi sự nghiệp và cuộc sống của họ cùng gặp những thử 
            thách lớn. 
          </p>

          <p className="text-white">            
            Hai người vô tình gặp lại nhau và cùng chia sẻ những tổn thương, từ đó tìm thấy niềm an ủi và sự chữa lành trong mối quan hệ mới đầy ý nghĩa.
          </p>

          <div className="flex items-center space-x-4">
            <button className="p-3 text-white bg-purple-500 font-bold
            text-sm">Chi Tiết</button>

            <button className="p-3 text-white bg-green-500 font-bold
            text-sm">Xem Phim Ngay</button>
          </div>
        </div>
      </div>

      <div className="w-[50%] flex items-center justify-center">
        <div className="w-[350px] h-[500px] relative group cursor-pointer">
          <img src={Img} alt="temp" className="w-full h-full object-cover"/>

          <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm
          opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out">
            <img src={IconPlay} alt="playbutton" className="w-16 h-16 relative z-20"/>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Banner