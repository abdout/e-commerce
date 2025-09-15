export default function BottomHero() {
  return (
    <section className="relative bg-[#f5f5f5] overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <div className="text-[#d33918] text-xs font-semibold tracking-wide uppercase">Bold & Sporty</div>
            <h1 className="text-[#111111] text-3xl lg:text-4xl font-bold leading-tight">
              NIKE REACT
              <br />
              PRESTO BY YOU
            </h1>
            <p className="text-[#757575] text-base leading-relaxed max-w-md">
              Take advantage of brand new, proprietary cushioning technology with a fresh pair of Nike react shoes.
            </p>
            <button className="bg-[#111111] text-[#ffffff] hover:bg-[#757575] px-8 py-3 rounded-full transition-colors">
              Shop Now
            </button>
          </div>

          {/* Bottom Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/feature.png"
              alt="Nike React Presto"
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}