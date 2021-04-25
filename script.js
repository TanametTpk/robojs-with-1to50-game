const tap = new Event('tap');
const grid = document.getElementById("grid");
let numbers;

function play() {
  numbers = grid.getElementsByTagName("div");
  Array.from(numbers)
    .sort((a, b) => a.innerText - b.innerText)
    .forEach(num => {
      num.dispatchEvent(tap)
    });
}

play()
// run the second time because the new boxes just arrival delay 100ms
setTimeout(play, 110)
