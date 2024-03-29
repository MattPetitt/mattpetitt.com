import React from "react";
import Link from "next/link";

const getRandomQuote = (count) => {
  return Math.floor(Math.random() * Math.floor(count));
};

const quotes = [
  {
    quote:
      "The first principle is that you must not fool yourself and you are the easiest person to fool.",
    author: "Richard Feynman",
  },
  {
    quote:
      "For a successful technology, reality must take precedence over public relations, for Nature cannot be fooled.",
    author: "Richard Feynman",
  },
  {
    quote:
      "I believe in the discipline of mastering the best that other people have ever figured out. I don’t believe in just sitting down and trying to dream it all up yourself. Nobody’s that smart.",
    author: "Charlie Munger",
  },
  {
    quote:
      "Never, ever, think about something else when you should be thinking about the power of incentives.",
    author: "Charlie Munger",
  },
  {
    quote:
      "There are known knowns. There are things we know we know. We also know there are known unknowns. That is to say we know there are some things we do not know. But there are also unknown unknowns, the ones we don’t know we do not know. Finally, there are unknown knowns the knowns we do not want to know.",
    author: "Donald Rumsfeld",
  },
  {
    quote:
      "We are too much accustomed to attribute to a single cause that which is the product of several, and the majority of our controversies come from that.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "Before you speak ask yourself if what you are going to say is true, is kind, is necessary, is helpful. If the answer is no, maybe what you are about to say should be left unsaid.",
    author: "Bernard Meltzer",
  },
  {
    quote:
      "Grant me the serenity to accept the things I cannot change, courage to change the things I can, and wisdom to know the difference.",
    author: "Reinhold Niebuhr",
  },
  {
    quote: "The map appears to us more real than the land.",
    author: "D.H. Lawrence",
  },
  {
    quote: "I’m no genius. I’m smart in spots—but I stay around those spots.",
    author: "Tom Watson Sr.",
  },
  {
    quote:
      "Failing to consider second- and third-order consequences is the cause of a lot of painfully bad decisions, and it is especially deadly when the first inferior option confirms your own biases.",
    author: "Ray Dalio",
  },
  {
    quote: "Where all think alike, no one thinks very much.",
    author: "Walter Lippmann",
  },
  {
    quote:
      "Heroes are heroes because they are heroic in behavior, not because they won or lost.",
    author: "Nassim Nicholas Taleb",
  },
  {
    quote: "Things always become obvious after the fact.",
    author: "Nassim Nicholas Taleb",
  },
  {
    quote:
      "The difficulty lies not in the new ideas, but in escaping the old ones, which ramify, for those brought up as most of us have been, into every corner of our minds.",
    author: "John Maynard Keynes",
  },
  {
    quote:
      "Nothing is more dangerous than a dogmatic worldview - nothing more constraining, more blinding to innovation, more destructive of openness to novelty.",
    author: "Stephen Jay Gould",
  },
  {
    quote:
      "If you want to make an apple pie from scratch, you must first create the universe.",
    author: "Carl Sagan",
  },
  {
    quote:
      "It pays to keep an open mind, but not so open your brains fall out.",
    author: "Carl Sagan",
  },
];

const Error = ({ router }) => {
  const route = (router && router.asPath) || "this";
  const quote = quotes[getRandomQuote(quotes.length)];
  return (
    <div className="flex md:items-center md:min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="lg:text-center">
          <h1 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Sorry this doesn&apos;t exist yet.
            <br />
            Here&apos;s a quote instead.
          </h1>
          <blockquote className="mt-6">
            <h2
              className="lg:mx-24 mt-2 text-xl text-gray-600 font-semibold"
              suppressHydrationWarning
            >
              &quot;{quote.quote}&quot;
            </h2>
            <p
              className="mt-2 max-w-2xl text-xl text-gray-600 lg:mx-auto"
              suppressHydrationWarning
            >
              — {quote.author}
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Error;
