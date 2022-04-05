class Snake {

    // Informations sur le serpent
    constructor() {
        this.body = [] // Corps du serpent
        this.body[0] = createVector(floor(largeur / 2), floor(hauteur / 2)) // Tête du serpent
        this.xdir = 0 // Vitesse horizontale
        this.ydir = 0 // Vitesse verticale
        this.len = 1 // longueur du serpent
    }

    // Mettre à jour le serpent
    update() {
        let head = this.body[this.len - 1].copy()
        this.body.shift()
        head.x += // Modifier la place de la tête en fonction de sa vitesse
            head.y += // Modifier la place de la tête en fonction de sa vitesse
            this.body.push(head)
    }

    // Afficher le serpent
    show() {
        for (let i = 0; i != this.len; i++) {
            fill(0) // Couleur du serpent
            noStroke()
            rect( /*coordonnée x*/ , /*coordonnée y*/ , 1, 1)
        }
    }

    // Changer la direction de déplacement du serpent
    setDir(x, y) {
        // Modifier la vitesse horizontale du serpent avec la valeur x 
        // Modifier la vitesse verticale du serpent avec la valeur y
    }

    // Faire grandir le serpent
    grow() {
        let head = this.body[this.len - 1].copy()
            // Augmenter la longueur du serpent de 1
        this.body.push(head)
    }

    // Vérifie si le serpent a mangé la nourriture
    eat(food) {
        let head = this.body[this.len - 1]

        if ( /* le serpent touche la nourriture*/ ) {
            // faire grandir le serpent
            return true
        }
        return false
    }

    // Termine le jeu
    endGame() {
        let x = this.body[this.len - 1].x
        let y = this.body[this.len - 1].y
        let part

        if (x > largeur - 1 || x < 0 || y > hauteur - 1 || y < 0)
            return true
        for (let i = 0; i < this.body.length - 1; i++) {
            part = this.body[i]
            if (part.x == x && part.y == y)
                return true
        }
        return false
    }

}