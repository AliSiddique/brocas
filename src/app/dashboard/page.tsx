"use client"
import Stats from '@/components/dashboard/Stats'
import React from 'react'
import Editor from '@monaco-editor/react';

type Props = {}

export default function page({}: Props) {
    function handleEditorChange(value:any, event:any) {
        console.log('here is the current model value:', value);
      }
  return (
    <div>
        <Stats/>
        <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onChange={handleEditorChange}
        theme='vs-dark'

      />
    </div>
  )
}