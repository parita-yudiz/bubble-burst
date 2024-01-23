import Level from '../src/scenes/Level';
import SoundManager from '../src/scripts/SoundManager';

describe('Level scene', () => {
    let level;

    beforeEach(() => {
        level = new Level();
        level.add = { // Mock the 'add' object
            image: jest.fn().mockReturnValue({
                on: jest.fn(), // Mock the 'on' method
                setScale: jest.fn(), // Mock the 'setScale' method
                setInteractive: jest.fn().mockReturnThis(), // Mock the 'setInteractive' method
                emit: jest.fn(), // Mock the 'emit' method
                texture: { key: 'Sound-On-button' }, // Mock the 'texture' object
                setTexture: jest.fn(), // Mock the 'setTexture' method
            }),
            container: jest.fn().mockReturnValue({
                add: jest.fn().mockReturnThis(),
            }),
        };
        level.scene = { // Add this line
            stop: jest.fn().mockReturnThis(),
            start: jest.fn().mockReturnThis(),
        };
        level.sound = { // Add this line
            add: jest.fn().mockReturnValue({
                play: jest.fn(),
                setVolume: jest.fn(),
                stop: jest.fn(),
            }),
        };
        level.tweens = {
            add: jest.fn(),
        };
        level.events = {
            emit: jest.fn(),
        };
        level.scene = {
            stop: jest.fn(),
            start: jest.fn(),
        };
        level.input = {
            setDefaultCursor: jest.fn(),
        };
        level.oSoundManager = new SoundManager(level);
        level.create();
    });

    it('plays background music on creation', () => {
        expect(level.backgroundMusic.play).toHaveBeenCalled();
    });

    it('sets volume of background music on creation', () => {
        expect(level.backgroundMusic.setVolume).toHaveBeenCalledWith(0.1);
    });

    it('adds tween to logo on creation', () => {
        expect(level.tweens.add).toHaveBeenCalled();
    });

    it('sets play button interactive on creation', () => {
        expect(level.playBtn.setInteractive).toHaveBeenCalled();
    });

    it('sets sound button interactive on creation', () => {
        expect(level.soundOn.setInteractive).toHaveBeenCalled();
    });

    it('changes to game scene on play button click', () => {
        const playButtonHandler = level.playBtn.on.mock.calls.find(call => call[0] === 'pointerdown')[1];
        playButtonHandler();
        expect(level.scene.stop).toHaveBeenCalledWith('Level');
        expect(level.scene.start).toHaveBeenCalledWith('game');
    });

    it('toggles sound on sound button click', () => {
        const soundButtonHandler = level.soundOn.on.mock.calls.find(call => call[0] === 'pointerdown')[1];
        soundButtonHandler();
        expect(level.backgroundMusic.stop).toHaveBeenCalled();
        soundButtonHandler();
        expect(level.backgroundMusic.play).toHaveBeenCalled();
    });
});