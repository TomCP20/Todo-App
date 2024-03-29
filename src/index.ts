const form = document.querySelector(".form") as HTMLFormElement;
const task_input = document.querySelector("#task") as HTMLInputElement;
const date_input = document.querySelector("#date") as HTMLInputElement;
const table = document.querySelector("table")!;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    table.append(createTableRow(task_input.value, date_input.value));

})

function createTableRow(task: string, date: string): HTMLTableRowElement {
    const tr = document.createElement("tr");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const checkbox_cell = document.createElement("th");
    checkbox_cell.append(checkbox);
    tr.append(checkbox_cell);

    const task_element = document.createElement("th");
    task_element.textContent = task;
    task_element.setAttribute("contenteditable", "true");
    tr.append(task_element);

    const date_element = document.createElement("th");
    date_element.textContent = date || "n/a";
    tr.append(date_element);

    const button = document.createElement("button");
    button.textContent = "Delete";
    button.className = "delete"
    button.addEventListener("click", () => tr.remove());
    const button_cell = document.createElement("th");
    button_cell.append(button);
    tr.append(button_cell);

    return tr;
}
