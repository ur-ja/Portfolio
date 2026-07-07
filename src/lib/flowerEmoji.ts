export const FLOWER_EMOJIS = [
  '💐',
  '🌸',
  '🌹',
  '🥀',
  '🌺',
  '🌻',
  '🌼',
  '🌷',
  '🪻',
  '🪷',
  '🏵️',
] as const;

function hashSeedId(seedId: string): number {
  let hash = 0;
  for (let i = 0; i < seedId.length; i += 1) {
    hash = (hash * 31 + seedId.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

export function getFlowerEmoji(seedId: string): string {
  return FLOWER_EMOJIS[hashSeedId(seedId) % FLOWER_EMOJIS.length];
}
