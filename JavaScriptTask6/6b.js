
setTimeout(() => {
    let paragraph = document.createElement("p");
    let text = document.createTextNode("This paragraph was added by JS");
    paragraph.appendChild(text);
    document.getElementById("kasha").appendChild(paragraph);
}, 5000);