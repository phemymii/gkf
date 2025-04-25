import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white pt-16">
      {/* Hero Section */}
      <div className="relative bg-[#556B2F] text-white py-24 max-md:py-10">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070"
            alt="People helping community"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-6">About Us</h1>
            <p className="md:text-xl opacity-90">
              Inspiring and transforming lives through faith, love, and service
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* About GKF Section */}
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Golden Key Foundation
            </h2>
            <div className="bg-[#fefaed] p-6 rounded-lg mb-8">
              <p className="text-gray-700 leading-relaxed">
                The Golden Key Foundation (GKF) is a global outreach and UK
                registered charity organisation (1209107). We deliver our
                mission through global faith-driven initiatives and humanitarian
                outreach by leveraging modern technology to provide equitable
                and inclusive access to the Gospel of our Lord Jesus Christ
                capable of inspiring and transforming lives.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Our Services
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-[#556B2F] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Free food bank
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-[#556B2F] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Clothing materials (winter jacket)
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-[#556B2F] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Christian literature distribution
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-[#556B2F] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Essential materials support
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Our Impact
                </h3>
                <p className="text-gray-700 mb-4">
                  Through donations and support, we continue to make a
                  difference in the lives of those in need, providing essential
                  services and spreading the message of hope.
                </p>
                <Link
                  href="/donate"
                  className="inline-block px-6 py-2 rounded-md hover:bg-[#7bab4a] bg-[#67903e] text-white hover:text-white transition-colors"
                >
                  Support Our Mission
                </Link>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              GKF Philosophy
            </h2>
            <div className="bg-[#fefaed] p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                On June 22, 2022, Victor and Blessing Owoyomi, in prayer and
                reflection, sought guidance from God for the next mission they
                were called to undertake. During this time, the Holy Spirit led
                Brother Victor to Isaiah 22:22, which spoke of a "Golden Key"
                that would unlock the potential of individuals and nations.
              </p>
              <blockquote className="border-l-4 border-[#67903e] pl-4 italic text-black mb-6">
                "This revelation affirmed that God had entrusted them with a
                divine purpose—to spread the Good News of Jesus Christ, build
                communities, and restore humanity to God."
              </blockquote>
              <p className="text-gray-700 leading-relaxed">
                We are excited to announce that we have embarked on a global
                mission to fulfil this God-given vision. Through the teaching
                and embodiment of faith, love, and service, we are committed to
                inspiring and transforming lives, empowering individuals to
                reach their full God-given potential.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="text-center bg-[#edf4e6] text-black p-8 ">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
          <p className="mb-8">
            We humbly request your prayers, support, and partnership as we work
            together to achieve this mission. Your involvement, in any capacity,
            will be a valuable contribution to this transformative journey.
          </p>
          <div className="space-y-4">
            <p className="font-semibold">
              Join us, let us Build and Grow together!
            </p>
            <p className="italic">
              Make a Choice, Take a Chance, See the Change!
            </p>
            <div className="space-y-2 text-lg">
              <p>#Be Audacious!</p>
              <p>#Be Inspired!</p>
              <p>#Keep Showing Up!</p>
            </div>
            <div className="mt-6">
              <p className="font-semibold">God bless you all…</p>
              <p>God bless GKF Global team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
