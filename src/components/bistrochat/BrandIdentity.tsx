import { FC } from "react";
import { Bistrochat } from "../../icons";


const BrandIdentity: FC = () => {
    return (
        <section className="p-8">
            <div className="maincontainer">
                <div>
                    <div className="font-bold text-[#FFFFFF] text-h2 text-center lg:text-left">Brand Identity</div>
                    <div className="font-poppins font-semibold lg:text-li mt-4 text-center lg:text-left text-[#E5E5E5]">Bistrochat is Hong Kong&apos;s best restaurant search, booking and loyalty app... for dynamic professionals.</div>
                </div>
                <div className="h-10 flex gap-x-4  my-10">
                    <div className="font-bold text-bodyTitleBig text-[#E5E5E5]" >Logo</div>
                    <div className="h-1/2 border-b-4  border-b-[#4e0d53] w-[93%]" />
                </div>
                <div className="lg:w-3/4 m-auto">
                    <div className="flex gap-x-6">
                        <div className="w-1/2   flex justify-center items-center flex-col gap-3 rounded-lg bg-[#5f1d61f1]">
                            <Bistrochat className="w-[25%] rounded-lg bg-white" />
                            <div className="font-semibold text-white font-poppins text-center text-caption md:text-h4 lg:text-h3">Bistrochat</div>
                        </div>
                        <div className="w-1/2">
                            <img src="images/bistrochat/card.png" alt="bistrochat Card" className="rounded-lg" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <img src="images/bistrochat/icons.jpg" alt="Bistrochat icons" className="rounded-large" />
                    </div>
                </div>
                <div className="h-10 flex gap-x-4  my-10">
                    <article className="font-bold text-bodyTitleBig whitespace-nowrap text-[#E5E5E5]">Brand Color</article>
                    <div className="h-1/2 border-b-4  border-b-[#4e0d53] w-full" />
                </div>
                <div className="md:flex lg:my-4 md:gap-x-3">
                    <div className="md:w-[35%] my-2 w-full h-[25vh] justify-end  p-2 flex flex-col rounded-lg bg-[#4e0d53]">
                        <div className="font-semibold font-poppins lg:text-h4 text-[#E5E5E5]">American Purple</div>
                        <div className="font-semibold text-white font-poppins lg:text-h4">#4e0d53</div>
                    </div>
                    <div className="md:w-[35%] w-full my-2 h-[25vh] justify-end  p-2 flex flex-col rounded-lg bg-[#161616]">
                        <div className="font-semibold  text-white font-poppins lg:text-h4">Chinese Black</div>
                        <div className="font-semibold text-white font-poppins lg:text-h4">#161616</div>
                    </div>
                    <div className="md:w-[35%] w-full my-2 h-[25vh] justify-end  p-2 flex flex-col rounded-lg bg-[#4a7cec]">
                        <div className="font-semibold  text-white font-poppins lg:text-h4">Blueberry</div>
                        <div className="font-semibold text-white font-poppins lg:text-h4">#4a7cec</div>
                    </div>
                </div>

                <div className="h-10 flex gap-x-4  my-10">
                    <article className="font-bold text-bodyTitleBig whitespace-nowrap text-[#E5E5E5]">Typography</article>
                    <div className="h-1/2 border-b-4  border-b-[#4e0d53] w-full" />
                </div>
                <div className="flex flex-col gap-y-6">
                    <div className="font-bold text-bodyTitleBig text-[#E5E5E5]">Poppins</div>
                    <div className="font-medium text-[#E5E5E5]  text-bodyTitleBig" >Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</div>
                    <div className="text-[#E5E5E5] font-medium  text-bodyTitleBig" >0123456789</div>
                </div>
            </div>
        </section>
    );
};

export default BrandIdentity;
