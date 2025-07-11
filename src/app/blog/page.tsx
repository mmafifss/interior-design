import Navbar from "@/components/navbar/Navbar";
import { MdSearch, MdAccessTime } from "react-icons/md";
import { RiArrowRightLine } from "react-icons/ri";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  readingTime: number;
  coverImage: string;
}

export default async function Page() {
  const mockBlogs: BlogPost[] = Array.from({ length: 8 }, (_, index) => ({
    id: `blog-${index + 1}`,
    title: `Membangun Aplikasi Web Modern dengan Next.js dan Tailwind CSS ${
      index + 1
    }`,
    excerpt:
      "Pelajari bagaimana membangun aplikasi web modern menggunakan Next.js dan Tailwind CSS untuk hasil yang optimal dan performa terbaik.",
    slug: `membangun-aplikasi-web-modern-${index + 1}`,
    readingTime: Math.floor(Math.random() * 10) + 3,
    coverImage: "/api/placeholder/400/240",
  }));

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Blog & Articles
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Temukan artikel terbaru tentang teknologi, programming, dan
              pengembangan web
            </p>

            {/* Search Form */}
            <form className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <MdSearch className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="search"
                  id="search-blog"
                  className="block w-full pl-12 pr-32 py-4 text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-gray-200 focus:border-gray-400 placeholder-gray-500 transition-all duration-200"
                  placeholder="Search articles, topics..."
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-6 text-white transition-all duration-200"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Blog Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Latest Articles
            </h2>
            <div className="flex items-center gap-4">
              <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white text-gray-700 focus:ring-2 focus:ring-gray-200 focus:border-gray-400">
                <option>Latest</option>
                <option>Most Popular</option>
                <option>Most Read</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockBlogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group"
              >
                <div>
                  <img
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    src={blog.coverImage}
                    alt={blog.title}
                  />
                </div>

                <div className="p-5">
                  <h3 className="mb-3 text-lg font-bold tracking-tight text-gray-900 line-clamp-2 group-hover:text-gray-700 transition-colors">
                    {blog.title}
                  </h3>

                  <p className="mb-4 text-sm text-gray-600 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <MdAccessTime className="w-3 h-3" />
                        <span>{blog.readingTime} min</span>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${blog.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 transition-all duration-200 group"
                    >
                      Read more
                      <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-2">
              <button className="px-4 py-2 text-sm text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                Previous
              </button>
              {[1, 2, 3, "...", 8].map((page, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 text-sm rounded-lg ${
                    page === 1
                      ? "text-white bg-gray-900 hover:bg-gray-800"
                      : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
}
