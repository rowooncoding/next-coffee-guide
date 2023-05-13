import MainImages from "./MainImages";
import SectionTitle from "./SectionTitle";

export default function GuideTitle() {
  return (
    <div>
      <SectionTitle>브루잉 가이드 최신글</SectionTitle>
      <div className="mx-[126px] mt-[18px] pb-[50px]  flex justify-between items-center flex-wrap gap-[10px 2%] gap-y-[80px]">
        <MainImages />
      </div>
    </div>
  );
}
