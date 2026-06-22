import { useEffect } from 'react'

/**
 * Sets the browser tab title to "<pageName> | Wedding Diary".
 * Pass exact=true to use pageName as the full title verbatim.
 * Resets to "Wedding Diary" on unmount so the base title is always clean.
 */
export function usePageTitle(pageName, exact = false) {
  useEffect(() => {
    const base = 'Wedding Diary'
    document.title = exact ? pageName : pageName ? `${pageName} | ${base}` : base

    return () => {
      document.title = base
    }
  }, [pageName, exact])
}
