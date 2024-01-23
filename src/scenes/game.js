
// You can write more code here
import Phaser from "phaser";
/* START OF COMPILED CODE */

export default class game extends Phaser.Scene {

	constructor() {
		super("game");

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

		// backgroundContainer
		const backgroundContainer = this.add.container(969, 545);

		// moves
		const moves = this.add.image(-895, -430, "Moves");
		backgroundContainer.add(moves);

		// movesText
		const movesText = this.add.text(-880, -440, "", {});
		movesText.setOrigin(0.5, 0.5);
		movesText.text = "40";
		movesText.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Purple Smile", "fontSize": "47px", "fontStyle": "bold", "stroke": "#000000ff", "strokeThickness":5});
		backgroundContainer.add(movesText);

		// timer
		const timer = this.add.image(866, -431, "Watch");
		backgroundContainer.add(timer);

		// timerText
		const timerText = this.add.text(860, -434.166748046875, "", {});
		timerText.setOrigin(0.5, 0.5);
		timerText.text = "50";
		timerText.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Purple Smile", "fontSize": "45px", "fontStyle": "bold", "stroke": "#000000ff", "strokeThickness":5});
		backgroundContainer.add(timerText);

		// scoreBg
		const scoreBg = this.add.image(-20, 475, "Score-Board");
		backgroundContainer.add(scoreBg);

		// scoreText
		const scoreText = this.add.text(-20, 450, "", {});
		scoreText.setOrigin(0.5, 0.5);
		scoreText.text = "Score";
		scoreText.setStyle({ "align": "center", "backgroundColor": "", "color": "#ffffffff", "fontFamily": "Purple Smile", "fontSize": "30px", "fontStyle": "bold", "stroke": "#030303ff", "strokeThickness":4});
		backgroundContainer.add(scoreText);

		// text_1
		const text_1 = this.add.text(-20, 495, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "0";
		text_1.setStyle({ "align": "center", "fontFamily": "Purple Smile", "fontSize": "50px", "fontStyle": "bold", "stroke": "#000000ff", "strokeThickness":5});
		backgroundContainer.add(text_1);

		// targetScoreContainer
		const targetScoreContainer = this.add.container(1715, 880);

		// star
		const star = this.add.image(75, 90, "Target-board");
		targetScoreContainer.add(star);

		// starTargetText
		const starTargetText = this.add.text(90, 40, "", {});
		starTargetText.setOrigin(0.5, 0.5);
		starTargetText.text = "0";
		starTargetText.setStyle({ "align": "center", "color": "#fffbfbff", "fontFamily": "Purple Smile", "fontSize": "58px", "fontStyle": "bold", "stroke": "#030303ff", "strokeThickness":0.75});
		targetScoreContainer.add(starTargetText);

		// oval
		const oval = this.add.image(-1585, 90, "Your-count-board");
		targetScoreContainer.add(oval);

		// ovalTargetText
		const ovalTargetText = this.add.text(-1595, 40, "", {});
		ovalTargetText.setOrigin(0.5, 0.5);
		ovalTargetText.text = "0";
		ovalTargetText.setStyle({ "align": "center", "color": "#fffbfbff", "fontFamily": "Purple Smile", "fontSize": "60px", "fontStyle": "bold", "stroke": "#030303ff", "strokeThickness":0.75});
		targetScoreContainer.add(ovalTargetText);

		// emptContainer
		const emptContainer = this.add.container(0, 0);

		this.gameBg = gameBg;
		this.moves = moves;
		this.movesText = movesText;
		this.timer = timer;
		this.timerText = timerText;
		this.scoreBg = scoreBg;
		this.scoreText = scoreText;
		this.text_1 = text_1;
		this.star = star;
		this.starTargetText = starTargetText;
		this.oval = oval;
		this.ovalTargetText = ovalTargetText;
		this.emptContainer = emptContainer;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	gameBg;
	/** @type {Phaser.GameObjects.Image} */
	moves;
	/** @type {Phaser.GameObjects.Text} */
	movesText;
	/** @type {Phaser.GameObjects.Image} */
	timer;
	/** @type {Phaser.GameObjects.Text} */
	timerText;
	/** @type {Phaser.GameObjects.Image} */
	scoreBg;
	/** @type {Phaser.GameObjects.Text} */
	scoreText;
	/** @type {Phaser.GameObjects.Text} */
	text_1;
	/** @type {Phaser.GameObjects.Image} */
	star;
	/** @type {Phaser.GameObjects.Text} */
	starTargetText;
	/** @type {Phaser.GameObjects.Image} */
	oval;
	/** @type {Phaser.GameObjects.Text} */
	ovalTargetText;
	/** @type {Phaser.GameObjects.Container} */
	emptContainer;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.oSoundManager = new SoundManager(this);

		this.moves = 40;
		this.score = 0;
		this.timer = 50;
		this.updateTimer();
		this.tempArray = [];


		/*this.homeIcon.setInteractive().on('pointerdown', () => {
			if (enableSound == true) {
				console.log(this.oSoundManager.buttonClick);
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
			this.scene.stop("game");
			this.scene.start("Level");
		})

		this.homeIcon.on("pointerover", () => {
			this.homeIcon.setScale(1.2)
			this.input.setDefaultCursor('pointer');
		})
		this.homeIcon.on("pointerout", () => {
			this.homeIcon.setScale(1)
			this.input.setDefaultCursor('default');
		})*/

		this.balloonInterval = setInterval(() => {
			this.getRandomBalloon(Math.floor(Math.random() * (1920 - 1080) + 1080), -400);
			this.timer--;
			this.timerText.setText(this.timer);
			if (this.timer <= 0) {
				clearInterval(this.balloonInterval);
				setTimeout(() => {
					clearInterval(this.balloonInterval);
					this.scene.stop("game");
					this.scene.start("GameOver", { reason: "Time Is Over!", score: this.score });
				}, 2000);

			}
		}, 1000);
		let starRandomTxt = Math.floor(Math.random() * (30 - 10) + 10);
		this.starTargetText.text = starRandomTxt;

	}

	getRandomBalloon(y, destY) {
		let x = Math.floor(Math.random() * (1520 - 400) + 400);
		let destX = Math.floor(Math.random() * (1520 - 400) + 400);
		const balloonPrefab = new BalloonPrefab(this, x, y);
		balloonPrefab.bubbleText.setText(Math.ceil(Math.random() * 10));
		this.add.existing(balloonPrefab);
		this.tempArray.push(balloonPrefab);
		this.emptContainer.add(balloonPrefab);
		let myTween = this.tweens.add({
			targets: balloonPrefab,
			x: destX,
			y: destY,
			ease: 'Linear',
			duration: 6000,
			onComplete: () => {
				balloonPrefab.destroy();
			}
		});
		myTween;
	}

	countScore(value) {
		let ovalScore = parseInt(this.ovalTargetText.text) + value;
		this.ovalTargetText.text = ovalScore;

		if (ovalScore == parseInt(this.starTargetText.text)) {
			this.addFiftyScore();
			let targetReached = Math.floor(Math.random() * 20) + 1;
			if (enableSound == true) {
				this.oSoundManager.playSound(this.oSoundManager.pointCollect, false);
			}
			this.starTargetText.text = (parseInt(this.starTargetText.text) + targetReached);
			this.ovalTargetText.text = 0;
			this.tweenNewTargetAnimation();
			this.timer += 10;

			setTimeout(() => {
				this.updateTimer();
			}, 1000);

			setTimeout(() => {

				this.balloonInterval = setInterval(() => {
					this.getRandomBalloon(Math.floor(Math.random() * (1920 - 1080) + 1080), -400);
					this.timer--;
					this.timerText.setText(this.timer);
					if (this.timer <= 0) {
						clearInterval(this.balloonInterval);
						this.scene.stop("game");
						this.scene.start("GameOver", { reason: "Time Is Over!", score: this.score });
					}
				}, 1000);
			}, 2000);

		}
		else if (ovalScore > parseInt(this.starTargetText.text)) {
			clearInterval(this.balloonInterval);
			this.scene.stop("game");
			this.scene.start("GameOver", { reason: "Added Too Much!", score: this.score });
		}

		this.updateMoves();
		this.addScore(value);
	}

	updateMoves() {
		this.moves--;
		if (this.moves == 0) {
			clearInterval(this.balloonInterval);
			this.scene.stop("game");
			this.scene.start("GameOver", { reason: "Out Of Moves!", score: this.score });
		}
		else {
			this.movesText.text = this.moves;
		}
	}

	addScore(value) {
		this.score += value;
		this.text_1.text = this.score;
	}

	addFiftyScore() {
		this.score += 50;
		this.text_1.text = this.score;
	}

	tweenNewTargetAnimation() {
		this.tweens.add({
			targets: this.starTargetText,
			ease: "Power2",
			duration: 100,
			repeat: 2,
			yoyo: true,
			scale: 0.5,
		})
	}

	updateTimer() {
		clearInterval(this.balloonInterval);
		for (let i = 0; i < this.emptContainer.list.length; i++) {
			this.emptContainer.list[i].clickDestroy(false);
		}

	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
