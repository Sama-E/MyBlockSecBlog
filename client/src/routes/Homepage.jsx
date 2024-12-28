import React from 'react'
import { Link } from "react-router-dom";
import Image from '../components/Image';
import MainCategories from '../components/Homepage/MainCategories';
import FeaturedPosts from '../components/Homepage/FeaturedPosts';
import PostList from '../components/Homepage/PostList';


const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>•</span>
        <span className="text-black-800">Blogs and Articles</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Learn, Discover, Secure: Unlocking Blockchain Potential. 
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Exploring Blockchain Horizons, Discovering Secure Solutions.
          </p>
        </div>
        {/* animated button */}
        <Link to="write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            // className="text-lg tracking-widest animate-spin animatedButton"
            className="text-lg tracking-widest"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 55,55 0 1,1 150,0 a 55,55 0 1,1 -150,0"
            />
            <text className="text-base">
              <textPath href="#circlePath" startOffset="0%">
                think about it.
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                write about it.
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-black-800 rounded-full flex items-center justify-center">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <polyline points="9 6 18 6 18 15" />
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg> */}
            <Image src="icons8-blockoff.png" alt="Write" w={50} h={50} />
          </button>
        </Link>
      </div>
      {/* CATEGORIES */}
      <MainCategories />

      {/* FEATURED POSTS */}
      <FeaturedPosts />

      {/* POST LIST */}
      <div className="">
        <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
        <PostList />
      </div>

    </div>
  )
}

export default Homepage