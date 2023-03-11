class MagicMonitor {
  constructor() {
    this.hdConstraints = {
      video: {
        width: { min: 1280 },
        height: { min: 720 }
      },
      audio: true
    };
  }

  setVideoConstraints(minWidth, minHeight) {
    this.hdConstraints = {
      video: {
        width: { min: minWidth },
        height: { min: minHeight }
      },
      audio: true
    };
  }

  getVideoConstraints() {
    return this.hdConstraints;
  }

  display(videoElement) {  
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia(this.hdConstraints)
        .then(function (stream) {
          document.querySelector("#" + videoElement).srcObject = stream;
        });
    }
  }
}

export default MagicMonitor;
class MagicMonitor {
  constructor() {
    this.hdConstraints = {
      video: {
        width: { min: 1280 },
        height: { min: 720 }
      },
      audio: true
    };
  }

  setVideoConstraints(minWidth, minHeight) {
    this.hdConstraints = {
      video: {
        width: { min: minWidth },
        height: { min: minHeight }
      },
      audio: true
    };
  }

  getVideoConstraints() {
    return this.hdConstraints;
  }

  display(videoElement) {  
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia(this.hdConstraints)
        .then(function (stream) {
          document.querySelector("#" + videoElement).srcObject = stream;
        });
    }
  }
}

export default MagicMonitor;
