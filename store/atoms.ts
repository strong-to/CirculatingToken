import { atom } from 'jotai';

// 示例 atom
export const countAtom = atom<number>(0);

// 可以在这里添加更多的 atoms
export const userAtom = atom<{ name: string; email: string } | null>(null)

