export interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: {
    twitter?: string;
    linkedin?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    name: "Mr. Victor Owoyomi",
    role: "President/Co-Founder",
    image: "/team/profile.avif",
    socials: {
      twitter: "https://twitter.com/lindsaywalton",
      linkedin: "https://linkedin.com/in/lindsaywalton",
    },
  },
  {
    name: "Mrs. Blessing Owoyomi",
    role: "Vice President/Co-Founder",
    image: "/team/profile.avif",
    socials: {
      twitter: "https://twitter.com/courtneyhenry",
      linkedin: "https://linkedin.com/in/courtneyhenry",
    },
  },
  {
    name: "Mrs. Victoria Adepoju",
    role: "Trustee",
    image: "/team/profile.avif",
    socials: {
      twitter: "https://twitter.com/tomcook",
      linkedin: "https://linkedin.com/in/tomcook",
    },
  },
  {
    name: "Mr. Theophilus Taiwo",
    role: "Trustee",
    image: "/team/profile.avif",
    socials: {
      twitter: "https://twitter.com/whitneyfrancis",
      linkedin: "https://linkedin.com/in/whitneyfrancis",
    },
  },
  {
    name: "Mr. Femi Olayiwola",
    role: "Advisor/Member",
    image: "/team/profile.avif",
    socials: {
      twitter: "https://twitter.com/leonardkrasner",
      linkedin: "https://linkedin.com/in/leonardkrasner",
    },
  },
  {
    name: "Mr. Michael Adewunmi",
    role: "Advisor/Member",
    image: "/team/profile.avif",
    socials: {
      twitter: "https://twitter.com/floydmiles",
      linkedin: "https://linkedin.com/in/floydmiles",
    },
  },
  {
    name: "Mr. Charles Ogunmoyero",
    role: "Member/Media",
    image: "/team/profile.avif",
    socials: {
      twitter: "https://twitter.com/floydmiles",
      linkedin: "https://linkedin.com/in/floydmiles",
    },
  },
];
