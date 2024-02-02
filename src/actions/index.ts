'use server';

import * as authActions from '@/auth';

export async function signIn(provider: string = 'github') {
  return authActions.signIn(provider);
}

export async function signOut() {
  return authActions.signOut();
}