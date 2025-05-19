import React ,{createContext,useState} from "react";
import logo from '../assets/z.jpg'
import trending from '../assets/trending.png'
const con = createContext(null)
export function Fun({children})
{
  const [addcart, setAddcart] = useState([]);
  const [isLogin,setIslogin] = useState(false);
  const [istrue,setIstrue] = useState(false);

  const [ammount,setAmmount] = useState(0);
  const [name,setName] = useState("Bilal Ahmed Al Ansari");
  function adding(ele){
    const x = addcart.find(item=> item.name === ele.name);
    if(x)
    {
      alert("Already exist");
    }
    else{
       setAmmount(prev => parseFloat((prev + ele.price).toFixed(2)));
      setAddcart(prev => [...prev,ele]);
    }
  }

  function removing(ele)
  {
   
       const x = addcart.filter((e)=>{
         return e!= ele;
        })
        setAmmount(prev => parseFloat((prev - ele.price).toFixed(2)));
        setAddcart(x);
  }
  
  const men=[
  {
    name: "Levi's Men's 501 Original Fit Jeans",
    price: 59.99,
    url: "https://m.media-amazon.com/images/I/71fvrOksoPL._AC_UY1100_.jpg"
  },
  {
    name: "Calvin Klein Men's Slim Fit Dress Shirt",
    price: 39.99,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWzVNm9Lyr08fergTrKYD9L0AkSnzdd2CJHw&s"
  },
  {
    name: "Under Armour Men's Tech 2.0 Short Sleeve T-Shirt",
    price: 24.99,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT48I8Mv9ayyaLUv4lan04nHdFvjHxNEO2SjQ&s"
  },
  {
    name: "Dockers Men's Classic Fit Easy Khaki Pants",
    price: 29.99,
    url: "https://m.media-amazon.com/images/I/514YpxhnM6L.jpg"
  },
  {
    name: "Hanes Men's Pullover EcoSmart Fleece Hoodie",
    price: 18.00,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPsYwVUQIicAHxv8C35X2ECGHyFfuBm8AvOA&s"
  },
  {
    name: "Champion Men's Powerblend Fleece Crew",
    price: 22.00,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqWiz3UZQPfBF5KJ_XKag35OETPYrgUss_jQ&s"
  },
  {
    name: "Goodthreads Men's Slim-Fit Long-Sleeve Plaid Shirt",
    price: 25.00,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSULnPA3c93AOLwmwEmwYrB3DfQkyDh-dyTYg&s"
  },
  {
    name: "Amazon Essentials Men's Full-Zip Polar Fleece Jacket",
    price: 20.00,
    url: "https://m.media-amazon.com/images/I/71WmedzI08L._AC_UY1000_.jpg"
  },
  {
    name: "Columbia Men's Steens Mountain Full Zip 2.0 Fleece",
    price: 35.00,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLGmD_gBtyMNVMzKKpUHqnMX5EbTpNJCwjQ&s"
  },
  {
    name: "Levi's Men's Trucker Jacket",
    price: 59.99,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBUycp6867zgZ12R1PDEOTs3h5pPMIY8ymzg&s"
  },
  {
    name: "Wrangler Authentics Men's Classic 5-Pocket Regular Fit Jean",
    price: 22.00,
    url: "https://images-cdn.ubuy.co.in/655e53ffae8610430a303f58-wrangler-authentics-men-39-s-classic.jpg"
  },
  {
    name: "Carhartt Men's K87 Workwear Pocket Short Sleeve T-Shirt",
    price: 16.99,
    url: "https://m.media-amazon.com/images/I/717Lzg4eAhL._AC_UY1100_.jpg"
  },
  {
    name: "Gildan Men's Crew T-Shirts, Multipack",
    price: 14.00,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvumXBh6Kihm2jAgQKyL5VLGTvyV1ovD9giw&s"
  },
  {
    name: "Fruit of the Loom Men's Tag-Free Boxer Briefs, Multipack",
    price: 12.00,
    url: "https://m.media-amazon.com/images/I/71QUj8T9mTL.jpg"
  }
]
const women = [
  {
    name: "Women's Ribbed Tank Top - A New Day™",
    price: 8.00,
    url: "https://i.pinimg.com/736x/69/0a/43/690a4324af05cdf4fc0396ee06f3f6bb.jpg"
  },
  {
    name: "Women's High-Rise Drawstring Denim Beach Shorts - Universal Thread™",
    price: 14.00,
    url: "https://target.scene7.com/is/image/Target/GUEST_39f66a48-b04a-4444-a8da-8c0e0c884a6f"
  },
  {
    name: "Women's Knit Mini Ballet Dress - A New Day™",
    price: 10.50,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNiUICuLMYyn46WJCMMyDgVkgsqB6VsuH7Rg&s"
  },
  {
    name: "Women's Cloud Knit Short Sleeve Notch Collar Shirt and Shorts Pajama Gift Set - Auden™",
    price: 21.25,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShbRTHk43PHDk12f_HdN8fJuKbbZjgs-dKkQ&s"
  },
  {
    name: "Women's Slim Fit Layered Tank Top - A New Day™",
    price: 8.00,
    url: "https://i.pinimg.com/736x/34/a1/51/34a15143b21efaecd083632f3f47a924.jpg"
  },
  {
    name: "Women's Crewneck Americana Pullover Sweater - Wild Fable™",
    price: 30.00,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_SDdPZIMQDoZ3q68-scCMU-qijOf2R0JLA&s"
  },
  {
    name: "Women's Lettuce Edge 6pk Ankle Socks - A New Day™ 4-10",
    price: 10.00,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPeTO8tW-Dd1RD93hK0sjQHyEnM_aORobK4w&s"
  },
  {
    name: "Women's Woven Mid-Rise Shorts 4\" - All In Motion™",
    price: 20.00,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3hbPSZC4UVn2_uS857o_gJrFj1k3R8LU23A&s"
  },
  {
    name: "Women's Slim Fit Scoop-Neck Tank Top - Wild Fable™",
    price: 5.00,
    url: "https://target.scene7.com/is/image/Target/GUEST_d137a8f1-3e24-430d-b3f6-b2069a0d3cbe"
  },
  {
    name: "Women's Short Sleeve Ribbed T-Shirt - A New Day™",
    price: 8.00,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTzvdBgB_Bhg1h2NdCS4xM1_uxztk8E-LNyg&s"
  },
  {
    name: "Women's Rib-Knit Maxi Bodycon Dress - Universal Thread™",
    price: 14.00,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpPCaCg6ggNUjBUWQ6sKiDK5Xc8lw2kfaDUQ&s"
  },
  {
    name: "Women's Short Sleeve Relaxed Fit T-Shirt - Universal Thread™",
    price: 8.00,
    url: "https://img.shopstyle-cdn.com/sim/41/8a/418ae2fb1a603d752fefaf1f43353a2f_xlarge/women-linen-boxy-short-sleeve-t-shirt-univeral-threadtm-white-striped-xs.jpg"
  },
  {
    name: "Women's Smocked Crinkle Gauze Mini Sundress - Universal Thread™",
    price: 17.50,
    url: "https://parade.com/.image/t_share/MjA3NTcwMjE5NzgxMDcyMjUx/target-universal-thread-smocked-mini-sundress-tan.jpg"
  },
  {
    name: "Women's Everyday Soft Square Neck Support Tank Top - All In Motion™",
    price: 20.00,
    url: "https://target.scene7.com/is/image/Target/GUEST_0c0f1b3e-a578-41e8-a2e3-95a31c06aaa4"
  },
  {
    name: "Women's High-Rise Drawstring Denim Beach Shorts - Universal Thread™",
    price: 14.00,
    url: "https://m.media-amazon.com/images/I/61KH7BycCEL._AC_SL1500_.jpg"
  }
]
const kid = [
  {
    name: "Toddler Boys' Short Sleeve Graphic T-Shirt - Cat & Jack™",
    price: 5.00,
    url: "https://target.scene7.com/is/image/Target/GUEST_f5438b36-a006-44e5-af4d-bde9f0d6029a?wid=300&hei=300&fmt=pjpeg"
  },
  {
    name: "Toddler Girls' Sleeveless Woven Dress - Cat & Jack™",
    price: 10.00,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnum20l6U3hRgonhScVqiufDrjYl1napg5Zw&s"
  },
  {
    name: "Boys' Pull-On Shorts - Cat & Jack™",
    price: 8.00,
    url: "https://m.media-amazon.com/images/I/61+VNtBoyAL._AC_SL1500_.jpg"
  },
  {
    name: "Girls' Short Sleeve Graphic T-Shirt - Cat & Jack™",
    price: 6.00,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjuq3_b3R9nWP2-UHDXLUiwByKvWiE7RnixA&s"
  },
  {
    name: "Toddler Boys' Pull-On Shorts - Cat & Jack™",
    price: 7.00,
    url: "https://img.shopstyle-cdn.com/sim/be/bf/bebf9d873851755f7d5b3f399b42e706_best/toddler-boys-short-sleeve-thermal-top-and-shorts-set-cat-jacktm-blue-18m.jpg"
  },
  {
    name: "Toddler Girls' Short Sleeve T-Shirt - Cat & Jack™",
    price: 5.00,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-EA5emmfTgK3TMQTf1m4mKJtyK7STFD7HuQ&s"
  },
  {
    name: "Boys' Short Sleeve Graphic T-Shirt - Cat & Jack™",
    price: 6.00,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw5UU3NjTn25MkyLSKLchWsC5qLPbVRUvNXw&s"
  },
  {
    name: "Girls' Sleeveless Woven Dress - Cat & Jack™",
    price: 12.00,
    url: "https://target.scene7.com/is/image/Target/GUEST_5e414329-32ad-41d6-bd2c-d789a4b21689?wid=300&hei=300&fmt=pjpeg"
  },
  {
    name: "Toddler Boys' Short Sleeve T-Shirt - Cat & Jack™",
    price: 5.00,
    url: "https://target.scene7.com/is/image/Target/GUEST_6c718025-4230-45e7-98d7-24264c13bc35?wid=300&hei=300&fmt=pjpeg"
  },
  {
    name: "Toddler Girls' Pull-On Shorts - Cat & Jack™",
    price: 7.00,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhESC5Wy8quMyGYgDlRIUBpjzOhVc45nKaOA&s"
  }
]


    return (
        <con.Provider value={{logo,isLogin,name,setName,setIslogin,trending,men,women,kid,addcart,adding,removing,ammount,setAmmount,setAddcart,istrue,setIstrue}}>
            {children}
        </con.Provider>
    )
} 

export default con;