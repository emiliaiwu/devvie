import { Link } from "react-router-dom"


const Button = ({ url, text, className }) => {
  return (
        <Link to={url} className={`px-5 py-[6px] md:py-[10px] rounded-full ${className} text-sm font-DMSans font-[600] md:text-base tracking-tighter text-center hover:translate-y-[-5px] transition-all duration-200 ease-in-out`}>
          {text}
      </Link>
  )
}

export default Button