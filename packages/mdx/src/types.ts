import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export enum PostType {
  TUTORIAL = 'tutorial',
  BLOGPOST = 'blogPost',
  AUTHOR = 'author',
}

export type ReadingTime = {
  text: string
}

export type Post = {
  colorFeatured?: string
  cover?: string
  date: string
  updated: string
  featured?: boolean
  fontFeatured?: string
  keywords?: string[]
  slug: string
  subtitle: string
  title: string
  type: PostType.BLOGPOST
}

export type FrontMatterPost = {
  frontMatter: Post & {
    readingTime: ReadingTime
  }
  tweetIDs: string[]
  mdxSource: MDXRemoteSerializeResult
}

export type Tutorial = {
  date: string
  language: string
  slug: string
  title: string
  description: string
  snippetImage: string
  type: PostType.TUTORIAL
}

export type FrontMatterTutorial = {
  frontMatter: Tutorial 
  mdxSource: MDXRemoteSerializeResult
}

export type FrontMatterPostType<T> = T extends PostType.BLOGPOST
  ? FrontMatterPost
  : FrontMatterTutorial