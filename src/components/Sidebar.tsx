import React from 'react'
import { Square, Circle, Triangle, Type, Layout, Menu, CreditCard, List, Table, Image, Sliders } from 'lucide-react'

interface SidebarProps {
  darkMode: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ darkMode }) => {
  const categories = [
    {
      name: 'Shapes',
      components: [
        { name: 'Rectangle', icon: Square },
        { name: 'Circle', icon: Circle },
        { name: 'Triangle', icon: Triangle },
      ]
    },
    {
      name: 'UI Elements',
      components: [
        { name: 'Text', icon: Type },
        { name: 'Button', icon: Square },
        { name: 'Image', icon: Image },
      ]
    },
    {
      name: 'Components',
      components: [
        { name: 'Navbar', icon: Menu },
        { name: 'Card', icon: CreditCard },
        { name: 'List', icon: List },
        { name: 'Table', icon: Table },
      ]
    },
    {
      name: 'Layout',
      components: [
        { name: 'Container', icon: Layout },
        { name: 'Grid', icon: Layout },
        { name: 'Flexbox', icon: Layout },
      ]
    },
    {
      name: 'Forms',
      components: [
        { name: 'Input', icon: Type },
        { name: 'Checkbox', icon: Square },
        { name: 'Slider', icon: Sliders },
      ]
    },
  ]

  return (
    <div className={`w-64 border-r overflow-y-auto ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-200' : 'bg-white border-gray-200 text-gray-800'}`}>
      {categories.map((category) => (
        <div key={category.name} className="mb-6">
          <h3 className={`px-4 py-2 text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{category.name}</h3>
          <div className="space-y-1">
            {category.components.map((component) => (
              <div
                key={component.name}
                className={`flex items-center space-x-3 px-4 py-2 cursor-pointer ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
                title={component.name}
              >
                <component.icon className="w-5 h-5" />
                <span className="text-sm">{component.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Sidebar