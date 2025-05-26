import { JobExperience } from "./types";

export const sampleJobExperiences: JobExperience[] = [
  {
    job_title: "Software Engineer",
    employment_type: "Full-time",
    company: "TechCorp Inc.",
    is_current: true,
    start_date: { month: "June", year: "2020" },
  },
  {
    job_title: "Frontend Developer",
    employment_type: "Contract",
    company: "Creative Solutions Ltd.",
    is_current: false,
    start_date: { month: "January", year: "2018" },
    end_date: { month: "May", year: "2020" },
  },
];