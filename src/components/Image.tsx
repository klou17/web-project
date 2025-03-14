import Image from 'next/image'

interface Props {
  src: string
  alt: string
  className?: string
}
export const ImageSrc = ({ src, alt, className }: Props) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={`${className} !relative`}
      fill
      priority
      sizes={'(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
    />
  )
}
