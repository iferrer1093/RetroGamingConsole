const loadConsolesButton = document.getElementById("loadConsoles")

loadConsolesButton.addEventListener("click", getConsoles)

function getConsoles() {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "https://ozarktechwebdev.com/api/consoles.json")
    xhr.timeout = 10000

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) { // The request has finished.
            if (xhr.status == 200){
                try{
                    let consoleJSON = xhr.responseText
                    let consoleObj = JSON.parse(consoleJSON)

                    console.log("Parsed Object:", consoleObj);
                    console.log("Console Array:", consoleObj.consoles);
                    console.log("Length of Array:", consoleObj.consoles.length)
                }
                catch (error) {
                    console.error("Failed to Parse JSON:", error)
                }
            } else {
                console.log("Request failed with status " + xhr.status)
            }
        }}

        xhr.send();
}