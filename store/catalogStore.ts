import { SoundCategory } from '@/src/utills/data';
import { create } from 'zustand';

interface CatalogStore {
  query: string;
  category: SoundCategory | string;
  setQuery: (query: string) => void;
  setCategory: (category: string) => void;
}

export const useCatalogStore = create<CatalogStore>((set) => ({
  query: '',
  category: '',
  setQuery: (query) => set({ query }),
  setCategory: (category) => set({ category }),
}));
