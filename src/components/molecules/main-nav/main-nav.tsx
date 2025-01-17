import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import { Fragment } from "react";
import NavLink from "components/atoms/nav-link/nav-link";
import Icon from "components/atoms/icon/icon";
import { FiMenu, FiExternalLink } from "react-icons/fi";
import { useRouter } from "next/router";

interface MainNavProps {
  navList: NavLink[];
}

const MainNav = ({ navList }: MainNavProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <nav aria-label="Main">
      <ul className="hidden gap-4 lg:flex">
        {navList.map((navItem, index) => (
          <Fragment key={index}>
            <li className="flex items-center gap-2">
              <NavLink
                activeLink={router.pathname === navItem.url}
                {...navItem}
              />
              {navItem.externalLink && (
                <Icon
                  Icon={FiExternalLink}
                  size={22}
                  iconAlt="external link for TechIsHiring newsletter"
                />
              )}
            </li>
          </Fragment>
        ))}
      </ul>
      <div
        aria-label="Menu"
        aria-expanded="false"
        className="flex h-[70px] items-center lg:hidden"
        onClick={onOpen}
      >
        <Icon Icon={FiMenu} iconAlt="Mobile Nav Icon" />
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>

            <DrawerBody>
              <ul>
                {navList.map((navItem, index) => (
                  <li
                    key={index}
                    className={`flex items-center justify-end gap-2 py-2 ${
                      index !== 0 && "border-t"
                    }`}
                  >
                    <NavLink {...navItem} />
                    {navItem.externalLink && (
                      <Icon
                        Icon={FiExternalLink}
                        size={22}
                        iconAlt="external link for TechIsHiring newsletter"
                      />
                    )}
                  </li>
                ))}
              </ul>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};

export default MainNav;
