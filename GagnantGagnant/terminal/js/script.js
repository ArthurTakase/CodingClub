const input = document.getElementById("input")
const commands = document.getElementById("commands")

let currentstep = 0

input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        if (isReadyCmd && currentstep >= data["answers"].length)
            addCmd("[<span style='color: yellow'>WARN</span>] Commande invalide")
        else if (data["answers"][currentstep].answer == input.value.toLowerCase()) {
            addCmd(data["answers"][currentstep].right)
            currentstep++
            if (currentstep == data["answers"].length)
                addCmd("[<span style='color: green'>OK</span>] Mission terminée ! Pour prouver votre victoire, n'hésitez pas à lacher votre plus beau 'Kreog !' (C'est la bruit du Koala).")
        } else { addCmd(data["answers"][currentstep].wrong) }
    }
});

function addCmd(text) {
    var newCmd = document.createElement("p");
    newCmd.innerHTML = text;

    commands.prepend(newCmd);

    input.value = ""
}