const input = document.getElementById("input")
const commands = document.getElementById("commands")

let currentstep = 0

// function that convert base 64 string to image
// function base64ToImage(base64) {
//     var img = new Image();
//     img.src = base64;
//     return img;
// }

input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        if (isConnected && currentstep >= data["answers"].length)
            addCmd("[<span style='color: yellow'>WARN</span>] Commande invalide")
        else if (data["answers"][currentstep].answer == input.value) {
            addCmd(data["answers"][currentstep].right)
            currentstep++
        } else { addCmd(data["answers"][currentstep].wrong) }
    }
});

function addCmd(text) {
    var newCmd = document.createElement("p");
    newCmd.innerHTML = text;

    commands.prepend(newCmd);

    input.value = ""
}

// function that search argument in url
function getUrlArgument(name) {
    var url = window.location.href
    var regex = new RegExp("[?&]" + name + "=([^&#]*)")
    var results = regex.exec(url)

    return results ? results[1] : null
}