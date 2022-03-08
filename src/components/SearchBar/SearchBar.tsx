interface SearchBarProps {
  action: Function;
}

const SearchBar = ({ action }: SearchBarProps): JSX.Element => {
  const blankFields = { input: "" };

  const [formData, setFormData] = useState(blankFields);
  const resetForm = () => {
    setFormData(blankFields);
  };

  const changeData = (event) => {
    setFormData({
      ...searchData,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <>
      <form onSubmit={search} noValidate autoComplete="off">
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          value={searchData.input}
          onChange={changeData}
          placeholder="Search for brand, names..."
        />
        <button type="submit">CREATE</button>
      </form>
    </>
  );
};

export default SearchBar;
