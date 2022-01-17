import { ComponentMap } from 'mdx-bundler/client';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

declare const MdxComponents: ComponentMap;

declare enum PostType {
    TUTORIAL = "tutorial",
    BLOGPOST = "blogPost",
    AUTHOR = "author"
}
declare type ReadingTime = {
    text: string;
};
declare type Post = {
    colorFeatured?: string;
    cover?: string;
    date: string;
    updated: string;
    featured?: boolean;
    fontFeatured?: string;
    keywords?: string[];
    slug: string;
    subtitle: string;
    title: string;
    type: PostType.BLOGPOST;
};
declare type FrontMatterPost = {
    frontMatter: Post & {
        readingTime: ReadingTime;
    };
    tweetIDs: string[];
    mdxSource: MDXRemoteSerializeResult;
};
declare type Tutorial = {
    date: string;
    language: string;
    slug: string;
    title: string;
    description: string;
    snippetImage: string;
    type: PostType.TUTORIAL;
};
declare type FrontMatterTutorial = {
    frontMatter: Tutorial;
    mdxSource: MDXRemoteSerializeResult;
};
declare type FrontMatterPostType<T> = T extends PostType.BLOGPOST ? FrontMatterPost : FrontMatterTutorial;

declare const getFileByPath: <T extends PostType>(slug: string, pathForFile: string) => Promise<FrontMatterPostType<T>>;

export { FrontMatterPost, FrontMatterPostType, FrontMatterTutorial, MdxComponents, Post, PostType, ReadingTime, Tutorial, getFileByPath };
