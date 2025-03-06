import { Element } from "react-scroll"
import { details, features } from "../constans"
import Button from "../components/Button"
function Features() {
    return (
        <section className="my-6 ">
            <Element name="features">
                <div className="container">
                    <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:rounded-none max-md:gap-3">
                        {
                            features.map(({ id, title, text, icon, caption, button }) => (
                                <div key={id} className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-s3 max-md:rounded-3xl max-md:flex-320">
                                    <div className="w-full flex justify-start items-start" >
                                        <div className=" flex flex-col items-center justify-center -ml-3 mb-12">
                                            <div className="w-0.5 h-16 bg-s3" >
                                            </div>
                                            <img src={icon} className="size-28 object-contain" alt={title} />
                                        </div>
                                    </div>
                                    <p className="caption mb-5 max-md:mb-6">{caption}</p>
                                    <h2 className="max-w-400 mb-7 h-3 text-p4 max-md:mb-6 max-md:h-5">{title}</h2>
                                    <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">{text}</p>
                                    <Button icon={button.icon} > {button.title}</Button>
                                </div>
                            ))}
                        <ul className="relative flex justify-around flex-grow px-[5px] border-2 border-s3 rounded-7xl max-md:hidden">
                            <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />
                            {details.map(({ id, title, icon }) => (
                                <li key={id} className="relative pt-16 pb-14 px-4">
                                    <div className="absolute top-0 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10" />
                                    <div className="flex items-center justify-center mx-auto mb-3 border-2 border-s3 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20">
                                        <img src={icon} alt={title} className="size-17/20 object-contain z-30" />
                                    </div>
                                    <h3 className="relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase ">{title}</h3>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Element>
        </section >
    )
}

export default Features
