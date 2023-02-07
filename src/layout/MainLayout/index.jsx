import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const closedWidth = 84;
const MainLayout = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const width = menuCollapse ? 84 : 305;
  const [openSidebar, setOpenSidebar] = useState(true);
  return (
    <>
      <div>
        <div>
          <SideBar menuIconClick={menuIconClick} menuCollapse={menuCollapse} />
        </div>
        <div>
          <div>
            <div
              style={{
                maxWidth: openSidebar
                  ? `calc(100% - ${width}px)`
                  : `calc(100% - ${closedWidth}px)`,
                marginLeft: openSidebar ? width : 0,
              }}
            >
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
