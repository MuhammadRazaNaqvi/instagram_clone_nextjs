import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Avatar from "src/components/Avatar.js";
import UserModal from "./Navbar/UserModal";
import styled from "styled-components";

const Navbar = () => {


  const [userModal, setUserModal] = useState(false);

  const router = useRouter();


  return (
    <StyledNavbar>
      <div className="container">
        <Link href="/">
          <a>
            <img src="/images/logo.png" width="105" alt="Logo" />
          </a>
        </Link>
        <div className="search-box relative">
          <input
            type="text"
            required
            placeholder="Search"
            onClick="#"
          />
        </div>

        <ul className="links">
          <li>
            <Link href="/">
              <a>
                <svg
                  fill="#262626"
                  height="22"
                  width="22"
                  viewBox="0 0 48 48"
                >
                  <path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z" />
                </svg>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/inbox">
              <a>

                <svg
                  fill="#262626"
                  height="22"
                  viewBox="0 0 48 48"
                  width="22">
                  <path d="M36.2 16.7L29 22.2c-.5.4-1.2.4-1.7 0l-5.4-4c-1.6-1.2-3.9-.8-5 .9l-6.8 10.7c-.7 1 .6 2.2 1.6 1.5l7.3-5.5c.5-.4 1.2-.4 1.7 0l5.4 4c1.6 1.2 3.9.8 5-.9l6.8-10.7c.6-1.1-.7-2.2-1.7-1.5zM24 1C11 1 1 10.5 1 23.3 1 30 3.7 35.8 8.2 39.8c.4.3.6.8.6 1.3l.2 4.1c0 1 .9 1.8 1.8 1.8.2 0 .5 0 .7-.2l4.6-2c.2-.1.5-.2.7-.2.2 0 .3 0 .5.1 2.1.6 4.3.9 6.7.9 13 0 23-9.5 23-22.3S37 1 24 1zm0 41.6c-2 0-4-.3-5.9-.8-.4-.1-.8-.2-1.3-.2-.7 0-1.3.1-2 .4l-3 1.3V41c0-1.3-.6-2.5-1.6-3.4C6.2 34 4 28.9 4 23.3 4 12.3 12.6 4 24 4s20 8.3 20 19.3-8.6 19.3-20 19.3z"></path>
                </svg>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <svg
                  fill="#262626"
                  height="22"
                  viewBox="0 0 48 48"
                  width="22"
                >
                  <path d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z"></path>
                </svg>
              </a>
            </Link>
          </li>
          <li className="relative">
            <Link href="#">
              <a >
                <svg
                  fill="#262626"
                  height="22"
                  width="22"
                  viewBox="0 0 48 48"
                >
                  <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                </svg>

              </a>
            </Link>
          </li>
          <li className="relative">
            <button onClick={() => setUserModal(!userModal)}>
              <Avatar size="sm" />
            </button>
            {userModal && <UserModal setUserModal={setUserModal} />}
          </li>
        </ul>
      </div>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  width: 100%;
  height: 54px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  position: fixed;
  top: 0;
  z-index: 999;

  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > a img {
      margin-top: 10px;
    }
  }

  .links {
    display: flex;
    align-items: center;
    gap: 22px;
  }

  .search-box {
    width: 215px;
    height: 28px;
    z-index: inherit;
    svg {
      width: 10px;
      height: 10px;
      position: absolute;
      left: 37%;
      top: 50%;
      transform: translateY(-50%);
    }
    input {
      border: 1px solid #dbdbdb;
      padding: 4px 10px 4px 25px;
      border-radius: 3px;
      width: 100%;
      height: 100%;
      background-color: #fafafa;
      text-align: center;

      &:focus,
      &:valid {
        text-align: left;
        & + svg {
          left: 4%;
        }
      }
    }
  }
`;

export default Navbar;
