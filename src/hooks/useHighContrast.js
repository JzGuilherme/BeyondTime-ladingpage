import { useCallback, useEffect, useState } from 'react';

const KEY = 'beyondtime:high-contrast';

function readInitial() {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved !== null) return saved === '1';
  } catch {}
  return window.matchMedia?.('(prefers-contrast: more)').matches ?? false;
}

export default function useHighContrast() {
  const [enabled, setEnabled] = useState(readInitial);

  useEffect(() => {
    document.documentElement.classList.toggle('high-contrast', enabled);
    try {
      localStorage.setItem(KEY, enabled ? '1' : '0');
    } catch {}
  }, [enabled]);

  const toggle = useCallback(() => setEnabled((v) => !v), []);

  return [enabled, toggle];
}