import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { colors } from "../helper/colors";
import { sizes } from "../helper/sizes";
import { Icons } from "../helper/types";

interface HeaderProps {
  title?: string;
  rightButton?: [RightButton, RightButton?];
}

interface RightButton {
  title: string;
  iconName: Icons;
  onClick?: () => void;
}

function RightButton({ title, iconName, onClick }: RightButton) {
  return (
    <button css={button} onClick={onClick}>
      <span className="material-symbols-outlined">{iconName}</span>
      <p>{title}</p>
    </button>
  );
}

export default function Header({ title = "Title", rightButton }: HeaderProps) {
  return (
    <header css={header}>
      <div css={container}>
        <h1 css={caption}>{title}</h1>
        {rightButton ? (
          <div css={buttonContainer}>
            {rightButton.length
              ? rightButton.map(({ ...item }) => (
                  <RightButton key={item.title} {...item} />
                ))
              : null}
          </div>
        ) : null}
      </div>
    </header>
  );
}

// styles

const { maxWidth } = sizes;

const header = css`
  background-color: #03ac0e;
  height: 48px;
  position: sticky;
  top: 0;
  @media (min-width: 800px) {
    height: 56px;
  }

  .material-symbols-outlined {
    color: #fff;
  }
`;

const container = css`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${maxWidth}px;
  height: 48px;
  margin: 0 auto;
  padding: 0 16px;
  @media (min-width: ${maxWidth}px) {
    height: 56px;
  }
`;

const caption = css`
  color: #fff;
  font-size: 24px;
  letter-spacing: 0.5px;

  @media (min-width: ${maxWidth}px) {
    font-size: 28px;
    letter-spacing: 1px;
  }
`;

const buttonContainer = css`
  display: flex;
  height: 100%;
  cursor: pointer;
`;

const button = css`
  text-decoration: none;
  background-color: ${colors.primaryGreen};
  display: flex;
  align-items: center;
  padding: 0 16px;
  &:hover {
    background-color: ${colors.secondaryGreen};
  }

  p {
    margin-left: 4px;
    color: #fff;
    font-weight: 500;
    display: none;

    @media (min-width: ${maxWidth}px) {
      font-size: 16px;
      letter-spacing: 0.2px;
      display: block;
    }
  }
`;
