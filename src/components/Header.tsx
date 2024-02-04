import Link from 'next/link'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent
} from '@nextui-org/react';

import { auth } from '@/auth';
import * as actions from '@/actions';

const Header = async () => {

  const session = await auth();

  let authContent: React.ReactNode;
  if(session?.user) {
    authContent = (
      <Popover placement='left' >
        <PopoverTrigger>
          <Avatar src={session.user.image || ''} className='hover:cursor-pointer'/>
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4 flex flex-col justify-center align-middle gap-2">
            {session.user.name}
            <form action={actions.signOut} className='mx-auto'>
              <Button type='submit' color='secondary' variant='bordered' >Sign Out</Button>
            </form>
          </div>
          
        </PopoverContent>
      </Popover>
    )
  } else {
    authContent = (
      <>  
        <NavbarItem>
          <form action={actions.signIn}>
            <input type='text' name='provider' value='github' readOnly hidden />
            <Button type='submit' color='secondary' variant='bordered'>Sign in with Github</Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signIn}>
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
