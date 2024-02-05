'use client';

import { useFormState } from 'react-dom';

import * as actions from '@/actions';

import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent
} from '@nextui-org/react';

const TopicCreateForm = () => {

  const [ formState, action] = useFormState(actions.createTopic, {
    errors: {}
  });

  return (
    <Popover placement='bottom'>
      <PopoverTrigger>
        <Button color='primary'>Create New Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className='text-lg'>Create New Topic</h3>
            <Input 
              name='name' 
              label='Name' 
              labelPlacement='outside' 
              placeholder='Name' 
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(', ')}
            />
            <Textarea 
              name='description' 
              label='Description' 
              labelPlacement='outside' 
              placeholder='Description' 
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(', ')}
            />
            {formState.errors._form && 
              <div className='p-2 text-small text-red-600 border rounded-xl bg-red-100'>
                {formState.errors._form?.join(', ')}
              </div>
            }
            <Button type='submit' color='primary'>Create</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}

export default TopicCreateForm
