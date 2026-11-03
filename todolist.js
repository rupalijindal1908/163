var Form = document.getElementById("form");
var input = document.getElementById("input");
var item = document.getElementById("myItem")
Form.addEventListener("submit", function(event){
    event.preventDefault();
    createItem(input.value)
})
function createItem(inputItems){
    var items = `<li>${inputItems}
    <button onclick="deleteElement(this)">Delete</button> </li>`
    item.insertAdjacentHTML("beforeend", items)
    input.value = ""
    input.focus()
}
function deleteElement(ElementToDelete){
    ElementToDelete.parentElement.remove()
}