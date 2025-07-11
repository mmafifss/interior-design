import Navbar from "@/components/navbar/Navbar";
import {
  MdDateRange,
  MdAccessTime,
  MdPerson,
  MdVisibility,
  MdShare,
  MdMenuBook,
  MdHome,
  MdArrowForward,
} from "react-icons/md";
import { FaTwitter, FaLinkedin, FaCopy } from "react-icons/fa";

interface PageProps {
  params: Promise<{ slug: string }>;
}

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishedAt: string;
  readingTime: number;
  views: number;
  tags: string[];
  coverImage: string;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const searchBlog = async (slug: string): Promise<BlogPost | null> => {
    // Simulasi data blog untuk demo
    const mockBlog: BlogPost = {
      id: "1",
      title: "Membangun Aplikasi Web Modern dengan Next.js dan Tailwind CSS",
      content: `
        <p class="mb-6 text-gray-700 leading-relaxed">
          Dalam era digital yang terus berkembang, pembuatan aplikasi web yang modern dan responsif menjadi kebutuhan utama bagi para developer. Next.js, sebagai framework React yang powerful, memberikan solusi lengkap untuk membangun aplikasi web yang cepat dan SEO-friendly.
        </p>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Mengapa Memilih Next.js?</h2>
        <p class="mb-6 text-gray-700 leading-relaxed">
          Next.js menawarkan berbagai fitur unggulan seperti Server-Side Rendering (SSR), Static Site Generation (SSG), dan App Router yang memungkinkan pengembangan aplikasi yang lebih efisien. Dengan dukungan TypeScript yang terintegrasi, developer dapat menulis kode yang lebih aman dan maintainable.
        </p>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Keunggulan Tailwind CSS</h2>
        <p class="mb-6 text-gray-700 leading-relaxed">
          Tailwind CSS sebagai utility-first framework memberikan fleksibilitas tinggi dalam styling. Dengan pendekatan atomic design, kita dapat membangun UI yang konsisten tanpa menulis CSS custom yang berlebihan. Sistem design tokens yang komprehensif memudahkan maintenance dan konsistensi visual.
        </p>
        
        <blockquote class="border-l-4 border-gray-900 pl-6 my-8 italic text-gray-600">
          "Kombinasi Next.js dan Tailwind CSS memberikan pengalaman developer yang luar biasa dengan hasil yang professional dan performa yang optimal."
        </blockquote>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Best Practices untuk Optimasi</h2>
        <p class="mb-6 text-gray-700 leading-relaxed">
          Dalam implementasi, penting untuk memperhatikan optimasi performa melalui code splitting, lazy loading, dan penggunaan Next.js Image component. Struktur folder yang terorganisir dan penggunaan custom hooks akan meningkatkan maintainability kode.
        </p>
        
        <p class="mb-6 text-gray-700 leading-relaxed">
          Dengan menggabungkan kedua teknologi ini, developer dapat menciptakan aplikasi web yang tidak hanya indah secara visual, tetapi juga cepat, SEO-friendly, dan mudah dimaintain. Investasi waktu untuk mempelajari kedua framework ini akan memberikan return yang signifikan dalam jangka panjang.
        </p>
      `,
      excerpt:
        "Pelajari bagaimana membangun aplikasi web modern menggunakan Next.js dan Tailwind CSS untuk hasil yang optimal dan performa terbaik.",
      author: {
        name: "Ahmad Fadli",
        avatar: "/api/placeholder/64/64",
        bio: "Full-stack Developer dengan pengalaman 5+ tahun dalam React dan Node.js. Passionate tentang clean code dan user experience.",
      },
      publishedAt: "2024-12-15",
      readingTime: 8,
      views: 1245,
      tags: ["Next.js", "Tailwind CSS", "React", "Web Development", "Frontend"],
      coverImage: "/api/placeholder/800/400",
    };

    return mockBlog;
  };

  const slugDecoded = decodeURIComponent(slug);
  const result = await searchBlog(slugDecoded);

  if (!result) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Blog Tidak Ditemukan
            </h1>
            <p className="text-gray-600">
              Artikel yang Anda cari tidak dapat ditemukan.
            </p>
          </div>
        </main>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
              <a href="/" className="hover:text-gray-900 transition-colors">
                Home
              </a>
              <span>/</span>
              <a href="/blog" className="hover:text-gray-900 transition-colors">
                Blog
              </a>
              <span>/</span>
              <span className="text-gray-900">Article</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {result.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {result.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <MdDateRange className="w-4 h-4" />
                <span>{formatDate(result.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <MdAccessTime className="w-4 h-4" />
                <span>{result.readingTime} min read</span>
              </div>
              <div className="flex items-center gap-2">
                <MdVisibility className="w-4 h-4" />
                <span>{result.views.toLocaleString()} views</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {result.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cover Image */}
      <div className="container mx-auto px-4 -mt-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img
              src={result.coverImage}
              alt={result.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Article Content */}
            <article className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <div
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: result.content }}
                />
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MdShare className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-600 font-medium">
                      Share this article
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                      <FaTwitter className="w-4 h-4" />
                      Twitter
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                      <FaLinkedin className="w-4 h-4" />
                      LinkedIn
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                      <FaCopy className="w-4 h-4" />
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Author Card */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={result.author.avatar}
                      alt={result.author.name}
                      className="w-16 h-16 rounded-full bg-gray-200"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {result.author.name}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MdPerson className="w-3 h-3" />
                        <span>Author</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {result.author.bio}
                  </p>
                </div>

                {/* Table of Contents */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <MdMenuBook className="w-5 h-5 text-gray-600" />
                    <h3 className="font-semibold text-gray-900">
                      Table of Contents
                    </h3>
                  </div>
                  <nav className="space-y-2">
                    <a
                      href="#"
                      className="block text-sm text-gray-600 hover:text-gray-900 transition-colors py-1"
                    >
                      Mengapa Memilih Next.js?
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-gray-600 hover:text-gray-900 transition-colors py-1"
                    >
                      Keunggulan Tailwind CSS
                    </a>
                    <a
                      href="#"
                      className="block text-sm text-gray-600 hover:text-gray-900 transition-colors py-1"
                    >
                      Best Practices untuk Optimasi
                    </a>
                  </nav>
                </div>

                {/* Reading Progress */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">
                      Reading Progress
                    </span>
                    <span className="text-sm text-gray-500">0%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-900 h-2 rounded-full w-0 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Related Articles */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Artikel Terkait
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <article
                  key={item}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      Tips Optimasi Performance untuk Aplikasi Next.js
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      Pelajari berbagai teknik optimasi untuk meningkatkan
                      performa aplikasi Next.js Anda.
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>5 min read</span>
                      <span>Dec 10, 2024</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
