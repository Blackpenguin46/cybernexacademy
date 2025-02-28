"use client"

import { motion, AnimatePresence } from "framer-motion"
import Head from 'next/head'
import Layout from './Layout'

export function PageWrapper({ children, title, description }) {
  return (
    <Layout>
      <Head>
        <title>{title} - CyberNex Academy</title>
        <meta name="description" content={description} />
      </Head>
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </Layout>
  )
}

export default PageWrapper 