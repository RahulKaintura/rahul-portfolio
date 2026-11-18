import { useEffect, useState } from 'react';
export function useTyping(words) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const word = words[index];
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!deleting && length === word.length) setDeleting(true);
      else if (deleting && length === 0) { setDeleting(false); setIndex(i => (i + 1) % words.length); }
      else setLength(n => n + (deleting ? -1 : 1));
    }, !deleting && length === word.length ? 1400 : deleting ? 45 : 95);
    return () => clearTimeout(timer);
  }, [word, words.length, length, deleting]);
  return word.slice(0, length);
}
