import { useStore } from '../store/useStore';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import SortableItem from './SortableItem';

const GithubIcon = ({ size = 16 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const Canvas = () => {
  const canvasBlocks = useStore((state) => state.canvasBlocks);

  return (
    <div className="flex-1 flex flex-col h-full bg-[#0a101d] relative">
      <header className="px-8 py-6 border-b border-white/5 backdrop-blur-md bg-[#0a101d]/80 sticky top-0 z-20 flex justify-between items-center">
        
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-white tracking-tight">Canvas Editor</h1>
          <div className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            <span className="text-xs font-bold text-indigo-300 tracking-wider uppercase">
              {canvasBlocks.length} Blocks
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/Navimish/Canvas-Editor" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all border border-white/10"
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
          </a>

          <button 
            onClick={() => alert('Page layout and content successfully saved to Local Storage!')}
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
          >
            Save Page
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-8 md:p-12">
        <div className="max-w-4xl mx-auto min-h-[600px] border-2 border-dashed border-slate-800 rounded-3xl p-8 flex flex-col gap-4">
          {canvasBlocks.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-500 opacity-50 select-none">
              <span className="text-6xl font-black italic mb-4">Empty</span>
              <p className="tracking-widest uppercase text-sm">Add blocks from the palette</p>
            </div>
          ) : (
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