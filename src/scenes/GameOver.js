
// You can write more code here
import Phaser from "phaser";
/* START OF COMPILED CODE */

export default class GameOver extends Phaser.Scene {

	constructor() {
		super("GameOver");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// gameBg
		const gameBg = this.add.image(965, 540, "Bg");
		gameBg.scaleX = 1.02;
		gameBg.scaleY = 1.02;
		gameBg.visible = false;

		// gameOverContainer
		const gameOverContainer = this.add.container(974.9999703561407, 569.5000178575026);

		// gameOver
		const gameOver = this.add.image(-5.3038033639530795, -15.126787877033735, "Game-over-board");
		gameOverContainer.add(gameOver);

		// gameOverTxt
		const gameOverTxt = this.add.image(-15, -275, "GameOver_1");
		gameOverContainer.add(gameOverTxt);

		// replayBtn
		const replayBtn = this.add.image(-12, 165, "Replay-Button");
		gameOverContainer.add(replayBtn);

		// displayReason
		const displayReason = this.add.text(-10.30380336395308, -125.12678787703373, "", {});
		displayReason.setOrigin(0.5, 0.5);
		displayReason.text = "Out Of Moves!";
		displayReason.setStyle({ "align": "center", "color": "#fefefeff", "fontFamily": "Purple Smile", "fontSize": "35px", "fontStyle": "bold", "stroke": "#000000ff", "strokeThickness": 5 });
		gameOverContainer.add(displayReason);

		// displayScore
		const displayScore = this.add.text(-10.30380336395308, 19.873212122966265, "", {});
		displayScore.setOrigin(0.5, 0.5);
		displayScore.text = "0";
		displayScore.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Purple Smile", "fontSize": "50px", "fontStyle": "bold", "stroke": "#000000ff", "strokeThickness": 5 });
		gameOverContainer.add(displayScore);

		// displayScore_1
		const displayScore_1 = this.add.text(-10.30380336395308, -50.126787877033735, "", {});
		displayScore_1.setOrigin(0.5, 0.5);
		displayScore_1.text = "Score";
		displayScore_1.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Purple Smile", "fontSize": "35px", "fontStyle": "bold", "stroke": "#000000ff", "strokeThickness": 5 });
		gameOverContainer.add(displayScore_1);

		// homeBtn
		const homeBtn = this.add.image(-6, 275, "Home-button");
		homeBtn.scaleX = 0.9;
		homeBtn.scaleY = 0.9;
		gameOverContainer.add(homeBtn);

		this.gameBg = gameBg;
		this.gameOverContainer = gameOverContainer;
		this.gameOver = gameOver;
		this.gameOverTxt = gameOverTxt;
		this.replayBtn = replayBtn;
		this.displayReason = displayReason;
		this.displayScore = displayScore;
		this.displayScore_1 = displayScore_1;
		this.homeBtn = homeBtn;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	gameBg;
	/** @type {Phaser.GameObjects.Container} */
	gameOverContainer;
	/** @type {Phaser.GameObjects.Image} */
	gameOver;
	/** @type {Phaser.GameObjects.Image} */
	gameOverTxt;
	/** @type {Phaser.GameObjects.Image} */
	replayBtn;
	/** @type {Phaser.GameObjects.Text} */
	displayReason;
	/** @type {Phaser.GameObjects.Text} */
	displayScore;
	/** @type {Phaser.GameObjects.Text} */
	displayScore_1;
	/** @type {Phaser.GameObjects.Image} */
	homeBtn;

	/* START-USER-CODE */

	// Write your code here
	init(data) {
		this.reason = data.reason;
		this.score = data.score;
	}

	create() {

		this.editorCreate();

		this.oSoundManager = new SoundManager(this);

		if (enableSound == true) {
			this.oSoundManager.playSound(this.oSoundManager.gameOver, false);
		}
		this.displayReason.text = this.reason;
		this.displayScore.text = this.score;

		this.gameOverContainer.setScale(0.5, 0.5);
		this.tweens.add({
			targets: this.gameOverContainer,
			scaleX: 1.1,
			scaleY: 1.1,
			duration: 1000,
			ease: 'Power2',
		});

		this.replayBtn.on("pointerover", () => {
			this.replayBtn.setScale(1.2)
			this.input.setDefaultCursor('pointer');
		})
		this.replayBtn.on("pointerout", () => {
			this.replayBtn.setScale(1)
			this.input.setDefaultCursor('default');
		})
		this.replayBtn.setInteractive().on('pointerdown', () => {
			if (enableSound == true) {
				this.oSoundManager.playSound(this.oSoundManager.buttonClick, false);
			}
			clearInterval(this.balloonInterval);
			this.scene.stop("GameOver");
			this.scene.start("game");
		});


		this.homeBtn.setInteractive().on('pointerdown', () => {

			if (enableSound == true) {
				this.oSoundManager.playSound(this.oSoundManager.buttonClick, false);
			}

			const firstScene = this.scene.get("Level");
			const backgroundMusic1 = firstScene.backgroundMusic;
			if (firstScene) {
				if (backgroundMusic1) {
					backgroundMusic1.stop();
				}
			}
			clearInterval(this.balloonInterval);
			this.scene.stop("GameOver");
			this.scene.start("Level");
		})
		this.homeBtn.on("pointerover", () => {
			this.homeBtn.setScale(1.2)
			this.input.setDefaultCursor('pointer');
		})
		this.homeBtn.on("pointerout", () => {
			this.homeBtn.setScale(1)
			this.input.setDefaultCursor('default');
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
