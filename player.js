class Player {
    #upDirection = "up";
    #downDirection = "down";

    constructor() {
        this.width = 10;
        this.height = 100;
        this.y = 0;
        this.direction = null;
        this.speed = 15;
        this.score = 0;
        this.moveToCenter();
    }

    init() {
        this.moveToCenter();
        this.resetScore();
    }

    moveToCenter() {
        this.y = window.innerHeight / 2 - this.height / 2;
    }

    increaseScore() {
        this.score++;
    }

    isWinner(scoreToWin) {
        return this.score === scoreToWin;
    }

    cleanDirection() {
        this.direction = null;
    }

    upDirection() {
        this.direction = this.#upDirection;
    }

    downDirection() {
        this.direction = this.#downDirection;
    }

    resetScore() {
        this.score = 0;
    }

    resetY() {
        if (this.y + this.height > window.innerHeight) {
            this.y = window.innerHeight - this.height;
        }
    }

    move() {
        if (this.direction === this.#upDirection && this.y >= 0) {
            this.y -= this.speed;
        } else if (this.direction === this.#downDirection && this.y < (window.innerHeight - this.height)) {
            this.y += this.speed;
        }
    }

    in(y) {
        return y >= this.y && y <= this.y + this.height;
    }
}

class PlayerLeft extends Player {
    constructor() {
        super();
        this.x = this.width;
    }

    hasHitBall(ballX, ballY, ballRadius) {
        return ballX < this.width * 2 + ballRadius &&
            ballX > this.width + ballRadius &&
            this.in(ballY);
    }

    hasGoal(ballX, ballSize) {
        return ballX <= -ballSize;
    }

    reset() {
        this.resetY();
    }
}

class PlayerRight extends Player {
    constructor() {
        super();
        this.x = window.innerWidth - this.width - this.width;
    }

    hasHitBall(ballX, ballY, ballRadius) {
        return ballX > window.innerWidth - this.width * 2 - ballRadius &&
            ballX < window.innerWidth - this.width &&
            this.in(ballY);
    }

    hasGoal(ballX) {
        return ballX > window.innerWidth;
    }

    reset() {
        this.x = window.innerWidth - this.width - this.width;
        this.resetY();
    }
}

export { PlayerLeft, PlayerRight };