const Card = ({
    classes = "",
    title = "",
    subtitle = "",
    small = false,
    button = false,
    buttonClass = "",
    buttonText = "",
    icon = null,
    id=""
}) =>{
    return(
        <div id={id} className={classes + " w-full rounded-3xl flex flex-col p-[40px]" + (!small ? " justify-center h-[524px]" : " h-[579px]")}>
            <h2 className="text-[35px] font-bold mb-2">{title}</h2>
            <p className="mt-2 text-lg font-semibold max-w-[450px]">
                {subtitle}
            </p>
            {
                button&&
                <div className={"py-2 px-5 rounded-full w-fit mt-10 font-semibold text-lg flex items-center cursor-pointer group transition-colors " + buttonClass}>
                    {buttonText}
                    {
                        icon&&
                        (icon)
                    }
                </div>
            }
        </div>
    )
}

export default Card