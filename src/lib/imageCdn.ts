/**
 * Stable image URLs for demos — no API keys; avoids brittle hotlinks where possible.
 * Picsum: https://picsum.photos — RandomUser portraits: https://randomuser.me
 */
export function picsum(id: number, width: number, height: number): string {
  return `https://picsum.photos/id/${id}/${width}/${height}`;
}

/** Square-ish portrait for UI chips */
export function randomPortrait(seed: 'men' | 'women', index: number): string {
  const i = Math.min(99, Math.max(0, index));
  return `https://randomuser.me/api/portraits/${seed}/${i}.jpg`;
}
