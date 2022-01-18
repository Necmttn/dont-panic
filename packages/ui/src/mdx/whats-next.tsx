import { useRouter } from "next/router"

export const WhatsNextSection: React.FC<{title: string, link: string, image: string}> = ({children, title, link, image}) => {
    const router = useRouter()
    return (
        <section className="p-4 grid grid-cols-2 gap-10 rounded-3xl bg-gray-100 cursor-pointer" onClick={() => router.push(link)}>
            <div className="rounded-lg shadow ">
                <img src={image} className="object-fill  h-48 w-96" />
            </div>
            <div>
                <h3 className="font-bold text-gray-600 text-xl">What's Next!?</h3>
                <h1>{title}</h1>
                <p>
                {children}
                </p>
            </div>
        </section>
    )
}