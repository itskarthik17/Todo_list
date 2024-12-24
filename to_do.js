function add()
{
    var input = document.getElementById("input")
    var list = document.getElementById("list")
    var li = document.createElement("li")
    //console.log(input.value)
    var empty = ""
    if(input.value == empty){
        alert("Empty Can't Be add")
    }
    else{
        li.innerHTML = input.value + "<button id='remo' onclick='deleteItem(event)'>Remove</button>"
        list.append(li)
        input.value = empty
    }
}

function deleteItem(event)
{
    event.target.parentElement.remove()
}