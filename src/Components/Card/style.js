import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.primary};
  border-radius: 6px;
`;

export const HeaderContainer = styled.div`
  padding: 1rem;
  padding-left: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

export const BodyContainer = styled.div`
  padding: 1rem;
  padding-left: 1.5rem;
`;
