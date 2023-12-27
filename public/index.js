"use strict";
const form = document.querySelector(".form");
const taskinput = document.querySelector("#task");
const dateinput = document.querySelector("#date");
const table = document.querySelector("table");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    table.append(createTableRow(taskinput.value, dateinput.value));
});
document.cookie = "";
console.log(`Cookies: ${document.cookie}`);
console.log("hello");
function createTableRow(task, date) {
    const tr = document.createElement("tr");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const checkboxcell = document.createElement("th");
    checkboxcell.append(checkbox);
    tr.append(checkboxcell);
    const taskelement = document.createElement("th");
    taskelement.textContent = task;
    taskelement.setAttribute("contenteditable", "true");
    tr.append(taskelement);
    const dateelement = document.createElement("th");
    dateelement.textContent = date || "n/a";
    tr.append(dateelement);
    const button = document.createElement("button");
    button.textContent = "Delete";
    button.addEventListener("click", () => tr.remove());
    const buttoncell = document.createElement("th");
    buttoncell.append(button);
    tr.append(buttoncell);
    return tr;
}
