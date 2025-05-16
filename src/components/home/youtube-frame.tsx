export default function YoutubeFrame() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-4">
        Youtube Video
      </h1>
      <div className="flex flex-col gap-4">
        <div className="w-full h-64 md:h-80 relative">
          <iframe
            src="https://www.youtube.com/embed/vOu-F0YjB6w"
            title="Youtube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
