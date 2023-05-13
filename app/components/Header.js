import { getServerSession } from "next-auth";
import HeaderNav from "./HeaderNav";
import NavToggleBtn from "./NavToggleBtn";
import PageLogo from "./PageLogo";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Header() {
  let session = await getServerSession(authOptions);

  return (
    <div className="flex justify-between">
      <NavToggleBtn />
      <PageLogo />
      <HeaderNav session={session} />
    </div>
  );
}
