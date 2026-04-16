import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Trash2 } from 'lucide-react';
import { useStore } from '../store/useStore';
import BlockRenderer from './BlockRenderer';

const SortableItem = ({ block }) => {
  const removeBlock = useStore((state) => state.removeBlock);

  
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: block.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 1,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style}
      className="relative group bg-[#131c31] border border-white/5 rounded-2xl p-6 hover:border-indigo-500/30 transition-colors"
    >
      {/* Drag Handle */}
      <div 
        {...attributes} 
        {...listeners} 
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 text-slate-600 hover:text-indigo-400 cursor-grab active:cursor-grabbing opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <GripVertical size={20} />
      </div>

      {/* Delete Button */}
      <button 
        onClick={() => removeBlock(block.id)}
        className="absolute right-4 top-4 p-2 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all"
      >
        <Trash2 size={16} />
      </button>

      {/* The Actual Content */}
      <div className="pl-6 pr-8">
        <BlockRenderer block={block} />
      </div>
    </div>
  );
};

export default SortableItem;