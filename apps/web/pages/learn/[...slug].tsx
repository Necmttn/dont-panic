import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import {getFileByPath, PostType} from '@dont-panic/mdx';
import { MDXComponents, MDXWrapper, Button, Navbar, MDXSplitView } from "@dont-panic/ui";
import fs from 'fs';
import Head from "next/head";
import path from 'path';
import { MDXRemote } from "next-mdx-remote";
import _ from "lodash";
import { useRouter } from "next/router";

const Image = () => {
  return <div>Image</div>
}


const LearnPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ( props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router= useRouter()
    if (router.isFallback) {
      return <h1>Loading...</h1>
    }
    const { mdxSource,frontMatter} = props.post
    return (
        <>
        <Head>
            <title>{frontMatter.title}</title>
        </Head>
        <Navbar />
        <MDXSplitView frontmatter={frontMatter} content={
            <MDXRemote components={MDXComponents} {...mdxSource} />
        }>
        </MDXSplitView>
        </>
    )
}

export async function getStaticPaths() {
  const a = fs
  .readdirSync(path.join(process.cwd(), 'node_modules', '@dont-panic'))
  .filter(packageName => packageName.startsWith('learn-'))
  .map(learnPackageName => {
    return fs.readdirSync(path.join(process.cwd(), 'node_modules', '@dont-panic', learnPackageName, 'content'))
    .map(contentName => {
      return [learnPackageName.replace('learn-', ''), contentName.replace('.mdx', '')]
    })
  })
  const paths = _.flatten(a).map(slug => {
    return {
      params: {
        slug
      }
    }
  })
  return {
    paths: paths,
    /**
     * // TODO: this will be failing some cases .
     * This could be 2 different fuction one in local dev which basically search for the package.json. another one could utilize the github raw api to get the mdx file.
     */
    fallback: true // false or 'blocking' /
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = (context.params.slug as string[])
  const pathForFile = path.join(process.cwd(), 'node_modules', '@dont-panic', `learn-${slug[0]}`, 'content', `${slug[1]}.mdx`)
  const post = await getFileByPath<PostType.TUTORIAL>('learn', pathForFile);
    return {
        props: {
            post,
            slug,
        },
    }
}

export default LearnPage
