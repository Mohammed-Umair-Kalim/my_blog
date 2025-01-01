import { BlogPost } from "../types/type";

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Evolution and Impact of Smartphones",
    author: "Prof. Umair",
    date: "15-02-2024",
    excerpt:
      "Discussing the ethical considerations and challenges in the development and deployment of AI systems...",
    image: "/images/p4.jpg",
    content: `<p> Smartphones are versatile, multifunctional devices that combine the features of traditional mobile phones with advanced computing capabilities. They run on sophisticated operating systems like Android and iOS, offering a wide range of applications, internet connectivity, and multimedia capabilities. With touchscreens, powerful processors, and high-resolution cameras, smartphones serve as tools for communication, entertainment, productivity, and social media interaction. They support a variety of services, including email, messaging, video conferencing, navigation, and banking. Additionally, smartphones often include features such as biometric security, artificial intelligence, and augmented reality, making them indispensable in modern life. Their constant evolution, with improved performance, design, and functionality, has made them central to everyday tasks for billions of people around the world.</p>
    `,
    comments: [],
  }
 
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}
