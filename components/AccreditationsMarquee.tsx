const ACCREDITATIONS = [
    "FLUKE",
    "IPAF",
    "CHAS",
    "Constructionline",
    "SafeContractor",
    "Achilles",
  ];
  
  export default function AccreditationsMarquee() {
    const track = [...ACCREDITATIONS, ...ACCREDITATIONS];
  
    return (
      <div className="overflow-hidden border-t border-white/8 py-8">
        <div className="marquee-track flex w-max items-center gap-12">
          {track.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 text-lg font-display font-semibold uppercase tracking-wide text-haze-400 opacity-60 transition-opacity hover:opacity-100 hover:text-white sm:text-xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    );
  }