export class Ball {
    constructor() {
        this.size = 20;
        this.radius = this.size / 2;
        this.x = 0;
        this.y = 0;
        this.speedX = 8;
        this.speedY = 0;
        this.level = 0;
        this.init();
    }

    init() {
        this.level = 1;
        this.updateSpeedYRandomly();
        this.moveToCenter();
    }

    updateLevel(value) {
        this.level = value;
    }

    moveX() {
        this.x = this.x + this.speedX;
    }

    moveY() {
        this.y = this.y + this.speedY;
        if (this.y > window.innerHeight - this.radius) {
            this.revertSpeedY();
            this.y = window.innerHeight - this.radius;
        } else if (this.y < this.radius) {
            this.revertSpeedY();
            this.y = this.radius;
        }
    }

    moveToCenter() {
        this.x = window.innerWidth / 2 - this.radius;
        this.y = window.innerHeight / 2 - this.radius;
    }

    reset() {
        this.revertSpeedX();
        this.updateSpeedYRandomly();
        this.moveToCenter();
    }

    revertSpeedX() {
        this.speedX *= -1;
    }

    revertSpeedY() {
        this.speedY *= -1;
    }

    updateSpeedY(startY, heigth) {
        if (this.y >= startY && this.y < startY + heigth * .2) {
            this.#setSpeedY(-15);
        }
        else if (this.y >= startY + heigth * .2 && this.y < startY + heigth * .4) {
            this.#setSpeedY(-10);
        }
        else if (this.y >= startY + heigth * .4 && this.y < startY + heigth * .6) {
            this.updateSpeedYRandomly();
        }
        else if (this.y >= startY + heigth * .6 && this.y < startY + heigth * .8) {
            this.#setSpeedY(-10);
        }
        else if (this.y >= startY + heigth * .8 && this.y < startY + heigth) {
            this.#setSpeedY(15);
        }
    }

    updateSpeedYRandomly() {
        this.#setSpeedY(this.#getRandomNumber());
    }

    #setSpeedY(value) {
        this.speedY = value * (.25 * this.level);
    }

    #getRandomNumber() {
        const min = -5;
        const max = 5;
        return Math.random() * (max - min) + min;
    }
}