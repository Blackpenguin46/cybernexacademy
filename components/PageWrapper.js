"use client"

import React from 'react'
// Commenting out unused imports to avoid warnings
// import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Layout from './Layout'

const PageWrapper = ({ children, title, description }) => {
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