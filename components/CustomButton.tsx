

import { CustomButtonProps } from '@/types'
import { FC } from 'react'

const CustomButton: FC<CustomButtonProps> = ({
  title, containerStyle, handleClick, type
}) => {
  return (
    <button
      disabled={false}
      type={type ? type : `button`}
      className={`justify-center items-center whitespace-nowrap ${containerStyle}`}
      onClick={handleClick}>
      <span className={`flex-1`}>{title}</span>
    </button>
  )
}

export default CustomButton
