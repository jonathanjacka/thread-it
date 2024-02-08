'use server';

import type { Post } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { auth } from '@/auth';
import { db } from '@/db';
import paths from '@/paths';

const createPostSchema = z.object({
  title: z.string().min(3).max(100),
  content: z.string().min(10),
});

interface CreatePostFormState {
  errors: {
    title?: string[],
    content?: string[],
    _form?: string[],
  }
}

export const createPost = async (formState: CreatePostFormState, formData: FormData): Promise<CreatePostFormState> => {
  const result = createPostSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }
  

  //TODO: Revalidate topic show page, update home page?
  return {
    errors: {}
  }
}