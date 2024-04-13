import React, { useState } from "react";

import { ReactComponent as IconSelect } from "src/assets/images/icons/icon-select.svg";
import Select, { components } from "react-select";
import { AreaCustonSelect, Option, SelectedItem, ListOption } from "./styles";
const SelectCuston = (props) => {
  console.log("dados", props);
  const [CountrySelectedImg, setCountrySelectedImg] = useState();
  let CountrySelected = [0];
  console.log(CountrySelected);

  const SelectCountry = (e) => {
    CountrySelected = props.json.filter((res) => res.value === e.value);
    setCountrySelectedImg(CountrySelected[0].img);
  };

  const DropdownIndicator = (props) => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          <IconSelect />
        </components.DropdownIndicator>
      )
    );
  };
  return (
    <AreaCustonSelect>
      {CountrySelected !== 0 && <img src={CountrySelectedImg} />}

      <Select
        classNamePrefix="CountryMobile"
        onChange={(e) => SelectCountry(e)}
        options={props.json}
        components={{ DropdownIndicator }}
        placeHolder="a"
        arrowRenderer={IconSelect}
      />
    </AreaCustonSelect>
  );
};

export default SelectCuston;
