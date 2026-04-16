import { useState } from 'react';
import { useStore } from '../../store/useStore';

const MarkdownBlock = ({ block }) => {
  const updateBlock = useStore((state) => state.updateBlock);
  const [isEditing, setIsEditing] = useState(false);

  const handleTextChange = (e) => {
    updateBlock(block.id, { text: e.target.value });
  };

  return isEditing ? (
    <textarea
      value={block.content.text}
      onChange={handleTextChange}
      onBlur={() => setIsEditing(false)}
      autoFocus
      className="w-full bg-black/50 border border-indigo-500 rounded-xl p-4 font-mono text-sm text-indigo-300 mb-4 focus:outline-none resize-y min-h-[120px]"
    />
  ) : (
    <div 
      onClick={() => setIsEditing(true)}
      className="p-4 bg-black/30 rounded-xl border border-white/5 font-mono text-sm text-indigo-300 mb-4 whitespace-pre-wrap cursor-text hover:border-indigo-500/30 transition-colors min-h-[3rem]"
      title="Click to edit"
    >
      {block.content.text}
    </div>
  );
};

export default MarkdownBlock;