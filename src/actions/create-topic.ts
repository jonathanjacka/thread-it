'use server';

import { z } from 'zod';

interface createTopicFormState {
  errors: {
    name?: string[],
    description?: string[],
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

  return { errors: {}};
  //TODO: Revalidate home page

}