import Logo from "../brand/Logo";
import MenuIcon from "../icons/MenuIcon";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <Logo imgWidth="w-8" textSize="text-2xl" gap="gap-1" />
      <MenuIcon />
    </header>
  );
}
