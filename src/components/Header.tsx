import Link from 'next/link'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Input,
} from '@nextui-org/react';

import HeaderAuth from '@/components/HeaderAuth';

const Header = () => {
  return (
    <Navbar className='shadow mb-6'>
      <NavbarBrand>
        <Link href='/' className='font-bold'>Thread-it</Link>
      </NavbarBrand>

      <NavbarContent justify='center' >
        <Input  placeholder='Search' />
      </NavbarContent>

      <NavbarContent justify='end'>
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  )
}

export default Header
