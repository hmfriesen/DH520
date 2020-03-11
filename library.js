function myFunction() {
  var textnode = document.createTextNode("You are going to the store");
  var item = document.getElementById("one");
  item.replaceChild(textnode, item.childNodes[0]);
}

function myFunctionTwo() {
  var textnode = document.createTextNode("Do you want to go left or right?");
  var item = document.getElementById("two");
  item.replaceChild(textnode, item.childNodes[0]);
}