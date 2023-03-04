import Link from 'next/link'
import Layout from '../components/layout'
import Head from 'next/head'
import title from '../content/images/titre.png'
import decat from '../content/images/decat.jpg'
import inter from '../content/images/inter.png'
import sport2 from '../content/images/sport2.jpg'
import skimium from '../content/images/skimium.png'
import skiset from '../content/images/skiset.png'
import market from '../content/images/market.png'
import juniorski from '../content/images/Juniorski.png'
import seniorski from '../content/images/Seniorski.jpg'
import funsurf from '../content/images/Funsurf.jpg'

import Image from 'next/image';

export default function Home() {
  //regler le padding général et responsive menu hamburger
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="relative px-6 bg-skiaccueil bg-no-repeat bg-cover pb-4">
          <div className="mx-auto max-w-4xl text-center mb-32">
            <h1 className="text-4xl md:text-7xl font-snowky text-black block tracking-wide rounded">
              U ski together !
            </h1>
          </div>
          <div className=''>
          </div>
          <div className='md:mb-64 mb-32'>
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
          <div className="mx-auto max-w-5xl md:bg-slate-500 md:bg-opacity-70 rounded-full">
            <h1 className="text-center text-3xl font-bold text-gray-900 mt-10 font-mono">Prochain événement</h1>
            <p className="mt-14 md:text-md md:leading-8 leading-4 text-black text-center  font-extrabold text-xl">
              Seminaire des collaborateurs
            </p>
            <p className="mt-14 md:text-md text-sm md:leading-8 leading-4 text-gray-700 text-center font-semibold">
              Venez le <span className=' text-blue-400 font-bold'>20 Mai 2026 au rooftop de la tour Montparnasse </span> pour rencontrez nos collaborateurs et <span className=' text-blue-400 font-bold'>U can Ski with us ! </span>
            </p>
            <h1 className="text-center text-2xl font-bold text-gray-900 mt-8">20 mai 2026, 10:30  |  Montparnasse Rooftop</h1>
          </div>

        </div>
        <hr className='h-1 bg-black'></hr>
        <div className='relative py-5 px-5 ml-auto mr-auto w-full md:grid-cols-2 lg:gap-x-16 grid items-center grid-cols-1 bg-slate-50 dark:bg-gray-500'>
          <div className='flex items-center'>
            <div>
              <h2 className='text-3xl text-center font-bold md:text-5xl font-chritsmas mb-8 dark:text-black'>
                Compétition
              </h2>
              <p className='text-xl text-center md:text-3xl font-chritsmas mb-8 dark:text-white'>
                Nous participons à la grande compétition <span className=' text-blue-500 font-bold'>Sales trends & Marketing Awards. </span>
                L'événement entend honorer les acteurs les plus innovants dans le domaine des ventes et du marketing, à la fois dans les secteurs B2B et B2C
              </p>
            </div>
          </div>
          <div className='hidden md:block md:max-w-lg mx-auto overflow-hidden rounded-lg shadow-xl'>
            <Image
              src={market}
              alt="Picture of the player"
              height={302}
              width={411}
            />
          </div>

        </div>
        <hr className='h-1 bg-black'></hr>
        <div className='relative py-5 px-5 ml-auto mr-auto w-full md:grid-cols-2 lg:gap-x-16 grid items-center grid-cols-1'>

        <div className='hidden md:block md:max-w-lg mx-auto overflow-hidden rounded-lg'>
            <Image
              src={juniorski}
              alt="Picture of the player"
              height={450}
              width={652}
            />
          </div>
          <div className='flex items-center'>
            <div>
              <h2 className='text-3xl text-center font-bold md:text-5xl font-chritsmas mb-8 dark: text-black'>
                Nos Juniors Skis
              </h2>
              <p className='text-xl text-center md:text-3xl font-chritsmas mb-8 dark:text-white'>
                Nos skis spécialisés pour les enfants
                jusqu'à l'adolescence sont parfaits
                pour toute utilisation allant du
                niveau débutant à expert.
              </p>
            </div>
          </div>
        </div>
        <hr className='h-1 bg-black'></hr>
        <div className='relative py-5 px-5 ml-auto mr-auto w-full md:grid-cols-2 lg:gap-x-16 grid items-center grid-cols-1 bg-slate-50 dark:bg-gray-500'>
          <div className='flex items-center'>
            <div>
              <h2 className='text-3xl text-center font-bold md:text-5xl font-chritsmas mb-8 dark:text-black'>
                Nos Séniors Skis
              </h2>
              <p className='text-xl text-center md:text-3xl font-chritsmas mb-8 dark:text-white'>
                Nos skis spécialisés pour les adultes
                de tous les niveaux. Durables et
                confortables, ils s'adaptent
                parfaitement à votre style de glisse.
              </p>
            </div>
          </div>
          <div className='hidden md:block md:max-w-lg mx-auto overflow-hidden rounded-lg shadow-xl'>
            <Image
              src={seniorski}
              alt="Picture of the player"
              height={302}
              width={411}
            />
          </div>
        </div>
        <hr className='h-1 bg-black'></hr>
        <div className='relative py-5 px-5 ml-auto mr-auto w-full md:grid-cols-2 lg:gap-x-16 grid items-center grid-cols-1'>

        <div className='hidden md:block md:max-w-lg mx-auto overflow-hidden rounded-lg'>
            <Image
              src={funsurf}
              alt="Picture of the player"
              height={450}
              width={652}
            />
          </div>
          <div className='flex items-center'>
            <div>
              <h2 className='text-3xl text-center font-bold md:text-5xl font-chritsmas mb-8 dark: text-black'>
                Nos Fun Surf
              </h2>
              <p className='text-xl text-center md:text-3xl font-chritsmas mb-8 dark:text-white'>
                Nos Fun Surf sont des snowboards pour les adultes et enfants de tout niveaux.
              </p>
            </div>
          </div>
        </div>
        <hr className='h-1 bg-black'></hr>

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

      </main>
    </Layout>
  )
}

