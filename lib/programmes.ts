export interface Programme {
  title: string;
  description: string;
  subProgrammes?: string[];
  image: string;
}

export const programmes: Programme[] = [
  {
    title: "Global Evangelism (Hybrid)",
    description:
      "Spreading the gospel through both online and offline platforms to reach people worldwide.",
    image: "https://images.pexels.com/photos/8828681/pexels-photo-8828681.jpeg",
  },
  {
    title: "Global Intercessory Prayers",
    description:
      "Dedicated prayer sessions for global issues, communities, and individuals in need.",
    image: "https://images.pexels.com/photos/2774570/pexels-photo-2774570.jpeg",
  },
  {
    title: "Word Conference (WC)",
    description:
      "Annual conference focused on biblical teachings and spiritual growth.",
    image:
      "https://images.pexels.com/photos/6860390/pexels-photo-6860390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Prayer Conference (PC)",
    description:
      "Gathering of believers for intensive prayer and spiritual renewal.",
    image:
      "https://images.pexels.com/photos/11299007/pexels-photo-11299007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Community Outreach Programmes (COP)",
    description:
      "Various initiatives to serve and support local communities through:",
    image:
      "https://images.pexels.com/photos/6995221/pexels-photo-6995221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subProgrammes: [
      "Food Drives",
      "Homeless Outreach",
      "Prison Outreach",
      "Medical Outreach",
      "Youths Outreach",
    ],
  },
  {
    title: "Life Coaching/Counseling (LC)",
    description:
      "Professional guidance and support for personal and spiritual development.",
    image:
      "https://images.pexels.com/photos/7564164/pexels-photo-7564164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Education Support Programmes (ESP)",
    description:
      "Supporting education through scholarships and learning resources.",
    image:
      "https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=2070",
    // subProgrammes: ["Scholarship"],
  },
  {
    title: "Socio-economic Empowerment Programmes (SEP)",
    description:
      "Initiatives to empower individuals and communities economically.",
    image:
      "https://images.pexels.com/photos/12899151/pexels-photo-12899151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subProgrammes: ["Funding4Startups"],
  },
  {
    title: "Policy Advocacy",
    description:
      "Engaging with policymakers to promote positive social change and justice.",
    image:
      "https://images.pexels.com/photos/18465020/pexels-photo-18465020/free-photo-of-a-typewriter-with-a-paper-that-says-social-equity.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

// https://images.pexels.com/photos/6646852/pexels-photo-6646852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
