import Nav from "@/app/components/nav";
import Logo from "@/app/assets/logo";

export default function Header() {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <Logo />
        <Nav />
      </div>
    </div>
  );
}
