let isReadyCmd = false
let isConnected = false

function writeCmd() {
    var i = 0;

    const text = [
        "Initialisation des informations",
        "Chargement des données critiques",
        "Transfert des données sur un serveur distant",
        "Sécurisation du serveur",
        "Connexion aux données de l'utilisateur",
        "Chargement des données de l'utilisateur"
    ]


    var interval = setInterval(function() {
        if (i < text.length) {
            addCmd("[<span style='color: lightgreen'>" + "OK" + "</span>] " + text[i]);
            i++;
        } else {
            clearInterval(interval);
        }
        if (i == text.length)
            isReadyCmd = true;
    }, 50);
}

// wait while json is loaded
function waitJson() {
    if (isReady) {
        writeCmd();
    } else {
        setTimeout(waitJson, 100);
    }
}

function waitCmd() {
    if (isReadyCmd) {
        if (getUrlArgument("id") == data["answers"][currentstep].answer) {
            addCmd(data["answers"][currentstep].right);
            isConnected = true;
            currentstep++;
        } else {
            addCmd(data["answers"][currentstep].wrong);
        }
    } else {
        setTimeout(waitCmd, 100);
    }
}

waitJson()
waitCmd()