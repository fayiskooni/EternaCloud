"use client";

export default function FooterVideo() {
  return (
    <footer className="relative h-screen w-full text-[#a997ce] text-sm overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={"/flower-video.mp4"}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
      />

      <div className="absolute bottom-5 w-full">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex gap-4">
            <div>Security</div>
            <div>Privacy</div>
            <div>Terms</div>
          </div>

          <div className="text-center max-w-xl">
            When every point is understood and clear, a seamless experience must
            appear.
          </div>

          <div>© EternaCloud 2025</div>
        </div>
      </div>
    </footer>
  );
}
