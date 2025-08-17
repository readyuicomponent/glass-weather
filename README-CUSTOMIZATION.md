# I’d truly appreciate it if you credit my work.  
If you’d like to support me further, you can buy me a coffee ☕  

---

# 🌦️ Weather Control Customization Guide

This Weather Control App is fully customizable by editing the `data/weather-config.json` file. No coding knowledge required!  

Everything from the **base weather**, **extra effects**, and even **UI labels & gradients** can be changed here.

---

## ⚙️ Configuration

Here’s the structure of `weather-config.json`:

```json
{
  "baseWeather": {
    "sunny": {
      "label": "Sunny",
      "icon": "☀️",
      "background": "from-sky-400 via-blue-500 to-cyan-400"
    },
    "rainy": {
      "label": "Rainy",
      "icon": "🌧️",
      "background": "from-slate-700 via-blue-900 to-indigo-950"
    }
  },
  "weatherEffects": {
    "cloudy": {
      "label": "Cloudy",
      "icon": "☁️",
      "effects": [
        {
          "emoji": "☁️",
          "size": "text-8xl",
          "position": "top-2 left-8",
          "opacity": "opacity-90",
          "animation": {
            "x": [0, 30, 0],
            "y": [0, -8, 0],
            "duration": 6,
            "delay": 0
          }
        }
      ]
    },
    "lightning": {
      "label": "Lightning",
      "icon": "⚡",
      "effects": [
        {
          "emoji": "⚡",
          "size": "text-7xl",
          "position": "top-4 left-1/4",
          "animation": {
            "opacity": [0, 1, 0],
            "scale": [0.8, 1.4, 0.8],
            "duration": 0.4,
            "repeatDelay": 2.5
          }
        }
      ]
    }
  },
  "ui": {
    "title": "Weather Control",
    "baseLabel": "Base Condition",
    "effectsLabel": "Additional Effects",
    "currentWeatherLabel": "Current Weather:",
    "sliderGradient": "from-blue-500/80 to-indigo-600/80"
  }
}

📝 Explanation

baseWeather → Main weather options (Sunny, Rainy, etc.)

label: Display name

icon: Emoji or icon class

background: Tailwind gradient classes

weatherEffects → Extra effects (Cloudy, Lightning, etc.)

emoji: Symbol displayed

size: Tailwind text size (e.g. text-6xl)

position: Tailwind positioning (top, left, right)

opacity: Tailwind opacity class

animation: Motion config

x, y: Movement path

opacity, scale, rotate: Transformations

duration: Seconds per cycle

delay / repeatDelay: Timing controls

ui → Labels and style

title: App title

baseLabel, effectsLabel, currentWeatherLabel: Section texts

sliderGradient: Tailwind gradient classes for toggles

