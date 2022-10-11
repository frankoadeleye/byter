import { CustomBtnBlock } from "./styled";

interface cBtnProps {
  isClicked?: React.MouseEventHandler<HTMLButtonElement>;
  text?: string;
  isTrue?: boolean;
  renderedText?: string;
}

//The button below is created solely for the purpose of testing react component with Jest.

function CustomButton({ isClicked, text }: cBtnProps) {
  return (
    <CustomBtnBlock data-testid="button" onClick={isClicked}>
      {text}
    </CustomBtnBlock>
  );
}

//The following component is just created for demonstration on how to test a react component purpose.

function TextRunner({ isTrue, renderedText }: cBtnProps) {
  return <div data-testid="text">{isTrue ? <h6>{renderedText}</h6> : ""}</div>;
}

export { CustomButton, TextRunner };
