import Link from "next/link";

import styled, { css } from "styled-components";

const Avatar = ({ size, story = false }) => {
  const getSize = () => {
    if (size === "sm") return "32";
    else if (size === "x-sm") return "20";
    else if (size === "md") return "44";
    else if (size === "lg") return "150";
    return "56";
  };

  return (
    <Link href="#">
      <StyledAvatar story={story}>
        <img
          width={getSize()}
          height={getSize()}
          src="https://instagram.flhe7-2.fna.fbcdn.net/v/t51.2885-19/244494852_2040817462736301_6328309389655450356_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.flhe7-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=rcgYCIotQYcAX_gOsF2&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCBgWgDNVw8h9kO_EDzAOefIldUHW73x03tiO8coXYM8A&oe=63914B7B&_nc_sid=1527a3.jpg"
          alt=""
        />
      </StyledAvatar>
    </Link>
  );
};

const StyledAvatar = styled.a`
  display: flex;
  margin: 0;
  padding: 2px;
  border-radius: 50%;
  max-width: max-content;
  max-height: max-content;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  img {
    border-radius: 50%;
    border: 1px solid white;
  }

  ${(props) =>
    props.story &&
    css`
      background: linear-gradient(
        219deg,
        rgba(184, 63, 140, 1) 0%,
        rgba(237, 158, 90, 1) 100%
      );
    `}
`;

export default Avatar;
