import { picsum } from '../lib/imageCdn';

const g = (ids: readonly number[]) => ids.map((id) => picsum(id, 1600, 1000));

export const projects = [
  {
    id: 'coastal-highway-retreat',
    title: 'Coastal Highway Retreat',
    category: 'Real Estate',
    description:
      'A stunning coastal property captured at golden hour, highlighting its integration with the natural cliffside landscape.',
    date: '2024',
    coverImage: picsum(15, 960, 640),
    gallery: g([15, 16, 17, 18, 19, 20]),
  },
  {
    id: 'neon-city-nights',
    title: 'Neon City Nights',
    category: 'Commercial',
    description:
      'Cinematic night-time drone footage capturing the vibrant energy and neon lights of the downtown metropolis.',
    date: '2023',
    coverImage: picsum(28, 960, 640),
    gallery: g([28, 29, 30, 31, 32, 33]),
  },
  {
    id: 'desert-music-festival',
    title: 'Desert Music Festival',
    category: 'Event Coverage',
    description:
      'Comprehensive aerial coverage of a 3-day desert music festival, capturing the massive scale of the stages and crowds.',
    date: '2024',
    coverImage: picsum(41, 960, 640),
    gallery: g([41, 42, 43, 44, 45, 46]),
  },
  {
    id: 'alpine-ridge-resort',
    title: 'Alpine Ridge Resort',
    category: 'Landscape',
    description:
      'Breathtaking winter landscape photography showcasing a luxury ski resort nestled in snow-capped mountains.',
    date: '2023',
    coverImage: picsum(54, 960, 640),
    gallery: g([54, 55, 56, 57, 58, 59]),
  },
  {
    id: 'downtown-skyscraper',
    title: 'Downtown Skyscraper',
    category: 'Architecture',
    description:
      'Precision architectural drone photography capturing the geometric beauty and scale of a newly constructed skyscraper.',
    date: '2024',
    coverImage: picsum(67, 960, 640),
    gallery: g([67, 68, 69, 70, 71, 72]),
  },
  {
    id: 'oceanfront-villa',
    title: 'Oceanfront Villa',
    category: 'Real Estate',
    description:
      'Luxury real estate showcase featuring a modern oceanfront villa, highlighting the infinity pool and private beach access.',
    date: '2024',
    coverImage: picsum(80, 960, 640),
    gallery: g([80, 81, 82, 83, 84, 85]),
  },
  {
    id: 'autumn-valley-drive',
    title: 'Autumn Valley Drive',
    category: 'Commercial',
    description:
      'Automotive commercial shoot capturing a luxury SUV driving through a vibrant autumn forest valley.',
    date: '2023',
    coverImage: picsum(93, 960, 640),
    gallery: g([93, 94, 95, 96, 97, 98]),
  },
  {
    id: 'marathon-city-run',
    title: 'Marathon City Run',
    category: 'Event Coverage',
    description:
      'Dynamic aerial tracking of a major city marathon, capturing the scale of the event and the flow of runners through urban canyons.',
    date: '2024',
    coverImage: picsum(106, 960, 640),
    gallery: g([106, 107, 108, 109, 110, 111]),
  },
  {
    id: 'volcanic-coastline',
    title: 'Volcanic Coastline',
    category: 'Landscape',
    description:
      'Dramatic aerial photography of a rugged volcanic coastline, showcasing the contrast between dark rock formations and the deep blue ocean.',
    date: '2023',
    coverImage: picsum(119, 960, 640),
    gallery: g([119, 120, 121, 122, 123, 124]),
  },
  {
    id: 'modern-art-museum',
    title: 'Modern Art Museum',
    category: 'Architecture',
    description:
      'Abstract aerial perspectives of a contemporary art museum, highlighting its unique sweeping rooflines and surrounding plaza.',
    date: '2024',
    coverImage: picsum(132, 960, 640),
    gallery: g([132, 133, 134, 135, 136, 137]),
  },
  {
    id: 'luxury-yacht-charter',
    title: 'Luxury Yacht Charter',
    category: 'Commercial',
    description:
      'High-end commercial shoot for a luxury yacht charter company, capturing the vessel cruising through crystal clear tropical waters.',
    date: '2024',
    coverImage: picsum(145, 960, 640),
    gallery: g([145, 146, 147, 148, 149, 150]),
  },
  {
    id: 'historic-estate',
    title: 'Historic Estate',
    category: 'Real Estate',
    description:
      'Elegant aerial tour of a sprawling historic estate, showcasing the manicured gardens, long driveway, and classic architecture.',
    date: '2023',
    coverImage: picsum(158, 960, 640),
    gallery: g([158, 159, 160, 161, 162, 163]),
  },
];
