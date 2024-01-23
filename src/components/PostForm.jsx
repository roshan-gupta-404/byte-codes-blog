import React from 'react'
import Input from './form_components/Input';
import Select from './form_components/Select';
import TextArea from './form_components/TextArea';
import Button from './form_components/Button';
import RTE from './form_components/RTE';

function PostForm() {
    const label = 'Label:- ';
  return (
    <>
        <form className='flex flex-wrap'>
            <div className='w-2/3  my-2 px-4'>
            <Input
                label = 'Title:-'
                placeholder = 'Title'
            />
            <Input
                label = 'Slug:-'
                placeholder = 'Slug'
            />
            <RTE
                label={'Content:-'}
            />
            </div>

            <div className='w-1/3  my-2 px-4'>
            <Input
                label = 'Featured Image:-'
                type='file'
                className={`pt-1 text`}
            />
            <Select
                options={["Active", "Inactive"]}
                label={'Status:-'}
            />
            <TextArea
                placeholder={'Description'}
                className=''
                label={'Description:-'}
            />
            <Button
                className={`text-white text-2xl font-semibold bg-blue-700 w-full p-1 rounded-md hover:bg-blue-800`}
            >
                {'Submit'}
            </Button>
            </div>
        </form>
    </>
  )
}

export default PostForm