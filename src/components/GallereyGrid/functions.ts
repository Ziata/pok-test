import { IGallereyItem, PokemonList } from "../../types/types";

export const generateGalleryLayout = (pokemonList: PokemonList[]) => {
  const layout: IGallereyItem[] = [];

  const templates = [
    { row: 2, col: 1 },
    { row: 1, col: 1 },
    { row: 1, col: 1 },
    { row: 2, col: 2 },
    { row: 1, col: 1 },
    { row: 1, col: 1 },
    { row: 1, col: 1 },
    { row: 2, col: 1 },
    { row: 2, col: 2 },
    { row: 1, col: 1 },
  ];

  pokemonList.forEach((pokemon, index: number) => {
    const template = templates[index % templates.length];

    const gridItem: IGallereyItem = {
      row: template.row,
      col: template.col,
      ...pokemon,
    };

    layout.push(gridItem);
  });

  return layout;
};
