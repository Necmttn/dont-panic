import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { ComponentMap } from 'mdx-bundler/client'

// components
import Image from './image'


export const Index: ComponentMap = {
  Image,
  //@ts-ignore
//   TOCInline,
//   a: CustomLink,
//   pre: Code,
//   li: ListItem,
  //@ts-ignore
  // BlogNewsletterForm,
//   SocialGetStart,
}

interface Props {
  mdxSource: MDXRemoteSerializeResult
  customComponents?: ComponentMap

  [key: string]: unknown
}

export const MDXLayoutRenderer = ({ mdxSource, customComponents, ...rest }: Props) => {
    const components = {
      ...Index,
      ...customComponents,
    }
  
    return (
      <>
        <div>
          <MDXRemote components={components} {...mdxSource} />
        </div>
      </>
    )
  }
  