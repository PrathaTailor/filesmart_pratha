import Image from 'next/image'

interface ImageProp {
  className?: string
  alt: string
  src: string
  width?: number
  height?: number
}

export default function ImgLoader(props: ImageProp) {
  return (
    <Image
      unoptimized={true}
      {...props}
      itemProp="image"
      alt={props.alt}
      loading="lazy"
    />
  )
}
