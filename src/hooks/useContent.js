import { useState, useEffect } from 'react'
import { DEFAULT_CONTENT } from '../data/siteContent'

const STORAGE_KEY = 'corpease_content'

function getStored() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

// Deep merge: stored values win over defaults, recursively
function deepMerge(defaults, overrides) {
  if (!overrides || typeof overrides !== 'object' || Array.isArray(overrides)) {
    return overrides !== undefined ? overrides : defaults
  }
  const result = { ...defaults }
  for (const key of Object.keys(overrides)) {
    if (overrides[key] !== null && typeof overrides[key] === 'object' && !Array.isArray(overrides[key])) {
      result[key] = deepMerge(defaults[key], overrides[key])
    } else {
      result[key] = overrides[key]
    }
  }
  return result
}

// Hook — returns merged content and a force-refresh trigger
export function useContent() {
  const [content, setContent] = useState(() => deepMerge(DEFAULT_CONTENT, getStored()))

  useEffect(() => {
    const handler = () => setContent(deepMerge(DEFAULT_CONTENT, getStored()))
    window.addEventListener('corpease-content-updated', handler)
    return () => window.removeEventListener('corpease-content-updated', handler)
  }, [])

  return content
}

// Save one top-level section (e.g. 'contact', 'hero', 'pricingPlans')
export function updateContent(section, data) {
  const stored = getStored()
  stored[section] = data
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stored))
  window.dispatchEvent(new Event('corpease-content-updated'))
}

// Remove one section from storage (restores default for that section)
export function resetContent(section) {
  const stored = getStored()
  delete stored[section]
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stored))
  window.dispatchEvent(new Event('corpease-content-updated'))
}

// Export everything (site content + service overrides) as a downloadable JSON
export function exportAllContent() {
  const data = {
    corpease_content: getStored(),
    corpease_services: (() => {
      try { return JSON.parse(localStorage.getItem('corpease_services') || '{}') } catch { return {} }
    })(),
    exportedAt: new Date().toISOString(),
  }
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `corpease-backup-${new Date().toISOString().slice(0, 10)}.json`
  a.click()
  URL.revokeObjectURL(url)
}

// Import a previously exported JSON backup
export function importAllContent(jsonString) {
  try {
    const data = JSON.parse(jsonString)
    if (data.corpease_content) localStorage.setItem(STORAGE_KEY, JSON.stringify(data.corpease_content))
    if (data.corpease_services) localStorage.setItem('corpease_services', JSON.stringify(data.corpease_services))
    window.dispatchEvent(new Event('corpease-content-updated'))
    return true
  } catch {
    return false
  }
}
