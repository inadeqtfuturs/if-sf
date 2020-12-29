function mapObject(obj, func) {
  return Object.fromEntries(Object.entries(obj).map(func));
}

export default mapObject;
