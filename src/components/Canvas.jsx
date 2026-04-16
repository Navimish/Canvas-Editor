import { useStore } from '../store/useStore';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import SortableItem from './SortableItem';

const Canvas = () => {
  const canvasBlocks = useStore((state) => state.canvasBlocks);

  return (
    <div className="flex-1 flex flex-col h-full bg-[#0a101d] relative">
      
      {/* Header */}
      <header className="px-8 py-6 border-b border-white/5 backdrop-blur-md bg-[#0a101d]/80 sticky top-0 z-20 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white tracking-tight">Canvas Editor</h1>
        <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all">
          Save Page
        </button>
      </header>

      {/* Drop Zone */}
      <div className="flex-1 overflow-y-auto p-8 md:p-12">
        <div className="max-w-4xl mx-auto min-h-[600px] border-2 border-dashed border-slate-800 rounded-3xl p-8 flex flex-col gap-4">
          
          {canvasBlocks.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-500 opacity-50 select-none">
              <span className="text-6xl font-black italic mb-4">Empty</span>
              <p className="tracking-widest uppercase text-sm">Add blocks from the palette</p>
            </div>
          ) : (
            // This context is required by dnd-kit to know how to sort the items
            <SortableContext items={canvasBlocks.map(b => b.id)} strategy={verticalListSortingStrategy}>
              {canvasBlocks.map((block) => (
                <SortableItem key={block.id} block={block} />
              ))}
            </SortableContext>
          )}

        </div>
      </div>
    </div>
  );
};

export default Canvas;