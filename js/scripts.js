const loadConsolesButton = document.getElementById("loadConsoles")

loadConsolesButton.addEventListener("click", getConsoles)

function getConsoles() {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "https://ozarktechwebdev.com/api/consoles.json")
    xhr.timeout = 10000

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) { // The request has finished.
            if (xhr.status == 200) {
                try {
                    let consoleJSON = xhr.responseText
                    let consoleObj = JSON.parse(consoleJSON)

                    console.log("Parsed Object:", consoleObj);
                    console.log("Console Array:", consoleObj.consoles);
                    console.log("Length of Array:", consoleObj.consoles.length)

                    let cards = document.getElementById("cards")

                    cards.innerHTML = ""

                    consoleObj.consoles.forEach(console => {
                        let card = document.createElement("div")

                        let img = document.createElement("img")
                        let h2 = document.createElement("h2")
                        let p = document.createElement("p")

                        img.src = console.image
                        img.alt = console.name

                        h2.textContent = console.name
                        p.textContent = `${console.manufacturer} ${console.year}`

                        card.appendChild(img)
                        card.appendChild(h2)
                        card.appendChild(p)
                        cards.appendChild(card)
                    });
                }
                catch (error) {
                    console.error("Failed to Parse JSON:", error)
                }
            } else {
                console.log("Request failed with status " + xhr.status)
            }
        }
    }

    xhr.send();
}