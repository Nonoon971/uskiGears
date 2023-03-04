import Link from 'next/link'
import Layout from '../components/layout'
import Head from 'next/head'
import title from '../content/images/titre.png'
import decat from '../content/images/decat.jpg'
import inter from '../content/images/inter.png'
import sport2 from '../content/images/sport2.jpg'
import skimium from '../content/images/skimium.png'
import skiset from '../content/images/skiset.png'
import Image from 'next/image';

export default function Home() {
  //regler le padding général et responsive menu hamburger
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="relative px-6 bg-skiaccueil bg-no-repeat bg-cover">
          <div className="mx-auto max-w-4xl text-center mb-32">
          <h1 className="text-4xl md:text-7xl font-snowky text-black block tracking-wide rounded">
              U ski together !
          </h1>
          </div>
          <div className=''>
          </div>
          <div className='md:mb-96 mb-32'>
            <Link href="/about">
              <div className="flex justify-center">
                <div className="relative overflow-hidden rounded-full px-4 leading-6 ring-2 ring-gray-700/20 bg-gray-700/20 bg-opacity-40 hover:ring-gray-500 ">
                  <span className="text-black">
                    Découvrez en plus sur {' '}
                    <a className="font-semibold text-black">
                      <span className="absolute inset-0" aria-hidden="true" />
                      USKI <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className="mx-auto max-w-5xl md:mb-11 mb-32 md:bg-slate-500 md:bg-opacity-70 rounded-full">
            <h1 className="text-center text-3xl font-bold text-gray-900 mt-10 font-mono">Prochain événement</h1>
              <p className="mt-14 md:text-md md:leading-8 leading-4 text-black text-center  font-extrabold text-xl">
              Seminaire des collaborateurs
              </p>
              <p className="mt-14 md:text-md text-sm md:leading-8 leading-4 text-gray-700 text-center font-semibold">
                Venez le 20 Mai 2026 au rooftop de la tour Montparnass pour rencontrez nos collaborateurs et U can Ski with us !
              </p>
            <h1 className="text-center text-2xl font-bold text-gray-900 mt-8">20 mai 2026, 10:30  |  Montparnass Rooftop</h1>
          </div>
          <div className=" py-2 sm:pt-20">
            <div className="mx-auto max-w-7xl px-10 lg:px-8">
              <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
              Les acteurs les plus innovants dans la location de skis
              </h2>
              <div className="mx-auto mt-6 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src={decat}
                  alt="Transistor"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src={sport2}
                  alt="Reform"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src={inter}
                  alt="Tuple"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                  src={skiset}
                  alt="SavvyCal"
                  width={158}
                  height={48}
                />
                <Image
                  className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                  src={skimium}
                  alt="Statamic"
                  width={158}
                  height={48}
                />
              </div>
            </div>
          </div>
        </div>
        
      </main>
    </Layout>
  )
}

