const FilterCheckboxGroup = ({ values, filterBy, setFilterBy }) => {
  const handleFilterBy = (e) => {
    setFilterBy(e.target.value);
  };

  return (
    <>
      <p className="text-2xl font-palanquin">Categories</p>

      {values.map((value, index) => (
        <div className="mt-4" key={index}>
          <label className="text-slate-gray">
            <input
              type="checkbox"
              name="sort"
              value={value.value}
              checked={filterBy === value.value ? true : false}
              onChange={handleFilterBy}
            />{' '}
            {value.label}
          </label>
        </div>
      ))}
    </>
  );
};

export default FilterCheckboxGroup;
