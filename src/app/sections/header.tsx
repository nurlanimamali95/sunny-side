import Nav from "@/app/components/nav";
import LogoHeader from "@/app/assets/logoHeader";

export default function Header() {
  return (
    <div className="px-2 md:px-10 ">
      <div className="flex justify-between items-center fixed top-0 left-0 right-0 lg:static z-30 bg-white-yellow px-2 md:px-10">
        <LogoHeader />
        <Nav />
      </div>
    </div>
  );
}
