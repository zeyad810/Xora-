import clsx from "clsx"
import Marker from "./Marker"

function Button({ children, icon, href, onClick, containerClassName, markerFill }) {

    const Inner = () => (<>
        <span className="relative flex items-center min-h-[60px] g4 rounded-2xl px-4 py-2 inner-before group-hover:before:opacity-100 overflow-hidden">
            <span className="absolute -left-[1px]">
                <Marker markerFill={markerFill} />
            </span>
            {icon && <img src={icon} className="size-10 object-contain z-10 mr-5" />}

            <span className="relative z-2 font-poppins font-bold uppercase text-p1">{children}</span>
        </span>
    </>
    )

    return href ?
        <a href={href} className={clsx("relative p-0.5 g5 rounded-2xl shadow-500 group", containerClassName)}>
            <Inner />
        </a> : (
            <button className={clsx("relative p-0.5 g5 rounded-2xl shadow-500 group", containerClassName)} onClick={onClick} >
                <Inner />
            </button>
        )
}

export default Button
