'use server';

import { z } from 'zod';

const crwateTopicSchema = z.object({
  name: z.string().min(3).max(255).regex(/^[a-zA-Z-]+$/, { message: 'Only letters and hyphens are allowed' }),
  description: z.string().min(10).max(1000),
});

export const createTopic = async (formData: FormData) => {

  const result = crwateTopicSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
  });

  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
  }


  //TODO: Revalidate home page

}