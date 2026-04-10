import { useEffect, useState } from "react";

const COUNT_NAMESPACE = "wfl_tower";
const COUNT_KEY = "visitor_counter";
const STORAGE_KEY = "wfl_visitor_ip";

async function getClientIp(): Promise<string | null> {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    if (!response.ok) return null;
    const data = await response.json();
    return data.ip ?? null;
  } catch {
    return null;
  }
}

async function fetchCount(): Promise<number | null> {
  try {
    const response = await fetch(`https://api.countapi.xyz/get/${COUNT_NAMESPACE}/${COUNT_KEY}`);
    if (!response.ok) return null;
    const data = await response.json();
    return typeof data.value === "number" ? data.value : null;
  } catch {
    return null;
  }
}

async function incrementCount(): Promise<number | null> {
  try {
    const response = await fetch(`https://api.countapi.xyz/hit/${COUNT_NAMESPACE}/${COUNT_KEY}`);
    if (!response.ok) return null;
    const data = await response.json();
    return typeof data.value === "number" ? data.value : null;
  } catch {
    return null;
  }
}

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function trackVisitor() {
      const savedIp = localStorage.getItem(STORAGE_KEY);
      const currentIp = await getClientIp();

      if (cancelled) return;

      if (currentIp && savedIp === currentIp) {
        const currentCount = await fetchCount();
        if (!cancelled) setCount(currentCount);
        return;
      }

      const newCount = await incrementCount();
      if (!cancelled) {
        setCount(newCount);
        if (currentIp) {
          localStorage.setItem(STORAGE_KEY, currentIp);
        }
      }
    }

    trackVisitor();

    return () => {
      cancelled = true;
    };
  }, []);

  if (count === null) {
    return <p className="text-sm text-gray-400">Besucherzahl wird geladen…</p>;
  }

  return <p className="text-sm text-gray-400">Bereits {count.toLocaleString("de-DE")} Besucher auf dieser Seite.</p>;
}
