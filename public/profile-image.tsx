import Image from "next/image"

const profileImageSrc = "/profile-image.png"
const profileImageUrl =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1740821877168.jpg-OcQ7BvPsEfFX9pWkhSQVU7cHurnUid.jpeg"

export default function ProfileImage() {
  return <Image src={profileImageSrc || "/placeholder.svg"} alt="Profile" width={200} height={200} />
}
