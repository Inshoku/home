import Navibar from "./NaviBar"
import "./style.css";
import  React,{useState} from 'react'

class Second extends React.Component
{
state = {
    fav:true,
    menu:false,

}
    render()
    {

    var Fav = e =>
        {
            this.setState({fav:!this.state.fav});
            this.setState({menu:!this.state.menu});
        }
    const x=this.state.fav;
    const y=this.state.menu;
    return (
        <div>
            <div>
                <Navibar/>
            </div>
            <div class="bg-menu flex items-center h-[100vh] mx-auto">
                <blockquote class="font-serif mx-4 p-4 text-center text-white md:p-8 mb-32">
                    <p class="font-bold italic text-3xl ml-24 mt-20">
                      &ldquo;Food is not rational.
                    <br />
                    Food is culture, habit, 
                      <br />
                      craving and identity&rdquo;
                    </p>
                </blockquote>
            </div>
            <div className=" pt-4 ">
                <div className="flex gap-x-3 text-center absolute right-0">
                    <div className="border-1 border-black mr-12">
                        <button className="border-2 border-black rounded-md py-1 px-12 text-xl font-semibold hover:text-white/80 hover:bg-black/80 transition duration-200 active:text-white active:bg-black" onClick={Fav}>{x?'Menu':'Favorite'}</button>
                    </div>
                </div>
            {
            x &&(<div className="p-4 pb-2 ">       
                <div className="m-5 text-center"> 
                    <p className="text-3xl mr-52 font-bold">Our</p>
                    <p className="text-5xl text-red-700 font-semibold italic font-arapey">Favorite</p>
                    <p className="text-3xl ml-[240px] font-bold">Menu</p>
                </div>

                <div className="grid gap-y-8 grid-cols-3 my-4 ml-24">
                    <img className="rounded-md h-[40vh] hover:scale-110 transition duration-300" src="src/assets/img/gallery01.png" alt="" />
                    <img className="rounded-md h-[40vh] hover:scale-110 transition duration-300" src="src/assets/img/gallery02.png" alt="" />
                    <img className="rounded-md h-[40vh] hover:scale-110 transition duration-300" src="src/assets/img/gallery03.png" alt="" />
                    <img className="rounded-md h-[40vh] hover:scale-110 transition duration-300" src="src/assets/img/gallery04.png" alt="" />
                    <img className="rounded-md h-[40vh] hover:scale-110 transition duration-300" src="src/assets/img/gallery05.png" alt="" />
                    <img className="rounded-md h-[40vh] hover:scale-110 transition duration-300" src="src/assets/img/gallery06.png" alt="" />
                    
                </div>
            </div>)
}
{
            y &&(<div>
            <div className="m-5">
                <div className="m-5 text-center"> 
                <p className="text-3xl mr-36 font-bold ">Our</p>
                    <p className="text-5xl text-blue-500 font-semibold italic font-arapey">Food</p>
                    <p className="text-3xl ml-48 font-bold">Menu</p>
                </div>
                <div>
                    <div className="flex flex-wrap gap-x-20 justify-center">
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300 ">
                            <img src="src/assets/img/Sushi01.png" class=" h-[30vh]" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-blue-500 rounded-xl p-2 mx-2 font-arapey font-semibold ">Sushi</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Makizushi</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey ">IDR.49K</p>
                                </div>
                                <hr className="mx-2 border-gray-300 py-1"/>
                                <p className="font-arapey font-bold">Maki rolls can take many forms, whether
                                <br />  small or large, hand-rolled formed in a
                                <br /> makisu, but they always feature sushi
                                <br /> rice and toppings wrapped together in
                                <br />  toasted nori seaweed.  
                                </p>
                            </div>
                        </div>
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300 ">
                            <img className="h-[30vh]" src="src/assets/img/Sushi02.png" alt="" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-blue-500 rounded-xl p-2 mx-2 font-arapey font-semibold">Sushi</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Temakizushi</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey">IDR.49K</p>
                                </div>
                                <hr className="mx-2 border-gray-300 py-1"/>
                                <p className="font-arapey font-bold"> The form of temaki sushi is different  
                                <br /> from maki sushi. This sushi is in 
                                <br /> the form of a nori cone with rice,
                                <br /> fish, vegetables, or other fillings inside.
                                </p>
                            </div>
                        </div>
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300">
                            <img className="h-[30vh]" src="src/assets/img/sushi03.png" alt="" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-blue-500 rounded-xl p-2 mx-2 font-arapey font-semibold">Sushi</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Oshizushi</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey">IDR.49K</p>
                                </div>
                                <hr className="mx-2 border-gray-300 py-1"/>
                                <p className="font-arapey font-bold"> Unlike most sushi, this oshizushi is  
                                <br />made by pressing. So that the shape of  
                                <br />the sushi tends to be square and solid.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-x-20 justify-center mt-10">
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300">
                            <img className="h-[30vh]" src="src/assets/img/ramen01.png" alt="" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-blue-500 rounded-xl p-2 mx-2 font-arapey font-semibold">Ramen</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Tonkotsu Ramen</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey">IDR.39K</p>
                                </div>
                                <hr className="mx-2 border-gray-300 py-1"/>
                                <p className="font-arapey font-bold"> A ramen dish originating from Fukuoka, 
                                <br /> The hallmark of this ramen is white with 
                                <br /> a thick texture. Tonkotsu is much loved 
                                <br /> because of its savory and delicious 
                                <br /> taste.
                                </p>
                            </div>
                        </div>
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300">
                            <img className="h-[30vh]" src="src/assets/img/ramen02.png" alt="" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-blue-500 rounded-xl p-2 mx-2 font-arapey font-semibold">Ramen</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Shoyu Ramen</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey">IDR.39K</p>
                                </div>
                                <hr className="mx-2 border-gray-300 py-1"/>
                                <p className="font-arapey font-bold"> Shoyu Ramen Shoyu is ramen with 
                                <br /> Japanese soy sauce that is used as 
                                <br />a condiment in ramen broth.
                                </p>
                            </div>
                        </div>
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300">
                            <img className="h-[30vh]" src="src/assets/img/ramen03.png" alt="" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-blue-500 rounded-xl p-2 mx-2 font-arapey font-semibold">Ramen</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Shio Ramen</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey">IDR.39K</p>
                                </div>
                                <hr className="mx-2 border-gray-300 py-1"/>
                                <p className="font-arapey font-bold">This is the most traditional type of . 
                                <br />ramen Its appearance is easy to 
                                <br />recognize, because the broth is the   
                                <br />clearestwhen compared to other types
                                <br /> of ramen.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-x-20 justify-center mt-10">
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300">
                            <img className="h-[30vh]" src="src/assets/img/ebi01.png" alt="" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-blue-500 rounded-xl p-2 mx-2 font-arapey font-semibold">Side Dish</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Ebi Tempura</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey">IDR.29K</p>
                                </div>
                                <hr className="mx-2 border-gray-300 py-1"/>
                                <p className="font-arapey font-bold">one of the most popular varieties of 
                                <br /> Japanese Sushi due to its rich taste and
                                <br /> unique texture of the meat.
                                </p>
                            </div>
                        </div>
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300">
                            <img className="h-[30vh]" src="src/assets/img/tako01.png" alt="" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-blue-500 rounded-xl p-2 mx-2 font-arapey font-semibold">Side Dish</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Takoyaki</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey">IDR.29K</p>
                                </div>
                                <hr className="mx-2 border-gray-300 py-1"/>
                                <p className="font-arapey font-bold"> in the form of small balls with a diameter 
                                <br /> of 3-5 cm made from flour dough 
                                <br /> filled with pieces of octopus inside.
                                </p>
                            </div>
                        </div>
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300">
                            <img className="h-[30vh]" src="src/assets/img/okonomi01.png" alt="" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-blue-500 rounded-xl p-2 mx-2 font-arapey font-semibold">Side Dish</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Okonomiyaki</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey">IDR.29K</p>
                                </div>
                                <hr className="mx-2 border-gray-300 py-1"/>
                                <p className="font-arapey font-bold">Japanese food made from wheat flour 
                                <br /> diluted with water or dashi, added 
                                <br />cabbage, eggs, seafood and fried.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-x-20 justify-center mt-10">
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300">
                            <img className="h-[30vh]" src="src/assets/img/dango01.png" alt="" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-blue-500 rounded-xl p-2 mx-2 font-arapey font-semibold">Side Dish</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Dango</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey">IDR.19K</p>
                                </div>
                                <hr className="mx-2 border-gray-300 py-1"/>
                                <p className="font-arapey font-bold">They are round like small balls, made
                                <br /> from rice flour, and are cooked by 
                                <br />steaming or boiling in water.
                                </p>
                            </div>
                        </div>
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300">
                            <img className="h-[30vh]" src="src/assets/img/dango02.png" alt="" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-blue-500 rounded-xl p-2 mx-2 font-arapey font-semibold">Side Dish</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Yaki Dango</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey">IDR.19K</p>
                                </div>
                                <hr className="mx-2 border-gray-300 py-1"/>
                                <p className="font-arapey font-bold"> yaki dango is a dango that is heated 
                                <br /> after being flavored. Yaki dango
                                <br />  seasoned with soy sauce and sesame.
                                </p>
                            </div>
                        </div>
                        
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300">
                            <img className="h-[30vh]" src="src/assets/img/miso01.png" alt="" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-blue-500 rounded-xl p-2 mx-2 font-arapey font-semibold">Side Dish</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Miso Soup</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey">IDR.19K</p>
                                </div>
                                <hr className="mx-2 border-gray-300 py-1"/>
                                <p className="font-arapey font-bold"> soup with a dashi base plus the soup 
                                <br /> contents in the form of a small
                                <br /> amount of seafood or vegetables,
                                <br /> and topped with miso to taste.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-x-20 justify-center mt-10">
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300">
                            <img className="h-[30vh]" src="src/assets/img/suki01.png" alt="" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-blue-500 rounded-xl p-2 mx-2 font-arapey font-semibold">Big Portion</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Sukiyaki</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey">IDR.79K</p>
                                </div>
                                <hr className="mx-2 border-gray-300 py-1"/>
                                <p className="font-arapey font-bold">thin slices of beef, vegetables, and 
                                <br /> tofu in an iron pot cooked 
                                <br /> on the dining table by boiling.
                                </p>
                            </div>
                        </div>
                        
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300">
                            <img className="h-[30vh]" src="src/assets/img/yaki01.png" alt="" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-blue-500 rounded-xl p-2 mx-2 font-arapey font-semibold">Big Portion</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Yakiniku</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey">IDR.79K</p>
                                </div>
                                <hr className="mx-2 border-gray-300 py-1"/>
                                <p className="font-arapey font-bold">Roast your own fresh beef over 
                                <br /> the fire with the yakiniku sauce dipping.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-5 mt-20">
                <div className="m-5 text-center"> 
                <p className="text-3xl mr-40 font-bold ">Our</p>
                    <p className="text-5xl text-green-500 font-semibold italic font-arapey">Drink</p>
                    <p className="text-3xl ml-52 font-bold">Menu</p>
                </div>
                <div>
                    <div className="flex flex-wrap gap-x-20 justify-center">
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300">
                            <img className="h-[30vh]" src="src/assets/img/tea01.png" alt="" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-green-500 rounded-xl p-2 mx-2 font-arapey font-semibold">Non-Alcohol</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Matcha</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey">IDR.19K</p>
                                </div>
                                <hr className="mx-2 border-gray-300 py-1"/>
                                <p className="font-arapey font-bold">Green tea is in the form of 
                                <br /> a powder made from grinding
                                <br />  green tea until it is fine like flour. 
                                </p>
                            </div>
                        </div>
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300">
                            <img className="h-[30vh]" src="src/assets/img/tea02.png" alt="" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-green-500 rounded-xl p-2 mx-2 font-arapey font-semibold">Non-Alcohol</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Uroncha</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey">IDR.19K</p>
                                </div>
                                <hr className="mx-2 border-gray-300 py-1"/>
                                <p className="font-arapey font-bold">Even though green tea, black tea, 
                                <br /> and uroncha are made from the same
                                <br />  tea leaves, the differences in the 
                                <br />oxidation process give uroncha its strong
                                <br /> aroma making it a great palate cleanser.
                                </p>
                            </div>
                        </div>
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300">
                            <img className="h-[30vh]" src="src/assets/img/tea03.png" alt="" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-green-500 rounded-xl p-2 mx-2 font-arapey font-semibold">Non-Alcohol</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Royal Milk Tea</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey">IDR.19K</p>
                                </div>
                                <hr className="mx-2 border-gray-300 py-1"/>
                                <p className="font-arapey font-bold">While traditional milk tea is made from 
                                <br /> tea and milk, royal milk tea gets its
                                <br /> elegant black  touch by steeping  
                                <br />high-quality Darjeeling or Assam tea
                                <br /> leaves. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-x-20 justify-center mt-10">
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300">
                            <img className="h-[30vh]" src="src/assets/img/tea04.png" alt="" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-green-500 rounded-xl p-2 mx-2 font-arapey font-semibold">Non-Alcohol</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Kombu-cha</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey">IDR.19K</p>
                                </div>
                                <hr className="mx-2 border-gray-300 py-1"/>
                                <p className="font-arapey font-bold">A simple Japanese tea with centuries 
                                <br /> of history made from dry kombu (kelp) 
                                <br /> and hot water. It has a deep umami and
                                <br /> slightly salty taste and is caffeine free.
                                </p>
                            </div>
                        </div>
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300">
                            <img className="h-[30vh]" src="src/assets/img/tea05.png" alt="" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-green-500 rounded-xl p-2 mx-2 font-arapey font-semibold">Non-Alcohol</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Ofukucha</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey">IDR.19K</p>
                                </div>
                                <hr className="mx-2 border-gray-300 py-1"/>
                                <p className="font-arapey font-bold">Ofukucha is made from green tea 
                                <br /> mixed with floral flavours, pickled
                                <br /> plums and dried kelp like Kombu-cha.
                                </p>
                            </div>
                        </div>
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300">
                            <img className="h-[30vh]" src="src/assets/img/soda01.png" alt="" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-green-500 rounded-xl p-2 mx-2 font-arapey font-semibold">Non-Alcohol</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Melon Soda</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey">IDR.19K</p>
                                </div>
                                <hr className="mx-2 border-gray-300 py-1"/>
                                <p className="font-arapey font-bold">Melon soda served as an ice cream 
                                <br /> float is refreshing during the hot
                                <br /> summers
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-x-20 justify-center mt-10">
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300">
                            <img className="h-[30vh]" src="src/assets/img/alc01.png" alt="" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-green-500 rounded-xl p-2 mx-2 font-arapey font-semibold">Alcohol</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Sake</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey">IDR.19K</p>
                                </div>
                                <hr className="mx-2 border-gray-300 py-1"/>
                                <p className="font-arapey font-bold">Sake or "nihonshu" is a typical 
                                <br /> Japanese drink. Made from boiling rice,
                                <br /> sake has been enjoyed in Japan for 
                                <br /> thousands of years 
                                </p>
                            </div>
                        </div>
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300">
                            <img className="h-[30vh]" src="src/assets/img/alc02.png" alt="" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-green-500 rounded-xl p-2 mx-2 font-arapey font-semibold">Alcohol</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Shochu</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey">IDR.19K</p>
                                </div>
                                <hr className="mx-2 border-gray-300 py-1"/>
                                <p className="font-arapey font-bold">shochu is distilled alcohol similar to 
                                <br /> vodka,  which is made using ingredients, 
                                <br /> such  as rice, barley, sweet potatoes,
                                <br /> or sugarcane.
                                </p>
                            </div>
                        </div>
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300">
                            <img className="h-[30vh]" src="src/assets/img/alc03.png" alt="" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-green-500 rounded-xl p-2 mx-2 font-arapey font-semibold">Alcohol</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Umeshu</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey">IDR.19K</p>
                                </div>
                                <hr className="mx-2 border-gray-300 py-1"/>
                                <p className="font-arapey font-bold">Umeshu sweet and sour plum wine— 
                                <br /> is best served chilled. Although the
                                <br />  alcohol content reaches 10-15%,
                                <br /> umeshu  is very  easy to drink.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-x-20 justify-center mt-10">
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300">
                            <img className="h-[30vh]" src="src/assets/img/alc04.png" alt="" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-green-500 rounded-xl p-2 mx-2 font-arapey font-semibold">Alcohol</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Happoshu</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey">IDR.19K</p>
                                </div>
                                <hr className="mx-2 border-gray-300 py-1"/>
                                <p className="font-arapey font-bold">containing not more than 67% malt,
                                <br /> corn, soybeans and starch, which
                                <br /> gives Happoshu a lot lighter taste
                                <br /> of beer. 
                                </p>
                            </div>
                        </div>
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300">
                            <img className="h-[30vh]" src="src/assets/img/alc05.png" alt="" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-green-500 rounded-xl p-2 mx-2 font-arapey font-semibold">Alcohol</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Amazake</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey">IDR.19K</p>
                                </div>
                                <hr className="mx-2 border-gray-300 py-1"/>
                                <p className="font-arapey font-bold">Amazake is a low-alcohol sake variant 
                                <br /> with a thick, sweet and milky 
                                <br />texture similar to oatmeal.
                                </p>
                            </div>
                        </div>
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300">
                            <img className="h-[30vh]" src="src/assets/img/alc06.png" alt="" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-green-500 rounded-xl p-2 mx-2 font-arapey font-semibold">Alcohol</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Momoshu</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey">IDR.19K</p>
                                </div>
                                <hr className="mx-2 border-gray-300 py-1"/>
                                <p className="font-arapey font-bold">You can enjoy the sweet freshness of
                                <br />  a peach and a touch of nutty or 
                                <br />herbaceous without being overwhelmed 
                                <br /> by the tangy taste of booze!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-x-20 justify-center mt-10">
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300">
                            <img className="h-[30vh]" src="src/assets/img/water01.png" alt="" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-green-500 rounded-xl p-2 mx-2 font-arapey font-semibold">Water</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Aqua Mineral 
                                    <br /> Water 600 ml</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey">IDR.9K</p>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-xl p-1 hover:scale-110 transition duration-300">
                            <img className="h-[30vh]" src="src/assets/img/ice01.png" alt="" />
                            <div className="mx-2">
                                <div className="mt-4">
                                    <span className="bg-green-500 rounded-xl p-2 mx-2 font-arapey font-semibold">Ice</span>
                                </div>
                                <div className="flex mt-3 justify-between">
                                    <p className="text-black text-xl font-bold font-arapey ">Ice Cube</p>
                                    <p className="font-semibold text-[#1b3415] text-base font-arapey">IDR.1K</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>)
    }
    </div>
            <footer class="bg-gray-900 text-gray-100 py-4">
                <nav class="flex justify-center">
                    <span class="text-sm bottom-2 left-5">© Copyright 2023 <a href="" class="hover:underline">Inshoku</a> - All Rights Reserved.</span>
                </nav>
            </footer>
        </div>
    )
}
}

export default Second