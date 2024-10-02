import Nav from "@/app/components/nav";
import LogoHeader from "@/app/assets/logoHeader";

export default function Header() {
  return (
    <div className="px-2 md:px-10">
      <div className="flex justify-between items-center">
        <LogoHeader />
        <Nav />
      </div>
    </div>
  );
}
