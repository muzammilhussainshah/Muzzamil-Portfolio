import { FC } from "react";
import { ChatToPotato } from "../icons";


const BrandIdentity: FC = () => {
    return (
        <div className="h-ful lg:px-72 py-28">
            <div>
                <div className="font-bold text-[#eb5553]  text-h4 lg:text-h2">Brand Identity</div>
                <div className="font-medium text- lg:text-h4 lg:mt-2 text-paraColor md:text-paraGraphMedium">College Cat positions itself as an innovative academic partner, utilizing cutting-edge AI to provide efficient, transparent, and globally accessible educational support.</div>
            </div>
            <div className="lg:h-10 flex flex-row justify-between my-10">
                <div className="font-bold text-[#eb5553]  text-h4 lg:text-bodyTitleBig" >Logo</div>
                <div className="h-1/2 border-b-2  border-b-[#fea130] w-11/12" />
            </div>
            <div>
                <div>
                    <ChatToPotato key={Math.random().toFixed(3)} width={40} />
                </div>
            </div>
        </div>
    );
};

export default BrandIdentity;
