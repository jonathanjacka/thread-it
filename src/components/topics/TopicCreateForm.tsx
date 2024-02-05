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
  return (
    <Popover placement='bottom'>
      <PopoverTrigger>
        <Button color='primary'>Create New Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={actions.createTopic}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className='text-lg'>Create New Topic</h3>
            <Input label='Name' labelPlacement='outside' placeholder='Name' />
            <Textarea label='Description' labelPlacement='outside' placeholder='Description' />
            <Button type='submit' color='primary'>Create</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}

export default TopicCreateForm
