const FilterRadioGroup = ({ values, sortBy, setSortBy }) => {
  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <>
      <p className="text-2xl font-palanquin">Sort by</p>

      {values.map((value, index) => (
        <div className="mt-4" key={index}>
          <label className="text-slate-gray">
            <input
              type="radio"
              name="sort"
              value={value.value}
              checked={sortBy === value.value}
              onChange={handleSortBy}
            />{' '}
            {value.label}
          </label>
        </div>
      ))}
    </>
  );
};

export default FilterRadioGroup;
