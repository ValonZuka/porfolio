import { useEffect, useRef, useState } from "react";

/**
 * Two animated national animals — a Balkan lynx (Kosovo) and a black eagle
 * (Albania) — that travel down the page with the scroll and turn to watch the
 * work when the projects section is in view.
 */
export function Companions() {
  const [progress, setProgress] = useState(0);
  const [watching, setWatching] = useState(false);
  const frame = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const max = document.body.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  useEffect(() => {
    const target = document.getElementById("work");
    if (!target) return;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) setWatching(entry.isIntersecting && entry.intersectionRatio > 0.15);
      },
      { threshold: [0, 0.15, 0.5] },
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);

  // Travel from 46vh down to 74vh of the viewport as the page scrolls.
  const top = `calc(46vh + ${progress * 28}vh)`;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-10 hidden xl:block">
      {/* Lynx — left rail */}
      <div
        className="absolute left-1 origin-bottom-left scale-90 transition-[top] duration-500 ease-out 2xl:left-4"
        style={{ top }}
      >
        <div className={watching ? "animate-drift" : "animate-prowl"}>
          <Lynx watching={watching} />
        </div>
      </div>

      {/* Eagle — right rail, gliding slightly ahead */}
      <div
        className="absolute right-1 origin-bottom-right scale-90 transition-[top] duration-700 ease-out 2xl:right-4"
        style={{ top: `calc(${top} - 14vh)` }}
      >
        <div className="animate-drift">
          <Eagle watching={watching} />
        </div>
      </div>
    </div>
  );
}

function Lynx({ watching }: { watching: boolean }) {
  return (
    <svg
      width="112"
      height="92"
      viewBox="0 0 112 92"
      fill="none"
      className="drop-shadow-[0_10px_24px_rgba(0,0,0,0.55)]"
    >
      {/* tail */}
      <g style={{ transformOrigin: "26px 48px" }} className="animate-tail">
        <path
          d="M26 50c-12 2-18 10-16 20"
          stroke="var(--gold)"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </g>
      {/* body */}
      <path
        d="M24 52c0-12 12-18 30-18s34 5 34 18-10 16-22 16H44c-12 0-20-4-20-16Z"
        fill="var(--surface-2)"
        stroke="var(--gold)"
        strokeWidth="3"
      />
      {/* legs */}
      <path d="M38 68v14M56 68v14M76 68v12" stroke="var(--gold)" strokeWidth="6" strokeLinecap="round" />
      {/* head */}
      <g
        className="transition-transform duration-500"
        style={{ transformOrigin: "88px 40px", transform: watching ? "rotate(-16deg)" : "none" }}
      >
        <circle cx="88" cy="40" r="16" fill="var(--surface-2)" stroke="var(--gold)" strokeWidth="3" />
        {/* tufted ears */}
        <path d="M78 28l-3-14 12 9M98 28l4-14-12 9" fill="var(--surface-2)" stroke="var(--gold)" strokeWidth="3" />
        {/* eyes */}
        <circle cx="83" cy="39" r="2.6" fill="var(--ember)" className="animate-pulse-slow" />
        <circle cx="94" cy="39" r="2.6" fill="var(--ember)" className="animate-pulse-slow" />
        {/* whiskers */}
        <path d="M80 48h-9M97 48h9" stroke="var(--muted-foreground)" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function Eagle({ watching }: { watching: boolean }) {
  return (
    <svg
      width="118"
      height="88"
      viewBox="0 0 118 88"
      fill="none"
      className="drop-shadow-[0_10px_24px_rgba(0,0,0,0.55)]"
    >
      {/* wings */}
      <g style={{ transformOrigin: "59px 40px" }} className="animate-flap">
        <path
          d="M59 40C44 20 26 16 6 22c14 6 20 14 24 24 6-6 18-8 29-6Z"
          fill="var(--surface-2)"
          stroke="var(--ember)"
          strokeWidth="3"
        />
        <path
          d="M59 40c15-20 33-24 53-18-14 6-20 14-24 24-6-6-18-8-29-6Z"
          fill="var(--surface-2)"
          stroke="var(--ember)"
          strokeWidth="3"
        />
      </g>
      {/* body + tail */}
      <path
        d="M59 34c6 0 10 6 10 14s-4 20-10 26c-6-6-10-18-10-26s4-14 10-14Z"
        fill="var(--surface-2)"
        stroke="var(--ember)"
        strokeWidth="3"
      />
      {/* twin heads (Albanian eagle) */}
      <g
        className="transition-transform duration-500"
        style={{ transformOrigin: "59px 34px", transform: watching ? "rotate(10deg)" : "none" }}
      >
        <circle cx="49" cy="28" r="7" fill="var(--surface-2)" stroke="var(--ember)" strokeWidth="3" />
        <circle cx="69" cy="28" r="7" fill="var(--surface-2)" stroke="var(--ember)" strokeWidth="3" />
        <path d="M43 28l-8 3 8 3M75 28l8 3-8 3" fill="var(--gold)" stroke="var(--gold)" strokeWidth="2" />
        <circle cx="50" cy="26" r="1.8" fill="var(--gold)" className="animate-pulse-slow" />
        <circle cx="68" cy="26" r="1.8" fill="var(--gold)" className="animate-pulse-slow" />
      </g>
    </svg>
  );
}
