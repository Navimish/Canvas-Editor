import { useState } from 'react';
import { useStore } from '../../store/useStore';

const TextBlock = ({ block }) => {
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
      className="w-full bg-[#0a101d] border border-indigo-500 rounded-lg p-3 text-slate-300 leading-relaxed mb-4 focus:outline-none resize-y min-h-[100px]"
    />
  ) : (
    <p 
      onClick={() => setIsEditing(true)}
      className="text-slate-300 leading-relaxed mb-4 cursor-text hover:bg-white/[0.02] p-2 -ml-2 rounded-lg transition-colors min-h-[2.5rem]"
      title="Click to edit"
    >
      {block.content.text}
    </p>
  );
};

export default TextBlock;