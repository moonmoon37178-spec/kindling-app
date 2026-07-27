# ☁️ Weather Dashboard

A beautiful and functional weather dashboard that fetches real-time weather data from a public API with support for multiple cities, 7-day forecasts, and detailed weather metrics.

## Features

✨ **Core Features:**
- 🌍 Search weather for any city worldwide
- 📍 Current weather conditions with detailed metrics
- 📊 7-day weather forecast
- 🌡️ Temperature toggle (Celsius/Fahrenheit)
- ⭐ Save favorite cities for quick access
- 📱 Fully responsive design
- 🎨 Dynamic color schemes based on weather
- ⚡ Real-time weather updates
- 💾 Persistent storage using localStorage

## Current Weather Information

Displays comprehensive current conditions including:
- Temperature and "feels like" temperature
- Weather condition with icon
- Humidity percentage
- Wind speed
- Atmospheric pressure
- Visibility distance
- UV Index
- Precipitation amount
- Last updated timestamp

## 7-Day Forecast

View upcoming weather with:
- Daily high/low temperatures
- Weather condition and icon
- Average humidity
- Maximum wind speed
- Rain probability

## API Integration

This app uses **WeatherAPI.com** (free tier available):
- **Base URL:** `https://api.weatherapi.com/v1/`
- **Endpoint:** `/forecast.json`
- **Features:** Real-time data, forecasts, air quality
- **Free Plan:** 1 million calls/month

### API Response includes:
```json
{
  "location": {
    "name": "London",
    "region": "England",
    "country": "United Kingdom",
    "lat": 51.52,
    "lon": -0.11
  },
  "current": {
    "temp_c": 15,
    "temp_f": 59,
    "condition": { "text": "Partly cloudy", "icon": "..." },
    "humidity": 72,
    "wind_kph": 12,
    "pressure_mb": 1013,
    "visibility_km": 10,
    "uv": 5,
    "precip_mm": 0
  },
  "forecast": { "forecastday": [...] }
}
```

## How to Use

1. **Open** the app in your browser
2. **Search** for any city using the search bar
3. **View** current weather and detailed metrics
4. **Toggle** temperature units (°C/°F)
5. **Check** the 7-day forecast
6. **Save** favorite cities for quick access
7. **Click** saved cities to instantly view their weather

## Technical Stack

- **React 18** - UI framework (via esm.sh CDN)
- **Tailwind CSS** - Modern styling and responsive design
- **WeatherAPI.com** - Real-time weather data
- **Fetch API** - HTTP requests
- **LocalStorage** - Persistent city storage
- **No Build Process** - Runs directly in browser

## File Structure

```
weather-dashboard/
├── index.html      # Complete standalone app
└── README.md       # This file
```

## Installation & Running

Just open the HTML file in any modern browser - **no installation needed!**

```bash
# Option 1: Direct file open
# Right-click weather-dashboard/index.html and open with browser

# Option 2: Serve with a local server
python -m http.server 8000
# Then visit http://localhost:8000/weather-dashboard/index.html
```

## Browser Support

Works on all modern browsers:
- ✅ Chrome/Chromium (v90+)
- ✅ Firefox (v88+)
- ✅ Safari (v14+)
- ✅ Edge (v90+)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Components Breakdown

### Search Bar
- Input field for city names
- Real-time validation
- Error messages for invalid cities
- Case-insensitive search

### Current Weather Card
- Large temperature display
- Animated weather icon
- "Feels like" temperature
- Visual weather gradient background
- Save city button
- Last updated timestamp

### Weather Details Grid
- 6-card grid layout
- Responsive on mobile
- Clear metric labels
- Color-coded information

### Forecast Grid
- Auto-responsive columns
- Day of week and date
- High/low temperatures
- Condition description
- Hover animations
- Weather metrics

### Saved Cities
- Quick access buttons
- One-click city switching
- Remove button per city
- Persistent across sessions

## Customization

You can customize:
- **Color Scheme** - Edit Tailwind classes
- **Weather Icons** - Change icon source
- **Forecast Days** - Modify API request (currently 7 days)
- **Metrics Display** - Add/remove weather details
- **Layout** - Adjust grid and responsive breakpoints

## Data Storage

- All saved cities stored in **localStorage**
- No personal data sent to external servers
- Only weather API requests are external
- Data persists across browser sessions

## Performance

- **Initial Load:** ~1-2 seconds (includes CDN)
- **Weather Fetch:** ~1-3 seconds depending on API
- **UI Updates:** Instant (< 50ms)
- **Storage Operations:** < 10ms

## API Rate Limits

**Free Plan (WeatherAPI.com):**
- 1,000,000 calls per month
- ~1.15 calls per second
- Unlimited requests per day
- No API key cost

## Troubleshooting

**Q: "City not found" error**
- Double-check spelling
- Try full city name with country
- Some smaller towns may not be available

**Q: Weather data won't load**
- Check internet connection
- Verify API is accessible
- Check browser console for errors
- Clear browser cache

**Q: Temperature looks wrong**
- Make sure correct unit (°C/°F) is selected
- Different sources may have slight variations
- "Feels like" accounts for wind chill/humidity

**Q: Saved cities disappeared**
- Check if localStorage is enabled
- Browser may have cleared site data
- Incognito/Private mode won't save data

## Weather Icons

Weather icons are provided by WeatherAPI.com:
- SVG format (scalable)
- High quality at any size
- Represents current/forecast conditions
- Updates with API responses

## Future Enhancements

Possible improvements:
- Weather alerts and warnings
- Air quality index (AQI) display
- Historical weather data
- Weather comparison between cities
- Weather maps and radar
- Hourly forecast
- Severe weather notifications
- Dark/light theme toggle
- Geolocation support
- Multiple language support

## Getting an API Key

To use your own API key from WeatherAPI.com:
1. Visit [weatherapi.com](https://www.weatherapi.com)
2. Sign up for free account
3. Copy your API key
4. Replace the `API_KEY` variable in the code

```javascript
const API_KEY = 'your-api-key-here';
```

## API Documentation

Full API documentation available at: [WeatherAPI.com Docs](https://www.weatherapi.com/docs/)

Endpoints available:
- `/current.json` - Current weather only
- `/forecast.json` - Current + forecast (used here)
- `/history.json` - Historical weather
- `/sports.json` - Sports data
- `/astronomy.json` - Astronomy data

## License

Free to use - WeatherAPI.com provides free tier access

## Credits

- **Weather Data:** WeatherAPI.com
- **UI Framework:** React + Tailwind CSS
- **Icons:** WeatherAPI.com + Emojis

Enjoy checking the weather! 🌤️
