import { FC } from "react";
import { ChatToPotato } from "../icons";


const BrandIdentity: FC = () => {
    return (
        <section>
            <div className="maincontainer">
                <div>
                    <div className="font-bold text-[#eb5553]  text-h4 lg:text-h1">Brand Identity</div>
                    <div className="font-poppins font-semibold lg:text-li mt-6 text-paraColor md:text-paraGraphMedium">College Cat positions itself as an innovative academic partner, utilizing cutting-edge AI to provide efficient, transparent, and globally accessible educational support.</div>
                </div>
                <div className="lg:h-10 flex flex-row justify-between my-10">
                    <div className="font-bold text-[#eb5553]  text-h4 lg:text-bodyTitleBig" >Logo</div>
                    <div className="h-1/2 border-b-4  border-b-[#fea130] w-[93%]" />
                </div>
                <div className="w-3/4 m-auto">
                    <div className="flex gap-x-6">
                        <div className="w-1/2  flex justify-center items-center flex-col gap-3 rounded-lg bg-[#629fe3]">
                            <ChatToPotato key={Math.random().toFixed(3)} width={70} />
                            <div className="font-semibold text-white font-poppins text-center lg:text-paragraph">Chat to Potato</div>
                        </div>
                        <div className="w-1/2">
                            <img src="images/chattopotato/cardimage.jpg" alt="" className="rounded-lg" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <img src="images/chattopotato/url.jpg" alt="" className=" rounded-lg" />
                    </div>
                </div>
                <div className="lg:h-10 flex  justify-between mt-10">
                    <div className="font-bold text-[#eb5553]  text-h4 lg:text-bodyTitleBig" >Brand Color</div>
                    <div className="h-1/2 border-b-4  border-b-[#fea130] w-[88%]" />
                </div>
                <div>
                    <div className="flex h-[25vh] my-4 gap-x-3">
                        <div className="w-[35%] justify-end  p-2 flex flex-col rounded-lg bg-[#5e95e0]">
                            <div className="font-semibold  text-white font-poppins lg:text-h4">United Nations Blue</div>
                            <div className="font-semibold text-white font-poppins lg:text-h4">#5e95e0</div>
                        </div>
                        <div className="w-[35%] justify-end  p-2 flex flex-col rounded-lg bg-[#fea130]">
                            <div className="font-semibold  text-white font-poppins lg:text-h4">Deep Saffron</div>
                            <div className="font-semibold text-white font-poppins lg:text-h4">#fea130</div>
                        </div>
                        <div className="w-[35%] justify-end  p-2 flex flex-col rounded-lg bg-[#007db9]">
                            <div className="font-semibold  text-white font-poppins lg:text-h4">Star Command Blue</div>
                            <div className="font-semibold text-white font-poppins lg:text-h4">#007db9</div>
                        </div>
                    </div>
                </div>

                <div className="lg:h-10 flex  justify-between my-10">
                    <div className="font-bold text-[#eb5553]  text-h4 lg:text-bodyTitleBig" >Typography</div>
                    <div className="h-1/2 border-b-4  border-b-[#fea130] w-[88%]" />
                </div>
                <div className="flex flex-col gap-y-6">
                    <div className="font-bold  text-heading text-h4 lg:text-h1">Typography</div>
                    <div className="font-medium text-heading  text-h4 lg:text-h2" >Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</div>
                    <div className="font-medium text-heading  text-h4 lg:text-h2" >0123456789</div>
                </div>
            </div>
        </section>
    );
};

export default BrandIdentity;
