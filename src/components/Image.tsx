import Image from 'next/image'

interface Props {
  src: string
  alt: string
  className?: string
}
export const ImageSrc = ({ src, alt, className }: Props) => {
  return <Image src={src} alt={alt} className={`${className} !relative`} loading={'lazy'} fill />
}
