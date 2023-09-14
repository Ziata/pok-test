import { render, waitFor } from "@testing-library/react";
import GallereyGrid from "../GallereyGrid";
import { describe, expect, it } from "vitest";
import store from "../../../store";
import { Provider } from "react-redux";

describe("GallereyGrid Component", () => {
  it("renders the 'No item found' message when pokemonList is empty", () => {
    const { getByText } = render(
      <Provider store={store}>
        <GallereyGrid pokemonList={[]} />
      </Provider>
    );
    waitFor(() => expect(getByText("No item found")).toBeInTheDocument());
  });

  it("renders gallery items when pokemonList is not empty", () => {
    const pokemonList = [{ name: "Pikachu", url: "/pikachu" }];

    const { getByText } = render(
      <Provider store={store}>
        <GallereyGrid pokemonList={pokemonList} />
      </Provider>
    );

    waitFor(() => expect(getByText("Pikachu")).toBeInTheDocument());
  });
});
