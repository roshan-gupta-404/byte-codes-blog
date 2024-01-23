import React from 'react'
import Input from './form_components/Input';
import Select from './form_components/Select';
import TextArea from './form_components/TextArea';
import Button from './form_components/Button';
import RTE from './form_components/RTE';
import { useForm } from 'react-hook-form';

function PostForm() {
    const {register, handleSubmit , control} = useForm()
    const submit = (data)=>{
        console.log(data);
    }
  return (
    <>
        <form className='flex flex-wrap' onSubmit={handleSubmit(submit)}>
            <div className='w-2/3  my-2 px-4'>
            <Input
                label = 'Title:-'
                placeholder = 'Title'
                {...register('title')}
            />
            <Input
                label = 'Slug:-'
                placeholder = 'Slug'
                {...register('slug')}
            />
            <RTE
                label={'Content:-'}
                name={'content'}
                control={control}
            />
            </div>

            <div className='w-1/3  my-2 px-4'>
            <Input
                label = 'Featured Image:-'
                type='file'
                className={`pt-1 text`}
                {...register('featured_image')}
            />
            <Select
                options={["Active", "Inactive"]}
                label={'Status:-'}
                {...register('option')}
            />
            <TextArea
                placeholder={'Description'}
                className=''
                label={'Description:-'}
                {...register('description')}
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