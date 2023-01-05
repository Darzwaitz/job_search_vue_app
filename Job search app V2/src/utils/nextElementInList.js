const nextElementInList = (list, value) => {
  const currentValueIndex = list.indexOf(value);
  const nextValueIndex = (currentValueIndex + 1) % 4;
  const nextValue = list[nextValueIndex];
  return nextValue;
};

export default nextElementInList;
