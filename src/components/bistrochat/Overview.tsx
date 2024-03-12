import { FC } from "react";


const OverView: FC = () => {
    return (
        <section>
            <div className="maincontainer overflow-hidden">
                <div className="font-bold text-[#4e0d53] text-h2 text-center lg:text-left">Overview</div>
                <div className="font-poppins font-semibold lg:text-li mt-6 leading-8  text-center lg:text-left">
                    <p>
                        Bistrochat is a convenient restaurant booking and loyalty program designed for users in Hong Kong. With this app, you can easily search for restaurants based on location, cuisine, or specific dishes on their menus. You can also check ratings, order by price, and even find restaurants recommended by your friends.
                    </p>
                    <br />
                    <p>
                        Booking a table is hassle-free; you can do it via chat from anywhere, whether you're in the MTR or an open space, eliminating the need for phone calls. The app also offers rewards such as stamps, cashback, and discounts, making dining out more enjoyable.
                    </p>
                    <br />
                    <p>
                        Plus, Bistrochat supports multiple languages, including English, Traditional Chinese, and Simplified Chinese, and even translates your chats with restaurant staff. Enjoy the ease of booking and bon appétit!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OverView;
