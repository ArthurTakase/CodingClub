# Gagnant Gagnant

Le sujet suivant est une sorte de CTF (fait rapidement on va pas se le cacher).

## Materiel necessaire

- Au moins un ordinateur par goupe
- Un puissance 4
- 2 trucs pour cacher les yeux

## Etapes

1. Trouver l'adresse d'un site internet grace au brutforce (un code python sera donné, à eux d'utiliser leurs connaissances).
2. Trouver la commande à rentrer dans le terminal du site ouvert plus tôt en fouillant le code source de la page.
3. Un texte sera donné. Il faut le décoder une fois de sa base 64, puis utiliser un convretisseur base 64 vers image. Le code à rentrer dans le terminal sera le personnage présent sur cette dernière.
4. Le terminal va alors donner une phrase que les guests devront dire à un Cobra. Si la phrase est correcte, ils devront affronter un Cobra à un puissance 4 les yeux bandés.
5. En cas de victoire, un code à mettre sur le terminal est donné. Ce code permet d'accèder à un nouvel énoncé. Le jeu est celui de Wikipedia (partir d'une page pour arriver sur une autre en utilisant uniquement les liens, et le moins possible). Les pages d'arrivée contiennent les mots clefs qui forment le code à trouver qui doit être renseigné sur le terminal pour terminer le sujet.

## Indices à donner + Score

### Etape 1

Vous devez utiliser le script python fournis et trouver quel mot de passe permet d'acceder à la suite du sujet.
Le mot de passe est constitué d'une couleur (`rouge, vert, bleu, jaune, magenta, cyan, noir, blanc`) et du prénom d'un des cobras présent sur place (`ne pas donner les prénoms comme ça, c'est aux guests de demander`).

- 1er : + 50 pts
- 2eme : + 30 pts
- 3eme : + 10pts

### Etape 2

N.C.

### Etape 3

Incide 1 : `0b1000000`
Indice 2 : `Base 64`
Indice 3 : `Image`

- 1er : + 50 pts
- 2eme : + 30 pts
- 3eme : + 10pts

### Etape 4

Le score est donné par le calcul scientifique suivant : `50 pts / nombreDePersonnesQuIlAFallutPourBattreLeCobra`

### Etape 5

Le score est donné par le calcul scientifique suivant : `50 pts / nombreDePageVisitées`

### Fin

- 1er : + 50 pts
- 2eme : + 30 pts
- 3eme : + 10pts

## Solutions

### Etape 1

L'url à trouver est `arthurtakase.github.io/GagnantGagnant/terminal/magentahugo.html`, dont le code est `magentahugo`.

Exemple de code réponse :

```python
def main():
    pass
```

### Etape 2

Les guests doivent inspecter le code de la page pour lire le commentaire suivant :

```txt
Bonjour les p'tits potes !
Alors comme ça on inspecte le code source ?

C'est bien vu, c'était ça qu'il fallait faire.

Essayez de rentrer la commande suivante dans le terminal de la page pour continuer : `$ cat /etc/passwd`
```

### Etape 3

Décodez le code avec [ce site](https://www.base64decode.org/), puis utilisez le texte sortant sur [ce site](https://codebeautify.org/base64-to-image-converter).

Le resultat est l'image suivante (donc le code à rentrer est `Sonic`) :

![](https://media.discordapp.net/attachments/946745847062876220/969261720461791252/sonic.jpg)

### Etape 4

A la force de ton cerveau bg.

### Etape 5.1

Page de départ : https://fr.wikipedia.org/wiki/Bordeaux

Bordeaux -> Puissance 4

Bordeaux -> Terrain de jeux -> Jeux -> Jeu de société -> Puissance 4

`Date de la première édition : 1974`

### Etape 5.2

Puissance 4 -> JavaScript

Puissance 4 -> Jeu d'arcade -> Jeux vidéo -> Logiciel -> Langage de programmation -> JavaScript

`Norme JS : ECMA-262`