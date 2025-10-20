import { useState } from "react"

import Img from "../assets/media/image/hero.png"

const ContactInfo = () => {
   const [FormData, setFormData] = useState({
     name : "",
     email : "",
     message: "",
   })

   const handlechange =   (e) =>  {
      const {name,value} = e.target ;
      setFormData({...FormData, [name] : value})
   }
    
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", FormData)
    alert("message dilever sucessfully")
    setFormData({
        name : "",
     email : "",
     message: "",
    })
  }

  return (
   <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16 py-12  overflow-x-hidden ">
    <div className="w-full max-w-5xl bg-secondarybg backdrop-blur-md rounded-2xl shadow-xl flex flex-col-reverse lg:flex-row items-center justify-between border border-secondarylite">
        <div className="w-full lg:w-1/2 p-8 sm:p-10 space-y-6">
            <h2 className="text-4xl uppercase pb-4">contact us</h2>
            <p className=" text-secondarylite text-sm text-base lg:text-md">please give us a your honest product review</p>

            <form action=""
            className=" flex-col gap-y-20"
            onSubmit={(e)=> {
                handleSubmit(e)
            }}
            >
                <input type="text" name="name"
                 id="name"
                value={FormData.name}
               onChange={(e)=>{
                handlechange(e)
            }}
                placeholder="enter your name" 
                className="w-full border-b border-complement bg-transparent outline-none my-4 "
               required
               />



                <input type="email" name="email"
                 id="email"
                 value={FormData.email}
                  onChange={(e)=>{
                handlechange(e)
            }}
                placeholder="enter your email adress"
                className="w-full border-b border-complement bg-transparent outline-none my-4  "
                 required
                />


                <textarea name="message" id="message"
                 onChange={(e)=>{
                handlechange(e)
            }}
                value={FormData.message}
                placeholder="enter your message"
                 className="w-full border-b border-complement bg-transparent outline-none py-2 h-20 resize-none"
                 required
                 >  
                 
                 </textarea>


                 <button type="submit" className="bg-complement py-3 my-4 rounded-lg px-12 text-primary">SEND IT</button>
            </form>
        </div>
        <div className="w-full h-full flex justify-center items-center p-6 md:flex-1 ">
          <img src={Img} alt="" 
              className="w-full"/>
        </div>
    </div>
   </section>
  )
}

export default ContactInfo
