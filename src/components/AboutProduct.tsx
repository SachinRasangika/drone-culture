import React from 'react';
export function AboutProduct() {
  return (
    <section className="w-full bg-[#f5f5f5] px-5 sm:px-8 lg:px-16 py-16 lg:py-[100px] flex flex-col lg:flex-row justify-between min-h-0 lg:min-h-screen gap-12 lg:gap-0">
      {/* LEFT COLUMN */}
      <div className="hidden lg:flex w-[40%] flex-col justify-between">
        {/* Top-left grid icon */}
        <div className="grid grid-cols-2 gap-[2px] w-[28px] h-[28px]">
          <div className="bg-[#8b9d77] rounded-[2px] rounded-tl-[6px]"></div>
          <div className="bg-[#8b9d77] rounded-[2px] rounded-tr-[6px]"></div>
          <div className="bg-[#8b9d77] rounded-[2px] rounded-bl-[6px]"></div>
          <div className="bg-[#8b9d77] rounded-[2px] rounded-br-[6px]"></div>
        </div>

        {/* Drone image */}
        <div className="mt-auto pt-[200px]">
          <img
            src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&q=80"
            alt="Drone capturing aerial photography"
            className="w-[420px] h-[260px] object-cover rounded-[24px] shadow-sm" />
          
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="w-full lg:w-[55%] flex flex-col">
        {/* Badge */}
        <div className="dc-section-badge mb-4">What We Do</div>

        {/* Heading */}
        <h2 className="dc-section-title text-[#1a1a1a] max-w-[650px] mb-8 lg:mb-10">
          <span className="font-medium">
            How effectively can your vision be captured{' '}
          </span>
          <span className="text-[#999] font-normal">
            from above using drones?
          </span>
        </h2>

        {/* Paragraph */}
        <p className="dc-section-body text-[#888] max-w-[420px] mb-8 lg:mb-10">
          SkyFrame transforms visual storytelling with premium drone
          photography. Our studio provides cinematic videography, breathtaking
          aerial shots, and intelligent flight planning to elevate your creative
          projects.
        </p>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-2 lg:gap-3 mb-12 lg:mb-14 max-w-[500px]">
          {[
          'Aerial Photography',
          'Cinematic Video',
          '4K Footage',
          'Real Estate',
          'Event Coverage',
          'Landscape Shots'].
          map((tag) =>
          <div
            key={tag}
            className="border border-[#d1d1d1] text-[#1a1a1a] px-4 lg:px-6 py-2 lg:py-2.5 rounded-full text-[13px] lg:text-[14px] font-medium bg-transparent">
            
              {tag}
            </div>
          )}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:flex lg:items-center lg:justify-between gap-8 lg:gap-0 w-full max-w-[650px] mt-auto">
          <div className="flex flex-col">
            <span className="dc-stat-value text-[#1a1a1a] mb-2 lg:mb-3">
              89%
            </span>
            <span className="dc-stat-label text-[#888]">Shot Accuracy</span>
          </div>
          <div className="flex flex-col">
            <span className="dc-stat-value text-[#1a1a1a] mb-2 lg:mb-3">
              380+
            </span>
            <span className="dc-stat-label text-[#888]">Projects Completed</span>
          </div>
          <div className="flex flex-col">
            <span className="dc-stat-value text-[#1a1a1a] mb-2 lg:mb-3">
              97%
            </span>
            <span className="dc-stat-label text-[#888]">Client Satisfaction</span>
          </div>
          <div className="flex flex-col">
            <span className="dc-stat-value text-[#1a1a1a] mb-2 lg:mb-3">
              130+
            </span>
            <span className="dc-stat-label text-[#888]">Brands Served</span>
          </div>
        </div>
      </div>
    </section>);

}