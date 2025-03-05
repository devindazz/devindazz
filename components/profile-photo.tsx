import Image from "next/image"
import Link from "next/link"

interface ProfileLogoProps {
  src: string
  alt: string
  size?: number
  href?: string
}

export function ProfilePhoto({
  src = "/placeholder.svg?height=100&width=100",
  alt = "Profile photo",
  size = 40,
  href = "/",
}: ProfileLogoProps) {
  const Component = href ? Link : "div"

  return (
    <Component
      href={href as any}
      className="relative inline-block rounded-full overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-colors"
      style={{ width: size, height: size }}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill={true}
        sizes={`${size}px`}
        className="object-cover"
        priority
      />
    </Component>
  )
}

