import Image from "next/image";
import { programmes } from "@/lib/programmes";
import { Card } from "@/components/ui/card";

export default function ProgrammesPage() {
  return (
    <div className="bg-white pt-16">
      {/* Hero Section */}
      <div className="relative bg-[#556B2F] text-white py-24 max-md:py-10">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="People helping community"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-6">
              Our Programs
            </h1>
            <p className="md:text-xl opacity-90">
              Here is a few of our activities at GKF.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {programmes.map((item, i) => (
              <Card key={i} className="overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#577636]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <span>{item.description} </span>
                    {/* <ul className="list-disc list-inside space-y-1 text-gray-600"> */}
                    {item?.subProgrammes?.map((sub, subIndex) => (
                      <span
                        className="font-semibold"
                        key={subIndex}
                      >{`${sub}, `}</span>
                    ))}
                    {/* </ul> */}
                  </p>{" "}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
