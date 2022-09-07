var count = 0;
function increment() {
  count+=1;
  document.getElementById("output").innerHTML = count;
}

function decrement() {
  count-=1;
  document.getElementById("output").innerHTML = count;
}