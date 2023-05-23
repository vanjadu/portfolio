import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src='/vanjaLogo.png'
        alt='Vanja Dulikravic Logo'
        width={50}
        height={50}
      />
    </Link>
  )
}

export default Logo
