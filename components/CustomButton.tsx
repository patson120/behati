

import { CustomButtonProps } from '@/types'
import React, { FC } from 'react'

const CustomButton: FC<CustomButtonProps> = ({
  title, containerStyle, handleClick
}) => {
  return (
    <button
      disabled={false}
      type={`button`}
      className={`justify-center items-center whitespace-nowrap ${containerStyle}`}
      onClick={handleClick}>
      <span className={`flex-1`}>{title}</span>
    </button>
  )
}

export default CustomButton
