import Image from "next/image";
import img from "../public/images/main.jpg";
import BlogPostPage from "../app/components/commentSection2"

export default function Home() {
  return (
    <div className="bg-[#0a0a0a]">
      <h1 className="font-semibold text-[#0dff19] text-5xl text-center">
        Smart <span className="text-[#ff3d0d]">Phone</span>{" "}
        <span className="text-[#ffd30d]">Tech</span>{" "}
        <span className="text-[#560dff]">Blog</span>
      </h1>
      <p className="text-gray-300">
        Welcome to our blog! we bring latest updates of newly released smart
        phones, Smartphones have become an essential part of our daily lives,
        transforming how we communicate, work, and entertain ourselves. These
        compact devices pack powerful capabilities, from making high-quality
        calls to providing instant access to the internet, social media, and
        countless apps. With advancements in technology, modern smartphones
        offer features like ultra-high-resolution cameras, facial recognition,
        and AI-powered assistants, making tasks more efficient and personalized.
        Whether it&pos;s for navigation, productivity, or simply staying connected,
        smartphones continue to evolve, offering new innovations like foldable
        screens, 5G connectivity, and enhanced battery life. As they become even
        more integrated into our routines, smartphones are not just
        communication tools but indispensable companions for managing both
        personal and professional aspects of our lives.
      </p>
      <div className="mt-5">
        <Image
          src={img}
          alt="main-img"
          width={750} // These width/height values are now for the aspect ratio.
          height={750}
          className="mx-auto"
        />
      </div>

      <h2 className="font-semibold text-4xl mt-5">
        <u>- The Role of AI in Smartphones</u>
      </h2>
      <p>
        AI in smartphones has revolutionized the way we interact with our
        devices, enhancing both functionality and user experience. With the
        integration of AI technologies, smartphones can now perform tasks that
        were once only possible on more powerful computing systems. Features
        like facial recognition, voice assistants (such as Siri and Google
        Assistant), and camera enhancements (like scene detection and real-time
        image optimization) are powered by AI. Machine learning algorithms
        enable smartphones to learn user behavior, offering personalized
        experiences, such as predictive text and app suggestions. Additionally,
        AI optimizes battery life by adjusting power usage based on usage
        patterns and enhances mobile security with advanced threat detection. As
        AI continues to evolve, smartphones are becoming smarter, more
        intuitive, and increasingly indispensable tools in daily life.
      </p>
      <div className="mt-10">
        <BlogPostPage params={{ id: "1" }} />
      </div>
    </div>
  );
}
