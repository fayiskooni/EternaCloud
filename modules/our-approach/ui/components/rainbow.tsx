"use client";

export default function RainbowOrb() {
  return (
    <div className="orb-wrapper mt-24">
      <div className="orb">
        <div className="inner"></div>
      </div>

      <style jsx>{`
        .orb-wrapper {
          width: fit-content;
          height: fit-content;
          max-width: 50vw;
        }

        .orb {
          position: relative;
          width: min(320px, 50vw);
          height: min(320px, 50vw);
          border-radius: 50%;
          background: conic-gradient(
            #ff4d4d,
            #ffa64d,
            #ffff4d,
            #4dff4d,
            #4dd2ff,
            #4d4dff,
            #b84dff,
            #ff4dff,
            #ff4d4d
          );
          animation: spin 4s linear infinite;
        }

        /* Glow */
        .orb::before {
          content: "";
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          background: inherit;
          filter: blur(40px);
          opacity: 0.7;
          z-index: -1;
        }

        /* Inner pure black circle */
        .inner {
          position: absolute;
          inset: 10px; /* thickness of rainbow rim */
          border-radius: 50%;
          background: #000000; /* PURE BLACK */
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
