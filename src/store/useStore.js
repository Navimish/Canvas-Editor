import { create } from 'zustand';


const getInitialBlocks = () => {
  const saved = localStorage.getItem('canvasFlow_data');
  // If there is saved data, parse it. If not, return an empty array.
  return saved ? JSON.parse(saved) : [];
};

export const useStore = create((set) => ({
  
  canvasBlocks: getInitialBlocks(),

  addBlock: (block) => set((state) => ({
    canvasBlocks: [...state.canvasBlocks, block]
  })),

  removeBlock: (id) => set((state) => ({
    canvasBlocks: state.canvasBlocks.filter((block) => block.id !== id)
  })),

  updateBlock: (id, newContent) => set((state) => ({
    canvasBlocks: state.canvasBlocks.map((block) => 
      block.id === id ? { ...block, content: { ...block.content, ...newContent } } : block
    )
  })),

  reorderBlocks: (newBlocksArray) => set(() => ({
    canvasBlocks: newBlocksArray
  })),
}));