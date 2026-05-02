/**
 * Home showreel video
 *
 * - `VITE_SHOWREEL_VIDEO_URL` — full URL to an MP4 (your CDN or `https://…`).
 * - `VITE_SHOWREEL_YOUTUBE_ID` — 11-character YouTube id → embed is used instead of `<video>`.
 *
 * Default: Pixabay aerial/drone clip (Pixabay Content License). Override with env for production.
 */
const DEFAULT_SHOWREEL_MP4 =
  'https://cdn.pixabay.com/video/2024/06/10/216058_tiny.mp4';

export function showreelYoutubeId(): string | null {
  const id = import.meta.env.VITE_SHOWREEL_YOUTUBE_ID;
  if (typeof id === 'string' && /^[a-zA-Z0-9_-]{11}$/.test(id.trim())) return id.trim();
  return null;
}

export function showreelMp4Src(): string {
  const env = import.meta.env.VITE_SHOWREEL_VIDEO_URL;
  if (typeof env === 'string' && env.trim()) return env.trim();
  return DEFAULT_SHOWREEL_MP4;
}
