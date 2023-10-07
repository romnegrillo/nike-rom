const arraysEqualExcludingValue = (arr1, arr2, valueToExclude) => {
  const filteredArr1 = arr1.filter((item) => item !== valueToExclude).sort();
  const filteredArr2 = arr2.filter((item) => item !== valueToExclude).sort();

  if (filteredArr1.length !== filteredArr2.length) {
    return false;
  }

  for (let i = 0; i < filteredArr1.length; i++) {
    if (filteredArr1[i] !== filteredArr2[i]) {
      return false;
    }
  }

  return true;
};

export default arraysEqualExcludingValue;
