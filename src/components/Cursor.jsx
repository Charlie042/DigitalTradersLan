import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const addHover = () => cursor.classList.add('hov');
    const removeHover = () => cursor.classList.remove('hov');

    document.addEventListener('mousemove', moveCursor);

    const attachHoverEvents = () => {
      document.querySelectorAll('a, button, .feat-card, .prob-card, .reward-card, .step-card, .d-tag').forEach(el => {
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });
    };

    // Attach initially and run over time in case React creates elements later
    attachHoverEvents();
    const interval = setInterval(attachHoverEvents, 500);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      clearInterval(interval);
      document.querySelectorAll('a, button, .feat-card, .prob-card, .reward-card, .step-card, .d-tag').forEach(el => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return <div className="cursor" id="cursor"></div>;
}
