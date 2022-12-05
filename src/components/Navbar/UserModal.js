import { useRef } from "react";
import Link from "next/link";

import styled from "styled-components";

import useOnClickOutside from "src/hooks/useOnClickOutside";

const UserModal = ({ setUserModal }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => setUserModal(false));

  return (
    <StyledUserModal ref={ref}>
      <li>
        <Link href="/muhammadraza">
          <a>
            <svg fill="#262626" height="16" viewBox="0 0 32 32" width="16">
              <path d="M16 0C7.2 0 0 7.1 0 16c0 4.8 2.1 9.1 5.5 12l.3.3C8.5 30.6 12.1 32 16 32s7.5-1.4 10.2-3.7l.3-.3c3.4-3 5.5-7.2 5.5-12 0-8.9-7.2-16-16-16zm0 29c-2.8 0-5.3-.9-7.5-2.4.5-.9.9-1.3 1.4-1.8.7-.5 1.5-.8 2.4-.8h7.2c.9 0 1.7.3 2.4.8.5.4.9.8 1.4 1.8-2 1.5-4.5 2.4-7.3 2.4zm9.7-4.4c-.5-.9-1.1-1.5-1.9-2.1-1.2-.9-2.7-1.4-4.2-1.4h-7.2c-1.5 0-3 .5-4.2 1.4-.8.6-1.4 1.2-1.9 2.1C4.2 22.3 3 19.3 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13c0 3.3-1.2 6.3-3.3 8.6zM16 5.7c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 11c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path>
            </svg>
            Profile
          </a>
        </Link>
      </li>

      <li>
        <Link href="/login">
          <a>Log out</a>
        </Link>
      </li>
    </StyledUserModal>
  );
};

const StyledUserModal = styled.ul`
  position: absolute;
  width: 200px;
  background-color: #fff;
  right: -20px;
  top: 50px;
  border-radius: 6px;
  box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);
  animation: openModal 500ms forwards;
  z-index: 999;

  li a {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 15px;
    svg {
      margin-right: 8px;
      margin-top: 2px;
    }
    &:hover {
      background: rgba(#ddd, 0.5);
    }
  }
  li:last-child a {
    border-top: 1px solid rgba(#ddd, 0.5);
  }
`;

export default UserModal;
