import Image from 'next/image'
import { Inter } from 'next/font/google'
import checkout from "../components/checkout"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className=" text-center grid grid-flow-row gap-4 items-center justify-center"
    >
        <h1>Dette er hvordan Stripe fungerer</h1>
        <div>
          <p>Min første NFT</p>
        <Image src="/images/nft1.png" width={200} height={200} alt='nft nummer 1' />    
        <button onClick={(() => {
              checkout({
                lineItems: [
                  {
                    price: "price_1NAf58CL4oebOUCjKENmp8Ll",
                    quantity: 1
                  }
                ]
              })
            })}>BUY!</button>
        </div>
        <div>        
          <Image src="/images/2nft1.png" width={200} height={200} alt='nft nummer 2' />
      </div>
    </main>
  )
}
