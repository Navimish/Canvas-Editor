import { useEffect } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';

import Palette from './components/Palette';
import Canvas from './components/Canvas';
import { useStore } from './store/useStore';

const App = () => {
  const canvasBlocks = useStore((state) => state.canvasBlocks);
  const reorderBlocks = useStore((state) => state.reorderBlocks);

  useEffect(() => {
    localStorage.setItem('canvasFlow_data', JSON.stringify(canvasBlocks));
  }, [canvasBlocks]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = canvasBlocks.findIndex((block) => block.id === active.id);
    const newIndex = canvasBlocks.findIndex((block) => block.id === over.id);

    const newArray = arrayMove(canvasBlocks, oldIndex, newIndex);
    
    reorderBlocks(newArray);
  };

  return (
    <div className="flex h-screen bg-[#060b16] text-slate-100 overflow-hidden selection:bg-indigo-500/30">
      <Palette />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <Canvas />
      </DndContext>
    </div>
  );
};

export default App;