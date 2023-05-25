import { useState } from "react"

const Card = ({
    classes = "",
    title = "",
    subtitle = "",
    small = false,
    button = false,
    buttonClass = "",
    buttonText = "",
    buttonAction = null,
    icon = null,
    id = "",
    infoPanel = false,
    panelClass = "",
    panelText = ""
}) =>{
    const [openedPanel, setOpen] = useState(false)

    return(
        <div id={id} className={classes + " w-full rounded-3xl flex flex-col p-[40px] overflow-hidden relative" + (!small ? " justify-center h-[524px]" : " h-[579px]")}>
            <h2 className="text-[35px] font-bold mb-2">{title}</h2>
            <p className="mt-2 text-lg font-semibold max-w-[450px]">
                {subtitle}
            </p>
            {
                button&&
                <div onClick={buttonAction != null ? buttonAction : () => setOpen(true)} className={"py-2 px-5 rounded-full w-fit font-semibold text-lg flex items-center cursor-pointer group transition-colors " + buttonClass + (small ? " absolute bottom-[40px] left-[40px]" : "")}>
                    {buttonText}
                    {
                        icon&&
                        (icon)
                    }
                </div>
            }
            {
                infoPanel&&
                <div onClick={() => setOpen(false)} className={(openedPanel ? "left-0" : "left-[100%]") + " h-full w-full absolute top-0 transition-[left] cursor-pointer font-semibold p-[40px] " + panelClass}>
                    {panelText}
                </div>
            }
        </div>
    )
}

export default Card