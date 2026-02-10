"use client";

export interface TestimonialData {
  quote: string;
  author: string;
  role?: string;
  treatment?: string;
  image?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
}

interface TestimonialProps extends TestimonialData {
  variant?: "card" | "featured" | "inline";
}

/**
 * Testimonial Component
 * Customer quote/review block
 */
export function Testimonial({
  quote,
  author,
  role,
  treatment,
  image,
  rating,
  variant = "card",
}: TestimonialProps) {
  const StarRating = ({ count }: { count: number }) => (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-5 w-5 ${star <= count ? 'text-amber-400' : 'text-neutral-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  if (variant === "featured") {
    return (
      <div className="rounded-xl bg-neutral-900 p-8 text-white md:p-12">
        {rating && (
          <div className="mb-4 flex justify-center">
            <StarRating count={rating} />
          </div>
        )}

        <blockquote className="text-center">
          <p className="text-xl leading-relaxed md:text-2xl">
            &ldquo;{quote}&rdquo;
          </p>

          <footer className="mt-6 flex items-center justify-center gap-4">
            {image && (
              <img
                src={image}
                alt={author}
                className="h-12 w-12 rounded-full object-cover"
              />
            )}
            <div className="text-left">
              <cite className="not-italic font-medium">{author}</cite>
              {(role || treatment) && (
                <p className="text-sm text-neutral-400">
                  {role && <span>{role}</span>}
                  {role && treatment && <span> · </span>}
                  {treatment && <span>{treatment}</span>}
                </p>
              )}
            </div>
          </footer>
        </blockquote>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className="flex gap-4">
        {image && (
          <img
            src={image}
            alt={author}
            className="h-12 w-12 flex-shrink-0 rounded-full object-cover"
          />
        )}
        <div>
          {rating && <StarRating count={rating} />}
          <p className="mt-2 text-neutral-700">&ldquo;{quote}&rdquo;</p>
          <p className="mt-2 text-sm font-medium text-neutral-900">
            {author}
            {treatment && (
              <span className="font-normal text-neutral-500"> · {treatment}</span>
            )}
          </p>
        </div>
      </div>
    );
  }

  // Default card variant
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-6">
      {rating && <StarRating count={rating} />}

      <blockquote className="mt-4">
        <p className="text-neutral-700">&ldquo;{quote}&rdquo;</p>
      </blockquote>

      <footer className="mt-4 flex items-center gap-3">
        {image ? (
          <img
            src={image}
            alt={author}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
            <span className="text-sm font-medium text-neutral-600">
              {author.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <cite className="not-italic text-sm font-medium text-neutral-900">
            {author}
          </cite>
          {treatment && (
            <p className="text-xs text-neutral-500">{treatment}</p>
          )}
        </div>
      </footer>
    </div>
  );
}

/**
 * TestimonialGrid Component
 * Grid layout for multiple testimonials
 */
interface TestimonialGridProps {
  testimonials: TestimonialData[];
  title?: string;
  columns?: 2 | 3;
}

export function TestimonialGrid({
  testimonials,
  title = "Wat onze klanten zeggen",
  columns = 3,
}: TestimonialGridProps) {
  const gridCols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <div>
      <h2 className="mb-8 text-center text-display-sm font-semibold">
        {title}
      </h2>
      <div className={`grid gap-6 ${gridCols[columns]}`}>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} variant="card" />
        ))}
      </div>
    </div>
  );
}
