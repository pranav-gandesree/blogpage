import { useState } from "react";
import MoreBlogs from "../components/MoreBlogs";
import blog from "../assets/blog.png";
import Share from "../components/Share";

export default function BlogPage() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <>
      <div className="min-h-screen">

        <main className="max-w-3xl mx-auto px-4 py-8">
          <article>
            <div className="mb-8">
              <h5 className="text-[#666666] size-[20px] w-[500] mb-4 leading-6">
                NEWS
              </h5>
              <h3 className="text-3xl md:text-4xl mb-4 font-medium text-[#1A1A1A]">
                itel India’s Heartwarming World Cup Campaign: Connecting India
                through the Joy of Cricket and Technology
              </h3>

              <div className="flex flex-col md:flex-row justify-start md:justify-between items-start">
                {/* Left Section: Date */}
                <div className="flex items-center space-x-2">
                  <span>28 Mar, 2024</span>
                  <span className="inline-block h-1 w-1 bg-[#949494] rounded-full"></span>
                  <span>5 min read</span>
                </div>

                {/* Right Section: Share */}
                <div className="mt-2 md:mt-0">
                  <Share />
                </div>
              </div>
            </div>
            <div className="aspect-video mb-6">
              <img
                src={blog}
                alt="Blog post header image"
                className="w-full md:h-[417px] h-[250px] object-cover"
              />
            </div>

            <div className="prose text-[#181818] leading-8 max-w-none font-normal">
              <p>
                <span className="font-medium">
                  {" "}
                  New Delhi, October 05, 2023:{" "}
                </span>{" "}
                itel, India’s leading smartphone brand, is set to capture hearts
                and unite the nation with its emotionally charged brand
                campaign, timed perfectly with the upcoming World Cup season. As
                a brand that prides itself on democratizing technology for all,
                itel India aims to underscore its commitment to providing
                incredible value in every product it delivers while fostering a
                sense of togetherness and shared experiences among its
                customers.
              </p>
              <br></br>
              <p>
                The campaigns centerpiece is a touching short film that
                encapsulates the values and aspirations of itel India. It tells
                the heartwarming story of a father and son, blending the
                emotional journey of their dreams and sacrifices with the
                transformative power of technology.
              </p>
              <br></br>
              <p>
                As the campaign reminds us, itel India is not just a smartphone
                brand; it is a unifying force that brings together families,
                generations, and the entire nation, especially during moments of
                sporting and emotional significance.
              </p>
              <br></br>
              <p>
                Speaking about the campaign, Arijeet Talapatra, Chief Executive
                Officer, Transsion India, said “We believe that in today’s
                digital age, the smartphone has become the new TV. For many in
                the country, it serves as the gateway to information,
                entertainment, and connection, and for many, the gateway to the
                Cricket World Cup this season. Just like food, clothing, and
                shelter, the smartphone has also become a fundamental necessity
                in our lives. Like we see in the digital film, watching the
                World Cup is an activity that brings all the generations of the
                country together. Thus, in the spirit of
                #JodeBharatKaHarDilitel, we aim to democratize watching the
                World Cup by placing an itel phone in as many hands as possible.
                itel is here to serve the aspirations of Gen Z, providing them
                with endless opportunities and connections.”
              </p>
              <br></br>
              <p>
                The digital film has been conceptualized and executed by Havas
                Worldwide India. It offers a fresh approach to storytelling in
                the digital advertising realm.
              </p>
              <br></br>
              <p>
                Anupama Ramaswamy, Chief Creative Officer, Havas Worldwide India
                said, Indians love two things – cricket and family. And they are
                happiest when they can bring the two together. This was the
                inspiration that went into creating this heart-warming story. A
                story that touched upon small-town India’s many realities –
                parent’s pride and belief in their children’s abilities, a
                father’s love for his son that pushes him to take on every
                challenge, the fact that life can be tough sometimes but when
                loved ones come together anything is achievable. And at every
                step of the way, itel is there to help these bonds grow
                stronger. We wanted this story to help itel become more than yet
                another mobile phone brand. We wanted itel to be seen as a
                companion that truly celebrates the coming together of people
                and their passions.
              </p>
            </div>
          </article>

          <div className="mt-10">
            <Share />
          </div>
        </main>

        <MoreBlogs />
      </div>
    </>
  );
}
