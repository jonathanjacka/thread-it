'use server';

import * as authActions from '@/auth';

export async function signOut() {
  return authActions.signOut();
}