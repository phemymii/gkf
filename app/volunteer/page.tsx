"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import Image from "next/image";

type FormType = "partner" | "sponsor" | "volunteer" | "follow" | null;

interface PartnerFormData {
  organizationName: string;
  contactPerson: string;
  email: string;
  partnershipInterest: string;
}

interface SponsorFormData {
  name: string;
  email: string;
  sponsorshipType: string;
  message: string;
}

interface VolunteerFormData {
  fullName: string;
  email: string;
  phone: string;
  areasOfInterest: string[];
  availability: string;
}

interface FollowUsFormData {
  name: string;
  email: string;
  socialMedia: string[];
  newsletter: boolean;
}

export default function VolunteerPage() {
  const [activeForm, setActiveForm] = useState<FormType>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Form data states
  const [partnerFormData, setPartnerFormData] = useState<PartnerFormData>({
    organizationName: "",
    contactPerson: "",
    email: "",
    partnershipInterest: "",
  });

  const [sponsorFormData, setSponsorFormData] = useState<SponsorFormData>({
    name: "",
    email: "",
    sponsorshipType: "",
    message: "",
  });

  const [volunteerFormData, setVolunteerFormData] = useState<VolunteerFormData>(
    {
      fullName: "",
      email: "",
      phone: "",
      areasOfInterest: [],
      availability: "",
    }
  );

  const [followUsFormData, setFollowUsFormData] = useState<FollowUsFormData>({
    name: "",
    email: "",
    socialMedia: [],
    newsletter: false,
  });

  useEffect(() => {
    if (activeForm && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [activeForm]);

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "partner",
          formData: partnerFormData,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setFormStatus("sent");
      setPartnerFormData({
        organizationName: "",
        contactPerson: "",
        email: "",
        partnershipInterest: "",
      });

      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    } catch (error) {
      setFormStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An error occurred"
      );
    }
  };

  const handleSponsorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "sponsor",
          formData: sponsorFormData,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setFormStatus("sent");
      setSponsorFormData({
        name: "",
        email: "",
        sponsorshipType: "",
        message: "",
      });

      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    } catch (error) {
      setFormStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An error occurred"
      );
    }
  };

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "volunteer",
          formData: volunteerFormData,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setFormStatus("sent");
      setVolunteerFormData({
        fullName: "",
        email: "",
        phone: "",
        areasOfInterest: [],
        availability: "",
      });

      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    } catch (error) {
      setFormStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An error occurred"
      );
    }
  };

  const handleFollowUsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "follow",
          formData: followUsFormData,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setFormStatus("sent");
      setFollowUsFormData({
        name: "",
        email: "",
        socialMedia: [],
        newsletter: false,
      });

      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    } catch (error) {
      setFormStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An error occurred"
      );
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    formType: string
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    switch (formType) {
      case "partner":
        setPartnerFormData((prev) => ({ ...prev, [name]: value }));
        break;
      case "sponsor":
        setSponsorFormData((prev) => ({ ...prev, [name]: value }));
        break;
      case "volunteer":
        if (name === "areasOfInterest") {
          const areas = (e.target as HTMLSelectElement).selectedOptions;
          const values = Array.from(areas).map((option) => option.value);
          setVolunteerFormData((prev) => ({
            ...prev,
            areasOfInterest: values,
          }));
        } else {
          setVolunteerFormData((prev) => ({ ...prev, [name]: value }));
        }
        break;
      case "followUs":
        if (type === "checkbox") {
          setFollowUsFormData((prev) => ({ ...prev, [name]: checked }));
        } else if (name === "socialMedia") {
          const socialMedia = (e.target as HTMLSelectElement).selectedOptions;
          const values = Array.from(socialMedia).map((option) => option.value);
          setFollowUsFormData((prev) => ({ ...prev, socialMedia: values }));
        } else {
          setFollowUsFormData((prev) => ({ ...prev, [name]: value }));
        }
        break;
    }
  };

  const forms = {
    partner: (
      <div className="max-w-md w-full mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-6">Become a Partner</h3>
        <form onSubmit={handlePartnerSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Organization Name
            </label>
            <Input
              type="text"
              name="organizationName"
              value={partnerFormData.organizationName}
              onChange={(e) => handleInputChange(e, "partner")}
              placeholder="Your organization name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Person
            </label>
            <Input
              type="text"
              name="contactPerson"
              value={partnerFormData.contactPerson}
              onChange={(e) => handleInputChange(e, "partner")}
              placeholder="Full name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              type="email"
              name="email"
              value={partnerFormData.email}
              onChange={(e) => handleInputChange(e, "partner")}
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Partnership Interest
            </label>
            <Textarea
              name="partnershipInterest"
              value={partnerFormData.partnershipInterest}
              onChange={(e) => handleInputChange(e, "partner")}
              placeholder="Tell us how you'd like to partner with us"
              required
              rows={4}
            />
          </div>
          <Button
            type="submit"
            className="w-full hover:bg-[#7bab4a] bg-[#67903e] text-white hover:text-white w-fit"
            disabled={formStatus === "sending" || formStatus === "sent"}
          >
            {formStatus === "idle" && "Submit Partnership Request"}
            {formStatus === "sending" && "Submitting..."}
            {formStatus === "sent" && "Request Submitted!"}
            {formStatus === "error" && "Try Again"}
          </Button>
        </form>
      </div>
    ),
    sponsor: (
      <div className="max-w-md w-full mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-6">Become a Sponsor</h3>
        <form onSubmit={handleSponsorSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <Input
              type="text"
              name="name"
              value={sponsorFormData.name}
              onChange={(e) => handleInputChange(e, "sponsor")}
              placeholder="Your full name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              type="email"
              name="email"
              value={sponsorFormData.email}
              onChange={(e) => handleInputChange(e, "sponsor")}
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sponsorship Type
            </label>
            <select
              name="sponsorshipType"
              value={sponsorFormData.sponsorshipType}
              onChange={(e) => handleInputChange(e, "sponsor")}
              className="w-full rounded-md border border-gray-300 p-2"
              required
            >
              <option value="">Select sponsorship type</option>
              <option value="monthly">Monthly Sponsor</option>
              <option value="oneTime">One-time Sponsor</option>
              <option value="project">Project-based Sponsor</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <Textarea
              name="message"
              value={sponsorFormData.message}
              onChange={(e) => handleInputChange(e, "sponsor")}
              placeholder="Tell us about your sponsorship interest"
              required
              rows={4}
            />
          </div>
          <Button
            type="submit"
            className="w-full hover:bg-[#7bab4a] bg-[#67903e] text-white hover:text-white w-fit"
            disabled={formStatus === "sending" || formStatus === "sent"}
          >
            {formStatus === "idle" && "Submit Sponsorship Request"}
            {formStatus === "sending" && "Submitting..."}
            {formStatus === "sent" && "Request Submitted!"}
            {formStatus === "error" && "Try Again"}
          </Button>
        </form>
      </div>
    ),
    volunteer: (
      <div className="max-w-md w-full mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-6">Volunteer With Us</h3>
        <form onSubmit={handleVolunteerSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <Input
              type="text"
              name="fullName"
              value={volunteerFormData.fullName}
              onChange={(e) => handleInputChange(e, "volunteer")}
              placeholder="Your full name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              type="email"
              name="email"
              value={volunteerFormData.email}
              onChange={(e) => handleInputChange(e, "volunteer")}
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <Input
              type="tel"
              name="phone"
              value={volunteerFormData.phone}
              onChange={(e) => handleInputChange(e, "volunteer")}
              placeholder="Your phone number"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Areas of Interest
            </label>
            <select
              name="areasOfInterest"
              value={volunteerFormData.areasOfInterest}
              onChange={(e) => handleInputChange(e, "volunteer")}
              className="w-full rounded-md border border-gray-300 p-2"
              multiple
              required
            >
              <option value="foodBank">Food Bank</option>
              <option value="clothing">Clothing Distribution</option>
              <option value="literature">Literature Distribution</option>
              <option value="events">Event Support</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Availability
            </label>
            <Textarea
              name="availability"
              value={volunteerFormData.availability}
              onChange={(e) => handleInputChange(e, "volunteer")}
              placeholder="Tell us about your availability"
              required
              rows={4}
            />
          </div>
          <Button
            type="submit"
            className="hover:bg-[#7bab4a] bg-[#67903e] text-white hover:text-white w-fit"
            disabled={formStatus === "sending" || formStatus === "sent"}
          >
            {formStatus === "idle" && "Submit Volunteer Application"}
            {formStatus === "sending" && "Submitting..."}
            {formStatus === "sent" && "Application Submitted!"}
            {formStatus === "error" && "Try Again"}
          </Button>
        </form>
      </div>
    ),
    follow: (
      <div className="max-w-md w-full mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-6">Follow Our Journey</h3>
        <form onSubmit={handleFollowUsSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <Input
              type="text"
              name="name"
              value={followUsFormData.name}
              onChange={(e) => handleInputChange(e, "followUs")}
              placeholder="Your full name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              type="email"
              name="email"
              value={followUsFormData.email}
              onChange={(e) => handleInputChange(e, "followUs")}
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Follow us on:
            </label>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/goldenkey_foundation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#556B2F]"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* Add other social media icons as needed */}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subscribe to Newsletter
            </label>
            <div className="flex space-x-2">
              <Input
                type="email"
                name="email"
                value={followUsFormData.email}
                onChange={(e) => handleInputChange(e, "followUs")}
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button
                type="submit"
                className="hover:bg-[#7bab4a] bg-[#67903e] text-white hover:text-white w-fit"
                disabled={formStatus === "sending" || formStatus === "sent"}
              >
                {formStatus === "idle" && "Subscribe"}
                {formStatus === "sending" && "Submitting..."}
                {formStatus === "sent" && "Subscribed!"}
                {formStatus === "error" && "Try Again"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    ),
  };

  return (
    <div className="pt-16">
      <Toaster />
      {/* Hero Section */}
      <div className="relative text-white py-24 max-md:py-10">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/6646852/pexels-photo-6646852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="People helping community"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        {/* <div className="relative container mx-auto h-full flex items-center px-4 py-4"> */}
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-6">
              Join Our Mission
            </h1>
            <p className="md:text-xl opacity-90">
              Together, we can make a difference in the lives of others
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <p className="my-6">Click to join us</p>
        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {[
            {
              title: "Partners",
              description: "Join forces with us to expand our impact",
              type: "partner" as FormType,
            },
            {
              title: "Sponsor",
              description: "Support our mission financially",
              type: "sponsor" as FormType,
            },
            {
              title: "Volunteer",
              description: "Give your time and skills",
              type: "volunteer" as FormType,
            },
            {
              title: "Follow Us",
              description: "Stay connected with our work",
              type: "follow" as FormType,
            },
          ].map((option) => (
            <button
              key={option.type}
              onClick={() => setActiveForm(option.type)}
              className={`p-6 rounded-lg text-left hover:shadow-lg transition-shadow shadow-md border-2 border-[#3d5326]  ${
                activeForm === option.type
                  ? " bg-[#f8e6a6] text-black"
                  : "bg-[#f7faf4] hover:bg-[#fefaed]"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
              <p
                className={
                  activeForm === option.type ? "text-black/90" : "text-gray-600"
                }
              >
                {option.description}
              </p>
            </button>
          ))}
        </div>

        {/* Form Section */}
        {activeForm && (
          <div ref={formRef} className="mt-8 scroll-mt-8">
            <div className="max-w-4xl mx-auto">{forms[activeForm]}</div>
          </div>
        )}
      </div>
    </div>
  );
}
