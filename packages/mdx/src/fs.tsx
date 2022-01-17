import fs from 'fs';
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
// import remarkSlug from 'remark-slug'
import readingTime from 'reading-time'
import rehypeAutolinkHeadings from 'remark-autolink-headings'

// import { remarkSectionize } from './remark-sectionize-fork'
import { remarkImgToJsx } from './remark-img-to-jsx'
import { FrontMatterPostType, PostType } from './types';

// Regex to find all the custom static tweets in a MDX file
const TWEET_RE = /<StaticTweet\sid="[0-9]+"\s\/>/g;

export const getFileByPath = async <T extends PostType>(
    slug: string,
    pathForFile: string
  ): Promise<FrontMatterPostType<T>> => {
    const source = fs.readFileSync(pathForFile, 'utf8')
  
    const parsedFile = matter(source)
  
    const data = parsedFile.data
    const content = parsedFile.content
  
    const mdxSource = await serialize(content, {
      mdxOptions: {
        rehypePlugins: [rehypeAutolinkHeadings],
        remarkPlugins: [
          // remarkSlug, 
          // remarkSectionize, 
          // remarkImgToJsx
        ],
      },
    })
  
      // TODO: maybe we want to extract this in its own lib?
      /**
       * Find all occurrence of <StaticTweet id="NUMERIC_TWEET_ID"/>
       * in the content of the MDX blog post
       */
      const tweetMatch = content.match(TWEET_RE)
  
      /**
       * For all occurrences / matches, extract the id portion of the
       * string, i.e. anything matching the regex /[0-9]+/g
       *
       * tweetIDs then becomes an array of string where each string is
       * the id of a tweet.
       * These IDs are then passed to the getTweets function to be fetched from
       * the Twitter API.
       */
      const tweetIDs = tweetMatch?.map((mdxTweet) => {
        const id = mdxTweet.match(/[0-9]+/g)![0]
        return id
      })
  
      const result = {
        mdxSource,
        tweetIDs: tweetIDs || [],
        frontMatter: {
          readingTime: readingTime(content),
          slug,
          ...data,
        },
      }
  
      return (result as unknown) as FrontMatterPostType<T>
    }

