import { render, screen, cleanup } from "@testing-library/react";
import { CustomButton, TextRunner } from "../components/custom-button";
import "jest-styled-components";
import { DarkTheme, LightTheme } from "../utils/constants/theme";
import { ThemeProvider } from "styled-components";

/**
 * 
 We are going to perform two tests on the Button Component. 

Test 1: Testing if the button is rendered correctly to the DOM.
Test 2: Testing if the button displays the text passed as a prop.
 */

//afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup();
});

describe("Button Component Test", () => {
  const setCustomBtnToggle = jest.fn();
  render(
    <ThemeProvider theme={LightTheme}>
      <CustomButton isClicked={setCustomBtnToggle} />
    </ThemeProvider>
  );
  const button = screen.getByTestId("button");

  //Test 1
  test("Text Rendering", () => {
    render(<TextRunner isTrue={true} renderedText={"I am here"} />);
    const text = screen.getByTestId("text");
    expect(text).toBeInTheDocument();
  });

  //Test 2
  test("Displayed Text when toggle is set to true", () => {
    render(<TextRunner isTrue={true} renderedText={"I am here"} />);
    const text = screen.getByTestId("text");
    expect(text).toHaveTextContent("I am here");
  });

  //Test 3
  test("To Hide Text When Toggle is set to false", () => {
    render(<TextRunner isTrue={false} renderedText={"I am here"} />);
    const text = screen.getByTestId("text");
    expect(text).toBeEmptyDOMElement();
  });
});
