import HeaderNav from "./HeaderNav";
import NavToggleBtn from "./NavToggleBtn";
import PageLogo from "./PageLogo";

export default function Header() {
  return (
    <div className="flex justify-between">
      <NavToggleBtn />
      <PageLogo />
      <HeaderNav />
    </div>
  );
}
