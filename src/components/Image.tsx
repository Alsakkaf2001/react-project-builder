interface IProps{
url: string;
alt: string ;
className: string;
}

function Image({url ,alt ,className}:IProps) {
  return (
    <img
    src={url}
    alt={alt}
    className={className}
  />
  )
}

export default Image