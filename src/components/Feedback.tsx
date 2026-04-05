import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
const testimonials = [
{
  name: 'Richard Exten',
  subtitle: 'Real Estate Director',
  image:
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&q=80',
  portrait:
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80',
  quoteBold:
  '"Using Drone Culture has completely changed the way we showcase properties.',
  quoteLight:
  ' The aerial photography is stunning, and the cinematic video tours help us close deals faster."',
  cardBold: 'Boosted property engagement by 27% with aerial tours.',
  cardLight: ' Delivered 4K footage for 12 luxury listings.'
},
{
  name: 'James Holloway',
  subtitle: 'Commercial Filmmaker',
  image:
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=750&fit=crop&q=80',
  portrait:
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80',
  quoteBold:
  '"Drone Culture\'s drone videography gave us shots we never thought possible.',
  quoteLight:
  ' The stabilization is flawless, and the 8K resolution gave us incredible flexibility in post-production."',
  cardBold: 'Captured breathtaking establishing shots for 3 commercials.',
  cardLight: ' Seamlessly integrated with our ground footage.'
},
{
  name: 'Thomas Berger',
  subtitle: 'Event Organizer',
  image:
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=750&fit=crop&q=80',
  portrait:
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80',
  quoteBold:
  '"The aerial coverage from Drone Culture captured the true scale of our festival.',
  quoteLight:
  ' The dynamic drone shots added a completely new dimension to our promotional aftermovie."',
  cardBold: 'Increased social media shares by 45% with drone highlights.',
  cardLight: ' Covered a 50-acre festival ground flawlessly.'
},
{
  name: 'Erik van Dijk',
  subtitle: 'Landscape Photographer',
  image:
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=750&fit=crop&q=80',
  portrait:
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&q=80',
  quoteBold:
  '"Partnering with Drone Culture elevated my portfolio instantly.',
  quoteLight:
  ' Their pilots understand composition and lighting, getting the drone exactly where it needs to be for the perfect shot."',
  cardBold: 'Captured award-winning aerial landscape photography.',
  cardLight: ' Explored remote locations with high-end drone gear.'
}];

export function Feedback() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];
  return (
    <section className="w-full bg-[#1a1a1a] px-5 sm:px-8 lg:px-16 pt-10 pb-16">
      <div className="flex flex-col md:flex-row gap-8 max-w-[1400px] mx-auto">
        {/* LEFT: Portrait Image (Hidden on small screens) */}
        <div className="hidden md:block w-[38%] flex-shrink-0">
          <div className="relative w-full h-[400px] lg:h-[520px] rounded-[24px] overflow-hidden">
            <img
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover" />
            

            {/* Overlay Card at Bottom */}
            <div className="absolute bottom-5 left-5 right-5 bg-[#dcf073] rounded-[16px] px-4 lg:px-5 py-3 lg:py-4 flex items-start gap-3">
              <div className="flex-1">
                <p className="text-[12px] leading-[1.5] text-[#1a1a1a]">
                  <span className="font-semibold">{current.cardBold}</span>
                  <span className="font-normal">{current.cardLight}</span>
                </p>
              </div>
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#2d2d2d] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="lg:w-[18px] lg:h-[18px]">
                  
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* CENTER: Quote */}
        <div className="flex-1 flex flex-col justify-between py-4 min-w-0">
          {/* Drone Culture Logo */}
          <div className="flex items-center gap-2 mb-6 lg:mb-8">
            <div className="grid grid-cols-2 gap-[2px] w-[18px] h-[18px] lg:w-[20px] lg:h-[20px]">
              <div className="bg-[#8b9d77] rounded-[2px] rounded-tl-[4px]"></div>
              <div className="bg-[#8b9d77] rounded-[2px] rounded-tr-[4px]"></div>
              <div className="bg-[#8b9d77] rounded-[2px] rounded-bl-[4px]"></div>
              <div className="bg-[#8b9d77] rounded-[2px] rounded-br-[4px]"></div>
            </div>
            <span className="dc-brand-name text-white">
              Drone Culture
            </span>
          </div>

          {/* Quote Text */}
          <div className="flex-1 flex flex-col justify-center">
            <blockquote className="dc-quote text-white max-w-[520px]">
              <span className="font-semibold">
                {current.quoteBold}
              </span>
              <span className="text-[#999] font-normal">
                {current.quoteLight}
              </span>
            </blockquote>

            {/* Author */}
            <div className="mt-6 lg:mt-8 flex items-center gap-4 md:block">
              <img
                src={current.portrait}
                alt={current.name}
                className="w-12 h-12 rounded-full object-cover md:hidden" />
              
              <div>
                <p className="text-white dc-caption font-semibold">
                  {current.name}
                </p>
                <p className="text-[#999] text-[13px] mt-1 font-normal">
                  {current.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 mt-8 lg:mt-6">
            <button
              onClick={() =>
              setActive(
                (prev) =>
                (prev - 1 + testimonials.length) % testimonials.length
              )
              }
              className="w-10 h-10 lg:w-11 lg:h-11 rounded-full border border-[#444] flex items-center justify-center text-[#666] hover:border-[#777] hover:text-[#999] transition-colors">
              
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              onClick={() =>
              setActive((prev) => (prev + 1) % testimonials.length)
              }
              className="w-10 h-10 lg:w-11 lg:h-11 rounded-full border border-[#444] flex items-center justify-center text-[#666] hover:border-[#777] hover:text-[#999] transition-colors">
              
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* RIGHT: Avatar Stack (Hidden on mobile) */}
        <div className="hidden md:flex w-[180px] flex-shrink-0 flex-col gap-3">
          {testimonials.map((person, index) =>
          <button
            key={person.name}
            onClick={() => setActive(index)}
            className={`w-full rounded-[20px] px-4 py-3.5 flex items-center gap-3 transition-colors ${index === active ? 'bg-[#8b9d77]/40' : 'bg-[#2d2d2d]'}`}>
            
              <img
              src={person.portrait}
              alt={person.name}
              className="w-11 h-11 rounded-full object-cover flex-shrink-0" />
            
              {index === active ?
            <span className="text-white text-[13px] font-medium leading-tight text-left">
                  {person.name.split(' ')[0]}
                  <br />
                  {person.name.split(' ').slice(1).join(' ')}
                </span> :

            <div className="flex-1 flex justify-end">
                  <ArrowUpRight size={16} className="text-[#777]" />
                </div>
            }
            </button>
          )}
        </div>
      </div>
    </section>);

}