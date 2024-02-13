'use client';
import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TipTapEditorCommands from './TipTapEditorCommands';
import { cn } from '@/lib/utils';
type Props = {
  isSubmitting?: boolean;
  editorText: string;
  setEditorText: (value: React.SetStateAction<string>) => void;
};
const TiptapEditor = ({ isSubmitting, editorText, setEditorText }: Props) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: editorText,
    onUpdate: ({ editor }) => {
      setEditorText((t) => (t = editor.getHTML()));
    },
  });

  return (
    <>
      {editor ? (
        <div
          className={cn(
            'border rounded',
            isSubmitting && 'opacity-50 select-none pointer-events-none'
          )}
        >
          <TipTapEditorCommands editor={editor} />
          <div className='p-2 outline-none px-4 prose prose-h1:my-1 prose-h2:my-1 prose-h3:my-1 prose-h4::my-1 prose-h5:my-1 prose-h6:my-1 prose-p:my-1 prose-ul:my-1 prose-ol:my-1 prose-blockquote:my-1'>
            <EditorContent editor={editor} />
          </div>
        </div>
      ) : (
        <div className='border rounded animate-pulse'>
          <div className='flex flex-wrap h-[49px] border-b bg-background text-foreground'></div>
          <div className='h-[120px] outline-none bg-background'></div>
        </div>
      )}
    </>
  );
};

export default TiptapEditor;
