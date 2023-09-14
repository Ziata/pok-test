import Select from "react-select";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./type-select.module.sass";
import { Options, PokemonList } from "../../types/types";

const TypeSelect = ({
  selectedType,
  setSelectedType,
}: {
  selectedType: Options;
  setSelectedType: (type: Options) => void;
}) => {
  const [options, setOptions] = useState<Options[]>([selectedType]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/type");
        const results = response.data.results;
        const newOptions = results.map((result: PokemonList) => ({
          value: result.name,
          label: result.name,
        }));
        setOptions([...options, ...newOptions]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onChange = (selectedOption: Options | null) => {
    if (selectedOption) {
      setSelectedType(selectedOption);
    }
  };

  return (
    <Select
      className={styles.SelectWrapper}
      instanceId="react-select-instance"
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          width: "170px",
          height: "60px",
          borderRadius: "10px",
          boxShadow: "0",
          letterSpacing: "4px",
          "&:hover": {
            borderColor: "#FBE0DC",
          },
          "&:focus": {
            borderColor: "#FBE0DC",
          },
        }),
        option: (base, state) => ({
          ...base,
          border: "0",
          color: state.isSelected ? "#6e6371" : "#ffcb05",
          backgroundColor: state.isSelected ? "#f3dcfb" : "#fff",
        }),
        indicatorSeparator: () => ({
          display: "none",
        }),
        menuList: (base) => ({
          ...base,
          padding: "0",
          "::-webkit-scrollbar": {
            width: "1px",
          },
          "::-webkit-scrollbar-thumb": {
            background: "pink",
          },
          borderRadius: "10px",
        }),
        menu: (base) => ({
          ...base,
          borderRadius: "10px",
        }),
        singleValue: (base) => ({
          ...base,
          color: "#ffcb05",
          lineHeight: "3",
          padding: "0",
        }),
      }}
      value={selectedType}
      onChange={onChange}
      options={options}
      isSearchable={false}
    />
  );
};

export default TypeSelect;
