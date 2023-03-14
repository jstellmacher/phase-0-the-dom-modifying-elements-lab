// Write your code here!
//Jais code!
document.getElementById("main").remove();
//removes the element combines finding the element and the document.remove() function
const newHeader = document.createElement("h1");
// this defines the newHeader variable and assigns it to h1? not entirely sure
newHeader.id = 'victory'
//creates the new id based on the earlier created variable
//newHeader.textContent = "Jai is the Champion"

newHeader.innerHTML = "JAI is the champion";
//inner! https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
//document.body.append(newHeader);
