'use server'
import React from 'react'
import { Button } from '@nextui-org/react'


export default async function Page() {
  console.log('request came')
  return (
    <div className='bg-black p-4 h-screen'>
    <Button className='bg-blue-200'>Click me</Button>
  </div>
  )
}
