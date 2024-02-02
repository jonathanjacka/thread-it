'use client';

import { useSession } from 'next-auth/react';

const Profile = () => {

  const { data } = useSession();

  if(!(data?.user)){
  return (
    <div>
      From client: user is NOT signed in
    </div>
    )
  }

  return (
    <div>
      {`From client: user ${data.user.name} is signed in`}
    </div>
  )



}

export default Profile
