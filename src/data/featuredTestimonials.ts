export type FeaturedTestimonial = {
  quoteTitle: string;
  quoteBody: string;
  author: string;
  /** Homepage carousel only */
  role: string;
  image: string;
  imageLeft: boolean;
  /**
   * YouTube id for embed. Keep this for reliable playback, or add `videoSrc` (self‑hosted) and
   * remove this when the MP4 exists in `public/`.
   */
  youtubeId?: string;
  /** YouTube & embed start time, or use with `videoSrc` + native `<video>`. */
  startSeconds?: number;
  /**
   * Self‑hosted when you are ready: place file in `public/` and remove `youtubeId` so the native
   * player is used. Example: `/testimonials/alex.mp4`
   */
  videoSrc?: string;
  /** @deprecated Use `startSeconds` */
  youtubeStartSeconds?: number;
};

export const featuredTestimonials: FeaturedTestimonial[] = [
  {
    quoteTitle: 'Turning a Vision into a Reality with Unmatched Quality',
    quoteBody:
      'What drew us to Noura Homes was the attention to detail and the ability to customize our home exactly how we wanted it. From initial design to final touches, the team was supportive throughout. They did not just build a house; they built our home. The craftsmanship and care made all the difference.',
    author: 'The Smith Family',
    role: 'Custom Homeowners',
    image: 'https://www.figma.com/api/mcp/asset/b6b9954a-ca0c-449f-8fa1-28402cf16dfe',
    imageLeft: true,
    youtubeId: '9bDtZi8wFMA',
    startSeconds: 20,
  },
  {
    quoteTitle: 'A Seamless, Fun Experience with Noura Homes',
    quoteBody:
      'Noura stood out among other builders, and when we walked into their homes, we felt the high quality immediately. Despite hearing horror stories about building, the team made the process easy and smooth by explaining every step. We incorporated every wish we had, and they delivered on time. They treated us like family, and we would definitely work with them again.',
    author: 'Sebastian and Stephanie',
    role: 'Custom Homeowners',
    image: 'https://www.figma.com/api/mcp/asset/2d42a8e7-6e39-4af4-9f9c-67e244107863',
    imageLeft: false,
    youtubeId: 'VwYZXnkUXBc',
  },
  {
    quoteTitle: 'One-Minute Decision.',
    quoteBody:
      'This was the first house we ever built, and everything was new to us. Noura Construction walked us through the entire process and was incredibly helpful. We saw the quality of their work on another house, and it was a one-minute decision to go with them. Now, it truly feels like our home, like putting on a shoe that perfectly fits. I would absolutely recommend Noura Homes.',
    author: 'Alex',
    role: 'Custom Homeowner',
    image: 'https://www.figma.com/api/mcp/asset/e60b567b-9972-4307-bd19-78d5b37b059c',
    imageLeft: true,
    youtubeId: '_j0ohUlzef4',
    startSeconds: 13,
  },
];
