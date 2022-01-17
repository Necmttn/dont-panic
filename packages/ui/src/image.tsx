import NextImage, { ImageProps } from 'next/image'

export const Image = ({ ...rest }: ImageProps) => {
    console.log('Image props:', rest)
    if (rest.src.startsWith('/')) {
        return <NextImage {...rest} />
    } else {
        return <img {...rest} className={"object-fit max-w-sm"}/> 
    }
}