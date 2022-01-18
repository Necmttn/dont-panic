import { FrontMatterTutorial, getFileByPath, PostType } from "@dont-panic/mdx";
import { MDXSplitView, MDXComponents } from "@dont-panic/ui";
import { MDXRemote } from "next-mdx-remote";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head"
import path from "path";

export const IntroPage:NextPage<InferGetStaticPropsType<typeof getStaticProps>>= (props) => {
    return (
        <>
            <Head>
                Intro of solana wallet balances
            </Head>
                <MDXSplitView  content={ <MDXRemote components={MDXComponents} {...props.post.mdxSource} />}>
                    <div>
                        Intro
                    </div>
                </MDXSplitView>
        </>
    )
}


export const getStaticProps: GetStaticProps = async (context) => {
  const pathForFile = path.join(process.cwd(), 'content', `intro.mdx`)
  const post = await getFileByPath<PostType.TUTORIAL>('learn', pathForFile);
    return {
        props: {
            post,
        },
    }
}

export default IntroPage;