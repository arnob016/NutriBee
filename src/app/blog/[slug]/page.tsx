import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Bookmark, Share2 } from "lucide-react";
import { posts } from "~/data/posts";
import { NewsletterSignup } from "~/components/ui/NewsletterSignup";
import { BeeMascot } from "~/components/ui/BeeMascot";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-honey-50 to-honey-100 hc-bg py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-honey-700 hover:text-honey-900 font-semibold text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to The Hive
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <span className="bg-honey-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-1 text-charcoal-400 text-xs">
              <Clock size={12} />
              {post.buzzTime} buzz
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-charcoal-900 leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-charcoal-600 text-lg leading-relaxed mb-6">{post.excerpt}</p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 hex bg-honey-400 flex items-center justify-center">
                <BeeMascot size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-charcoal-900">Dr. Maya Sullivan, RD</p>
                <p className="text-xs text-charcoal-400">{post.publishedAt}</p>
              </div>
            </div>
            <div className="ml-auto flex gap-2">
              <button className="p-2 rounded-xl bg-white border border-honey-100 text-charcoal-400 hover:text-honey-600 transition-colors" aria-label="Bookmark">
                <Bookmark size={16} />
              </button>
              <button className="p-2 rounded-xl bg-white border border-honey-100 text-charcoal-400 hover:text-honey-600 transition-colors" aria-label="Share">
                <Share2 size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article image */}
      {post.image && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-4">
          <div className="rounded-3xl overflow-hidden h-56 sm:h-72">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      {/* Article body placeholder */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose prose-lg max-w-none text-charcoal-700 leading-relaxed space-y-6">
          <p className="text-xl font-semibold text-charcoal-800">{post.excerpt}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h2 className="text-2xl font-black text-charcoal-900">The Science Behind It</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="bg-honey-50 border border-honey-200 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <div className="bee-float shrink-0">
                <BeeMascot size={40} mood="thinking" />
              </div>
              <div>
                <p className="font-bold text-honey-700 text-sm mb-1">🐝 The Bee says:</p>
                <p className="text-charcoal-700 text-sm">
                  Small, consistent changes beat drastic overhauls every single time. Pick one thing from this article and try it for two weeks.
                </p>
              </div>
            </div>
          </div>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <h2 className="text-2xl font-black text-charcoal-900">Practical Take-Aways</h2>
          <ul className="space-y-2 pl-0 list-none">
            {["Start with one small change", "Track your progress for 2 weeks", "Don&apos;t aim for perfect, aim for consistent", "Come back and let me know how it goes!"].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="w-5 h-5 hex bg-honey-400 flex items-center justify-center shrink-0 mt-0.5 text-white text-xs font-bold">✓</div>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-10">
          {post.tags.map((tag) => (
            <span key={tag} className="bg-honey-100 text-honey-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-honey-200">
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-honey-50 py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-black text-charcoal-900 mb-6">More from {post.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link key={r.id} href={`/blog/${r.slug}`} className="bg-white rounded-2xl p-4 border border-honey-100 hover:border-honey-300 hover:shadow-sm transition-all">
                  <span className="text-2xl block mb-2">{r.emoji}</span>
                  <p className="text-xs font-bold text-honey-600 mb-1">{r.category}</p>
                  <h3 className="font-bold text-charcoal-800 text-sm leading-snug line-clamp-2">{r.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <NewsletterSignup />
    </>
  );
}
