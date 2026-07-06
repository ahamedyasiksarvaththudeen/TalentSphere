import { useEffect, useState } from 'react';

// Small presentational helpers shared by fully self-contained section
// components (sections that own their own state/data instead of reading
// from the App-level view-model).

export function initials(name) {
  return name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
}

export function avatarGradient(name) {
  const gradients = [
    'linear-gradient(135deg,#7C3AED,#A78BFA)',
    'linear-gradient(135deg,#EC4899,#F472B6)',
    'linear-gradient(135deg,#0EA5E9,#38BDF8)',
    'linear-gradient(135deg,#10B981,#34D399)',
    'linear-gradient(135deg,#F59E0B,#FBBF24)',
    'linear-gradient(135deg,#6366F1,#818CF8)',
  ];
  let hash = 0;
  for (const ch of name) hash = (hash + ch.charCodeAt(0)) % 997;
  return gradients[hash % gradients.length];
}

// Animates a 0→1 value with an ease-out-cubic curve whenever `deps` change.
// Mirrors the count-up animation the app used for numbers/rings/bars.
export function useCountUp(deps = []) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / 950);
      setProgress(1 - Math.pow(1 - p, 3));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return progress;
}
