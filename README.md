# Blackjack Extension

## Description

This is a Google Chrome extension that displays a Blackjack table when opened. The extension includes the following features:
- A fully functional Blackjack table interface.
- A button to reveal and manage side bets.

## Features

- **Interactive Blackjack Table**: Play a game of Blackjack directly in your browser.
- **Side Bets Viewer**: A dedicated button to display and interact with side bets options.

## Installation

1. Download the ZIP file.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top right corner).
4. Click **Load unpacked** and select the folder containing the extension files.

## Usage

1. Click on the extension icon in your browser to open the Blackjack table.
2. Use the interface to play Blackjack.
3. Click the **Side Bets** button to view and interact with side bets.

## Screenshots

*Blackjack table interface :*

![Blackjack Table](bj.png)

*Side bets options :*

![Side Bets Viewer](sidebet.png)


## Development

### Requirements
- A browser that supports unpacked extensions in developer mode : 

- Google Chrome, Microsoft Edge, Mozilla Firefox, Opera GX, Brave
- Basic understanding of JavaScript, HTML, and CSS for customization.


### File Structure
```
blackjack-extension/
├── manifest.json       # Metadata for the Chrome extension.
├── popup.html          # HTML structure for the extension popup.
├── popup.js            # JavaScript logic for the extension.
├── style.css           # Styling for the popup.
└── assets/             # Images and other assets used in the extension.
```

### Key Files
- **manifest.json**: Configures the extension and defines permissions.
- **popup.html**: The main UI for the Blackjack table.
- **popup.js**: Contains the logic for the game and side bets.
- **style.css**: Styles the UI components.


## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
