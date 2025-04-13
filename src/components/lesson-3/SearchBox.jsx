const SearchBox = ({ value, onFilter }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
