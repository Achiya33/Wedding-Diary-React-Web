/**
 * useFirebaseContent — React hook for real-time content from Firebase
 * 
 * Returns { data, loading } where:
 *  - data: starts with cached/default value, then updates from Firebase
 *  - loading: true while waiting for first Firebase response
 * 
 * Usage:
 *   const { data: blogs } = useFirebaseContent('blogs')
 */

import { useState, useEffect } from 'react'
import { getContent, subscribeToContent } from './contentStore.js'

export function useFirebaseContent(key) {
  // Start with cached/default data for instant render
  const [data, setData] = useState(() => getContent(key))
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    
    const unsubscribe = subscribeToContent(key, (newData) => {
      setData(newData)
      setLoading(false)
    })

    return unsubscribe
  }, [key])

  return { data, loading }
}
