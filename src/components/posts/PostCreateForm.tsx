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
  return (
    <Popover placement='bottom'>
      <PopoverTrigger>
        <Button color='primary'>Create a Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={actions.createPost}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className='text-lg'>Create a Post</h3>
            <Input
              label='Title'
              name='title'
              type='text'
              labelPlacement='outside'
              placeholder='Title'
            />
            <Textarea
              label='Content'
              name='content'
              labelPlacement='outside'
              placeholder='Content'
            />
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
