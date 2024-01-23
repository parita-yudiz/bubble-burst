
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// gameBg
		const gameBg = this.add.image(960, 540, "preGameBg");
		gameBg.scaleX = 1.02;
		gameBg.scaleY = 1.02;
		gameBg.visible = false;

		// loadingOuter
		const loadingOuter = this.add.image(960, 785, "Loading-bar-case");

		// loadingInner
		const loadingInner = this.add.image(684, 785, "Loading-bar");
		loadingInner.setOrigin(0, 0.5);
		loadingInner.visible = false;

		// txt_progress
		const txt_progress = this.add.text(948, 769, "", {});
		txt_progress.text = "0%";
		txt_progress.setStyle({ "align": "center", "color": "#1b5bd3ff", "fontFamily": "Purple Smile", "fontSize": "20px", "fontStyle": "bold", "strokeThickness":4});

		// logo1
		const logo1 = this.add.image(851, 2266, "Logo1");
		logo1.scaleX = 1.3;
		logo1.scaleY = 1.3;

		// yellow1
		const yellow1 = this.add.image(-328, 1770, "Yellow1");
		yellow1.scaleX = 0.9;
		yellow1.scaleY = 0.9;

		// red1
		const red1 = this.add.image(612, 1486, "Red1");
		red1.scaleX = 0.6;
		red1.scaleY = 0.6;

		// purple1
		const purple1 = this.add.image(2859, 846, "Purple1");
		purple1.scaleX = 0.8;
		purple1.scaleY = 0.8;

		// purple2
		const purple2 = this.add.image(2428, 1354, "Purple2");
		purple2.scaleX = 0.4;
		purple2.scaleY = 0.4;

		// blue1
		const blue1 = this.add.image(1590, 1538, "Blue1");
		blue1.scaleX = 0.7;
		blue1.scaleY = 0.7;
		blue1.flipX = true;
		blue1.flipY = true;

		// green1
		const green1 = this.add.image(-476, 1043, "Green1");
		green1.scaleX = 0.7;
		green1.scaleY = 0.7;

		// red2
		const red2 = this.add.image(2502, 190, "Red2");
		red2.scaleX = 0.7;
		red2.scaleY = 0.7;
		red2.flipX = true;

		// orange1
		const orange1 = this.add.image(-430, 107, "Orange1");
		orange1.scaleX = 0.4;
		orange1.scaleY = 0.4;

		this.gameBg = gameBg;
		this.loadingOuter = loadingOuter;
		this.loadingInner = loadingInner;
		this.txt_progress = txt_progress;
		this.logo1 = logo1;
		this.yellow1 = yellow1;
		this.red1 = red1;
		this.purple1 = purple1;
		this.purple2 = purple2;
		this.blue1 = blue1;
		this.green1 = green1;
		this.red2 = red2;
		this.orange1 = orange1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	gameBg;
	/** @type {Phaser.GameObjects.Image} */
	loadingOuter;
	/** @type {Phaser.GameObjects.Image} */
	loadingInner;
	/** @type {Phaser.GameObjects.Text} */
	txt_progress;
	/** @type {Phaser.GameObjects.Image} */
	logo1;
	/** @type {Phaser.GameObjects.Image} */
	yellow1;
	/** @type {Phaser.GameObjects.Image} */
	red1;
	/** @type {Phaser.GameObjects.Image} */
	purple1;
	/** @type {Phaser.GameObjects.Image} */
	purple2;
	/** @type {Phaser.GameObjects.Image} */
	blue1;
	/** @type {Phaser.GameObjects.Image} */
	green1;
	/** @type {Phaser.GameObjects.Image} */
	red2;
	/** @type {Phaser.GameObjects.Image} */
	orange1;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();

		this.isGameLoaded1 = false;
		this.isGameLoaded2 = false;

		this.load.on(Phaser.Loader.Events.COMPLETE, (p) => {
			this.isGameLoaded1 = true;
		});

		this.innerBarWidth = this.loadingInner.displayWidth;

		this.maskGraphics = this.make.graphics();
		this.maskGraphics.fillStyle(0xffffff);
		this.maskGraphics.fillRect(
			this.loadingInner.x,
			this.loadingInner.y - this.loadingInner.displayHeight / 2,
			this.loadingInner.displayWidth,
			this.loadingInner.displayHeight
		);

		this.loadingInner.setMask(this.maskGraphics.createGeometryMask());

		const loadingDuration = 3000;
		const intervalDuration = 30;
		const numIntervals = loadingDuration / intervalDuration;
		let currentInterval = 0;
		const progressIncrement = 1 / numIntervals;

		const updateProgressBar = () => {
			this.loadingInner.setVisible(true);
			const currentProgress = currentInterval * progressIncrement;
			this.maskGraphics.clear();
			this.maskGraphics.fillStyle(0xffffff);
			this.maskGraphics.fillRect(
				this.loadingInner.x,
				this.loadingInner.y - this.loadingInner.displayHeight / 2,
				this.innerBarWidth * currentProgress,
				this.loadingInner.displayHeight
			);
			this.txt_progress.setText((currentProgress * 100).toFixed(0) + '%');
			currentInterval++;
			if (currentProgress >= 1) {
				clearInterval(progressInterval);
				this.isGameLoaded2 = true;
			}
		};

		const progressInterval = setInterval(updateProgressBar, intervalDuration);

		this.tweens.add({
			targets: this.logo1,
			ease: "Power2",
			duration: 2000,
			x: 935,
			y: 325,
			//yoyo: true, // Add this line to make it bounce
		});

		this.tweens.add({
			targets: this.yellow1,
			ease: "Power2",
			duration: 2800,
			x: 765,
			y: 85,

		});

		this.tweens.add({
			targets: this.red1,
			ease: "Power2",
			duration: 2600,
			x: 750,
			y: 160,

		});

		this.tweens.add({
			targets: this.purple1,
			ease: "Power2",
			duration: 2400,
			x: 690,
			y: 145,

		});

		this.tweens.add({
			targets: this.purple2,
			ease: "Power2",
			duration: 2200,
			x: 655,
			y: 400,

		});

		this.tweens.add({
			targets: this.blue1,
			ease: "Power2",
			duration: 2000,
			x: 1305,
			y: 295,

		});

		this.tweens.add({
			targets: this.green1,
			ease: "Power2",
			duration: 2500,
			x: 1180,
			y: 400,

		});

		this.tweens.add({
			targets: this.red2,
			ease: "Power2",
			duration: 2700,
			x: 915,
			y: 485,

		});

		this.tweens.add({
			targets: this.orange1,
			ease: "Power2",
			duration: 2100,
			x: 875,
			y: 530,

		});
	}

	update() {
		if (this.isGameLoaded1 && this.isGameLoaded2) {
			this.scene.stop("Preload");
			this.scene.start("Level");
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
