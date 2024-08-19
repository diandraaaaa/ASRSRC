import React from "react"
import Heading from "./Heading";
import Paragraph from "./Paragraph";


const FeaturePoint = ({children, quesitonNr, title}) => {
    return(
        <div className="mx-auto max-w-md">
            <div className="flex items-center space-x-2">
                <div className="max-md:size-12 max-md:p-3 md:p-10 md:size-20 bg-gradient-3 rounded-full flex items-center justify-center text-white">
                    <Heading size="question" weight="black" color="white" customClasses="md:translate-y-3">{quesitonNr}</Heading>
                </div>
                <div>
                    <Heading size="h6" weight="bold" color="black" customClasses="md:leading-[48px]">{title}</Heading>
                    <Paragraph weight="normal">
                        {children}
                    </Paragraph>
                </div>
            </div>

        </div>
    )

}
export default FeaturePoint