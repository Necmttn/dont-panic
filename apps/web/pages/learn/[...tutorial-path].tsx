import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import {MDXLayoutRenderer, getFileByPath, PostType} from '@dont-panic/mdx';
import Head from "next/head";
import path from 'path';

const LearnPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ( {post}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { mdxSource,frontMatter} = post
    return (
        <>
        <Head>
            <title>{frontMatter.title}</title>
        </Head>
        <div>
            <MDXLayoutRenderer
                mdxSource={mdxSource}
            />
        </div>
        </>
    )
}
export const getStaticProps: GetStaticProps = async (context) => {
  const slug = (context.params.slug as string[]).join('/')
  const pathForFile = path.join(process.cwd(), 'node_modules', '@dont-panic', `learn-${slug[0]}`, 'content', `${slug[1]}.mdx`)
  console.log(slug, pathForFile);
  const post = await getFileByPath<PostType.TUTORIAL>('learn', slug)

    return {
        props: {
            post,
            slug,
        },
    }
}

export default LearnPage
