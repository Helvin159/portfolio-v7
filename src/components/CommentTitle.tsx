import React from 'react'

type Props = {}

function CommentTitle({ title }: { title: string }) {
  return (
    <h3 className="text-white text-2xl italic font-light leading-10 mb-4 text-left">{`// ${title}`}</h3>
  )
}

export default CommentTitle
