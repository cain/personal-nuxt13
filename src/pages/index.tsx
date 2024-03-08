import Image from 'next/image'
import { useEffect } from 'react';
import Head from 'next/head'
// import { ModeToggle } from '@/components/ModeToggle/ModeToggle'
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from 'next/link'
import Gradient from '@/components/Gradient/Gradient';

// import { Lumiflex } from "uvcanvas"
export default function Home() {
  return (
    <div>
      <Head>
        <title>Cain Hall</title>
      </Head>
      <main className="flex flex-col justify-center m-16">
        <div className="flex max-md:flex-col text-lg flex-col">
          <div className='flex flex-col justify-center md:mr-8 max-md:mb-8 max-w-lg'>
            <div className='mb-10'>
              <Gradient></Gradient>
            </div>
            <p className="mb-4">
              Cain Hall
            </p>
            <div className="mb-4">
              Web developer at <HoverCard openDelay={0}>
                <HoverCardTrigger asChild>
                  <Link href='https://www.plannthat.com' passHref className='underline underline-offset-4'>Plann</Link>
                </HoverCardTrigger>
                <HoverCardContent className='w-[400px]'>
                  <video autoPlay playsInline loop className='rounded-md '>
                    <source src="/showcase.webm" ></source>
                  </video>
                </HoverCardContent>
              </HoverCard>
              . Creating and tinkering a product that helps people grow their reach.
            </div>
            <p className='mb-8 text-sm opacity-80'>
              Its my passion to bring ideas to life and create meaningful products.
            </p>
            <div>
              <Button variant="outline" asChild>
                <Link href="mailto:cainh8@gmail.com">Lets Chat</Link>
              </Button>
            </div>
          </div>
          {/* <Image
            className="relative rounded-lg ease-in-out transition-opacity duration-300 opacity-100 mt-8"
            src="/me.jpeg"
            alt="Cain Hall"
            width={200}
            height={100}
            priority
          /> */}
        </div>
      </main>
    </div>

  )
}
