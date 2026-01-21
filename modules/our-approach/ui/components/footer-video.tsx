"use client";

export default function FooterVideo() {
  return (
    <footer className="text-[#a997ce] relative text-sm">
      <video
        className="w-full h-full object-cover"
        src={"/flower-video.mp4"}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
      />
      <div className="absolute bottom-5">
        <div className="flex items-center justify-center">
          <div className="gap-1 flex">
            <div>Security</div>
            <div>Privacy</div>
            <div>Terms</div>
          </div>
          <div>
            When every point is understood and clear, a seamless experience must
            appear.
          </div>
          <div>© EternaCloud 2025</div>
        </div>
      </div>
    </footer>
  );
}
