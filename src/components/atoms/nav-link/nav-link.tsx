import DefaultText from "../typography/default-text";

type NavLinkProps = NavLink;

const NavLink = ({ url, text, activeLink, externalLink }: NavLinkProps) => {
  return (
    <a
      className={`${activeLink ? "border-b-2 border-black" : ""}`}
      href={url}
      target={externalLink ? "_blank" : "_self"}
      rel="noreferrer"
    >
      <DefaultText fontSize="xl" as="b">
        {text}
      </DefaultText>
    </a>
  );
};

export default NavLink;
