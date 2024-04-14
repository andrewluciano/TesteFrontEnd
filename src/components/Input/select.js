import React, { useState } from "react";

import { ReactComponent as IconSelect } from "src/assets/images/icons/icon-select.svg";
import Select, { components } from "react-select";
import { AreaCustonSelect } from "./styles";
const SelectCuston = (props) => {
  const [CountrySelectedImg, setCountrySelectedImg] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/175px-Flag_of_the_United_Kingdom_%283-5%29.svg.png",
  );
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
        defaultValue={{ label: "+44", value: 0 }}
        components={{ DropdownIndicator }}
        placeHolder="a"
        arrowRenderer={IconSelect}
      />
    </AreaCustonSelect>
  );
};

export default SelectCuston;
