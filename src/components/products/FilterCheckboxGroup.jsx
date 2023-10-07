const FilterCheckboxGroup = ({ values, filterBy, onFilterBy }) => {
  return (
    <>
      <p className="text-2xl font-palanquin">Categories</p>

      {values.map((value, index) => (
        <div className="mt-4" key={index}>
          <label className="text-slate-gray">
            <input
              type="checkbox"
              id={value.value}
              name={value.value}
              value={value.value}
              checked={filterBy.includes(value.value)}
              onChange={(e) => onFilterBy(e)}
              disabled={value.value === 'all'}
            />
            <span className="ml-2">{value.label}</span>
          </label>
        </div>
      ))}
    </>
  );
};

export default FilterCheckboxGroup;
