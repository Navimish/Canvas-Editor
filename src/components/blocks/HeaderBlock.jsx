import { useState } from 'react';
import { useStore } from '../../store/useStore';

const HeaderBlock = ({ block }) => {
  const updateBlock = useStore((state) => state.updateBlock);
  const [isEditing, setIsEditing] = useState(false);

  const handleTextChange = (e) => {
    updateBlock(block.id, { text: e.target.value });
  };

  return isEditing ? (
    <input
      type="text"
      value={block.content.text}
      onChange={handleTextChange}
      onBlur={() => setIsEditing(false)}
      autoFocus
      className="w-full bg-transparent border-b border-indigo-500 text-3xl font-bold text-white focus:outline-none mb-4 pb-1"
    />
  ) : (
    <h2 
      onClick={() => setIsEditing(true)}
      className="text-3xl font-bold text-white mb-4 cursor-text hover:text-indigo-200 transition-colors"
      title="Click to edit"
    >
      {block.content.text}
    </h2>
  );
};

export default HeaderBlock;