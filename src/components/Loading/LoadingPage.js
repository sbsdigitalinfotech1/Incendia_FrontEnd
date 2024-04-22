'use client'

import React from 'react'
import { Spinner } from "@nextui-org/react";

function LoadingPage() {
  return (
    <div className='w-screen h-full backdrop-blur'>
<Spinner label="Secondary" color="secondary" labelColor="secondary"/>
    </div>
  )
}

export default LoadingPage