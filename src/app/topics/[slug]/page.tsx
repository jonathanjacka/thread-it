import React from 'react'

interface TopicShowPageProps {
  params: {
    slug: string
  }
}

const TopicShowPage = ({ params}: TopicShowPageProps) => {

  const { slug } = params;
  return (
    <div className='grid gird-cols-4 gap-4 p-4'>
      <div className="col-span-3">
        <h1 className="text-2xl font-bold-mb-2">
          {slug}
        </h1>
      </div>

      <div>Preview Post Button</div>
    </div>
  )
}

export default TopicShowPage
