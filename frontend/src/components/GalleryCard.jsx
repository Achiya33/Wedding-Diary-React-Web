import { Link } from 'react-router-dom'

export default function GalleryCard({ item, compact = false }) {
  return (
    <Link
      to={`/portfolio/${item.slug}`}
      className={`group block overflow-hidden bg-black ${
        compact
          ? 'relative h-[260px] w-[290px] sm:w-[300px] lg:h-[320px] lg:w-[335px]'
          : 'relative h-[320px] w-full'
      }`}
    >
      <img
        src={item.coverImage || item.cover}
        alt={item.title}
        className="h-full w-full object-cover transition duration-[1400ms] ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/25 transition duration-500 group-hover:bg-black/38" />

      <div className="absolute inset-x-0 bottom-0 p-6 text-white transition duration-500 group-hover:translate-y-[-4px]">
        <h3 className="font-serif text-[18px] sm:text-[20px] tracking-[0.04em]">
          {item.title}
        </h3>

        <p className="mt-1 text-[13px] uppercase tracking-[0.16em] text-white/90">
          {item.subtitle || item.category}
        </p>
      </div>
    </Link>
  )
}