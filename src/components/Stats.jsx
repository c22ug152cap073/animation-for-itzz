import React from 'react'

const Stats = () => {
  const stats = [
    { number: '87%', label: 'Engagement', desc: 'avg. session depth' },
    { number: '92%', label: 'Performance', desc: 'lighthouse score' },
    { number: '76%', label: 'Satisfaction', desc: 'user feedback' },
  ]

  return (
    <div className="stats">
      {stats.map((stat, i) => (
        <div key={i} className="stat-item">
          <span className="stat-number">{stat.number}</span>
          <span className="stat-label">{stat.label}</span>
          <span className="stat-desc">{stat.desc}</span>
        </div>
      ))}
    </div>
  )
}

export default Stats
