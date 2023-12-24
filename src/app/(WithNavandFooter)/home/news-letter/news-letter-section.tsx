import { NewsLetterAnimation } from "./news-letter-animation";
import { NewsLetterHeaderAnimation } from "./news-letter-header-animation";
import { SubscribeButtonAnimation } from "./subcribe-button-animation";

export const NewsletterSection = () => {
  return (
    <section className="relative  py-10 mt-32 overflow-hidden bg-gray-100">
      <div className="relative container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap -mx-4 items-center justify-center">
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              <div className="relative  max-w-lg mx-auto">
                <NewsLetterHeaderAnimation>
                  <h4 className="font-heading text-2xl sm:text-4xl lg:text-3xl text-gray-900 font-bold text-center mb-6">
                    Sign up for our newsletter
                  </h4>
                  <div className="md:flex mb-5">
                    <div className="max-w-xs mx-auto">
                      <p className="text-md font-semibold text-gray-600 text-center">
                        Stay in the loop with everything you need to know.
                      </p>
                    </div>
                  </div>
                </NewsLetterHeaderAnimation>
                <NewsLetterAnimation>
                  <div className="sm:flex items-center gap-3">
                    <input
                      className="w-full mb-3 sm:mb-0 sm:mr-4 py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                      type="email"
                      placeholder="email@example.com"
                    />
                    <SubscribeButtonAnimation>
                      <button
                        className="relative group inline-block flex-shrink-0 w-full sm:w-auto py-3 px-5 text-sm font-semibold text-orange-50 bg-rose-500 rounded-md overflow-hidden"
                        type="submit"
                      >
                        <div className="relative flex items-center justify-center">
                          <span>Subscribe</span>
                        </div>
                      </button>
                    </SubscribeButtonAnimation>
                  </div>
                </NewsLetterAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
