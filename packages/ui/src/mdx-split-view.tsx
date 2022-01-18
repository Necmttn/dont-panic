import React from "react";
import { MDXWrapper } from ".";
import {FrontMatterTutorial} from '@dont-panic/mdx'


export const MDXSplitView: React.FC<{content: React.ReactNode, frontmatter: FrontMatterTutorial}> = ({ content, frontmatter, children }) => {
    const isDev = process.env.NODE_ENV === 'development';
    if (false) {
    return (
        <div className="grid grid-cols-2">
            <div className="overflow-y-scroll h-screen p-4">
            <MDXWrapper>
              {content}
            </MDXWrapper>
              </div> 
            <div className="border-l-4 border-purple-800">
                {children}
            </div>
        </div>
      )
    } else {
      // https://github.com/Necmttn/dont-panic/blob/main/tutorials/learn-solana-wallet-balance/pages/intro.tsx
      // src="https://codesandbox.io/embed/new?codemirror=1&highlights=6,7,8,9"
      return (
        <div className="grid grid-cols-2">
            <div className="overflow-y-scroll h-screen p-4">
            <MDXWrapper>
              {content}
            </MDXWrapper>
              </div> 
            <div className="border-l-4 border-purple-800">
<iframe
  src="https://githubbox.com/Necmttn/dont-panic/blob/main/tutorials/learn-solana-wallet-balance/pages/intro.tsx"
  style={{width: '100%', height: '100%'}}
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
                {/* {children} */}
            </div>
        </div>
      )
    }

    return (
      <>
      {children}
      </>
    )
}