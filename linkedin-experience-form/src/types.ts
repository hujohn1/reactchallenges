export enum EMPLOYMENT_TYPE{
    FULLTIME = "Full-time", 
    PARTTIME = "Part-time", 
    SELFEMPLOYED = "Self-employed", 
    FREELANCE = "Freelance", 
    CONTRACT = "Contract", 
    INTERNSHIP = "Internship", 
    APPRENTICESHIP = "Apprenticeship", 
    SEASONAL = "Seasonal"
}
export type JobExperience={
  job_title: string, 
  employment_type: string,
  company: string, 
  is_current: boolean, 
  start_date: {
    month: string, year: string
  }
  end_date ?: {
    month: string, year: string
  }
}