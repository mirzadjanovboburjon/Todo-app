import { useNavigate } from "react-router-dom";
import { FaListUl } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

const Navbar = () => {
  const navigate = useNavigate();

  const pathMachRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <FaListUl
              className="icons"
              fill={pathMachRoute("/") ? "#3f43b3" : "#8f8f8f"}
            />
            <p
              className={
                pathMachRoute("/")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              All
            </p>
          </li>
          <li
            className="navbarListItem"
            onClick={() => navigate("/compleated-task")}
          >
            <FaCheck
              className="icons"
              fill={pathMachRoute("/compleated-task") ? "#3f43b3" : "#8f8f8f"}
            />
            <p
              className={
                pathMachRoute("/compleated-task")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Compleated
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Navbar;
