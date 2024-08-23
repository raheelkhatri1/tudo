var mainDiv = document.getElementById("main__div")

var div1 = document.createElement("div")
var heading = document.createElement("h1")
var input = document.createElement("input")

var headingTest = document.createTextNode("Todu work")

div1.classList.add("div1")
input.setAttribute("placeholder","what do to do?")
input.classList.add("input1")
input.setAttribute("onkeypress","myfunction(Event)")
input.setAttribute("id","inputValue")

heading.appendChild(headingTest)


mainDiv.appendChild(div1)
div1.appendChild(heading)
div1.appendChild(input)

var inputHavalue = document.getElementById("inputValue")
function myfunction(e) {
  var div2 = document.createElement("div")
  var divText = document.createTextNode(inputHavalue)
  div2.appendChild(divText)
  div1.appendChild(div2)

}