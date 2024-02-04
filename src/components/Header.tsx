import Link from 'next/link'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar
} from '@nextui-org/react';

import { auth } from '@/auth';
import React from 'react';

const Header = async () => {

  const session = await auth();

  let authContent: React.ReactNode;
  if(session?.user) {
    authContent = (
      <NavbarItem className='flex justify-center align-middle gap-2'>
        <Avatar src={session.user.image || ''} />
        <form action='/api/auth/signout' method='post'>
          <Button type='submit' color='default' variant='ghost'>Sign Out</Button>
        </form>
      </NavbarItem>
    )
  } else {
    authContent = (
      <>  
        <NavbarItem>
          <form action='/api/auth/signin' method='post'>
            <input type='text' name='provider' value='github' readOnly hidden />
            <Button type='submit' color='secondary' variant='bordered'>Sign in with Github</Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action='/api/auth/signin' method='post'>
            <input type='text' name='provider' value='github' readOnly hidden />
            <Button type='submit' color='primary' variant='flat'>Sign up with Github</Button>
          </form>
        </NavbarItem>
      </>


    )
  }

  return (
    <Navbar className='shadow mb-6'>
      <NavbarBrand>
        <Link href='/' className='font-bold'>Thread-it</Link>
      </NavbarBrand>

      <NavbarContent justify='center'>
        <Input placeholder='Search' />
      </NavbarContent>

      <NavbarContent justify='end'>
        {authContent}
      </NavbarContent>
    </Navbar>
  )
}

export default Header
