import Image from 'next/image'
import Head from 'next/head'
import { ModeToggle } from '@/components/ModeToggle/ModeToggle'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cain Hall</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center p-16">
        <div className="flex max-md:flex-col text-lg">
          <div className='flex flex-col justify-center md:mr-8 max-md:mb-8 max-w-lg'>
            <div className='mb-10'>
              <svg width="33" height="19" viewBox="0 0 33 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.495899" y="0.499983" width="14.1871" height="4.06237" rx="2.03118" transform="matrix(1 0 -0.00820296 0.999966 0.151745 1.00002)" stroke="white"/>
                <rect x="0.495899" y="0.499983" width="14.1871" height="4.06237" rx="2.03118" transform="matrix(1 0 -0.00820296 0.999966 0.0456052 13.9367)" stroke="white"/>
                <rect x="0.504101" y="-0.499983" width="16.9995" height="4.06237" rx="2.03118" transform="matrix(0.00820291 -0.999966 1 -4.37099e-08 0.99995 19.003)" stroke="white"/>
                <rect width="5.10761" height="17.3215" rx="2.5538" transform="matrix(1 0 -0.00820296 0.999966 17.1421 1)" stroke="white"/>
                <rect width="5.10761" height="17.3215" rx="2.5538" transform="matrix(1 0 -0.00820296 0.999966 26.9132 1)" stroke="white"/>
                <rect width="4.00444" height="14.8787" rx="2.00222" transform="matrix(0.00820291 -0.999966 1 -4.35263e-08 17.0601 12)" stroke="#00FFC2"/>
              </svg>
            </div>
            <p className="mb-4">
              Hello, I&apos;m Cain 👋
            </p>
            <p className="mb-4">
              A web developer at <a href='https://www.plannthat.com' className='underline underline-offset-4'>Plann</a> helping brands connect with their audiences.
            </p>
            <p className='mb-8'>
              Excited to bring ideas to life and help create meaningful products.
            </p>
            <div>
              <Button variant="outline" asChild>
                <a href="mailto:cainh8@gmail.com">Email Me</a>
              </Button>
            </div>
          </div>
          <Image
            className="relative rounded-lg ease-in-out transition-opacity duration-300 opacity-100"
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
