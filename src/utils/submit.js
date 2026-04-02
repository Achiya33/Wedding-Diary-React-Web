export async function submitToFormspree(endpoint, payload) {
  if (!endpoint || endpoint.includes('yourFormId')) {
    throw new Error('Form endpoint is not configured. Update site.formspreeEndpoint in src/data/site.js')
  }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    let msg = 'Failed to submit'
    try {
      const data = await res.json()
      msg = data?.error || msg
    } catch (_) {
      // ignore
    }
    throw new Error(msg)
  }

  return true
}
