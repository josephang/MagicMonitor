import MagicMonitor from './MagicMonitor.js';

// create a new MagicMonitor instance
const magicMonitor = new MagicMonitor();

// test the Accessors / Mutators of VideoConstraints() method
magicMonitor.setVideoConstraints(1920, 1080);
console.log(magicMonitor.getVideoConstraints());

// test the display() method
const videoElement = 'myVideo';
magicMonitor.display();
