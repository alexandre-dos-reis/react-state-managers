import { atom } from 'jotai';
import { Todo } from '@react-state-managers/types';

export const todosAtom = atom<Todo[]>([]);
export const todosLengthAtom = atom<number>((get) => get(todosAtom).length);
