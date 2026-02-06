import Blog from "./Blog"
import { Link } from "react-router-dom"

const Home = ()=>  {
  
  return (
   <main className="mt-10 mx-4 lg:mx-4 bg-black md:mx-3 sm:mx-2">
      <section className=" lg:ml-16 xl:ml-20">
        <h2 className="text-3xl sm:text-xl ml-2 md:text-2xl md:text-2xl ml-4 lg:text-3xl  w-full leading-tight tracking-wider text-yellow-50  ">Start your coding jornery: Exploring the Programming</h2>
        <figure className="grid h-70 grid-cols-1 sm:grid-cols-3 grid-rows-1 lg:grid-cols-4 grid-rows-2 h-70 gap-6 mt-6 " >
          <picture  className=" hidden rounded-md sm:block col-span-2 row-span-2 lg:col-span-2 ">
            <img src="src\assets\laptop.png" alt="" className="w-full h-full object-cover block" />
          </picture>
          <picture className="hidden rounded-md lg:block row-span-2 ">
            <img src="src\assets\motherboard.jpg" alt="" className="w-full h-full object-cover block" />
          </picture>
          <div className="bg-green-600 row-span-2 flex flex-col items-center justify-start rounded-lg  ">
            <img src="src\assets\ray.png " alt="" className=" h-30 m-0 cols-span-1 block md:h-25 lg:-mt-2" /> 
            <p className="text-white px-4 md:text-center -mt-4 ">Join me to see how i tackled most programming problems  and joined the Tech space</p>
            <Link to={'/login'} className="text-black bg-white px-4 py-2 flex rounded-md mt-4">Explore more</Link>
          </div>
        </figure>
      </section>
  
      <section>
        <div className="mb-8 lg:mb-12 xl:mb-12 p-6 lg:p-10 xl:p-12">
          <h2 className="text-2xl lg:text-2xl xl:text-3xl mb-4 lg:mb-6 text-yellow-50">Get in touch</h2>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed max-w-full lg:max-w-4xl text-yellow-50">Whether you're a beginner or an experienced developer, and ready to collaborate with others in the tech community, this is the place to start your journey. Feel free to reach out</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 items-start">
          
          <picture className="w-full h-full overflow-hidden rounded-lg min-h-80 hidden md:block">
           <source srcSet="/src/assets/coding.png" type="image/png" />
           <img src="/src/assets/coding.png" alt="" className="w-full h-full object-cover block" />
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
      </section>
    

   </main>
  )
}

export default Home
