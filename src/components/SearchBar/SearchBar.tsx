import { useState } from "react";

interface SearchBarProps {
  action: Function;
}

interface searchData {
  input: String;
}

const SearchBar = ({ action }: SearchBarProps): JSX.Element => {
  const blankFields: searchData = { input: "" };
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
          // value={searchData.input}
          onChange={changeData}
          placeholder="Search for brand, names..."
        />
        <button type="submit">SEARCH</button>
      </form>
    </>
  );
};

export default SearchBar;
