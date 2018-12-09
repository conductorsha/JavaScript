function addRow(){
    let name = document.getElementById("nameInput").value;
    let surname = document.getElementById("surnameInput").value;
    let phone = document.getElementById("phoneNumberInput").value;
    let table = document.getElementById("table");

    let rowToAdd = table.insertRow(-1);
    rowToAdd.insertCell(0).innerHTML = name;
    rowToAdd.insertCell(1).innerHTML = surname;
    rowToAdd.insertCell(2).innerHTML = phone;
}
$("#prospects_form").submit(function(e) {
    e.preventDefault();
});