import { MDXRemoteSerializeResult } from 'next-mdx-remote';
export declare enum PostType {
    TUTORIAL = "tutorial",
    BLOGPOST = "blogPost",
    AUTHOR = "author"
}
export declare type ReadingTime = {
    text: string;
};
export declare type Post = {
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
export declare type FrontMatterPost = {
    frontMatter: Post & {
        readingTime: ReadingTime;
    };
    tweetIDs: string[];
    mdxSource: MDXRemoteSerializeResult;
};
export declare type Tutorial = {
    date: string;
    language: string;
    slug: string;
    title: string;
    description: string;
    snippetImage: string;
    type: PostType.TUTORIAL;
};
export declare type FrontMatterTutorial = {
    frontMatter: Tutorial;
    mdxSource: MDXRemoteSerializeResult;
};
export declare type FrontMatterPostType<T> = T extends PostType.BLOGPOST ? FrontMatterPost : FrontMatterTutorial;
//# sourceMappingURL=types.d.ts.map