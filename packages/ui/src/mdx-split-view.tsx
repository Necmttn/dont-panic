import { MDXWrapper } from ".";


export const MDXSplitView: React.FC<{content: any}> = ({ content, children }) => {
    const isDev = process.env.NODE_ENV === 'development';
    if (isDev) {
    return (
        <div className="grid grid-cols-2">
            <div className="overflow-y-scroll">
            <MDXWrapper>
              {content}
            </MDXWrapper>
              </div> 
            <div className="fixed">
                {children}
            </div>
        </div>
      )
    } 
    return children
}