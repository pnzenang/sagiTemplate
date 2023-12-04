import { useState } from "react";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useDashboardContext } from "../pages/DashboardLayout";
import { styled } from "styled-components";

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();
  return (
    <Wrapper>
      <button
        type="button"
        onClick={() => setShowLogout(!showLogout)}
        className="btn-sm logout-btn bg-primary capitalize hover:bg-primary border-radius-2"
      >
        <FaUserCircle className="text-cyan-100" />
        <div className="text-cyan-50">delegate {user?.lastAndMiddleNames}</div>
        <FaCaretDown className="text-cyan-100" />
      </button>
      <div className={showLogout ? "dropdown show-dropdown " : "dropdown"}>
        <button
          type="button"
          className="dropdown-btn btn-sm shadow-2 bg-red-400 hover:bg-red-500 text-cyan-50"
          onClick={logoutUser}
        >
          logout
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;

  .logout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    border-radius: 7px;
  }
  .img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    text-align: center;
    visibility: hidden;
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    border-radius: 7px;
    /* padding: 0.5rem; */
    /* background: transparent; */
    border-color: white;
    letter-spacing: 0.5;
    text-transform: capitalize;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
`;
export default LogoutContainer;
