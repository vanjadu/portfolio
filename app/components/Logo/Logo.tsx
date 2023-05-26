import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  dark?: boolean
}

const Logo = ({ dark }: LogoProps) => {
  return (
    <Link href='/'>
      <Image
        src='/vanjaLogo.png'
        alt='Vanja Dulikravic Logo'
        width={50}
        height={50}
        className={`${dark && 'filter invert opacity-80'}`}
      />
    </Link>
  )
}

export default Logo
