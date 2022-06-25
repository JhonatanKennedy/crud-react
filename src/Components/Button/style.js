import styled from "styled-components";

export const ButtonComponent = styled.button`
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.buttonText};
  padding: 0.75rem;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  font-weight: 400;
  cursor: pointer;

  :hover {
    transition: background-color 0.15s ease-in-out;
    background-color: ${(props) => props.theme.darkSecondary};
  }
`;
