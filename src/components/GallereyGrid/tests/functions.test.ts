import { expect, test } from "vitest";
import { generateGalleryLayout } from "../functions";
import { IGallereyItem, PokemonList } from "../../../types/types";

test("should generate the gallery layout correctly", () => {
  const pokemonList: PokemonList[] = [
    { name: "Pokemon1", url: "Type1" },
    { name: "Pokemon2", url: "Type2" },
  ];

  const expectedLayout: IGallereyItem[] = [
    { row: 2, col: 1, name: "Pokemon1", url: "Type1" },
    { row: 1, col: 1, name: "Pokemon2", url: "Type2" },
  ];

  const result = generateGalleryLayout(pokemonList);

  expect(result).toEqual(expectedLayout);
});
