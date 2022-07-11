import { useEffect, useState } from "react"

// numero de segundos en diferentes medidas de tiempo
const DATE_UNITS = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
]

const getDateDiffs = (timestamp) => {
  console.log("getDateDiffs")
  const now = Date.now()
  const elapsed = (timestamp - now) / 1000

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (
      Math.abs(elapsed) > secondsInUnit ||
      unit === "second"
    ) {
      const value = Math.round(elapsed / secondsInUnit)
      return { value, unit }
    }
  }
}

export default function useTimeAgo(timestamp) {
  const [timeago, setTimeago] = useState(() =>
    getDateDiffs(timestamp)
  )

  useEffect(() => {
    const timeout = setInterval(() => {
      const newTimeAgo = getDateDiffs(timestamp)
      setTimeago(newTimeAgo)
    }, 5000)
    return () => clearInterval(timeout)
  }, [timestamp])

  const { value, unit } = timeago

  const rtf = new Intl.RelativeTimeFormat("es", {
    style: "short",
  })
  return rtf.format(value, unit)
}
