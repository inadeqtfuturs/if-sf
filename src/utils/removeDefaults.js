import mapObject from './mapObject';

function removeDefaults(obj, defaultObj) {
  const defaultKeys = Object.keys(defaultObj);

  return mapObject(obj, ([key, value]) => {
    const remainingValues = Object.keys(value).reduce((acc, curr) => {
      if (defaultKeys.includes(curr) && defaultObj[curr] === value[curr]) {
        return { ...acc };
      }
      return { [curr]: value[curr], ...acc };
    }, {});
    return [
      key,
      {
        ...remainingValues
      }
    ];
  });
}

export default removeDefaults;
