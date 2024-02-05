'use client';

import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent
} from '@nextui-org/react';

import { useSession } from 'next-auth/react';
import * as actions from '@/actions';

const HeaderAuth = () => {

  const { status, data } = useSession();

  let authContent: React.ReactNode;

  if(status === 'loading') {
    authContent = null;
  } else if(data?.user) {
    authContent = (
      <Popover placement='left' >
        <PopoverTrigger>
          <Avatar src={data.user.image || ''} className='hover:cursor-pointer' />    
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4 flex flex-col justify-center align-middle gap-2">
            {data.user.name}
            <form action={actions.signOut} className='mx-auto'>
              <Button type='submit' color='primary' variant='bordered' >Sign Out</Button>
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
            <Button type='submit' color='primary' variant='ghost'>Sign in</Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signIn}>
            <input type='text' name='provider' value='github' readOnly hidden />
            <Button type='submit' color='secondary' variant='ghost'>Sign up</Button>
          </form>
        </NavbarItem>
      </>


    )
  }
  return authContent;
}

export default HeaderAuth
