import MagicMonitor from './MagicMonitor.js';

// create a new MagicMonitor instance
const magicMonitor = new MagicMonitor();

// test the setVideoConstraints() method
magicMonitor.setVideoConstraints(640, 480);
console.log(magicMonitor.getVideoConstraints());

// test the display() method
const videoElement = 'myVideo';
magicMonitor.display(videoElement);
