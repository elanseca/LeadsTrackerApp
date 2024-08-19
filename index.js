const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("save-btn")
let ulEl = document.getElementById("ul-el")
let myLeads = []

localStorage.clear()
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

saveBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    inputEl.value = ""
    renderLeads()
})

function renderLeads(){
    let listItems = ""
    for(let i = 0; i < myLeads.length; i++){
    listItems += `<li>
                    <a target='_blank' href='${myLeads[i]}'>
                        ${myLeads[i]}
                    </a>
                </li>`
}
ulEl.innerHTML = listItems
}