export class Canvas {
    #element;
    #context;

    constructor() {
        this.#element = document.createElement("canvas");
        this.#context = this.#element.getContext("2d");
        this.#element.width = 0;
        this.#element.height = 0;
        this.resize();
        document.querySelector("#gameplay").appendChild(this.#element);
    }

    getWidth() {
        return this.#element.width;
    }

    getHeight() {
        return this.#element.height;
    }

    drawCircle(x, y, r) {
        this.#context.fillStyle = 'white';
        this.#context.beginPath();
        this.#context.arc(x, y, r, 0, Math.PI * 2, true);
        this.#context.fill();
    }

    drawRoundRect(x, y, width, height) {
        this.#context.fillStyle = 'white';
        this.#context.roundRect(x, y, width, height, 20);
        this.#context.fill();
    }

    drawText(text, x, y) {
        this.#context.fillStyle = 'rgba(255,255,255,0.2)';
        this.#context.font = "200px 'Roboto', Arial";
        this.#context.textAlign = "center";
        this.#context.fillText(text, x, y);
    }

    drawLine(startX, startY, endX, endY) {
        this.#context.strokeStyle = 'rgba(255,255,255,0.2)';
        this.#context.beginPath();
        this.#context.moveTo(startX, startY);
        this.#context.lineTo(endX, endY);
        this.#context.stroke();
    }

    resize() {
        this.#element.width = window.innerWidth;
        this.#element.height = window.innerHeight;
    }

    clear() {
        this.#context.clearRect(0, 0, this.#element.width, this.#element.height);
    }
}