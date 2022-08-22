export class FloatingThing {
    distance: number;
    height: number;
    float_amount: number;
    direction: -1 | 1;
    vertical_direction: -1 | 1;
    rotation: number;
    texture: string;

    constructor(texture: string) {
        this.texture = texture;
        this.regen();

        this.float_amount = Math.random();
    }

    regen() {
        this.rotation = Math.random() * 360;

        this.float_amount = Math.round(Math.random());
        this.direction = (this.float_amount * 2 - 1) * -1 as -1 | 1;

        this.vertical_direction = (Math.round(Math.random()) * 2 - 1) * -1 as -1 | 1;

        this.distance = Math.random() * 0.5;
        this.height = Math.random();
    }

    tick() {
        this.float_amount += this.distance;
    }
}