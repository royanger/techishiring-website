import Logo from "components/atoms/logo/logo";
import HeaderText from "components/atoms/typography/heading-text";
import MainNav from "components/molecules/main-nav/main-nav";
import useMainNav from "lib/hooks/use-nav";

const Header = () => {
  const navList = useMainNav();

  return (
    <header className="sticky top-0 z-10 flex h-24 w-full items-center justify-between border-b bg-white px-4 py-2">
      <div className="flex items-center">
        <Logo />
        <HeaderText
          className="hidden w-[440px] px-5 md:block"
          level="h1"
          size="md"
        >
          &apos;Where great jobs and great Engineers go to find each
          other!&apos;
        </HeaderText>
      </div>
      <MainNav navList={navList} />
    </header>
  );
};

export default Header;
