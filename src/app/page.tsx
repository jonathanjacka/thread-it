import { Button } from '@nextui-org/react';
import * as actions from '@/actions';

import Profile from '@/components/Profile';

import { auth } from '@/auth';

export default async function Home() {

  const session = await auth();

  return (
    <div>
      <form action={actions.signIn}>
        <input type='text' name='provider' value='github' readOnly hidden />
        <Button type='submit'>Sign in with Github</Button>
      </form>

      <form action={actions.signOut}>
        <Button type='submit'>Sign Out</Button>
      </form>
      
      <Profile />
    </div>


    
  );
}
