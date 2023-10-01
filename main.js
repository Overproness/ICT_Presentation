const IncrementButton = () => {
  const element = document.getElementById("incrementText");
  let value = element.innerHTML;
  ++value;
  console.log(value);
  document.getElementById("incrementText").innerHTML = value;
};
