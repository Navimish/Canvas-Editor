import { useStore } from '../../store/useStore';

const ImageBlock = ({ block }) => {
  const updateBlock = useStore((state) => state.updateBlock);

  const handleUrlChange = (e) => {
    updateBlock(block.id, { url: e.target.value });
  };

  return (
    <div className="mb-4 group/image relative rounded-xl overflow-hidden border border-white/10">
      <img src={block.content.url} alt="Block content" className="w-full h-auto object-cover" />
      
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover/image:opacity-100 transition-opacity flex flex-col items-center justify-center backdrop-blur-sm p-6">
         <span className="text-white font-bold mb-3 text-sm tracking-widest uppercase">Update Image URL</span>
         <input 
           type="text"
           value={block.content.url}
           onChange={handleUrlChange}
           className="w-full max-w-lg bg-black/50 border border-white/20 rounded-lg p-3 text-white text-sm focus:outline-none focus:border-indigo-500 text-center"
           placeholder="Paste image URL here..."
         />
      </div>
    </div>
  );
};

export default ImageBlock;