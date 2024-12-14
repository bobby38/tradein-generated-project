import { useState } from 'react'

export default function DeviceForm() {
  const [formType, setFormType] = useState('sell')
  const [deviceType, setDeviceType] = useState('')
  const [brand, setBrand] = useState('')

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <div className="flex gap-4 mb-6">
        <button
          className={`flex-1 py-2 px-4 rounded font-medium ${
            formType === 'sell'
              ? 'bg-primary text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
          onClick={() => setFormType('sell')}
        >
          Sell
        </button>
        <button
          className={`flex-1 py-2 px-4 rounded font-medium ${
            formType === 'repair'
              ? 'bg-primary text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
          onClick={() => setFormType('repair')}
        >
          Repair
        </button>
      </div>

      <select
        value={deviceType}
        onChange={(e) => setDeviceType(e.target.value)}
        className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="">Select Device Type</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
        <option value="laptop">Laptop</option>
        <option value="watch">Smartwatch</option>
      </select>

      <select
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        className="w-full p-3 mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="">Select Brand</option>
        <option value="apple">Apple</option>
        <option value="samsung">Samsung</option>
        <option value="google">Google</option>
        <option value="huawei">Huawei</option>
      </select>

      <button className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors">
        {formType === 'sell' ? 'GET QUOTE' : 'CHECK REPAIR PRICE'}
      </button>
    </div>
  )
}
