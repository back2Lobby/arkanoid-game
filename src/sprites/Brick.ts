import { Vector } from '../types'

export class Brick {
    private brickImage: HTMLImageElement = new Image()

    constructor(
        private brickWidth: number,
        private brickHeight: number,
        private position: Vector,
        private brickEnergy: number,
        image: string
    ) {
        this.brickImage.src = image
    }

    // Getters
    get width(): number {
        return this.brickWidth;
    }

    get height(): number {
        return this.brickHeight;
    }

    get pos(): Vector {
        return this.position;
    }

    get image(): HTMLImageElement {
        return this.brickImage;
    }

    get energy(): number {
        return this.brickEnergy
    }

    // Setters
    set energy(energy: number) {
        this.brickEnergy = energy
    }
}