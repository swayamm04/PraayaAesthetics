const videos = [
  { id: "H99Pvi-oqJU", title: "Immediate surgery results after ethnic thick skin rhinoplasty" },
  { id: "DcfkCMpGZqw", title: "A young boy with a huge dorsal hump visits Praaya for Rhinoplasty" },
  { id: "LO-lWjARV1I", title: "A man gets best hair transplant in India" },
  { id: "sYHs8lnjzG0", title: "Best Rib cartilage rhinoplasty by Dr Prajwal Kathagi" },
];

const VideosSection = () => {
  return (
    <section id="gallery" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-heading font-semibold text-foreground mb-12">
          Popular Videos
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="h-12 w-12 rounded-full bg-primary/90 flex items-center justify-center">
                    <svg className="h-5 w-5 text-primary-foreground ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-background">
                <p className="text-sm font-semibold text-foreground line-clamp-2">{video.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
