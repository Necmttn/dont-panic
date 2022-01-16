/// <reference types="react" />
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ComponentMap } from 'mdx-bundler/client';
export declare const Index: ComponentMap;
interface Props {
    mdxSource: MDXRemoteSerializeResult;
    customComponents?: ComponentMap;
    [key: string]: unknown;
}
export declare const MDXLayoutRenderer: ({ mdxSource, customComponents, ...rest }: Props) => JSX.Element;
export {};
//# sourceMappingURL=renderer.d.ts.map