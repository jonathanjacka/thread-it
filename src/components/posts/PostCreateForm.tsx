'use client';

import { useFormState } from 'react-dom';
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent
} from '@nextui-org/react';
import * as actions from '@/actions';
import FormButton from '@/components/common/FormButton';

const PostCreateForm = () => {

  const [ formState, action ] = useFormState(actions.createPost, { errors: {}});

  return (
    <Popover placement='bottom'>
      <PopoverTrigger>
        <Button color='primary'>Create a Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className='text-lg'>Create a Post</h3>
            <Input
              label='Title'
              name='title'
              type='text'
              labelPlacement='outside'
              placeholder='Title'
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(',')}
            />
            <Textarea
              label='Content'
              name='content'
              labelPlacement='outside'
              placeholder='Content'
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(',')}
            />

            { formState.errors._form && 
              <div className='p-2 text-small text-red-600 border rounded-xl bg-red-100'>
                {formState.errors._form?.join(', ')}
              </div>
            }
            
            <FormButton color='primary'>
              Create Post
            </FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}

export default PostCreateForm
