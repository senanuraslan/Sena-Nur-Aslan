import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/login' className='flex justify-center items-center'>
        <Image
          src='/logo.jpg'
          alt='logo'
          width={258}
          height={228}
          className='object-contain'
        />
      </Link>
      <Link href="/login">
       <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
       />
      </Link>
    </nav>
  </header>
);

export default NavBar;
