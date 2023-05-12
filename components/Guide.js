import GuideDetail from "./GuideDetail";
import SectionTitle from "./SectionTitle";

export default function Guide() {
  return (
    <div>
      <SectionTitle>브루잉 가이드 최신글</SectionTitle>
      <div className="mx-[126px] mt-[18px]  flex justify-between items-center gap-[10px]">
        <GuideDetail>
          <img
            className="w-[100%] h-[100%] object-cover"
            src="/룰커피.svg"
            alt="룰커피 이미지"
          />
        </GuideDetail>
        <GuideDetail>
          <img
            className="w-[100%] h-[100%] object-cover"
            src="/센터커피.svg"
            alt="센터커피 이미지"
          />
        </GuideDetail>
        <GuideDetail>
          <img
            className="w-[100%] h-[100%] object-cover"
            src="/파스텔.svg"
            alt="파스텔 이미지"
          />
        </GuideDetail>
      </div>
    </div>
  );
}
