import { atom } from 'jotai';

// 示例 atom
export const countAtom = atom<number>(0);

// 可以在这里添加更多的 atoms
export const userAtom = atom<{ name: string; email: string } | null>(null)

// Launchpad 当前步骤
export const currentStepAtom = atom<number>(1);

// 是否显示项目31（DBTF00000031）
// true: 不显示31，只显示30个项目（默认值，刷新后也是true）
// false: 显示31个项目，DBTF00000031放在第一位
export const shouldShowProject31Atom = atom<boolean>(true);

