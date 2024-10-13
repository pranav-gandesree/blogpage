import { ArrowRight } from 'lucide-react'
import blog1 from "../assets/blog1.png"
import blog2 from "../assets/blog2.jpeg"
import blog3 from "../assets/blog3.jpeg"


const blogPosts = [
  {
    id: '1',
    image: blog1,
    category: 'NEWS',
    title: 'Exclusive reveal: itel to unveil A60s, Indias First 8GB* RAM Smartphone for Less Than..',
    link: '#',
  },
  {
    id: '2',
    image: blog2,
    category: 'BLOG',
    title: 'Imagine a day with uninterrupted HiFi Sound.',
    link: '#',
  },
  {
    id: '3',
    image: blog3,
    category: 'BLOG',
    title: 'Unleash the Power of Memory: itel S23 Redefines Performance',
    link: '#',
  },
]

export default function MoreBlogs() {
  return (
    <section className="py-12 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">More Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white font-medium overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <span className="text-sm font-semibold text-gray-500">{post.category}</span>
                <h5 className="text-lg font-semibold mt-2 mb-4">{post.title}</h5>
                <a
                  href={post.link}
                  className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors"
                >
                  VIEW
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}