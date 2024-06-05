
import Link from 'next/link';
// import { useRouter } from 'next/router'
import React from 'react'
// import { metadata } from '../layout';

export const metadata = {
    metadataBase: new URL("https://www.luzo.app"),
  
    title: "about data | LUZO",
    description: "To be a data scientist increasingly means acting as a jack-of-all-trades.Back in the day, it might have been enough to know a few pandas functions and call model.fit() and model.predict() in the right order. But the world is moving on. ",
  };
  

const index = () => {
  
    // const router = useRouter();
  
  return (
    <>
    <h1>Hellllo2</h1>
    <Link href='/' className='p-2 bg-blue-50 rounded-md mx-auto text-black'> go to Home </Link>
    <p>This is dummy 2</p>

    </>
  )
}

export default index