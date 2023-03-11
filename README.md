# Magic Monitor

- The purpose of this script is to take video / data input from consoles via third-party `HDMI / DP` to `USB Device`.
- It's for people with a `game console` that want to use their `high performance monitor` rather than `TV` while also using `monitor` as `PC monitor`.
- You can download to play right away or add it to your project.
- You can test it on my website: https://joeworkbench.net/MagicMonitor

## For Those in a Hurry

- All you really need is `MagicMonitor.html`. You can download and launch it on your favorite browser.
- Go into your `Browser Settings` and search for `Webcam` and `Microphone`.
- Set the `Default` device to your `Usb Device` connected from your `console` and to your `PC`.
- Depending on the distance to your `console`, an `hdmi/dp repeater` might be necessary.
- An `hdmi splitter` will be necessary if you wish to use a `TV` as well.

## Features

- Uses a browser as a monitor to display game console / media connected via USB
- Utilizes the webcam and microphone functionality native to most modern browsers
- Can take advantage of the "media popout feature" found in some browsers

## Requirements

- A third-party USB device for console input
- A modern browser with webcam and microphone functionality

## Installation

- To install for Users:
1. Download `MagicMonitor.html` from above.
2. Open the `MagicMonitor.html` file in your preferred browser.
3. Connect your USB device for console input.

- To install Standalone for Developers
1. Clone the repository
2. `mv MagicMonitor/CodeSplitting/testMagicMonitor MagicMonitor/index.html`
3. `mv MagicMonitor/JS/testMagicMonitor MagicMonitor/JS/main.js`
4. `rm MagicMonitor.html README.md` -(optional, but recommended)
5. In your new `index.html`

  - Locate
  ```HTML
      <link rel="stylesheet" href="./CSS/MM.css">
      <script type="module" src="./JS/MagicMonitor.js" ></script>
      <script type="module" src="./JS/testMagicMonitor.js" ></script>
  ```

  - Modify
  ```HTML
      <link rel="stylesheet" href="./CodeSplitting/CSS/MM.css">
      <script type="module" src="./CodeSplitting/JS/MagicMonitor.js" ></script>
      <script type="module" src="./CodeSplitting/JS/testMagicMonitor.js" ></script>
  ```
6. Code examples can be found below should you wish to only use `MagicMonitor.js` as a Code Snippet.

## Usage

1. Run the `MagicMonitor.html` file in your browser.
2. Follow browser instructions to set your `USB Device` as default for both webcam and mic.

## For Developers

- I have made `MagicMonitor.js` which has all the methods you need.
- To add it to your JS import add:

In your HTML:
```HTML
<script type="module" src="./JS/MagicMonitor.js"></script>

<div id="container">
  <video autoplay="true" id="videoElement"></video>
</div>
```

In your JavaScript:
```javascript

import MagicMonitor from './MagicMonitor.js';
```

- See my code `testMagicMonitor.js`for examples using the methods.
- I have also included an optional Basic CSS class `MM.css` to make it look decent if you're ok with the sizing.

The File Structure is:
```bash
  index.html (testMagicMonitor)
  |
  |--JS/
  |   |
  |   |--MagicMonitor.js   
  |--CSS/
  |   |
  |   |--MM.css
  |
  |
```
## Contributing

Contributions are welcome! I currently do not have a [contribution guidelines](CONTRIBUTING.md) link for more information.

## License

This project is licensed under the [Creative Commons Attribution 1.0 International License](http://creativecommons.org/licenses/by/1.0/).

## Author

This project was created by `Joseph Ang` and `README.ME` co-authored by `OpenAI's ChatGPT`.

## $$$ Money $$$

Please donate to your favorite charity for me <3
