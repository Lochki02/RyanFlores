const Card = ({
    classes = "",
    title = "",
    subtitle = "",
    small = false
}) =>{
    return(
        <div className={classes + " w-full rounded-3xl flex flex-col p-[40px]" + (!small ? " justify-center h-[524px]" : " h-[579px]")}>
            <h2 className="text-[35px] font-bold mb-2">{title}</h2>
            <p className="mt-2 text-lg font-semibold max-w-[450px]">
                {subtitle}
            </p>
        </div>
    )
}

export default Card