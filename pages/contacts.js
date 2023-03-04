import Head from 'next/head';
import { useState } from 'react'
import Layout from '../components/layout';
import { Pencil } from '@heroicons/react/20/solid'

export default function Contacts() {

  return (
    <div>
      <Head>
        <title>Contacts</title>
      </Head>
      <Layout>
        <div className=" p-3 mt-3 mx-auto rounded-md mb-6 max-w-xl">
          <a className='text-4xl text-black dark:text-white font-bold underline underline-offset-2'>Contactez-nous</a>
          <p>
            Un problème, une question ? Utilisez ce formulaire pour nous laissez un message !
          </p><br />
          <form id="createMessage" className='p-4 shadow-xl'>
            <label for="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre nom</label>
            <div class="flex relative mb-6">
              <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                @
              </span>
              <input type="text" id="website-admin" className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Gerard"></input>
            </div>
            <label for="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Le sujet de votre message:</label>
            <div class="relative mb-6">
              <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Le sujet"></input>
            </div>
            <label for="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre message</label>
            <div class="relative mb-6">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              </div>
              <textarea id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ecrivez ici"></textarea>
            </div>
            <div>
              <button type='submit' className=' bg-black hover:bg-gray-500 dark:bg-white dark:hover:bg-black dark:text-black dark:hover:text-white text-white font-bold py-2 px-4 rounded'>
                Envoyer
              </button>
            </div>
          </form>
          <span id="info"></span>
        </div>
      </Layout>
    </div>
  )
}