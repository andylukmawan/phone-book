import { css } from "@emotion/react";

export const styles = css`
  @font-face {
    font-family: "Open Sauce One";
    src: url("fonts/OpenSauceOne-Regular.ttf");
  }
  @font-face {
    font-family: "Open Sauce One";
    src: url("fonts/OpenSauceOne-Medium.ttf");
    font-weight: 500;
  }
  @font-face {
    font-family: "Open Sauce One";
    src: url("fonts/OpenSauceOne-Bold.ttf");
    font-weight: bold;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sauce One", sans-serif;
  }

  button {
    all: unset;
  }
`;
