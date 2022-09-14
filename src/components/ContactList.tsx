import { css } from "@emotion/react";
import { colors } from "../helper/colors";
import { sizes } from "../helper/sizes";

const data = [
  { id: 1, name: "John Doe", phone: "+62812 8944 0694", favorited: true },
  { id: 2, name: "Doe John", phone: "+62813 1234 5679", favorited: false },
];

export default function ContactList() {
  return (
    <div css={container}>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <div>
              <h2 css={fullName}>{item.name}</h2>
              <h3 css={phoneNumber}>{item.phone}</h3>
            </div>
            <div css={buttonContainer}>
              <button css={button}>
                <span
                  className="material-symbols-outlined"
                  css={css`
                    font-variation-settings: "FILL" ${item.favorited ? 1 : 0};
                  `}
                >
                  favorite
                </span>
                <h4>Favorite</h4>
              </button>
              <button css={button}>
                <span className="material-symbols-outlined">delete</span>
                <h4>Delete</h4>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// styles

const { maxWidth } = sizes;

const container = css`
  margin: 0 auto;
  max-width: 800px;
  height: 100vh;

  ul {
    margin: 0 auto;
    padding: 16px;
  }

  li {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgray;
    margin: 4px 0;
    padding: 8px;
    border-radius: 8px;

    &:hover {
      background-color: ${colors.lightGreen};
    }

    @media (min-width: ${maxWidth}px) {
      margin: 8px 0;
      padding: 16px;
    }
  }
`;

const fullName = css`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 4px;

  @media (min-width: ${maxWidth}px) {
    font-size: 21px;
    margin-bottom: 8px;
  }
`;

const phoneNumber = css`
  font-size: 16px;
  font-weight: normal;

  @media (min-width: ${maxWidth}px) {
    font-size: 18px;
  }
`;

const buttonContainer = css`
  display: flex;
`;

const button = css`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0 2px;
  padding: 8px;
  border-radius: 8px;

  &:hover {
    background-color: #fff;
  }

  .material-symbols-outlined {
    color: gray;
  }

  @media (min-width: ${maxWidth}px) {
    margin: 0 4px;
  }

  h4 {
    font-weight: normal;
    display: none;
    padding-left: 4px;

    @media (min-width: ${maxWidth}px) {
      color: gray;
      font-size: 15px;
      display: block;
    }
  }
`;
