'use client'

// Global auth state to prevent multiple auth checks
let globalAuthState = {
  checked: false,
  checking: false,
  user: null as any,
  listeners: [] as ((user: any) => void)[]
}

export function subscribeToAuth(callback: (user: any) => void) {
  globalAuthState.listeners.push(callback)
  return () => {
    globalAuthState.listeners = globalAuthState.listeners.filter(l => l !== callback)
  }
}

export function notifyAuthListeners(user: any) {
  globalAuthState.user = user
  globalAuthState.listeners.forEach(callback => callback(user))
}

export async function checkAuthOnce() {
  if (globalAuthState.checked || globalAuthState.checking) {
    return globalAuthState.user
  }

  globalAuthState.checking = true
  
  try {
    const token = localStorage.getItem('auth-token')
    if (!token) {
      globalAuthState.checked = true
      globalAuthState.checking = false
      return null
    }

    const response = await fetch('/api/auth/me', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    if (response.ok) {
      const userData = await response.json()
      globalAuthState.user = userData.user
    } else {
      localStorage.removeItem('auth-token')
      globalAuthState.user = null
    }
  } catch (error) {
    console.error('Auth check failed:', error)
    localStorage.removeItem('auth-token')
    globalAuthState.user = null
  } finally {
    globalAuthState.checked = true
    globalAuthState.checking = false
  }

  return globalAuthState.user
}

export function setAuthUser(user: any) {
  globalAuthState.user = user
  notifyAuthListeners(user)
}

export function clearAuth() {
  globalAuthState.user = null
  globalAuthState.checked = false
  localStorage.removeItem('auth-token')
  notifyAuthListeners(null)
}