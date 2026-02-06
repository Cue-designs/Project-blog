import { Link } from "react-router-dom"
import Form from "../components/Form"
const About = ()=>  {
  
  return (
   <section className="font-roboto">
       <div className=" px-2 bg-green-50  ">
        <strong>
          <h2 className=" ml-3 p-2 text-[2rem]">About CJ's Blog</h2>
        </strong>
        <p className="p-2 text-[1.23rem] ">I am to inspire others to pursue their coding dreams </p>
        <p className=" p-2 text-[.7rem">Welcome to my personal blog where I share my experience learning to code and the eciting adventures of building a tech start up </p>
        <p>Through my blog, the goal is to inspire people to chase their coding dreams.I believe that with dertermination anyone can break through</p>
        <div className="flex justify-center w-full">
          <Link to="signup"className="rounded-md px-4 py-2 border-[1px] ml-2 flex my-4 justify-center hover:text-yellow-600 w-[18rem]  ">Join the journey</Link>
        </div>
        <picture className="rounded-md   ">
          <img src="src\assets\coding.png" alt="" className="w-full h-full object-cover block  rounded-2xl" />
        </picture>

      </div> 
      <article className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2  gap-6 mt-8 px-2 mb-8 md:grid-cols-3">
        <picture className="hidden object-cover h-80 overflow-hidden rounded-md sm:block md:col-span-2"><img src="src\assets\student.jpg" alt="" className="h-full w-full object-cover " /></picture>
       <div className="bg-purple-500  flex flex-col items-center justify-start rounded-lg  ">
            <img src="src\assets\ray.png " alt="" className="  h-30 m-0 cols-span-1 block md:h-25 lg:-mt-2" /> 
            <p className="text-white px-4 md:text-center my-2 py-4 text-center sm:text-2xl md:text-xl ">Unleash your imagination in a world of endless possibilities, innovation and creativity</p>
          </div>
      </article>
      <Form />
   </section>
  )
}

export default About
