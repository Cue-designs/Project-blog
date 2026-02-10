 import { Link } from "react-router-dom";
import student from '../assets/student.jpg'; 
import ray from '../assets/ray.png'; 
import Form from "../components/Form";
import RightAnimationForward from "../components/RightAnimationForward";

const About = () => {
  return (
    <section className="font-roboto">
      <div className="px-2 relative h-[60vh] w-full overflow-hidden"> 
        <img
          src={student}
          alt="Background description"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/45 text-white p-4 overflow-y-auto"> 
          <strong>
            <RightAnimationForward>
              <h2 className="ml-3 p-2 text-[2rem]">About CJ's Blog</h2>
            </RightAnimationForward>
          </strong>
          <p className="p-2 text-[1.23rem]">I aim to inspire others to pursue their coding dreams</p>
          <p className="p-2 text-[0.7rem]">
            Welcome to my personal blog where I share my experience learning to code and the exciting adventures of building a tech startup
          </p>
          <p className="p-2">
            Through my blog, the goal is to inspire people to chase their coding dreams. I believe that with determination anyone can break through.
          </p>
          <div className="flex justify-center w-full">
            <Link
              to="/signup"
              className="rounded-md px-4 py-2 border-[1px] ml-2 flex my-4 justify-center hover:text-yellow-600 w-[18rem]"
            >
              Join the journey
            </Link>
          </div>
        </div>
      </div>
      <article className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 px-2 mb-8 md:grid-cols-3"> 
        <picture className="hidden object-cover h-80 overflow-hidden rounded-md sm:block md:col-span-2">
          <img src={student} alt="Student illustration" className="h-full w-full object-cover" />
        </picture>
        <div className="bg-purple-500 flex flex-col items-center justify-start rounded-lg">
          <img
            src={ray}
            alt="Ray illustration"
            className="h-[120px] m-0 block md:h-[100px] lg:-mt-2" 
          />
          <p className="text-white px-4 md:text-center my-2 py-4 text-center sm:text-2xl md:text-xl">
            Unleash your imagination in a world of endless possibilities, innovation and creativity
          </p>
        </div>
      </article>
      <Form />
    </section>
  );
};

export default About;

