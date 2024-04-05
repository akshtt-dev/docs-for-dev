function copyCommand(elementId) {
    var command = document.getElementById(elementId).querySelector(".consoleCmd").innerText;
    var tempInput = document.createElement("input");
    tempInput.value = command;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Command copied to clipboard: " + command);
}
