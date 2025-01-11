import "./SideBar.Styles.css";
import { NavLink } from "../NavLink/NavLink.Component";
import { useSelector, useDispatch } from "react-redux";

export const SideBar = () => {
  const SideBar = useSelector((state) => state.navigation.sidebarOff);
  const dispatchSideBar = useDispatch();
  return (
    <div className={`sidebar ${SideBar ? "sidebar-off" : ""}`}>
      <NavLink
        text="Reviews"
        url={"/reviews"}
        isOnSideBar
        linkName={"reviews"}
      />
      <br />
      <NavLink
        text="Become an Intern"
        url={"/"}
        isOnSideBar
        linkName={"becomeAnIntern"}
      />
      <br />
      <NavLink text="Login" url={"/login"} isOnSideBar linkName={"login"} />
    </div>
  );
};
