export const MDXWrapper: React.FC = ({children}) => {
    return ( 
        <section className="w-full flex flex-col items-center justify-center">
        <article className="prose lg:prose-xl px-4 max-w-5xl">
        {children}
        </article>
        </section>
    )
}