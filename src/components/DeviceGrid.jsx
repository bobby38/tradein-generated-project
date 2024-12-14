const devices = [
  { id: 1, name: 'Sell Phone', icon: '📱', href: '/sell?type=phone' },
  { id: 2, name: 'Sell Tablet', icon: '📱', href: '/sell?type=tablet' },
  { id: 3, name: 'Sell Laptop', icon: '💻', href: '/sell?type=laptop' },
  { id: 4, name: 'Sell Game Console', icon: '🎮', href: '/sell?type=console' },
  { id: 5, name: 'Sell Smartwatch', icon: '⌚', href: '/sell?type=watch' },
  { id: 6, name: 'Sell Earphone', icon: '🎧', href: '/sell?type=earphone' },
  { id: 7, name: 'Sell Mouse', icon: '🖱️', href: '/sell?type=mouse' },
  { id: 8, name: 'Sell Pencil', icon: '✏️', href: '/sell?type=pencil' },
  { id: 9, name: 'Sell Keyboard', icon: '⌨️', href: '/sell?type=keyboard' }
]

export default function DeviceGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {devices.map((device) => (
        <a
          key={device.id}
          href={device.href}
          className="bg-secondary p-4 rounded-lg text-center cursor-pointer hover:bg-primary/10 transition-colors"
        >
          <div className="text-4xl mb-2">{device.icon}</div>
          <div className="text-sm text-gray-300">{device.name}</div>
        </a>
      ))}
    </div>
  )
}
