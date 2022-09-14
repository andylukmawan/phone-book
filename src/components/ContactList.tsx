import { useQuery } from "@apollo/client";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { colors } from "../helper/colors";
import { Contact } from "../helper/interfaces";
import { GET_CONTACT_LIST } from "../helper/queries.gql";
import { sizes } from "../helper/sizes";

interface ContactData {
  contact: Contact[];
}

interface ContactVars {
  limit: number;
  offset: number;
}

const deleteContact = (name: string) => {
  if (confirm(`Are you sure to delete ${name} from contact?`)) {
    console.log(name);
  }
};

export default function ContactList() {
  const { loading, error, data } = useQuery<ContactData, Partial<ContactVars>>(
    GET_CONTACT_LIST,
    {
      variables: {
        limit: 10,
      },
    }
  );

  if (loading) return <p css={container}>Loading...</p>;
  if (error) return <p css={container}>Error: {error.message}</p>;

  return (
    <div css={container}>
      <ul>
        {data?.contact.map((item: Contact) => (
          <li key={item.id}>
            <Link to={item.id.toString()} css={info}>
              <h2 css={fullName}>
                {item.first_name} {item.last_name}
              </h2>
              <h3 css={phoneNumber}>{item.phones[0].number}</h3>
            </Link>
            <div css={buttonContainer}>
              {/* <button css={button}>
                <span
                  className="material-symbols-outlined"
                  css={css`
                    font-variation-settings: "FILL" ${item.favorited ? 1 : 0};
                  `}
                >
                  favorite
                </span>
                <h4>Favorite</h4>
              </button> */}
              <button
                css={button}
                onClick={() =>
                  deleteContact(`${item.first_name} ${item.last_name}`)
                }
              >
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
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

const info = css`
  all: unset;
  flex: 1;
`;

const fullName = css`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 4px;
  cursor: pointer;

  @media (min-width: ${maxWidth}px) {
    font-size: 21px;
    margin-bottom: 8px;
  }
`;

const phoneNumber = css`
  font-size: 16px;
  font-weight: normal;
  cursor: pointer;

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
