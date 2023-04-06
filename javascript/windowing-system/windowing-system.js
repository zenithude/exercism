// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

/**To practice your wide range of JavaScript skills, try to solve tasks 1 and 2 with prototype syntax and the remaining tasks with class syntax. 
 * 
 * Resolve the two first Task Size and Position with prototype 
 * 
*/
export function Size(width=80, height=60) {
    this.width = width;
    this.height = height
}

Size.prototype.resize = function(/** @type {number} */ width, /** @type {number} */ height) {
    this.width = width;
    this.height = height
}

export function Position(x=0, y=0) {
    this.x = x;
    this.y = y;
}

Position.prototype.move = function(/** @type {number} */ newX, /** @type {number} */ newY) {
    this.x = newX;
    this.y = newY;
}

/** 
 * Resolve the two last Task with class ProgramWindow and method resize
*/
export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }
    resize(Size) {
        if (Size.width <= 1) {
            this.size.width = 1;
        } else if (this.position.x + Size.width > this.screenSize.width) {            
            this.size.width = this.screenSize.width - this.position.x;
        } else {
            this.size.width = Size.width;
        }
        if (Size.height <= 1) {
            this.size.height = 1;
        } else if (this.position.y + Size.height > this.screenSize.height) {
            this.size.height = this.screenSize.height - this.position.y;
        } else {
            this.size.height = Size.height;
        }
    }
    move(newPosition) {
        if (newPosition.x < 0) {
            newPosition.x = 0;
        } else if (newPosition.x + this.size.width > this.screenSize.width) {
            newPosition.x = this.screenSize.width - this.size.width;
        } else if (this.position.x + newPosition.x > this.screenSize.width) {
            newPosition.x = this.screenSize.width - this.position.x;
        } 
        if (newPosition.y < 0) {
            newPosition.y = 0;
        } else if (newPosition.y + this.size.height > this.screenSize.height) {
            newPosition.y = this.screenSize.height - this.size.width;
        } else if (this.position.y + newPosition.y > this.screenSize.height) {
            newPosition.y = this.screenSize.height - this.position.y;
        } 
        this.position = newPosition
    }
}

export function changeWindow(programWindow) {
    const newSize = new Size(400, 300);
    const newPosition = new Position(100, 150);
    programWindow.resize(newSize);
    programWindow.move(newPosition);
    return programWindow
}