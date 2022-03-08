import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { IconLookup } from "@fortawesome/fontawesome-svg-core";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

interface searchData {
  search: string | ReadonlyArray<string> | number | undefined;
}

library.add(fas);

const magnifyingGlassLookup: IconLookup = {
  prefix: "fas",
  iconName: "magnifying-glass",
};

const SearchBar = (): JSX.Element => {
  const blankFields: searchData = { search: "" };
  const [searchData, setFormData] = useState<searchData>(blankFields);

  const resetForm = () => {
    setFormData(blankFields);
  };

  const changeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...searchData,
      [event.target.id]: event.target.value,
    });
  };

  const search = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // fala el thunk
    resetForm();
  };

  return (
    <>
      <form onSubmit={search} noValidate autoComplete="off">
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          value={searchData.search}
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
