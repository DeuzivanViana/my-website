'use client'

import { useState, useEffect, useRef } from 'react'

export default function Home() {
  const videoRef = useRef(null)

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 3) {
      videoRef.current.pause()
    }
  }

  // put b84e72009a6ffe17f73194e12da899274dc14ee1fa91a86ddb242c302d932594 code here
  // script to open eyes

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-black overflow-hidden relative'>
      <video
        ref={videoRef}
        src='/eye.mp4'
        autoPlay
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        className='max-h-full max-w-[80vh] object-cover'
      />
    </div>
  )
}
