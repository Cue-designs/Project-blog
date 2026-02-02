import { Link } from "react-router-dom"
const About = ()=>  {
  
  return (
   <section className="font-roboto">
       <div className="bg-white px-2">
        <strong>
          <h2 className=" ml-3 p-2 text-[2rem]">About CJ's Blog</h2>
        </strong>
        <p className="p-2 text-[1.23rem] ">I am to inspire others to pursue their coding dreams </p>
        <p className=" p-2 text-[.7rem">Welcome to my personal blog where I share my experience learning to code and the eciting adventures of building a tech start up </p>
        <p>Through my blog, the goal is to inspire people to chase their coding dreams.I believe that with dertermination anyone can break through</p>
        <div className="flex justify-center w-full">
          <Link to="signup"className="rounded-md px-4 py-2 border-[1px] ml-2 flex my-4 justify-center hover:text-yellow-600 w-[18rem]  ">Join the journey</Link>
        </div>
        <picture className="rounded-md ">
          <img src="src\assets\coding.png" alt="" className="w-full h-full object-cover block"/>
        </picture>

      </div> 
      <article className="text-white px-2 mt-8">
        <h3 className="mb-8 text-xl font-bold italic text-center">Explore, Learn, Grow</h3>
        <p>Embark on a captivating journey through the wolrd of coding, Tech stack and enterprenu. Join me as i share insights,memorires and personal reflections on the challeges and triumphs of building something from scratch</p>
        <p className="mt-16">Experience the energy and excitement of the tech world as we explore the depths of coding and start up development for this final Year project </p>
        <Link to="/login"className="rounded-md text-black bg-white px-6 py-2 block my-4 text-center">Join Now</Link>
      </article>
      <article className="bg-white text-black-400">
        <div className="px-4 pt-16">
          <h4 className="font-bold text-3xl ">Mission</h4>
          <p className="font-semibold italic text-xl mt-4">Empowering innovators</p>
          <p className="mt-4">This blog is dedicated to empowering aspiring coders and tech enthusiasts by sharing knowledge, experiences, and resources to help them succeed in their coding journey and entrepreneurial endeavors.</p>
          <p className="my-4 pb-8">Through contnet, I thrive to offer a unique blend of insights, guidance and motivation to fuel the entrepreneurial sprirt within each reader. Join us on this jorney of growth, learning, and sucess in the tech industry </p>
        </div> 
      </article>
      <article className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2  gap-6 mt-8 px-2 mb-8 md:grid-cols-3">
        <picture className="hidden object-cover h-80 overflow-hidden rounded-md sm:block md:col-span-2"><img src="src\assets\student.jpg" alt="" className="h-full w-full object-cover " /></picture>
       <div className="bg-purple-500  flex flex-col items-center justify-start rounded-lg  ">
            <img src="src\assets\ray.png " alt="" className="  h-30 m-0 cols-span-1 block md:h-25 lg:-mt-2" /> 
            <p className="text-white px-4 md:text-center my-2 py-4 text-center sm:text-2xl md:text-xl ">Unleash your imagination in a world of endless possibilities, innovation and creativity</p>
          </div>
      </article>

   </section>
  )
}

export default About
