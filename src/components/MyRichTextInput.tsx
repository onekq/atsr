import React from 'react';
import { DefaultEditorOptions, RichTextInput } from 'ra-input-rich-text';

interface MyRichTextInputProps {
    size?: any;
    [key: string]: any;
}

const MyRichTextInputToolbar = () => null; // Empty toolbar component

export const MyRichTextInput: React.FC<MyRichTextInputProps> = ({ size, ...props }) => (
    //@ts-ignore
    <RichTextInput
        editorOptions={{
            ...DefaultEditorOptions,
            extensions: [
                ...DefaultEditorOptions.extensions,
            ],
            editorProps: {
                attributes: {
                    style: 'min-height: 300px;',
                },
            },
        }}
        toolbar={<MyRichTextInputToolbar />}
        {...props}
    />
);
