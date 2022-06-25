import { ButtonComponent } from "./style";

export default function Button({ text, children }) {
  return (
    <ButtonComponent>
      {children?.prepend}
      {text}
      {children?.append}
    </ButtonComponent>
  );
}
