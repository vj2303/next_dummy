
// import { useRouter } from 'next/router'
import Link from 'next/link';

export const metadata = {
  

  title: "Home Data | LUZO",
  description: "This is an open source project found on github (requires developer experience to set up and configure).",
};



export default function Home() {

  // const router = useRouter();
  return (

    <>
    <h1 className='text-[30px]'>Hello</h1>
    <Link href='/about' className='p-2 bg-blue-50 rounded-md mx-auto text-black'> go to about </Link>
    <p className='text-[15px]'>this is dummy file</p>
    </>

 
  );
}
