'use client'

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'fumadocs-ui/components/tabs'
import { Pre, CodeBlock } from 'fumadocs-ui/components/codeblock'

export const InstallationCommand = ({ component, command }: { component?: string, command?: string }) => {
  if(!command && ! component) throw new Error('Atleast one param is required in InstalltionCommand');

  return (
    <Tabs defaultValue="npm">
      <TabsList>
        <TabsTrigger value="npm">npm</TabsTrigger>
        <TabsTrigger value="yarn">yarn</TabsTrigger>
        <TabsTrigger value="pnpm">pnpm</TabsTrigger>
        <TabsTrigger value="bun">bun</TabsTrigger>
      </TabsList>

      <TabsContent value="npm">
        <CodeBlock>
          <Pre className='px-6 font-mono text-[14px]'>
            {
              command ? `npx vynk ${command}` : `npx vynk add ${component}`
            }
          </Pre>
        </CodeBlock>
      </TabsContent>

      <TabsContent value="yarn">
        <CodeBlock lang="bash" keepBackground>
          <Pre className='px-6 font-mono text-[14px]'>
            {
              command ? `yarn vynk ${command}` : `yarn vynk add ${component}`
            }
          </Pre>
        </CodeBlock>
      </TabsContent>

      <TabsContent value="pnpm">
        <CodeBlock lang="bash" keepBackground>
          <Pre className='px-6 font-mono text-[14px]'>
            {
              command ? `pnpm dlx vynk ${command}` : `pnpm dlx vynk add ${component}`
            }
          </Pre>
        </CodeBlock>
      </TabsContent>

      <TabsContent value="bun">
        <CodeBlock lang="bash" keepBackground>
          <Pre className='px-6 font-mono text-[14px]'>
            {
              command ? `bunx --bun vynk ${command}` : `bunx --bun vynk add ${component}`
            }
          </Pre>
        </CodeBlock>
      </TabsContent>
    </Tabs>
  )
}
