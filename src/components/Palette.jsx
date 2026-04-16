import { Type, Heading1, Image as ImageIcon, Code } from 'lucide-react';
import { useStore } from '../store/useStore';
import { getNewBlock } from '../utils/defaultBlocks';

const Palette = () => {
  //  grab the addBlock function from our warehouse
  const addBlock = useStore((state) => state.addBlock);

  const blockTypes = [
    { type: 'header', label: 'Heading', icon: <Heading1 size={18} /> },
    { type: 'text', label: 'Rich Text', icon: <Type size={18} /> },
    { type: 'image', label: 'Image', icon: <ImageIcon size={18} /> },
    { type: 'markdown', label: 'Markdown', icon: <Code size={18} /> },
  ];

  const handleAddBlock = (type) => {
    const newBlock = getNewBlock(type);
    addBlock(newBlock);
  };

  return (
    <div className="w-72 bg-[#0f172a] border-r border-slate-800 h-screen p-6 flex flex-col gap-8 shrink-0">
      
      <div>
        <h2 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">
          Builder Elements
        </h2>
        <p className="text-xs text-slate-400 font-light">
          Click an element to add it to your canvas.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {blockTypes.map((item) => (
          <button
            key={item.type}
            onClick={() => handleAddBlock(item.type)}
            className="flex items-center gap-4 px-4 py-3 bg-white/[0.02] hover:bg-indigo-500/10 hover:border-indigo-500/30 border border-white/5 rounded-xl text-slate-300 transition-all duration-300 text-sm font-medium group"
          >
            <div className="p-2 bg-black/20 rounded-lg text-slate-500 group-hover:text-indigo-400 transition-colors">
              {item.icon}
            </div>
            {item.label}
          </button>
        ))}
      </div>
      
    </div>
  );
};

export default Palette;