import Link from 'next/link'
import Layout from '../components/layout'
import Head from 'next/head'

export default function Home() {
  //regler le padding général et responsive menu hamburger
  return (
    <Layout>
      <Head>
        <title>WebTech - Home</title>
        <meta name="description" content="WebTech home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="relative px-6">
          <div className="mx-auto max-w-4xl">
            <Link href="/about">
              <div className="flex justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 leading-6 ring-2 ring-gray-700/10 hover:ring-gray-700/20 dark:ring-white dark:hover:ring-gray-300/20 mt-10">
                  <span className="text-gray-600 dark:text-white">
                    Announcing our motivation  {' '}
                    <a className="font-semibold text-bleu">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
                </div>
              </div>
            </Link>
            <h1 className="mt-16 md:text-5xl text-2xl font-bold tracking-tight text-center ">
              Presentation of our projects carried out during our studies
            </h1>
          </div>
          <div className="mx-auto max-w-6xl">
            <p className="mt-14 md:text-md text-sm md:leading-8 leading-4 text-gray-600 text-center dark:text-gray-400 font-bold">
              Welcome to our website showcasing the computer science projects of our talented students. Here, you will find a variety of innovative and interesting
              projects that demonstrate the skills and creativity of students. Whether you are a fellow student, a teacher, or just someone with a curiosity about
              technology, we hope you will find something of interest here. Please take a look around and discover the amazing work of students.
            </p>
            <div className="mt-24 flex gap-x-4 justify-center">
              <Link href='/projects'>
                <a className="inline-block rounded-lg bg-bleu px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-bleu hover:bg-gray-300 hover:ring-gray-300">
                  Discover our projects
                  <span className="text-white" aria-hidden="true">&rarr;</span>
                </a>
              </Link>
              <Link href='/contact'>
                <a className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-2 ring-gray-900/10 hover:ring-gray-900/30 dark:bg-gray-800 dark:text-white dark:ring-white">
                  Contact us
                  <span className="text-black" aria-hidden="true">&rarr;</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

