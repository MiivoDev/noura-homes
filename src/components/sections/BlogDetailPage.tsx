import { blogPosts, getBlogBySlug } from '../../data/blogs';

type BlogDetailPageProps = {
  slug: string;
};

export default function BlogDetailPage({ slug }: BlogDetailPageProps) {
  const post = getBlogBySlug(slug);

  if (!post) {
    return (
      <div className="bg-background py-28">
        <div className="mx-auto max-w-[920px] px-8 text-center text-primary">
          <h1 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">Blog not found</h1>
          <p className="mt-4 text-[16px] leading-[1.7] text-primary/80">
            This article may have moved. You can browse all available posts from the blogs page.
          </p>
          <a
            href="/blogs"
            className="mt-8 inline-flex items-center border border-primary bg-primary px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-white hover:bg-primary/90 transition-colors"
          >
            Back to Blogs
          </a>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <div className="bg-background text-primary">
      <section className="relative h-[520px] md:h-[680px] overflow-hidden">
        <img src={post.image} alt={post.title} className="absolute inset-0 h-full w-full object-cover" />
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-16">
          <article className="rounded-[16px] border border-primary/10 bg-white p-7 md:p-10">
            <header className="border-b border-primary/10 pb-6">
              <p className="text-[13px] uppercase tracking-[0.08em] text-primary/65">{post.date}</p>
              <h1 className="mt-3 font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-primary">{post.title}</h1>
            </header>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-b border-primary/10 pb-6 text-[14px] text-primary/75">
              <p>By {post.author}</p>
            </div>
            <div className="mt-7 space-y-4 text-[17px] leading-[1.8] text-primary/90">
              {post.contentBlocks.map((block, index) =>
                block.type === 'heading' ? (
                  <h2 key={`${block.text}-${index}`} className="pt-3 font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-primary">
                    {block.text}
                  </h2>
                ) : (
                  <p key={`${block.text}-${index}`}>{block.text}</p>
                )
              )}
            </div>

            <a
              href="/blogs"
              className="mt-10 inline-flex items-center border border-primary bg-primary px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-white hover:bg-primary/90 transition-colors"
            >
              Back to Blogs
            </a>
          </article>

          <aside className="rounded-[16px] border border-primary/10 bg-white p-6">
            <h3 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">Related Posts</h3>
            <div className="mt-5 space-y-5">
              {relatedPosts.map((item) => (
                <a key={item.slug} href={`/blogs/${item.slug}`} className="block border-b border-primary/10 pb-5 last:border-b-0">
                  <img src={item.image} alt={item.title} className="h-[140px] w-full rounded-[10px] object-cover" loading="lazy" />
                  <p className="mt-3 text-[12px] uppercase tracking-[0.08em] text-primary/65">{item.date}</p>
                  <p className="mt-1 text-[18px] leading-[1.4]">{item.title}</p>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
