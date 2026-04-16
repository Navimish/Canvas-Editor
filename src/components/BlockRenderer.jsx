import HeaderBlock from './blocks/HeaderBlock';
import TextBlock from './blocks/TextBlock';
import ImageBlock from './blocks/ImageBlock';
import MarkdownBlock from './blocks/MarkdownBlock';

const BlockRenderer = ({ block }) => {
  switch (block.type) {
    case 'header':
      return <HeaderBlock block={block} />;
    case 'text':
      return <TextBlock block={block} />;
    case 'image':
      return <ImageBlock block={block} />;
    case 'markdown':
      return <MarkdownBlock block={block} />;
    default:
      return <div>Unknown Block</div>;
  }
};

export default BlockRenderer;