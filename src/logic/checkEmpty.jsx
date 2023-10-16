export function checkEmpty(obj, data) {
  const curObj = Object.values(obj)
    .slice(3)
    .every((input) => input === "");

  const curData = data.every((obj) => obj.isHide === true);

  return (curObj && !data.length) || (curData && data.length);
}
