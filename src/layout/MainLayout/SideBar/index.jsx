import React, { memo, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SideBar.css";
import logo from "../../../assets/images/pizza-shop.png";
import { ROUTE_DEFINATION } from "../../../utils/constants/route.constant";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { Badge } from "primereact/badge";
import "react-pro-sidebar/dist/css/styles.css";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "react-pro-sidebar";
import {
  pizza,
  logoutImg,
  cartImg,
  deliveryBike,
  leftArrow,
  rightArrow,
  switchIn,
  switchOut,
} from "../../../assets/images";
import { Button } from "primereact/button";
import { useSelector } from "react-redux";
const SideBar = ({ menuIconClick, menuCollapse }) => {
  const { itemSize } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <>
      <div id="header">
        <div className="" onClick={menuIconClick}>
          {!menuCollapse ? (
            <Button
              style={{
                height: "unset",
                width: "unset",
                boxShadow: "none !important",
                background: "none !important",
                border: "none !important",
              }}
              className="p-button-rounded p-button-secondary toggleBtnOpen"
              icon={
                <img
                  alt="img"
                  style={{
                    width: "15px",
                  }}
                  src={leftArrow}
                ></img>
              }
              aria-label="Bookmark"
            />
          ) : (
            <Button
              style={{
                height: "unset",
                width: "unset",
                boxShadow: "none !important",
                background: "none !important",
                border: "none !important",
              }}
              icon={
                <img
                  alt="img"
                  style={{
                    width: "15px",
                  }}
                  src={rightArrow}
                ></img>
              }
              className="p-button-rounded p-button-secondary toggleBtnClose"
              aria-label="Bookmark"
            />
          )}
        </div>
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <p>
                {menuCollapse ? (
                  <img
                    alt="img"
                    style={{ height: "50px", width: "50px" }}
                    src={logo}
                  ></img>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      direction: "column",
                    }}
                  >
                    <img
                      alt="img"
                      style={{ height: "50px", width: "50px" }}
                      src={logo}
                    ></img>
                    &nbsp;&nbsp;&nbsp;
                    <h2>Pizza Town</h2>
                  </div>
                )}
              </p>
            </div>
          </SidebarHeader>
          <SidebarContent className="mt-0">
            <Menu iconShape="none">
              <MenuItem
                onClick={() => navigate(ROUTE_DEFINATION.BASE)}
                active={pathName === ROUTE_DEFINATION.BASE}
                icon={
                  <img
                    alt="img"
                    style={{ height: "35px", width: "35px" }}
                    className={
                      pathName === ROUTE_DEFINATION.BASE &&
                      "sidebar-active-icon"
                    }
                    src={pizza}
                  />
                }
              >
                <p
                  style={{
                    fontSize: "20px",
                    marginLeft: "20px",
                    color:
                      pathName === ROUTE_DEFINATION.BASE ? "white" : "black",
                  }}
                >
                  Store
                </p>
              </MenuItem>
              <MenuItem
                onClick={() => navigate(ROUTE_DEFINATION.ORDERS)}
                active={pathName.includes(ROUTE_DEFINATION.ORDERS)}
                icon={
                  <img
                    alt="img"
                    style={{ height: "35px", width: "35px" }}
                    className={
                      pathName === ROUTE_DEFINATION.ORDERS &&
                      "sidebar-active-icon"
                    }
                    src={deliveryBike}
                  />
                }
              >
                <p
                  style={{
                    fontSize: "20px",
                    marginLeft: "20px",
                    color: pathName.includes(ROUTE_DEFINATION.ORDERS)
                      ? "white"
                      : "black",
                  }}
                >
                  Orders
                </p>
              </MenuItem>

              <MenuItem
                //className="p-overlay-badge"
                active={pathName.includes(ROUTE_DEFINATION.CART)}
                onClick={() => navigate(ROUTE_DEFINATION.CART)}
                icon={
                  <img
                    alt="img"
                    style={{ height: "35px", width: "35px" }}
                    className={
                      pathName === ROUTE_DEFINATION.CART &&
                      "sidebar-active-icon"
                    }
                    src={cartImg}
                  />
                }
              >
                <p
                  style={{
                    fontSize: "20px",
                    marginLeft: "20px",
                    color: pathName.includes(ROUTE_DEFINATION.CART)
                      ? "white"
                      : "black",
                  }}
                >
                  Cart &nbsp;&nbsp;&nbsp;&nbsp;<Badge value={itemSize}></Badge>
                </p>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu>
              <MenuItem
                active={pathName.includes("/setting")}
                // onClick={() => navigate("/setting")}
                icon={
                  <img
                    alt="img"
                    style={{ height: "35px", width: "35px" }}
                    src={logoutImg}
                  ></img>
                }
              >
                <p
                  style={{
                    fontSize: "20px",
                    marginLeft: "20px",
                    color: pathName.includes("/setting") ? "white" : "black",
                  }}
                >
                  LogOut
                </p>
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};
export default memo(SideBar);
