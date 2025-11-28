import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Facebook, Twitter, Linkedin, BookOpen, Sparkles, TrendingUp } from 'lucide-react';
import { getBlogPostBySlug, getRelatedPosts } from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  useEffect(() => {
    if (post) {
      window.scrollTo(0, 0);
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post.id);
  const shareUrl = window.location.href;
  const shareTitle = post.title;

  const handleShare = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    };
    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/hero-background.avif"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/85 to-pink-900/90"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Back Button */}
              <Link 
                to="/blog" 
                className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-all duration-300 group"
              >
                <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Back to Blog</span>
              </Link>

              {/* Category Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold mb-6 border border-white/30 shadow-lg">
                <Sparkles size={14} className="mr-2" />
                {post.category}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
                {post.title}
              </h1>
              
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm md:text-base">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <User size={16} />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Calendar size={16} />
                  <span className="font-medium">{post.date}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Clock size={16} />
                  <span className="font-medium">{post.readTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative pt-8 md:pt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-64 md:h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-8">
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-8"
                >
                  <div className="prose prose-lg max-w-none 
                    prose-headings:font-bold prose-headings:text-gray-900 prose-headings:mt-8 prose-headings:mb-4
                    prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                    prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                    prose-a:text-indigo-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-gray-900 prose-strong:font-bold
                    prose-ul:text-gray-700 prose-ul:my-6 prose-ul:space-y-2
                    prose-ol:text-gray-700 prose-ol:my-6 prose-ol:space-y-2
                    prose-li:marker:text-indigo-600
                    prose-blockquote:border-l-4 prose-blockquote:border-indigo-600 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600
                    prose-code:text-indigo-600 prose-code:bg-indigo-50 prose-code:px-2 prose-code:py-1 prose-code:rounded
                    prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                  </div>
                </motion.article>

                {/* Tags Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 mb-8 border border-indigo-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Tag size={20} className="text-indigo-600" />
                    <h3 className="text-lg font-bold text-gray-900">Tags</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {post.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-4 py-2 bg-white text-indigo-600 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Share Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Share2 size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Share this article</h3>
                        <p className="text-sm text-gray-600">Help others discover this content</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleShare('facebook')}
                        className="group w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                        aria-label="Share on Facebook"
                      >
                        <Facebook size={20} />
                      </button>
                      <button
                        onClick={() => handleShare('twitter')}
                        className="group w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center text-white hover:bg-sky-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                        aria-label="Share on Twitter"
                      >
                        <Twitter size={20} />
                      </button>
                      <button
                        onClick={() => handleShare('linkedin')}
                        className="group w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center text-white hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                        aria-label="Share on LinkedIn"
                      >
                        <Linkedin size={20} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-4">
                <div className="lg:sticky lg:top-24 space-y-6">
                  {/* CTA Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-6 md:p-8 text-white shadow-2xl relative overflow-hidden"
                  >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                        <Sparkles size={28} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">Need Expert Guidance?</h3>
                      <p className="text-white/90 mb-6 text-sm leading-relaxed">
                        Get personalized consultation for your study abroad journey from our experienced advisors.
                      </p>
                      <Link
                        to="/lets-start-your-journey"
                        className="block w-full bg-white text-indigo-600 py-3.5 rounded-xl font-bold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        Contact Us Now
                      </Link>
                    </div>
                  </motion.div>

                  {/* Quick Stats Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <TrendingUp size={20} className="text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Article Info</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Reading Time</span>
                        <span className="text-sm font-semibold text-gray-900">{post.readTime}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Category</span>
                        <span className="text-sm font-semibold text-indigo-600">{post.category}</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-sm text-gray-600">Published</span>
                        <span className="text-sm font-semibold text-gray-900">{post.date}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Categories Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <BookOpen size={20} className="text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Categories</h3>
                    </div>
                    <div className="space-y-2">
                      {['Study Abroad', 'Study Visa', 'University Selection', 'Application Tips'].map((cat, idx) => (
                        <Link
                          key={idx}
                          to="/blog"
                          className="block px-4 py-2.5 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-300 text-sm font-medium"
                        >
                          {cat}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </aside>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-16 pt-16 border-t-2 border-gray-200"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-8 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Related Articles</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost, idx) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="group"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                      >
                        <div className="h-48 overflow-hidden relative">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-indigo-600 rounded-full text-xs font-bold">
                              {relatedPost.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-xs text-gray-500">
                              <Clock size={14} className="mr-1" />
                              {relatedPost.readTime}
                            </div>
                            <span className="text-indigo-600 font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center">
                              Read More <ArrowLeft size={14} className="ml-1 rotate-180" />
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
