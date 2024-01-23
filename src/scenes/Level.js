
// You can write more code here
import Phaser from "phaser";
import SoundManager from "../scripts/SoundManager";
let enableSound;
/* START OF COMPILED CODE */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// gameBg
		const gameBg = this.add.image(960, 540, "Bg");
		gameBg.scaleX = 1.02;
		gameBg.scaleY = 1.02;
		gameBg.visible = false;

		// loadingBarContainer
		const loadingBarContainer = this.add.container(945, 285);

		// logo
		const logo = this.add.image(15, 30, "Logo");
		logo.scaleX = 1.3;
		logo.scaleY = 1.3;
		loadingBarContainer.add(logo);

		// playBtn
		const playBtn = this.add.image(960, 825, "Play-button");

		// soundOn
		const soundOn = this.add.image(1865, 70, "Sound-On-button");

		// soundOff
		const soundOff = this.add.image(1865, 70, "Sound-Off-Button");
		soundOff.visible = false;

		this.gameBg = gameBg;
		this.loadingBarContainer = loadingBarContainer;
		this.logo = logo;
		this.playBtn = playBtn;
		this.soundOn = soundOn;
		this.soundOff = soundOff;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	gameBg;
	/** @type {Phaser.GameObjects.Container} */
	loadingBarContainer;
	/** @type {Phaser.GameObjects.Image} */
	logo;
	/** @type {Phaser.GameObjects.Image} */
	playBtn;
	/** @type {Phaser.GameObjects.Image} */
	soundOn;
	/** @type {Phaser.GameObjects.Image} */
	soundOff;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
		this.oSoundManager = new SoundManager(this);
		this.backgroundMusic = this.sound.add('Background', { loop: true });
		this.backgroundMusic.play();
		this.backgroundMusic.setVolume(0.1);

		this.tweens.add({
			targets: this.logo,
			scaleX: 1.5,
			scaleY: 1.5,
			duration: 1000,
			ease: 'Power2',
			yoyo: true,
			repeat: -1
		});

		/*this.tweens.add({
			targets : this.playBtn,
			scaleX : 1.1,
			scaleY : 1.1,
			duration : 1000,
			ease : 'Power2',
			yoyo : true,
			repeat : -1,
			delay : 200
		});*/

		this.playBtn.on("pointerover", () => {
			this.playBtn.setScale(1.2)
			this.input.setDefaultCursor('pointer');
		})
		this.playBtn.on("pointerout", () => {
			this.playBtn.setScale(1)
			this.input.setDefaultCursor('default');
		})

		this.soundOn.setInteractive().on("pointerdown", () => {
			if (this.soundOn.texture.key == "Sound-On-button") {
				this.soundOn.setTexture("Sound-Off-Button");
				enableSound = false;
				this.backgroundMusic.stop();
			}
			else {
				this.soundOn.setTexture("Sound-On-button");
				enableSound = true;
				this.backgroundMusic.play();
			}
		});

		this.soundOn.on("pointerover", () => {
			this.soundOn.setScale(1.2)
			this.input.setDefaultCursor('pointer');
		})
		this.soundOn.on("pointerout", () => {
			this.soundOn.setScale(1)
			this.input.setDefaultCursor('default');
		})


		this.playBtn.setInteractive().on('pointerdown', () => {
			if (enableSound == true) {
				this.oSoundManager.playSound(this.oSoundManager.buttonClick, false);
			}
			this.input.setDefaultCursor('default');
			this.scene.stop("Level");
			this.scene.start("game");
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
