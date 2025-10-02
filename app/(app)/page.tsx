import Image from "next/image";
import kayakPhoto from "@/public/kayak-photo.jpg";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
        <section className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="flex flex-col gap-6 text-center md:text-left">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Principal Engineer
            </span>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Joseph Malicke
            </h1>
            <p className="text-lg text-white/80 sm:text-xl">
              Building resilient platforms and leading teams that ship fast without
              breaking what matters. Passionate about modern product architecture,
              clear mentorship, and thoughtful engineering culture.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <figure className="flex w-full max-w-sm flex-col items-center gap-3 text-center md:items-end md:text-left">
              <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/50">
                <Image
                  src={kayakPhoto}
                  alt="Joseph Malicke kayaking"
                  priority
                  sizes="(min-width: 768px) 400px, 80vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="text-xs text-white/60">
                Mini-study: This photo of Joseph and his kayak was compressed into a small web-friendly webp using the magick command line tool. It&apos;s delivered via the recommended next/image component, which handles optimization, responiveness, lazy loading and CDN caching automatically. 
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </main>
  );
}
