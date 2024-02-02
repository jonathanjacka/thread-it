'use server';

import * as authActions from '@/auth';

export async function signIn() {
  return authActions.signIn('github');
}

export async function signOut() {
  return authActions.signOut();
}