const input = document.getElementById("input");
const commands = document.getElementById("commands")
const raiden = document.getElementById("raiden")
const fbi = document.getElementById("fbi")
const fbiInput = document.getElementById("inputEnd")
const hexa = "426f6e6a6f7572206d6f6e206368657220536f6c696420536e616b652e0a416c6f727320636f6d6d6520c3a761206f6e206d652063686572636865203f0a5475207665757820756e20696e64696365203f0a52656e747265206c6120636f6d6d616e64652073756976616e746520706f757220636f6e74696e756572207465732072656368657263686573203a0a6364202f736563726574732f6c6f636174696f6e202626206f70656e2072616964656e2e706e670a"


let currentStep = 1;
addCmd("Veuillez entrer votre mot de passe pour continuer :", "classement");

inputEnd.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        if (inputEnd.value.toLowerCase() == "malte") {
            commands.innerHTML = ""
            addCmd("Bravo Solid Snake", "success");
            addCmd("Mission terminée !", "success");
            raiden.style.display = "none";
            fbi.style.display = "none";
        }
    }
})

input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        if (input.value == "solution") {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
            input.value = ""
            return
        }
        switch (currentStep) {
            case 1:
                if (input.value.toLowerCase() === "1711raiden1983") {
                    currentStep++
                    input.value = ""
                    addCmd("Bienvenue Mr Raiden", "good")
                    addCmd(hexa, "classic")
                    addCmd("(Informations copiées dans votre presse-papier)", "warning")
                    copyToClipboard(hexa)
                } else {
                    input.value = ""
                    addCmd("Mauvais mot de passe.", "error")
                }
                break;
            case 2:
                if (input.value.toLowerCase() === "cd /secrets/location && open raiden.png") {
                    currentStep++
                    input.value = ""
                    addCmd("opening file \"/secrets/location/raiden.png\"...", "warning")
                    raiden.style.display = "flex"
                    fbi.style.display = "flex"
                    break
                }
            default:
                addCmd(e.target.value + ": Commande inconnue.", "warning")
                break
        }
    }
});

function addCmd(text, type) {
    var newCmd = document.createElement("p");
    newCmd.classList.add(type);
    newCmd.innerHTML = text;

    commands.prepend(newCmd);

    input.value = ""
}

const copyToClipboard = str => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
        return navigator.clipboard.writeText(str);
    return Promise.reject('The Clipboard API is not available.');
};