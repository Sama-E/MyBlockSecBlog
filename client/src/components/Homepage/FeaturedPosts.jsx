import React from 'react'
import { Link } from 'react-router-dom'
import { format } from "timeago.js";

import Image from '../Image'

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        {/* {posts[0].img && <Image
          src={posts[0].img}
          className="rounded-3xl object-cover"
          w="895"
        />} */}
        <Image src="featured1.jpeg" className="rounded-3xl object-cover" />
        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg">Infrastructure</Link>
          <span className="text-gray-500"> 2 days ago</span>
          {/* <Link className="text-blue-800 lg:text-lg">{posts[0].category}</Link>
          <span className="text-gray-500">{format(posts[0].createdAt)}</span> */}
        </div>
        {/* title */}
        {/* <Link
          to={posts[0].slug}
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          {posts[0].title}
        </Link> */}
        <Link
          to="/"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Post
        </Link>
      </div>

      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="featured2.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to="/infrastructure" className="text-grey-800">Infrastructure</Link>
              <span className="text-grey-500 text-sm"> 2 days</span>
            </div>
            {/* title */}
            <Link to="/test" className="text-base sm:text-lg md: text-2xl lg:text-xl xl:text-2xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
          </div>
        </div>
        {/* third */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="featured2.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to="/infrastructure" className="text-grey-800">Infrastructure</Link>
              <span className="text-grey-500 text-sm"> 2 days</span>
            </div>
            {/* title */}
            <Link to="/test" className="text-base sm:text-lg md: text-2xl lg:text-xl xl:text-2xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
          </div>
        </div>
        {/* fourth */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <Image
            src="featured2.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to="/infrastructure" className="text-grey-800">Infrastructure</Link>
              <span className="text-grey-500 text-sm"> 2 days</span>
            </div>
            {/* title */}
            <Link to="/test" className="text-base sm:text-lg md: text-2xl lg:text-xl xl:text-2xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FeaturedPosts