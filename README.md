# Analog Clock

A beautiful, responsive analog clock built with vanilla JavaScript, HTML, and CSS. Features smooth real-time updates and a clean, modern design.

## Features

- **Real-time Updates**: Clock hands move smoothly every second
- **Responsive Design**: Works on desktop and mobile devices
- **Modular Architecture**: Clean separation of concerns with helper functions
- **Modern Styling**: Attractive visual design with colored hands and border
- **No Dependencies**: Pure vanilla JavaScript - no frameworks required

## Demo

🚀 **[View Live Demo](https://ivanbatistao.github.io/clock/)**

Or open `index.html` in your browser to run it locally!

## Project Structure

```
clock/
├── index.html              # Main HTML file
├── index.css               # Styling for the clock
├── index.js                # Main JavaScript entry point
├── helpers/
│   ├── dom/
│   │   ├── index.js        # DOM helper exports
│   │   ├── setHours.js     # Hours hand positioning
│   │   ├── setMinutes.js   # Minutes hand positioning
│   │   └── setSeconds.js   # Seconds hand positioning
│   └── utils/
│       └── getDegrees.js   # Utility for angle calculations
└── README.md               # This file
```

## How It Works

1. **Time Calculation**: The clock gets the current time using JavaScript's `Date` object
2. **Angle Conversion**: Helper function converts time values to rotation degrees
3. **DOM Updates**: Individual functions update each clock hand's rotation
4. **Real-time Updates**: `setInterval` refreshes the display every second

### Clock Hands

- **Hours Hand** (Orange): Rotates 360° in 12 hours (720 minutes)
- **Minutes Hand** (Brown): Rotates 360° in 60 minutes
- **Seconds Hand** (Green): Rotates 360° in 60 seconds

## Getting Started

### Prerequisites

- A modern web browser that supports ES6 modules
- No additional dependencies required

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. The clock will start running immediately

### Local Development

For local development with ES6 modules, you may need to serve the files through a local server:

## Customization

### Styling

Edit `index.css` to customize:
- Clock face size and border
- Hand colors and dimensions
- Background and layout
- Responsive breakpoints

### Functionality

Modify the helper functions in `helpers/` to:
- Change update frequency (currently 1 second)
- Add digital time display
- Include date information
- Add timezone support

## Browser Compatibility

- Chrome 61+
- Firefox 60+
- Safari 10.1+
- Edge 16+

(ES6 modules support required)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test in multiple browsers
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
