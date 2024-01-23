export default class SoundManager {
    constructor(oSceneObj) {
        this.oSceneObj = oSceneObj;

        this.background = this.oSceneObj.sound.add("Background");
        this.bubbleBurst = this.oSceneObj.sound.add("BubbleBurst");
        this.bubbleClick = this.oSceneObj.sound.add("BubbleClick");
        this.buttonClick = this.oSceneObj.sound.add("ButtonClick");
        this.clockTick = this.oSceneObj.sound.add("ClockTick");
        this.gameOver = this.oSceneObj.sound.add("GameOver");
        this.pointCollect = this.oSceneObj.sound.add("PointCollect");

    }

    playSound(key, loop) {
        key.play();
        key.loop = loop;
    }
    stopSound(key, loop) {
        key.loop = loop
        key.stop();
    }
}