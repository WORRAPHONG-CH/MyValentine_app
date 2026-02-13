import React, { useState, useEffect } from 'react'

interface TimeCounterProps {
  onNext: () => void
}

interface ElapsedTime {
  years: number
  months: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

const TimeCounter: React.FC<TimeCounterProps> = ({ onNext }) => {
  const [elapsed, setElapsed] = useState<ElapsedTime>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const startDate = new Date('2019-02-20T00:00:00')

    const calculateTime = () => {
      const now = new Date()

      // Years / months / days (calendar-like, same idea as before)
      let years = now.getFullYear() - startDate.getFullYear()
      let months = now.getMonth() - startDate.getMonth()
      let days = now.getDate() - startDate.getDate()

      if (days < 0) {
        months--
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0)
        days += lastMonth.getDate()
      }

      if (months < 0) {
        years--
        months += 12
      }

      // Live clock for today: hours / minutes / seconds
      const midnightToday = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
      )
      const diffMsToday = now.getTime() - midnightToday.getTime()
      const totalSecondsToday = Math.floor(diffMsToday / 1000)

      const hours = Math.floor(totalSecondsToday / 3600)
      const minutes = Math.floor((totalSecondsToday % 3600) / 60)
      const seconds = totalSecondsToday % 60

      setElapsed({ years, months, days, hours, minutes, seconds })
    }

    calculateTime()
    const interval = setInterval(calculateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  const pad = (value: number) => value.toString().padStart(2, '0')

  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4 py-8">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 max-w-md w-full transform transition-all duration-500 animate-fade-in">
        <div className="text-center space-y-6">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-pink-600 mb-2">
            เราคบกันนานแค่ไหนแล้วนะ?
          </h1>

          {/* Sub text */}
          <p className="text-sm md:text-lg text-pink-500">
            {`เริ่มคบตั้งแต่ 20 Feb 2019 `}
          </p>

          {/* Line 1: Y / M / D */}
          <div className="space-y-4 mt-4">
            <div className="text-3xl md:text-3xl font-semibold text-pink-500">
              {elapsed.years} ปี : {elapsed.months} เดือน : {elapsed.days} วัน
            </div>

            {/* Line 2: Hr / Min / Sec (live) */}
            <div className="text-xl md:text-2xl font-semibold text-pink-500">
              {pad(elapsed.hours)} ชั่วโมง : {pad(elapsed.minutes)} นาที :{' '}
              {pad(elapsed.seconds)} วินาที
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={onNext}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg w-full md:w-auto md:text-xl"
          >
            ไปต่อเลยรอไรร 💘
          </button>
        </div>
      </div>
    </div>
  )
}

export default TimeCounter