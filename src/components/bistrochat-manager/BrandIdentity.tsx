import { FC } from "react";
import { BistroChatManager, ChatToPotato } from "../../icons";


const BrandIdentity: FC = () => {
    return (
        <section>
            <div className="maincontainer">
                <div>
                    <div className="font-bold text-[#2e3a59]  text-h2 text-center lg:text-left">Brand Identity</div>
                    <div className="font-poppins font-semibold lg:text-li mt-4 text-center lg:text-left ">
                    The Bistrochat Manager app</div>
                </div>
                <div className="h-10 flex gap-x-4  my-10">
                    <div className="font-bold text-[#2e3a59] text-bodyTitleBig" >Logo</div>
                    <div className="h-1/2 border-b-4  border-b-[#66a14c] w-[93%]" />
                </div>
                <div className="lg:w-3/4 m-auto">
                    <div className="flex gap-x-6">
                        <div className="w-1/2   flex justify-center items-center flex-col gap-3 rounded-lg bg-[#191919]">
                            <BistroChatManager className="w-[25%] rounded-lg" />
                            <div className="font-semibold text-white font-poppins text-center text-caption md:text-h4 lg:text-h3">Bistrochat</div>
                        </div>
                        <div className="w-1/2">
                            <img src="images/bistrochat/card.png" alt="bistrochat Card" className="rounded-lg" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <img src="images/bistrochatManager/icons.jpg" className="rounded-large" />
                    </div>
                </div>
                <div className="h-10 flex gap-x-4  my-10">
                    <article className="font-bold text-[#2e3a59] text-bodyTitleBig whitespace-nowrap">Brand Color</article>
                    <div className="h-1/2 border-b-4  border-b-[#66a14c] w-full" />
                </div>
                <div className="md:flex lg:my-4 md:gap-x-3">
                    <div className="md:w-[35%] my-2 w-full h-[25vh] justify-end  p-2 flex flex-col rounded-lg bg-[#313a54]">
                        <div className="font-semibold  text-white font-poppins lg:text-h4">Charcoal</div>
                        <div className="font-semibold text-white font-poppins lg:text-h4">#313a54</div>
                    </div>
                    <div className="md:w-[35%] w-full my-2 h-[25vh] justify-end  p-2 flex flex-col rounded-lg bg-[#66a14c]">
                        <div className="font-semibold  text-white font-poppins lg:text-h4">Palm Leaf</div>
                        <div className="font-semibold text-white font-poppins lg:text-h4">#66a14c</div>
                    </div>
                    <div className="md:w-[35%] w-full my-2 h-[25vh] justify-end  p-2 flex flex-col rounded-lg bg-[#1d2222]">
                        <div className="font-semibold  text-white font-poppins lg:text-h4">Dark Jungle Green</div>
                        <div className="font-semibold text-white font-poppins lg:text-h4">#1d2222</div>
                    </div>
                </div>

                <div className="h-10 flex gap-x-4  my-10">
                    <article className="font-bold text-[#2e3a59] text-bodyTitleBig whitespace-nowrap">Typography</article>
                    <div className="h-1/2 border-b-4  border-b-[#66a14c] w-full" />
                </div>
                <div className="flex flex-col gap-y-6">
                    <div className="font-bold  text-heading text-bodyTitleBig">Poppins</div>
                    <div className="font-medium text-heading  text-bodyTitleBig" >Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</div>
                    <div className="font-medium text-heading  text-bodyTitleBig" >0123456789</div>
                </div>
            </div>
        </section>
    );
};

export default BrandIdentity;
