let isReadyCmd = false

function writeCmd() {
    var i = 0;

    const text = [
        "Initialisation des informations",
        "Chargement des données critiques",
        "Transfert des données sur un serveur distant",
        "Sécurisation du serveur",
        "Connexion aux données de l'utilisateur",
        "Chargement des données de l'utilisateur",
        "Connexion réussie !"
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
    }, 300);
}

writeCmd();