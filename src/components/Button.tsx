import './button.css'

interface ButtonProps {
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  text: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
const Button = ({ text, onClick, ...props }: ButtonProps) => {
  return (
    <button className='Button' {...props} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
