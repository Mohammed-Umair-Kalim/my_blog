"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import p1 from "../../public/images/p1.jpg";
import p2 from "../../public/images/p2.jpg";
import p3 from "../../public/images/p3.jpg";

import logo from "../../public/images/u logo.jpg";

import BlogPostPage from "../components/commentSection2";

const Blog = () => {
  return (
    <div className=" min-h-screen flex flex-col bg-[#0a0a0a]">
      <section
        className="relative bg-cover bg-center h-[60vh] flex flex-col"
        style={{
          backgroundImage: "url('/images/u logo.jpg')", // Update with correct path
        }}
      >
        {/* Overlay for slight blur effect */}
        <div className="absolute inset-0 bg-white opacity-50"></div>

        {/* Centered Content */}
        <div className="relative z-10 flex-grow flex items-center justify-center text-center">
          <div className="text-black">
            {/* Logo or Icon */}
            <div className="ml-4">
              <span className="text-gold text-3xl font-bold">
                <Image src={logo} alt="logo" width={80} height={80} />
              </span>{" "}
              {/* Replace with the logo */}
            </div>

            {/* Title */}
            <h1 className="text-5xl font-semibold mb-2">Blog</h1>

            {/* Breadcrumbs */}
            <nav className="text-sm text-gray-950">
              <span className="font-semibold">
                <Link href="/">Home</Link>
              </span>{" "}
              &nbsp; &#62; &nbsp;
              <span>Blog</span>
            </nav>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Blog Section */}
        <div className="lg:col-span-3 space-y-12">
          {/* Blog Post 1 */}
          <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
            <div className="flex flex-col space-y-6">
              <Image
                src={p1}
                alt="Handmade pieces"
                className="w-full rounded-md object-cover"
              />
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>👤 Admin</span>
                  <span>📅 14 Oct 2022</span>
                  <span>📱 SmartPhones</span>
                </div>
                <h2 className="text-3xl font-bold">
                  Going all-in with unique design
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Going all-in with unique design means embracing creativity and
                  originality to create something truly distinctive. It involves
                  pushing boundaries, thinking outside the box, and rejecting
                  conventional norms in favor of innovative solutions that stand
                  out. This approach can be seen in various fields, from
                  architecture and fashion to graphic design and product
                  development. By prioritizing individuality and authenticity,
                  designers have the opportunity to leave a lasting impression
                  and inspire others. However, taking this bold step also
                  requires confidence, as it may not always conform to popular
                  trends or expectations. Ultimately, going all-in with unique
                  design allows for the creation of impactful, memorable work
                  that resonates deeply with audiences.
                </p>
                <Link href="#" className="text-blue-600 hover:underline">
                  Read more
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
            <div className="flex flex-col space-y-6">
              <Image
                src={p2}
                alt="Handmade pieces"
                className="w-full rounded-md object-cover"
              />
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>👤 Admin</span>
                  <span>📅 14 Oct 2022</span>
                  <span>📱 SmartPhones</span>
                </div>
                <h2 className="text-3xl font-bold">
                  Exploring new ways of tech advancement
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Exploring new ways of tech advancement involves constantly
                  pushing the limits of innovation to create groundbreaking
                  solutions that transform industries and everyday life. It
                  requires a mindset of curiosity, collaboration, and
                  experimentation, as technology evolves rapidly and presents
                  endless opportunities for improvement. Whether through
                  artificial intelligence, renewable energy, or quantum
                  computing, advancements in tech promise to address global
                  challenges and enhance human capabilities. By embracing these
                  emerging technologies, we can unlock new potentials for
                  efficiency, sustainability, and connectivity. However, it also
                  comes with the responsibility of considering ethical
                  implications and ensuring that progress benefits society as a
                  whole, fostering a balance between innovation and its broader
                  impact.
                </p>
                <Link href="#" className="text-blue-600 hover:underline">
                  Read more
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
            <div className="flex flex-col space-y-6">
              <Image
                src={p3}
                alt="Handmade pieces"
                className="w-full rounded-md object-cover"
              />
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>👤 Admin</span>
                  <span>📅 14 Oct 2022</span>
                  <span>📱 SmartPhones</span>
                </div>
                <h2 className="text-3xl font-bold">
                  Great design that took time to make
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Great design that took time to make is a result of patience,
                  thoughtful planning, and meticulous attention to detail. It
                  reflects a process where creativity is nurtured, challenges
                  are overcome, and every element is carefully considered. The
                  value of such designs lies not just in their aesthetic appeal,
                  but in the depth of thought and craftsmanship behind them.
                  Whether it&apos;s a piece of architecture, a product, or a work of
                  art, taking the time to refine and perfect ensures that the
                  final outcome is meaningful, functional, and timeless. In a
                  world that often values speed, great design that is allowed to
                  evolve over time stands out for its lasting impact and ability
                  to resonate with its audience on a deeper level.
                </p>
                <Link href="#" className="text-blue-600 hover:underline">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Search Box */}
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Flagship <span className="text-gray-400">(2)</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Mid-Range Phones <span className="text-gray-400">(8)</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Budget Phones <span className="text-gray-400">(7)</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Phablets <span className="text-gray-400">(1)</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Foldables <span className="text-gray-400">(6)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <Image
                  src="/images/p1.jpg"
                  alt="Recent Post 1"
                  width={65}
                  height={65}
                  className=" rounded-md object-cover"
                />
                <div>
                  <Link
                    href="#"
                    className="block font-medium hover:text-blue-600"
                  >
                    Going all-in with unique design
                  </Link>
                  <span className="text-sm text-gray-500">{new Date().getDate()} {new Date().getMonth() + 1} {new Date().getFullYear()}</span>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/images/p2.jpg"
                  width={65}
                  height={65}
                  alt="Recent Post 2"
                  className="rounded-md object-cover"
                />
                <div>
                  <Link
                    href="#"
                    className="block font-medium hover:text-blue-600"
                  >
                    Exploring new ways of tech advancement
                  </Link>
                  <span className="text-sm text-gray-500">{new Date().getDate()} {new Date().getMonth() + 1} {new Date().getFullYear()}</span>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/images/p3.jpg"
                  width={65}
                  height={65}
                  alt="Recent Post 3"
                  className=" rounded-md object-cover"
                />
                <div>
                  <Link
                    href="#"
                    className="block font-medium hover:text-blue-600"
                  >
                    Great design that took time to make
                  </Link>
                  <span className="text-sm text-gray-500">{new Date().getDate()} {new Date().getMonth() + 1} {new Date().getFullYear()}</span>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/images/p1.jpg"
                  width={65}
                  height={65}
                  alt="Recent Post 4"
                  className=" rounded-md object-cover"
                />
                <div>
                  <Link
                    href="#"
                    className="block font-medium hover:text-blue-600"
                  >
                    Latest Phones
                  </Link>
                  <span className="text-sm text-gray-500">{new Date().getDate()} {new Date().getMonth() + 1} {new Date().getFullYear()}</span>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/images/u logo.jpg"
                  width={65}
                  height={65}
                  alt="Recent Post 4"
                  className=" rounded-md object-cover"
                />
                <div>
                  <Link
                    href="#"
                    className="block font-medium hover:text-blue-600"
                  >
                    Colorful Super O-LED Screen
                  </Link>
                  <span className="text-sm text-gray-500">{new Date().getDate()} {new Date().getMonth() + 1} {new Date().getFullYear()}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-8 space-x-4 text-black">
        <button className="px-3 py-1 bg-white rounded">1</button>
        <button className="px-3 py-1 bg-white  rounded">2</button>
        <button className="px-3 py-1 bg-white  rounded">3</button>
        <button className="px-4 py-1 bg-white  rounded">Next</button>
      </div>
      <div className="mt-10">
        <BlogPostPage params={{ id: "1" }} />
      </div>
    </div>
  );
};

export default Blog;
