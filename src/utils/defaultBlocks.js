//  generate a unique random ID
export const generateId = () => {
  return Math.random().toString(36).substring(2, 9);
};

// a brand new block based on what the user clicked
export const getNewBlock = (type) => {
  const baseBlock = { id: generateId(), type };

  switch (type) {
    case 'header':
      return { 
        ...baseBlock, 
        content: { text: 'New Header', level: 'h2' } 
      };
    case 'text':
      return { 
        ...baseBlock, 
        content: { text: 'Type your text here...' } 
      };
    case 'image':
      return { 
        ...baseBlock, 
        content: { url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop', alt: 'Placeholder Image' } 
      };
    case 'markdown':
      return { 
        ...baseBlock, 
        content: { text: '### Hello Markdown\nWrite something *cool* here.' } 
      };
    default:
      return baseBlock;
  }
};