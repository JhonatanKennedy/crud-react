import { Fragment } from "react";
import { CardContainer, HeaderContainer, Title, BodyContainer } from "./style";

export default function Card({ title, children }) {
  return (
    <Fragment>
      <CardContainer>
        <HeaderContainer>
          <Title>{title}</Title>
          {children?.header}
        </HeaderContainer>
        {children?.body ? <BodyContainer>{children.body}</BodyContainer> : null}
      </CardContainer>
    </Fragment>
  );
}
