import { FC } from "react";
import { ChatToPotato } from "../../icons";


const BrandIdentity: FC = () => {
    return (
        <section>
            <div className="maincontainer">
                <div>
                    <div className="font-bold text-[#fea130]  text-h2 text-center lg:text-left">Brand Identity</div>
                    <div className="font-poppins font-semibold lg:text-li mt-4 text-center lg:text-left ">Chat To Potato, A talking potato helps solve your problems and gives advice on lonely thoughts while keeping your identity private, just like a potato.</div>
                </div>
                <div className="h-10 flex gap-x-4  my-10">
                    <div className="font-bold text-[#fea130] text-bodyTitleBig" >Logo</div>
                    <div className="h-1/2 border-b-4  border-b-[#fea130] w-[93%]" />
                </div>
                <div className="lg:w-3/4 m-auto">
                    <div className="flex gap-x-6">
                        <div className="w-1/2   flex justify-center items-center flex-col gap-3 rounded-lg bg-[#629fe3]">
                            <ChatToPotato className="w-[25%]" />
                            <div className="font-semibold text-white font-poppins text-center text-caption md:text-h4 lg:text-h3">Chat to Potato</div>
                        </div>
                        <div className="w-1/2">
                            <img src="images/chattopotato/cardimage.jpg" alt="" className="rounded-lg" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <img src="images/chattopotato/url.jpg" alt="" className=" rounded-lg" />
                    </div>
                </div>
                <div className="h-10 flex gap-x-4  my-10">
                    <article className="font-bold text-[#fea130] text-bodyTitleBig whitespace-nowrap">Brand Color</article>
                    <div className="h-1/2 border-b-4  border-b-[#fea130] w-full" />
                </div>
                <div className="md:flex lg:my-4 md:gap-x-3">
                    <div className="md:w-[35%] my-2 w-full h-[25vh] justify-end  p-2 flex flex-col rounded-lg bg-[#5e95e0]">
                        <div className="font-semibold  text-white font-poppins lg:text-h4">United Nations Blue</div>
                        <div className="font-semibold text-white font-poppins lg:text-h4">#5e95e0</div>
                    </div>
                    <div className="md:w-[35%] w-full my-2 h-[25vh] justify-end  p-2 flex flex-col rounded-lg bg-[#fea130]">
                        <div className="font-semibold  text-white font-poppins lg:text-h4">Deep Saffron</div>
                        <div className="font-semibold text-white font-poppins lg:text-h4">#fea130</div>
                    </div>
                    <div className="md:w-[35%] w-full my-2 h-[25vh] justify-end  p-2 flex flex-col rounded-lg bg-[#007db9]">
                        <div className="font-semibold  text-white font-poppins lg:text-h4">Star Command Blue</div>
                        <div className="font-semibold text-white font-poppins lg:text-h4">#007db9</div>
                    </div>
                </div>

                <div className="h-10 flex gap-x-4  my-10">
                    <article className="font-bold text-[#fea130] text-bodyTitleBig whitespace-nowrap">Typography</article>
                    <div className="h-1/2 border-b-4  border-b-[#fea130] w-full" />
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
