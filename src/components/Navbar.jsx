import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <AnchorLink href="#skills">
          <button className="font-bold">Skills</button>
        </AnchorLink>
      </li>
      <li>
        <AnchorLink href="#projects">
          <button className="font-bold">Projects</button>
        </AnchorLink>
      </li>
      <li>
        <AnchorLink href="#contact">
          <button className="font-bold">Contact</button>
        </AnchorLink>
      </li>
      <li>
        <NavLink to={"/resume"} className={"font-bold"}>
          Resume
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 rounded-xl shadow-xl mb-10">
      <div className="container mx-auto flex md:justify-center items-center">
        <div className="navbar-start flex items-center">
          <div className="dropdown z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 items-center justify-center"
            >
              {navLinks}
            </ul>
          </div>
          <div className="max-w-min">
            <div className="flex items-center">
              <Link to={"/"} className="btn btn-ghost text-xl font-bold">
                ASHIKUR RAHMAN ASHIK
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center justify-center">
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
