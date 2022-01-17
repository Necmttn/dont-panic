export const MDXWrapper: React.FC = ({children}) => {
    return ( 
        <article className="prose lg:prose-xl px-4">
        {children}
        </article>
    )
}