var mainDiv = document.getElementById("main__div")

var div1 = document.createElement("div")
var heading = document.createElement("h1")
var input = document.createElement("input")

var headingTest = document.createTextNode("Todu work")

div1.classList.add("div1")
input.setAttribute("placeholder","what do to do?")
input.classList.add("input1")
input.setAttribute("onkeypress","myfunction(event)")
input.setAttribute("id","inputValue")

heading.appendChild(headingTest)


mainDiv.appendChild(div1)
div1.appendChild(heading)
div1.appendChild(input)

var inputHavalue = document.getElementById("inputValue")
function myfunction(e) {
    
 if(e.charCode === 13 ){
   functionhu()
  }
  
}
function functionhu() {
  var div2 = document.createElement("div")
  var divflex = document.createElement("div")
  divflex.classList.add("divflex")
  div2.classList.add("div2")
  var divText = document.createTextNode(inputHavalue.value)
  div2.appendChild(divText)
  var btn = document.createElement("button")
  btn.setAttribute("class","fa-solid fa-xmark")
  // var btntext = document.createTextNode("")
  btn.setAttribute("onclick","cancelbtn(this)")
  // btn.appendChild(btntext)
  div2.appendChild(btn)
  divflex.appendChild(div2)
  div1.appendChild(divflex)
  inputHavalue.value = ""
  
}

function cancelbtn(e) {
  var parentko = e.parentNode.parentNode
  console.log(e)
  div1.removeChild(parentko)

}
