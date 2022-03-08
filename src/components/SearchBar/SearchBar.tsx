import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { IconLookup } from "@fortawesome/fontawesome-svg-core";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

interface SearchBarProps {
  action: Function;
}
interface searchData {
  search: String;
}

library.add(fas);

const magnifyingGlassLookup: IconLookup = {
  prefix: "fas",
  iconName: "magnifying-glass",
};

const SearchBar = ({ action }: SearchBarProps): JSX.Element => {
  const blankFields: searchData = { search: "" };
  const [searchData, setFormData] = useState<searchData>(blankFields);

  const changeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...searchData,
      [event.target.id]: event.target.value,
    });
  };

  const search = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={search} noValidate autoComplete="off">
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          onChange={changeData}
          placeholder="Search for brand, names..."
        />
        <button type="submit">
          <FontAwesomeIcon icon={magnifyingGlassLookup} />
        </button>
      </form>
    </>
  );
};

export default SearchBar;
