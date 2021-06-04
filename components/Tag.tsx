import React from 'react'

type TagProps = {
  children: string
  color?: string
  width?: string
}

export const Tag:React.FC<TagProps> = ({ children, color, width }) => {
  const bgColor = color || 'bg-gray-300'
  const tagWidth = width || 'wax-w-32'
  return (
    <div className={`${bgColor} ${tagWidth} h-10 rounded-full shadow-md flex items-center justify-center`}>
      <p className={'font-light text-center capitalize text-xs truncate px-2'}>{children}</p>
    </div>
  )
}
