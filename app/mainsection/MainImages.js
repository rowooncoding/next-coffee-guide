import Image from "next/image";
import GuideDetail from "./GuideDetail";
import Rullcoffeeimg from "/public/룰커피.svg";
import Centercoffeeimg from "/public/센터커피.svg";
import Centercoffeeimg2 from "/public/센터커피2.svg";
import Pastellcoffeeimg from "/public/파스텔.svg";
import BeanbrothersCoffeeimg from "/public/빈브라더스.svg";

export default function MainImages() {
  let images = [
    {
      className:
        "w-[100%] h-[100%] object-cover lg:hover:scale-110 transition-transform ease-in-out duration-500 cursor-pointer",
      src: Rullcoffeeimg,
      link: "/",
      alt: "룰커피 레시피 링크 이미지",
      key: "rull",
      title: "40 80 40 레시피",
      content: "정인성 바리스타님의 중강배전 국룰 레시피",
    },
    {
      className:
        "w-[100%] h-[100%] object-cover lg:hover:scale-110 transition-transform ease-in-out duration-500 cursor-pointer",
      src: Centercoffeeimg,
      link: "/",
      alt: "센터커피 레시피 링크 이미지",
      key: "center",
      title: "센터푸어 레시피",
      content: "박상호 바리스타님의 대표 레시피",
    },
    {
      className:
        "w-[100%] h-[100%] object-cover lg:hover:scale-110 transition-transform ease-in-out duration-500 cursor-pointer",
      src: Pastellcoffeeimg,
      link: "/",
      alt: "파스텔커피 레시피 링크 이미지",
      key: "pastel",
      title: "파스텔 커피 원푸어 레시피",
      content: "다른 레시피들에 비해서 간편한 원푸어 레시피",
    },
    {
      className:
        "w-[100%] h-[100%] object-cover lg:hover:scale-110 transition-transform ease-in-out duration-500 cursor-pointer",
      src: Rullcoffeeimg,
      link: "/",
      alt: "룰커피 레시피 링크 이미지",
      key: "rull2",
      title: "룰커피 40 80 40 레시피",
      content: "기억하기 쉬운 초보자를 위한 레시피",
    },
    {
      className:
        "w-[100%] h-[100%] object-cover lg:hover:scale-110 transition-transform ease-in-out duration-500 cursor-pointer",
      src: BeanbrothersCoffeeimg,
      link: "/",
      alt: "빈브라더스 레시피 링크 이미지",
      key: "bean",
      title: "40 60 60 60 레시피",
      content: "정인성 바리스타님의 약배전 국룰 레시피",
    },
    {
      className:
        "w-[100%] h-[100%] object-cover lg:hover:scale-110 transition-transform ease-in-out duration-500 cursor-pointer",
      src: Centercoffeeimg2,
      link: "/",
      alt: "센터커피 레시피 링크 이미지",
      key: "center2",
      title: "게이세 센터푸어 레시피",
      content: "추출력을 높힌 게이샤를 위한 센터푸어 레시피",
    },
  ];

  return (
    <>
      {images.map((list) => {
        return (
          <GuideDetail>
            <Image
              className={list.className}
              src={list.src}
              alt={list.alt}
              key={list.key}
            />
            <div className="text-2xl mt-[20px] text-[#675D50]">
              {list.title}
            </div>
            <div className="mt-[10px] text-base text-[#A99072]">
              {list.content}
            </div>
          </GuideDetail>
        );
      })}
    </>
  );
}
