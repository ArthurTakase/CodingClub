let isReady = false

// function that convret base 64 text to base 10 text
function base64ToText(base64) {
    var text = atob(base64)
    return text
}

// function that auto load json file
function loadJson(url) {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // data = JSON.parse(base64ToText(this.responseText))
            data = JSON.parse(this.responseText)
            isReady = true
        }
    };
    xhttp.open("GET", url, true)
    xhttp.send()
}

// let data = loadJson("data/infos.data")
let data = loadJson("data/answer.json")