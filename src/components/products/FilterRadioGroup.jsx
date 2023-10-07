const FilterRadioGroup = ({ values, sortBy, onSortBy }) => {
  return (
    <>
      <p className="text-2xl font-palanquin">Sort by</p>

      {values.map((value, index) => (
        <div className="mt-4" key={index}>
          <label className="text-slate-gray">
            <input
              type="radio"
              id={value.value}
              name={value.value}
              value={value.value}
              checked={sortBy === value.value}
              onChange={(e) => onSortBy(e)}
            />
            <span className="ml-2">{value.label}</span>
          </label>
        </div>
      ))}
    </>
  );
};

export default FilterRadioGroup;
