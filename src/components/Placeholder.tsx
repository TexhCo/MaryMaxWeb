export default function Placeholder({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-16">
      <div className="bg-[#f0f4fa] p-12 rounded-2xl border-2 border-[#dce4ef] max-w-2xl w-full shadow-sm">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#082b6f] mb-6">{title}</h1>
        <div className="inline-block bg-[#e5232f] text-white px-6 py-2 rounded-full font-bold tracking-wider text-sm mb-6 shadow-md">
          DEMO WEBSITE FOR MARYMAX
        </div>
        <p className="text-lg text-[#33486b] max-w-md mx-auto">
          This is a placeholder page for the demo. The real content for {title} will be added here later.
        </p>
      </div>
    </div>
  );
}
