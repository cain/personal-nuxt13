import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cain Hall</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center p-16">
        <div className="flex max-md:flex-col text-xl">
          <div className='flex flex-col justify-center md:mr-8 max-w-prose max-md:mb-8 max-w-lg'>
            <p className="mb-4">
              Hi, I’m Cain 👋
            </p>
            <p className="mb-4">
              A frontend developer at <a href='https://www.plannthat.com' className='underline underline-offset-4'>Plann</a> helping brands connect with their audiences.
            </p>
            <p className='mb-8'>
              Excited to bring ideas to life and help create meaningful products.
            </p>
            <a href='mailto:cainh8@gmail.com' className='border-4 text-lg border-gray-700 text-white font-semi py-2 px-4 rounded-lg w-fit'>Send a message</a>
          </div>
          <Image
            className="relative rounded-lg transition ease-in-out transition-opacity duration-300 opacity-100"
            src="/me.jpeg"
            alt="Cain Hall"
            width={300}
            height={400}
            priority
          />
        </div>
      </main>
    </div>

  )
}
