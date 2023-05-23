import Link from "next/link";

import { pageItems, dashboardItems } from "../../data/mainMenuData";
import { AdminPage } from "../../utils/utils";
import {
  isActiveLink,
  isActiveParentChild,
} from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";
import { auth } from "../../firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";

function AdminDashboard() {
  const router = useRouter();
  const admin = AdminPage();
  if (admin == true)
    return (
      <li
        className={`${
          isActiveParentChild(dashboardItems, router.asPath) ? "current" : ""
        } menu-item-has-children`}
      >
        <a href="#">
          <span className="mr-10">Dashboard</span>
          <i className="icon icon-chevron-sm-down" />
        </a>
        <ul className="subnav ">
          {dashboardItems.map((menu, i) => (
            <li
              key={i}
              className={
                isActiveLink(menu.routePath, router.asPath) ? "current" : ""
              }
            >
              <Link href={menu.routePath}>{menu.name}</Link>
            </li>
          ))}
        </ul>
      </li>
    );
}
const MainMenu = ({ style = "" }) => {
  const router = useRouter();

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li className={router.pathname === "/destinations" ? "current" : ""}>
          <Link href="/">Home</Link>
        </li>
        {/* End home page menu */}

        <li
          className={
            router.pathname === "/cruise/cruise-list-v1" ? "current" : ""
          }
        >
          <Link href="/cruise/cruise-list-v1">Cruises</Link>
        </li>
        {/* End Cruises single menu */}

        <li className={router.pathname === "/contact" ? "current" : ""}>
          <Link href="/contact">Contact</Link>
        </li>

        <li className={router.pathname === "/testimonies" ? "current" : ""}>
          <Link href="/testimonies">Testimonies</Link>
        </li>

        <li
          className={`${
            isActiveParentChild(pageItems, router.asPath) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Pages</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {pageItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, router.asPath) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li>
        {/* End pages items */}
        <AdminDashboard></AdminDashboard>
      </ul>
    </nav>
  );
};

export default MainMenu;
