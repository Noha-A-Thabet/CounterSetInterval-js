var startCount = 0;
let myInput = document.getElementById("myInput");
let setter;

function startCounter() {
     setter = setInterval(function () {
          myInput.value = startCount;
          startCount++;
     }, 1000)

}

function stopCounter() {
     clearInterval(setter)
}