'use server';

import { z } from 'zod';
import { auth } from '@/auth';
import type { Topic } from '@prisma/client';
import { db } from '@/db';
import paths from '@/paths';
import { redirect } from 'next/navigation';

interface createTopicFormState {
  errors: {
    name?: string[],
    description?: string[],
    _form?: string[],
  }
}

const createTopicSchema = z.object({
  name: z.string().min(3).max(255).regex(/^[a-zA-Z-]+$/, { message: 'Only letters and hyphens are allowed' }),
  description: z.string().min(10).max(1000),
});

export const createTopic = async (formState: createTopicFormState, formData: FormData): Promise<createTopicFormState> => {

  const result = createTopicSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  const session = await auth();
  if(!session || !session.user) {
    return { errors: { _form: ['You must be logged in to perform this action.'] } };
  }

  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: {
        name: result.data.name,
        slug: result.data.name.toLowerCase(),
        description: result.data.description,
      }
    });

  } catch (error) {
    if(error instanceof Error) {
      return { errors: {
        _form: [error.message],
      }}
    } else {
      return { errors: {
        _form: ['An error occurred while creating the topic. Please try again.'],
      } }
    }
  }

  redirect(paths.topicShow(topic.slug));
  //TODO: Revalidate home page

}