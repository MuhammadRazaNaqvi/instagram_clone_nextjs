import { useState } from "react";
import Link from "next/link";

import { useRouter } from "next/router";

import styled from "styled-components";

const Header = () => {
  const router = useRouter();
  return (
    <StyledHeader>
      <div className="user">
        <label className="profile-image">
          <img
            src="http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/swong.png"
            alt="test"
          />
          <input type="file" />
        </label>
        <div className="content">
          <div>
            <h2>Syed Muhammad Raza Naqvi</h2>
            <Link href="#">
              <a className="edit-button">Edit Profile</a>
            </Link>
            <Link href="#">
              <a>
                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                  <path d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z"></path>
                </svg>
              </a>
            </Link>
          </div>
          <ul>
            <li>
              <b>1</b>
              <span>post</span>
            </li>
            <li >
              <b>140</b>
              <span>followers</span>
            </li>
            <li >
              <b>1670</b>
              <span>following</span>
            </li>
          </ul>
          <p className="name">Muhammad Raza</p>
          <p className="description">Photography Lover || Computer Scientist || UET Lahore</p>
        </div>
      </div>
      <ul className="links">
        <li className={router.pathname == "/[username]" ? "active" : ""}>
          <Link href="/mehmetsagirdev">
            <a>
              <svg height="12" viewBox="0 0 48 48" width="12">
                <path d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"></path>
              </svg>
              <span>POSTS</span>
            </a>
          </Link>
        </li>
      </ul>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  .user {
    display: flex;
    align-items: center;
    padding-left: 60px;
    padding-bottom: 45px;
    border-bottom: 1px solid #dbdbdb;

    .profile-image {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 2px solid #fff;
      position: relative;
      margin-right: 90px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
      }
      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
      }
    }

    .content {
      div:first-child {
        display: flex;
        align-items: center;
        gap: 10px;
        h2 {
          font-size: 28px;
          font-weight: 300;
        }
      }
      ul {
        margin-top: 15px;
        display: flex;
        gap: 25px;
        li:not(:first-child) {
          cursor: pointer;
        }
        b {
          font-weight: 500;
          margin-right: 5px;
        }
        span {
          font-weight: 400;
        }
      }
      & > a {
        display: block;
        margin-top: 3px;
        color: #00376b;
        font-weight: 600;
      }

      .edit-button {
        margin-left: 10px;
        border: 1px solid #dbdbdb;
        cursor: pointer;
        padding: 5px 9px;
        border-radius: 3px;
        font-weight: 600;
      }

      .name {
        margin-top: 15px;
        font-weight: 600;
      }

      .description {
        margin-top: 4px;
      }
    }
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-top: -0.5px;

    li {
      border-top: 1px solid transparent;
      font-size: 12px;
      color: #8e8e8e;
      font-weight: 500;
      letter-spacing: 1px;
      svg {
        fill: #8e8e8e;
        margin-right: 5px;
      }
      a {
        display: block;
        line-height: 40px;
      }

      &.active {
        border-color: black;
        color: #262626;

        svg {
          fill: #262626;
        }
      }
    }
  }
`;

export default Header;
