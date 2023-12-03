// var heading = document.getElementById("title");

const list = document.getElementsByClassName("list-item");

const convertedArray = Array.from(list);

convertedArray.forEach((li) => {
  li.style.color = "green";
});
