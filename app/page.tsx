'use client'

import { useAtom } from 'jotai'
import { countAtom } from '@/store/atoms'
import { fetchData } from '@/lib/api'

export default function Home() {
  const [count, setCount] = useAtom(countAtom)

  const handleFetch = async () => {
    try {
      const data = await fetchData('/api/test')
      console.log('Fetched data:', data)
    } catch (error) {
      console.error('Fetch error:', error)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Circulating Token
        </h1>
        
        <div className="text-center space-y-4">
          <div className="text-2xl">
            Count: <span className="font-bold">{count}</span>
          </div>
          
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setCount((c) => c + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Increment
            </button>
            
            <button
              onClick={() => setCount((c) => c - 1)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Decrement
            </button>
            
            <button
              onClick={handleFetch}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              Test API
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

