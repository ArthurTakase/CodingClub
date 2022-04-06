class Food {
    constructor() {
        this.x = floor(random(w))
        this.y = floor(random(h))
        this.body = createVector(this.x, this.y)
    }

    show() {
        noStroke()
        fill(255, 0, 0)
        rect(this.body.x, this.body.y, 1, 1)
    }
}