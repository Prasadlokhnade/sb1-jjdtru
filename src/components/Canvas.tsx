import React, { useState } from 'react'

interface CanvasProps {
  darkMode: boolean;
}

const Canvas: React.FC<CanvasProps> = ({ darkMode }) => {
  const gridSize = 20
  const canvasSize = 2000
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = Math.floor((e.clientX - rect.left) / gridSize) * gridSize
    const y = Math.floor((e.clientY - rect.top) / gridSize) * gridSize
    setMousePosition({ x, y })
  }

  return (
    <div className="flex-1 overflow-auto relative">
      <div 
        className={`w-[${canvasSize}px] h-[${canvasSize}px] relative`}
        style={{
          backgroundImage: `
            linear-gradient(to right, ${darkMode ? '#4B5563' : '#D1D5DB'} 1px, transparent 1px),
            linear-gradient(to bottom, ${darkMode ? '#4B5563' : '#D1D5DB'} 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundPosition: '0 0',
        }}
        onMouseMove={handleMouseMove}
      >
        {/* Vertical lines */}
        {Array.from({ length: canvasSize / gridSize + 1 }).map((_, index) => (
          <div
            key={`v-${index}`}
            className={`absolute top-0 bottom-0 w-px ${
              index % 5 === 0
                ? darkMode
                  ? 'bg-gray-500'
                  : 'bg-gray-400'
                : darkMode
                ? 'bg-gray-700'
                : 'bg-gray-200'
            }`}
            style={{ left: `${index * gridSize}px` }}
          />
        ))}
        {/* Horizontal lines */}
        {Array.from({ length: canvasSize / gridSize + 1 }).map((_, index) => (
          <div
            key={`h-${index}`}
            className={`absolute left-0 right-0 h-px ${
              index % 5 === 0
                ? darkMode
                  ? 'bg-gray-500'
                  : 'bg-gray-400'
                : darkMode
                ? 'bg-gray-700'
                : 'bg-gray-200'
            }`}
            style={{ top: `${index * gridSize}px` }}
          />
        ))}
        {/* Canvas content will go here */}
      </div>
      <div 
        className={`absolute bottom-4 right-4 px-2 py-1 rounded ${
          darkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-700'
        } shadow`}
      >
        {mousePosition.x}, {mousePosition.y}
      </div>
    </div>
  )
}

export default Canvas