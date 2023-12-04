import { NavLink } from "react-router-dom";
import links from "../utils/links2";
import { useDashboardContext } from "../pages/DashboardLayout";

const NavLinks2 = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <ul className="nav-links text-3xl ">
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className="hover:text-primary nav-link my-4 active:text-cyan-500 "
          >
            <span className="icon w-10 mx-5 ">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </ul>
  );
};
export default NavLinks2;
