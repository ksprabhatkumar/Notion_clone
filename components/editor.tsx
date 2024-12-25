"use client";

import { useTheme } from "next-themes";
import {BlockNoteEditor, PartialBlock} from "@blocknote/core";

import {BlockNoteView,
     useBlockNote} from "@blocknote/react";

import "@blocknote/core/style.css";


interface EditorProps {
    onchange: (value: string) => void;

    initialcontent?: string; 
    editable? : boolean;
};


export const Editor = ({
    onchange , initialcontent , editable
}: EditorProps) => {
const  {resolvedTheme } = useTheme();

    const editor: BlockNoteEditor = useBlockNote({
        editable,
         initialContent: initialContent ? JSON.parse(initialcontent) as PartialBlock[] : undefined,
        onEditorContentChange: (editor) =>{
            onchange(JSON.stringify(editor.topLevelblocks, null, 2));
        }

    })

    return (
        <div>
           <BlockNoteView editor={editor} theme={resolvedTheme==="dark" ? "dark" : "light"} >
        </div>
    )
    });