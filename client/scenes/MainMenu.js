import { Scene } from 'phaser';

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        const bg = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'background');
        let scaleX = this.cameras.main.width / bg.width + 0.2;
        let scaleY = this.cameras.main.height / bg.height + 0.2;
        let scale = Math.max(scaleX, scaleY);
        bg.setScale(scale).setScrollFactor(0);

        this.add.image(this.game.config.width * 0.5, 300, 'logo').setScale(0.2);

        this.add.text(this.game.config.width * 0.5, 460, 'Welcome <3', {
            fontFamily: 'Times New Roman', fontSize: 38, color: '#b90053ff',
            stroke: '#ffffff', strokeThickness: 3,
            align: 'center'
        }).setOrigin(0.5);
        this.add.text(this.game.config.width * 0.5, 500, "This is m4guii's code breaker game!", {
            fontFamily: 'Times New Roman', fontSize: 24, color: '#d64b8aff',
            stroke: '#ffffff', strokeThickness: 3,
            align: 'center'
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
}