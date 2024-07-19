let count = 0;
function GetDAta() {
  console.log("Fetching data ", count++);
}
function Debounce(call, delay) {
  let timer;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      call();
    }, delay);
  };
}

const Better = Debounce(GetDAta, 300);
