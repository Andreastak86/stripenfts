import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>Dette er hvordan Stripe fungerer</h1>
        <div className=' flex flex-col gap-2'>
        <Image src="/images/nft1.png" width={200} height={200} alt='nft nummer 1' />    
        <Image src="/images/2nft1.png" width={200} height={200} alt='nft nummer 2' />
      </div>
      </div>
    </main>
  )
}
