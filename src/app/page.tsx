import { Button } from "@/components/ui/button";
import { ChevronDown, DownloadIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto lg:rounded-xl flex flex-col">
      <div className="flex justify-center w-full">
        <Button asChild variant="secondary" className="h-auto rounded-full min-w-36 justify-center border text-xs px-1.5 py-0.5 flex items-center space-x-1.5">
          <Link href="/contact">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-br from-green-400 to-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-br from-green-500 to-green-600"></span>
            </span>
            <span className="font-medium">Available for hire</span>
            <ChevronDown className="w-3 h-3" />
          </Link>
        </Button>
      </div>
      <main className="mt-4">
        <div className="px-4 space-y-6">
          <div className="flex-1 grid gap-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance bg-gradient-to-br from-foreground from-30% to-foreground/60 bg-clip-text text-transparent pb-2">Software engineer, product designer.</h1>
            <p className="text-muted-foreground text-base text-balance -mt-2">Currently working with <span className="text-foreground/80">Typescript</span>, <span className="text-foreground/80">Next.js</span>, <span className="text-foreground/80">Laravel</span>, <span className="text-foreground/80">Inertia</span>, <span className="text-foreground/80">Framer Motion</span>, and <span className="text-foreground/80">TailwindCSS</span>.</p>
            <ul className="flex space-x-6 justify-center">
              <li>
                <a className="group -m-1 flex p-1" aria-label="Follow on X" target="_blank" href={`${process.env.NEXT_PUBLIC_X_PROFILE_URL}`}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-muted-foreground transition group-hover:fill-foreground">
                    <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a className="group -m-1 flex p-1" aria-label="Follow on GitHub" target="_blank" href={`${process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL}`}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-muted-foreground transition group-hover:fill-foreground">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a className="group -m-1 flex p-1" aria-label="Follow on LinkedIn" target="_blank" href={`${process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL}`}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-muted-foreground transition group-hover:fill-foreground">
                    <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:max-w-xs mx-auto w-full">
            <ol className="space-y-6">
              {jobs.map(job => (
                <li key={job.company} className="flex space-x-4 items-center w-full">
                  <div className="relative outline outline-background/10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent from-[10%] to-border border flex h-10 w-10 flex-none items-center justify-center rounded-full">
                    <Image className="outline outline-background/20 w-8 h-8 rounded-full" src={job.logoUrl} width={32} height={32} alt={`${job.company} logo`} />
                  </div>

                  <div className="flex justify-between items-end flex-1">
                    <div className="space-y-1">
                      <p className="font-medium">{job.company}</p>
                      <p className="text-muted-foreground text-xs">{job.title}</p>
                    </div>
                    <p className="text-muted-foreground text-xs">{job.startDate} - {job.endDate}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-6">
              <Button asChild variant="secondary">
                <a href="/Justin_Cairns_2024.pdf" target="_blank" download className="w-full space-x-2 flex items-center">
                  <span>Download Resume</span>
                  <DownloadIcon className="w-3 h-3" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main >
    </div>
  );
}


const jobs = [
  {
    company: "BetterHelp",
    title: "Sr. Frontend Engineer",
    startDate: "2022",
    endDate: "Present",
    logoUrl: "/bh.jpeg",
  },
  {
    company: "Coinsmart",
    title: "Frontend Engineer",
    startDate: "2021",
    endDate: "2022",
    logoUrl: "/coinsmart.jpeg",
  },
  {
    company: "After Digital",
    title: "Frontend Engineer",
    startDate: "2019",
    endDate: "2021",
    logoUrl: "/afterdigital.jpeg",
  },
]