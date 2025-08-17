"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface WeatherEffect {
  emoji: string
  size: string
  position: string
  opacity: string
  animation: {
    x?: number[]
    y?: number[]
    opacity?: number[]
    scale?: number[]
    rotate?: number[]
    duration: number
    delay: number
    repeatDelay?: number
  }
}

interface WeatherOption {
  label: string
  icon: string
  background?: string
  effects?: WeatherEffect[]
}

interface WeatherConfig {
  baseWeather: Record<string, WeatherOption>
  weatherEffects: Record<string, WeatherOption>
  ui: {
    title: string
    baseLabel: string
    effectsLabel: string
    currentWeatherLabel: string
    sliderGradient: string
  }
}

interface ToggleOption {
  id: string
  label: string
  icon?: string
}

interface ToggleSwitchProps {
  options: ToggleOption[]
  defaultValue?: string
  onChange?: (value: string) => void
  className?: string
}

export function ToggleSwitch({ options, defaultValue, onChange, className = "" }: ToggleSwitchProps) {
  const [activeOption, setActiveOption] = useState(defaultValue || options[0]?.id)

  const handleToggle = (optionId: string) => {
    setActiveOption(optionId)
    onChange?.(optionId)
  }

  const activeIndex = options.findIndex((opt) => opt.id === activeOption)

  return (
    <div className={`relative ${className}`}>
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-1 shadow-lg">
        <div className="flex relative">
          {options.map((option, index) => (
            <button
              key={option.id}
              onClick={() => handleToggle(option.id)}
              className={`
                relative z-10 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex-1
                flex items-center justify-center gap-2
                ${activeOption === option.id ? "text-white" : "text-white/70 hover:text-white/90"}
              `}
            >
              {option.icon && <span className="text-sm">{option.icon}</span>}
              <span>{option.label}</span>
            </button>
          ))}

          <motion.div
            className="absolute top-1 bottom-1 bg-gradient-to-r from-blue-500/80 to-indigo-600/80 rounded-xl shadow-lg backdrop-blur-sm"
            initial={false}
            animate={{
              left: `${(activeIndex * 100) / options.length}%`,
              width: `${100 / options.length}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export function ToggleSwitchGroup() {
  const [config, setConfig] = useState<WeatherConfig | null>(null)
  const [baseWeather, setBaseWeather] = useState("sunny")
  const [weatherEffect, setWeatherEffect] = useState("cloudy")
  const [backgroundStyle, setBackgroundStyle] = useState("from-sky-400 via-blue-500 to-cyan-400")

  useEffect(() => {
    import("../data/weather-config.json").then((configData) => {
      setConfig(configData.default)
    })
  }, [])

  const handleBaseWeatherChange = (value: string) => {
    setBaseWeather(value)
    updateBackground(value, weatherEffect)
  }

  const handleWeatherEffectChange = (value: string) => {
    setWeatherEffect(value)
    updateBackground(baseWeather, value)
  }

  const updateBackground = (base: string, effect: string) => {
    if (config?.baseWeather[base]?.background) {
      setBackgroundStyle(config.baseWeather[base].background)
    }
  }

  if (!config) {
    return <div className="text-white text-center">Loading weather configuration...</div>
  }

  const renderWeatherEffects = () => {
    const effectConfig = config.weatherEffects[weatherEffect]
    console.log("[v0] Weather effect:", weatherEffect)
    console.log("[v0] Effect config:", effectConfig)

    if (!effectConfig?.effects) {
      console.log("[v0] No effects found for:", weatherEffect)
      return null
    }

    console.log("[v0] Rendering", effectConfig.effects.length, "weather effects")

    return (
      <div className="fixed top-0 left-0 w-full h-48 pointer-events-none z-30 overflow-visible">
        {effectConfig.effects.map((effect, index) => {
          console.log("[v0] Rendering effect", index, ":", effect.emoji, effect.position)
          return (
            <motion.div
              key={`${weatherEffect}-${index}`}
              className={`absolute ${effect.position} ${effect.size} ${effect.opacity}`}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                ...effect.animation,
              }}
              transition={{
                duration: effect.animation.duration,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: effect.animation.delay,
                repeatDelay: effect.animation.repeatDelay,
              }}
            >
              {effect.emoji}
            </motion.div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <motion.div
        className={`fixed inset-0 bg-gradient-to-br ${backgroundStyle} -z-10`}
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {renderWeatherEffects()}

      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-xl max-w-lg w-full z-20 relative">
        <h3 className="text-white text-xl font-semibold mb-8 text-center">{config.ui.title}</h3>

        <div className="space-y-8">
          <div>
            <label className="block text-white/80 text-sm font-medium mb-4 text-center">{config.ui.baseLabel}</label>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-1 shadow-lg">
              <div className="flex relative">
                {Object.entries(config.baseWeather).map(([key, weather]) => (
                  <button
                    key={key}
                    onClick={() => handleBaseWeatherChange(key)}
                    className={`
                      relative z-10 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 flex-1
                      flex items-center justify-center gap-2
                      ${baseWeather === key ? "text-white" : "text-white/70 hover:text-white/90"}
                    `}
                  >
                    <span className="text-lg">{weather.icon}</span>
                    <span>{weather.label}</span>
                  </button>
                ))}

                <motion.div
                  className={`absolute top-1 bottom-1 bg-gradient-to-r ${config.ui.sliderGradient} rounded-full shadow-lg backdrop-blur-sm`}
                  initial={false}
                  animate={{
                    left: baseWeather === "sunny" ? "0%" : "50%",
                    width: "50%",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-white/80 text-sm font-medium mb-4 text-center">{config.ui.effectsLabel}</label>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-1 shadow-lg">
              <div className="flex relative">
                {Object.entries(config.weatherEffects).map(([key, effect]) => (
                  <button
                    key={key}
                    onClick={() => handleWeatherEffectChange(key)}
                    className={`
                      relative z-10 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 flex-1
                      flex items-center justify-center gap-2
                      ${weatherEffect === key ? "text-white" : "text-white/70 hover:text-white/90"}
                    `}
                  >
                    <span className="text-lg">{effect.icon}</span>
                    <span>{effect.label}</span>
                  </button>
                ))}

                <motion.div
                  className={`absolute top-1 bottom-1 bg-gradient-to-r ${config.ui.sliderGradient} rounded-full shadow-lg backdrop-blur-sm`}
                  initial={false}
                  animate={{
                    left: weatherEffect === "cloudy" ? "0%" : "50%",
                    width: "50%",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 0.3 }}
          key={`${baseWeather}-${weatherEffect}`}
        >
          <p className="text-white/60 text-xs text-center">{config.ui.currentWeatherLabel}</p>
          <p className="text-white text-lg font-medium mt-1 capitalize text-center">
            {config.baseWeather[baseWeather].label} + {config.weatherEffects[weatherEffect].label}
          </p>
        </motion.div>
      </div>
    </>
  )
}
