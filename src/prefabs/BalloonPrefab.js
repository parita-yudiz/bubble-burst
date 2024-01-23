
// You can write more code here

/* START OF COMPILED CODE */

class BalloonPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// bubble
		const bubble = scene.add.sprite(5, 5, "_MISSING");
		bubble.scaleX = 1.2;
		bubble.scaleY = 1.2;
		this.add(bubble);

		// bubbleText
		const bubbleText = scene.add.text(5, 0, "", {});
		bubbleText.setOrigin(0.5, 0.5);
		bubbleText.setStyle({ "align": "center", "color": "#5900BF", "fontFamily": "Purple Smile", "fontSize": "80px", "fontStyle": "bold" });
		this.add(bubbleText);

		this.bubble = bubble;
		this.bubbleText = bubbleText;

		/* START-USER-CTR-CODE */
		// Write your code here.

		this.createRandomBalloon();
		this.bubble.setInteractive().on('pointerdown', () => {
			this.clickDestroy(true);
		})


		/* END-USER-CTR-CODE */
	}

	clickDestroy(finishTemp) {
		if (this.bubble.texture.key == "Blue-bubble") {
			if (enableSound == true) {
				this.scene.oSoundManager.playSound(this.scene.oSoundManager.bubbleBurst, false);
			}
			this.bubble.anims.play('Blue-bubble-burst').once("animationcomplete", () => {
				this.bubble.destroy();
			})
		}
		else if (this.bubble.texture.key == "Yellow-bubble") {
			if (enableSound == true) {
				this.scene.oSoundManager.playSound(this.scene.oSoundManager.bubbleBurst, false);
			}
			this.bubble.anims.play('yellow-bubble-burst').once("animationcomplete", () => {
				this.bubble.destroy();
			})
		}
		else if (this.bubble.texture.key == "Red-bubble") {
			if (enableSound == true) {
				this.scene.oSoundManager.playSound(this.scene.oSoundManager.bubbleBurst, false);
			}
			this.bubble.anims.play('Red-bubble-burst').once("animationcomplete", () => {
				this.bubble.destroy();
			})
		}
		else if (this.bubble.texture.key == "Purple-bubble") {
			if (enableSound == true) {
				this.scene.oSoundManager.playSound(this.scene.oSoundManager.bubbleBurst, false);
			}
			this.bubble.anims.play('purple-bubble-burst').once("animationcomplete", () => {
				this.bubble.destroy();
			})
		}
		else if (this.bubble.texture.key == "Green-bubble") {
			if (enableSound == true) {
				this.scene.oSoundManager.playSound(this.scene.oSoundManager.bubbleBurst, false);
			}
			this.bubble.anims.play('Green-bubble-burst').once("animationcomplete", () => {
				this.bubble.destroy();
			})
		}
		else if (this.bubble.texture.key == "Orange-bubble") {
			if (enableSound == true) {
				this.scene.oSoundManager.playSound(this.scene.oSoundManager.bubbleBurst, false);
			}
			this.bubble.anims.play('Orange-bubble-burst').once("animationcomplete", () => {
				this.bubble.destroy();
			})
		}
		this.bubbleText.destroy();

		if (finishTemp == true) {
			this.scene.countScore(parseInt(this.bubbleText.text));
		}
	}

	/** @type {Phaser.GameObjects.Sprite} */
	bubble;
	/** @type {Phaser.GameObjects.Text} */
	bubbleText;

	/* START-USER-CODE */

	// Write your code here.
	createRandomBalloon() {
		let myBubbles = ["Blue-bubble", "Green-bubble", "Orange-bubble", "Purple-bubble", "Red-bubble", "Yellow-bubble"];
		let myBubblesColor = ["#3238a6", "#086600", "#ab3700", "#5900BF", "#742800", "#c9791a"];

		let bubbleTexture = Math.floor(Math.random() * 6);
		this.bubble.setTexture(myBubbles[bubbleTexture]);
		this.bubbleText.setStyle({ "color": myBubblesColor[bubbleTexture] });
		let randomScale = Math.random() * (1 - 0.8) + 0.8;
		this.bubble.setScale(randomScale, randomScale);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
