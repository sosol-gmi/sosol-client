import React from "react";
import ToggleTheme from "../../components/ToggleTheme";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { createSerializer } from '@emotion/jest'

expect.addSnapshotSerializer(createSerializer(
  {
    classNameReplacer(className, index) {
      return `css-${index}`
    },
        // includeStyles: false 
  }
));


describe("<ToggleTheme/> component :", () => {
  test("display <ToggleTheme/> component ", async () => {
    let rendered = render(<ToggleTheme />, { wrapper: MemoryRouter });
    expect(rendered).toMatchSnapshot();
  });
});

test("Assertion testing of <ToggleTheme/>  component", () => {
  render(<ToggleTheme />, { wrapper: MemoryRouter });
  expect(screen.getByText("Theme")).toBeInTheDocument();
});
