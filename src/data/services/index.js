import { startupServices }       from './startup'
import { registrationsServices } from './registrations'
import { trademarkServices }     from './trademark'
import { gstServices }           from './gst'
import { incometaxServices }     from './incometax'
import { mcaServices }           from './mca'
import { complianceServices }    from './compliance'
import { globalServices }        from './global'

export const allServicesByCategory = {
  startup:       startupServices,
  registrations: registrationsServices,
  trademark:     trademarkServices,
  gst:           gstServices,
  'income-tax':  incometaxServices,
  mca:           mcaServices,
  compliance:    complianceServices,
  global:        globalServices,
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getServiceOverrides() {
  try { return JSON.parse(localStorage.getItem('corpease_services') || '{}') } catch { return {} }
}

function getCustomServices() {
  try { return JSON.parse(localStorage.getItem('corpease_custom_services') || '{}') } catch { return {} }
}

function deepMerge(base, override) {
  if (!override || typeof override !== 'object' || Array.isArray(override)) {
    return override !== undefined ? override : base
  }
  const result = { ...base }
  for (const key of Object.keys(override)) {
    if (override[key] !== null && typeof override[key] === 'object' && !Array.isArray(override[key])) {
      result[key] = deepMerge(base[key], override[key])
    } else {
      result[key] = override[key]
    }
  }
  return result
}

// ─── Read ─────────────────────────────────────────────────────────────────────

export function getService(categorySlug, serviceSlug) {
  // 1. Check default services with optional overrides
  const services = allServicesByCategory[categorySlug] || []
  const base = services.find(s => s.slug === serviceSlug)
  if (base) {
    const svcOverride = getServiceOverrides()[serviceSlug]
    return svcOverride ? deepMerge(base, svcOverride) : base
  }
  // 2. Check custom services created via admin
  const custom = getCustomServices()
  return (custom[categorySlug] || []).find(s => s.slug === serviceSlug) || null
}

export function getCategoryServices(categorySlug) {
  const services = allServicesByCategory[categorySlug] || []
  const overrides = getServiceOverrides()
  const merged = services.map(svc => {
    const override = overrides[svc.slug]
    return override ? deepMerge(svc, override) : svc
  })
  const custom = getCustomServices()
  return [...merged, ...(custom[categorySlug] || [])]
}

// ─── Override CRUD (existing services) ────────────────────────────────────────

export function saveServiceOverride(serviceSlug, data) {
  const overrides = getServiceOverrides()
  overrides[serviceSlug] = data
  localStorage.setItem('corpease_services', JSON.stringify(overrides))
  window.dispatchEvent(new Event('corpease-content-updated'))
}

export function resetServiceOverride(serviceSlug) {
  const overrides = getServiceOverrides()
  delete overrides[serviceSlug]
  localStorage.setItem('corpease_services', JSON.stringify(overrides))
  window.dispatchEvent(new Event('corpease-content-updated'))
}

export function getServiceOverride(serviceSlug) {
  return getServiceOverrides()[serviceSlug] || null
}

// ─── Custom Service CRUD (brand-new services added via admin) ─────────────────

export function saveCustomService(categorySlug, serviceData) {
  const custom = getCustomServices()
  if (!custom[categorySlug]) custom[categorySlug] = []
  const idx = custom[categorySlug].findIndex(s => s.slug === serviceData.slug)
  if (idx >= 0) custom[categorySlug][idx] = serviceData
  else custom[categorySlug].push(serviceData)
  localStorage.setItem('corpease_custom_services', JSON.stringify(custom))
  window.dispatchEvent(new Event('corpease-content-updated'))
}

export function deleteCustomService(categorySlug, serviceSlug) {
  const custom = getCustomServices()
  if (custom[categorySlug]) {
    custom[categorySlug] = custom[categorySlug].filter(s => s.slug !== serviceSlug)
  }
  localStorage.setItem('corpease_custom_services', JSON.stringify(custom))
  window.dispatchEvent(new Event('corpease-content-updated'))
}

export function getCustomServicesByCategory(categorySlug) {
  return getCustomServices()[categorySlug] || []
}
