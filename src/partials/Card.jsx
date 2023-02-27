const Card = ({ img, title, description, href}) => {
    return (
        <a href={href} className="relative flex flex-col items-center p-10 bg-white rounded shadow-xl hover:rotate-12 bg-opacity-80" target={"_blank"}>
            <img className='cssifoundacat' src={img} alt={title} />
            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{title}</h4>
            <p className="text-gray-600 text-center">{description}</p>
         </a>
    )
}

export default Card