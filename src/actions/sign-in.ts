'use server';

import * as authActions from '@/auth';

export async function signIn(formData: FormData) {
  const provider = formData.get('provider');
  if (typeof provider === 'string') {
    return authActions.signIn(provider);
  }
}
