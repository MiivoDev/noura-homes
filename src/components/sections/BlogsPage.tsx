import { blogPosts } from '../../data/blogs';

type BlogsPageProps = {
  activeTag?: string;
  currentPage?: number;
};

function humanizeTag(tag: string) {
  return tag
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

const POSTS_PER_PAGE = 15;

export default function BlogsPage({ activeTag, currentPage = 1 }: BlogsPageProps) {
  const normalizedTag = activeTag?.trim().toLowerCase();
  const filteredPosts = normalizedTag
    ? blogPosts.filter((post) => post.tags.includes(normalizedTag))
    : blogPosts;

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const startIndex = (safePage - 1) * POSTS_PER_PAGE;
  const pagePosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  const [featuredPost, ...remainingPosts] = pagePosts;
  const pageHref = (page: number) => {
    const base = page === 1 ? '/blogs' : `/blogs/page/${page}`;
    return normalizedTag ? `${base}?tag=${encodeURIComponent(normalizedTag)}` : base;
  };

  return (
    <div className="bg-background text-primary">
      <section className="relative h-[620px] md:h-[760px] overflow-hidden">
        <img
          src="https://nourahomes.com/wp-content/themes/noura-homes-theme/assets/images/blogs-hero.webp"
          alt="Noura Homes blogs"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] items-center justify-center px-8 lg:px-16">
          <div className="text-center text-white">
            <p className="text-[13px] uppercase tracking-[0.12em]">Insights and Ideas</p>
            <h1 className="mt-3 font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">Blogs</h1>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1600px] px-8 lg:px-16">
          {normalizedTag ? (
            <p className="mb-8 text-[15px] text-primary/70">
              Showing posts tagged with <span className="font-semibold text-primary">{humanizeTag(normalizedTag)}</span>
            </p>
          ) : null}

          {featuredPost ? (
            <article className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[18px] border border-primary/10 bg-white shadow-[0_12px_32px_rgba(12,27,54,0.08)]">
              <a href={`/blogs/${featuredPost.slug}`} className="block bg-[#f5f7fb]">
                <img src={featuredPost.image} alt={featuredPost.title} className="h-full w-full object-cover min-h-[280px]" />
              </a>
              <div className="p-8 lg:p-10">
                <p className="text-[13px] uppercase tracking-[0.08em] text-primary/70">{featuredPost.date}</p>
                <h2 className="mt-3 font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">{featuredPost.title}</h2>
                <p className="mt-4 text-[16px] leading-[1.7] text-primary/85">{featuredPost.excerpt}</p>
                <a
                  href={`/blogs/${featuredPost.slug}`}
                  className="mt-6 inline-flex items-center border border-primary bg-primary px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-white hover:bg-primary/90 transition-colors"
                >
                  Read Article
                </a>
              </div>
            </article>
          ) : (
            <div className="rounded-[16px] border border-primary/15 bg-white p-8 text-center text-primary/75">
              No blogs found for this filter.
            </div>
          )}

          {remainingPosts.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {remainingPosts.map((post) => (
                <article key={post.slug} className="overflow-hidden rounded-[16px] border border-primary/10 bg-white">
                  <a href={`/blogs/${post.slug}`} className="block bg-[#f5f7fb]">
                    <img src={post.image} alt={post.title} className="h-[220px] w-full object-cover" loading="lazy" />
                  </a>
                  <div className="p-6">
                    <p className="text-[12px] uppercase tracking-[0.08em] text-primary/65">{post.date}</p>
                    <h3 className="mt-2 text-[22px] leading-[1.3]">{post.title}</h3>
                    <p className="mt-3 text-[15px] leading-[1.7] text-primary/80">{post.excerpt}</p>
                    <a href={`/blogs/${post.slug}`} className="mt-4 inline-flex text-[14px] font-semibold text-secondary hover:text-primary">
                      Read more
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : null}

          {totalPages > 1 ? (
            <nav className="mt-12 flex items-center justify-center gap-2" aria-label="Blogs pagination">
              <a
                href={pageHref(Math.max(1, safePage - 1))}
                className={`inline-flex h-10 items-center px-4 text-[14px] border ${
                  safePage === 1
                    ? 'pointer-events-none border-primary/20 text-primary/40'
                    : 'border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                Previous
              </a>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <a
                  key={page}
                  href={pageHref(page)}
                  aria-current={page === safePage ? 'page' : undefined}
                  className={`inline-flex h-10 min-w-10 items-center justify-center border text-[14px] ${
                    page === safePage
                      ? 'border-primary bg-primary text-white'
                      : 'border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  {page}
                </a>
              ))}
              <a
                href={pageHref(Math.min(totalPages, safePage + 1))}
                className={`inline-flex h-10 items-center px-4 text-[14px] border ${
                  safePage === totalPages
                    ? 'pointer-events-none border-primary/20 text-primary/40'
                    : 'border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                Next
              </a>
            </nav>
          ) : null}
        </div>
      </section>
    </div>
  );
}
