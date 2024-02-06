import { Editor } from '@tiptap/react';
import React from 'react';
import { Button } from './ui/button';
import {
  Bold,
  Code,
  // CodepenIcon,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Italic,
  List,
  ListOrdered,
  Quote,
  Redo,
  Strikethrough,
  Undo,
} from 'lucide-react';

type Props = {
  editor: Editor;
};

const TipTapEditorCommands = ({ editor }: Props) => {
  return (
    <div className='flex flex-wrap p-2 border-b bg-background text-foreground'>
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className='w-8 h-8'
        size='icon'
        variant={editor.isActive('bold') ? 'white' : 'ghost'}
      >
        <Bold size={18} />
      </Button>

      <Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className='w-8 h-8'
        size='icon'
        variant={editor.isActive('italic') ? 'white' : 'ghost'}
      >
        <Italic size={18} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className='w-8 h-8'
        size='icon'
        variant={editor.isActive('strike') ? 'white' : 'ghost'}
      >
        <Strikethrough size={18} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className='w-8 h-8'
        size='icon'
        variant={editor.isActive('code') ? 'white' : 'ghost'}
      >
        <Code size={18} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className='w-8 h-8'
        size='icon'
        variant={editor.isActive('heading', { level: 1 }) ? 'white' : 'ghost'}
      >
        <Heading1 size={18} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className='w-8 h-8'
        size='icon'
        variant={editor.isActive('heading', { level: 2 }) ? 'white' : 'ghost'}
      >
        <Heading2 size={18} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className='w-8 h-8'
        size='icon'
        variant={editor.isActive('heading', { level: 3 }) ? 'white' : 'ghost'}
      >
        <Heading3 size={18} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className='w-8 h-8'
        size='icon'
        variant={editor.isActive('heading', { level: 4 }) ? 'white' : 'ghost'}
      >
        <Heading4 size={18} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className='w-8 h-8'
        size='icon'
        variant={editor.isActive('heading', { level: 5 }) ? 'white' : 'ghost'}
      >
        <Heading5 size={18} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className='w-8 h-8'
        size='icon'
        variant={editor.isActive('heading', { level: 6 }) ? 'white' : 'ghost'}
      >
        <Heading6 size={18} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className='w-8 h-8'
        size='icon'
        variant={editor.isActive('bulletlist') ? 'white' : 'ghost'}
      >
        <List size={18} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className='w-8 h-8'
        size='icon'
        variant={editor.isActive('orderedList') ? 'white' : 'ghost'}
      >
        <ListOrdered size={18} />
      </Button>
      {/* <Button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className='w-8 h-8'
        size='icon'
        variant={editor.isActive('codeblock') ? 'white' : 'ghost'}
      >
        <CodepenIcon size={18} />
      </Button> */}
      <Button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className='w-8 h-8'
        size='icon'
        variant={editor.isActive('blockquote') ? 'white' : 'ghost'}
      >
        <Quote size={18} />
      </Button>
      <div className='flex items-center justify-end gap-2 flex-1'>
        <Button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          className='w-8 h-8'
          size='icon'
        >
          <Undo size={18} />
        </Button>
        <Button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          className='w-8 h-8'
          size='icon'
        >
          <Redo size={18} />
        </Button>
      </div>
    </div>
  );
};

export default TipTapEditorCommands;
