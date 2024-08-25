
// http://localhost:3000/
import { CloudflareWorkersIcon } from "@/components/icons/cfw";
import { LaravelIcon } from "@/components/icons/laravel";
import { NextJsIcon } from "@/components/icons/nextjs";
import { PostgresIcon } from "@/components/icons/postgres";
import { RadixIcon } from "@/components/icons/radix";
import { ReactIcon } from "@/components/icons/react";
import { SupabaseIcon } from "@/components/icons/supabase";
import { TailwindIcon } from "@/components/icons/tailwind";
import { VercelIcon } from "@/components/icons/vercel";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { ComponentProps, PropsWithChildren } from "react";
import { ContactForm } from '@/components/contact-form';

function Line({ className, children, ...rest }: PropsWithChildren<ComponentProps<"div">>) {
  return (
    <div className={cn("absolute top-0 h-full w-2 left-1 md:-left-6 text-[--muted-color]", className)} {...rest}>
      <div className="absolute top-1/2 -left-1 origin-bottom-left -rotate-90 -translate-y-1/2 text-[8px] font-mono">{children}</div>
      <svg className="absolute -top-[1px] -left-[3.5px]" width="8" height="100%" viewBox="0 0 8 100%" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4L4 1L7 4" className="stroke-current" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path><line x1="4" y1="1" x2="4" y2="100%" className="stroke-current" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></line>
      </svg>
      <svg className="absolute -bottom-[1px] -left-[3.5px]" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L4 4L7 1" className="stroke-current" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </div>
  )
}

export default function Home() {
  return (
    <div style={{
      // @ts-ignore
      "--muted-color": "#afafaf",
      "--pattern-color": "#a6a6a6",
      "--gray-75": "#bfbfbf",
      "--gray-0": "#F2F2F2"
    }}>
      <svg width="100%" height="24px" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="pattern-75" patternUnits="userSpaceOnUse" width="4" height="4"><g clip-path="url(#clip0)"><path d="M1 -1L5 3" className="stroke-[--pattern-color]" stroke-width="0.5"></path><path d="M-1 1L3 5" className="stroke-[--pattern-color]" stroke-width="0.5"></path></g></pattern><clipPath id="clip0"><rect width="4" height="4" fill="white"></rect></clipPath></defs><rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-75)"></rect></svg>

      <header className="relative ml-6 max-w-[600px] md:mx-auto px-4 md:px-0 flex items-center justify-between mt-12">
        <span className="block [font-family:var(--font-heading)]">
          <div className="text-3xl md:text-4xl leading-none md:leading-none font-light" style={{ textRendering: "optimizeLegibility" }}>Justin</div>
          <div className="relative -left-1 inline-block text-3xl md:text-4xl text-light leading-none md:leading-none font-light">Cairns
            <div className="absolute top-0 -right-3 font-mono text-[8px] md:text-[9px] text-muted-foreground">
              DEV
            </div>
          </div>
        </span>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="relative z-10 inline-block px-3 py-2 mb-2 border rounded text-xs md:text-sm shadow-super">Let&apos;s talk</Button>
          </DialogTrigger>
          <DialogContent className="bg-muted/80 border-none backdrop-blur-xl duration-0 translate-x-0 translate-y-0 top-0 left-0 h-full w-full max-w-none sm:rounded-none flex items-center justify-center">
            <svg className="absolute top-0 left-0" width="100%" height="24px" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="pattern-75" patternUnits="userSpaceOnUse" width="4" height="4"><g clip-path="url(#clip0)"><path d="M1 -1L5 3" className="stroke-[--pattern-color]" stroke-width="0.5"></path><path d="M-1 1L3 5" className="stroke-[--pattern-color]" stroke-width="0.5"></path></g></pattern><clipPath id="clip0"><rect width="4" height="4" fill="white"></rect></clipPath></defs><rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-75)"></rect></svg>
            <div className="max-w-xs w-full">
              <ContactForm />
              <div className="mt-6">
                <p className="text-muted-foreground/50 font-mono text-xs">Currently working with, but not limited to:</p>
                <div className="grid grid-cols-9 gap-1.5 items-center mt-2">
                  <ReactIcon className="w-6 icon-grayscale hover:icon-grayscale-none" />
                  <NextJsIcon className="w-6 icon-grayscale hover:icon-grayscale-none" />
                  <TailwindIcon className="w-6 icon-grayscale hover:icon-grayscale-none" />
                  <RadixIcon className="w-6 icon-grayscale hover:icon-grayscale-none" />
                  <PostgresIcon className="w-6 icon-grayscale hover:icon-grayscale-none" />
                  <LaravelIcon className="w-6 icon-grayscale hover:icon-grayscale-none" />
                  <VercelIcon className="w-6 icon-grayscale hover:icon-grayscale-none" />
                  <SupabaseIcon className="w-6 icon-grayscale hover:icon-grayscale-none" />
                  <CloudflareWorkersIcon className="w-6 icon-grayscale hover:icon-grayscale-none" />
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <Line>HDR</Line>
      </header>

      <div className="max-w-[600px] mx-auto text-[8px] text-foreground">
        <div className="relative h-[180px]">
          <div className="absolute h-[260px] w-full">

            <div className="absolute top-[-270px] h-[800px] w-full overflow-hidden md:overflow-visible">
              <div className="absolute z-10 top-1/2 left-10 md:left-14 transform -translate-y-1/2 w-[160px] h-[160px] md:w-[200px] md:h-[200px] flex items-center justify-center">
                <div className="absolute -top-2 left-0 w-full h-1/2">
                  <div className="absolute top-0 left-0 h-full w-full p-2">
                    <div className="absolute top-0 left-0 h-full w-full opacity-15 animate-wipe">
                      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id="pattern-0" patternUnits="userSpaceOnUse" width="4" height="4">
                            <g clip-path="url(#clip0)">
                              <path d="M1 -1L5 3" className="stroke-foreground" stroke-width="0.5"></path>
                              <path d="M-1 1L3 5" className="stroke-foreground" stroke-width="0.5"></path>
                            </g>
                          </pattern>
                          <clipPath id="clip0">
                            <rect width="4" height="4" className="fill-foreground"></rect>
                          </clipPath>
                        </defs>
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-0)"></rect>
                      </svg>
                    </div>
                    <div className="animate-opacity-in text-muted-foreground font-mono">DESIGN</div>
                  </div>
                  <div className="absolute top-0 left-full h-full w-full p-2">
                    <div className="absolute top-0 left-0 h-full w-full scale-x-[-1] opacity-30 animate-wipe-up">
                      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id="pattern-0" patternUnits="userSpaceOnUse" width="4" height="4">
                            <g clip-path="url(#clip0)">
                              <path d="M1 -1L5 3" className="stroke-foreground" stroke-width="0.5"></path>
                              <path d="M-1 1L3 5" className="stroke-foreground" stroke-width="0.5"></path>
                            </g>
                          </pattern>
                          <clipPath id="clip0">
                            <rect width="4" height="4" className="fill-foreground"></rect>
                          </clipPath>
                        </defs>
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-0)"></rect>
                      </svg>
                    </div>
                    <div className="animate-opacity-in text-muted-foreground font-mono">ENGINEER</div>
                  </div>
                </div>
                <div className="absolute top-0 left-0 h-full w-full bg-muted rounded-full animate-scale-slow"></div>
                <div className="relative z-10 -left-6 animate-opacity-in">
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-[--gray-0] p-1 flex gap-[2px]">
                    <div className="w-[2px] h-[2px] bg-foreground rounded-full animate-blink opacity-10"></div>
                    <div className="w-[2px] h-[2px] bg-foreground rounded-full animate-blink opacity-10" style={{ animationDelay: "1s" }}></div>
                    <div className="w-[2px] h-[2px] bg-foreground rounded-full animate-blink opacity-10" style={{ animationDelay: "2s" }}></div>
                    <div className="w-[2px] h-[2px] bg-foreground rounded-full animate-blink opacity-10" style={{ animationDelay: "3s" }}></div>
                    <div className="w-[2px] h-[2px] bg-foreground rounded-full animate-blink opacity-10" style={{ animationDelay: "4s" }}></div>
                  </div>
                </div>
              </div>
              <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-[68px] md:-translate-x-[88px] -translate-y-1/2 h-[110px] w-[110px] flex items-center justify-center">
                <div className="absolute top-0 left-0 h-full w-full bg-background rounded-full animate-scale-slow"></div>
                <div className="absolute top-2 animate-opacity-in">
                  <div className="absolute top-3 left-1/2 -translate-x-1/2" style={{ maskImage: "url(#hexmask)" }}>
                    <svg className="none" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="hexmask">
                        <path d="M7 1L13 4.88889L13 11.1111L7 15L1 11.1111L1 4.88889L7 1Z" stroke="#FFF" stroke-width="0.5"></path>
                      </mask>
                    </svg>
                    <div className="absolute top-0 left-0 w-full h-full bg-conic animate-sprite-rotate [--border-angle:0turn]"></div>
                  </div>
                  <div className="absolute top-[15px] left-1/2 -translate-x-1/2" style={{ maskImage: "url(#hexmask2)" }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="hexmask2">
                        <path d="M5 0.5L9 3L9 7L5 9.5L1 7L1 3L5 0.5Z" stroke="#FFF" stroke-width="0.5"></path>
                      </mask>
                    </svg>
                    <div className="absolute top-0 left-0 w-full h-full bg-conic animate-sprite-rotate [--border-angle:0turn] [animation-delay:300ms]"></div>
                  </div>
                  <div className="absolute top-[17px] left-1/2 -translate-x-1/2" style={{ maskImage: "url(#hexmask3)" }}>
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="hexmask3">
                        <path d="M3 1L5 2.11111L5 3.88889L3 5L1 3.88889L1 2.11111L3 1Z" stroke="#FFF" stroke-width="0.5"></path>
                      </mask>
                    </svg>
                    <div className="absolute top-0 left-0 w-full h-full bg-conic animate-sprite-rotate [--border-angle:0turn] [animation-delay:600ms]"></div>
                  </div>
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 translate-y-1 h-4 w-[1px] animate-opacity-in">
                  <div className="absolute top-0 left-0 h-full w-full bg-[#bfbfbf]"></div>
                </div>
                {/* <div className="relative z-10 -left-1 flex animate-opacity-in font-mono text-[#a6a6a6]">next.js</div> */}
                {/* <div className="relative z-10 -left-1 top-4 flex animate-opacity-in font-mono text-[#a6a6a6]">react.js</div> */}
              </div>
              <div className="absolute top-1/2 left-1/3 md:left-1/2 transform -translate-y-1/2 h-[330px] w-[330px] flex items-center justify-center">
                <div className="absolute top-0 left-0 h-full w-full bg-[#F2F2F2] rounded-full animate-wipe -rotate-45"></div>
                <div className="absolute -top-[15px] -left-[15px] h-[360px] w-[360px] rotate-225 animate-scale-angle">
                  <div className="absolute top-0 left-0 w-full h-full rounded-full bg-dashed animate-spin-slow delay-[1500ms]">

                  </div>
                </div>
                <div className="absolute top-14 right-16 animate-opacity-in text-muted-foreground font-mono">{new Date().getFullYear()}</div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4">
                  <div className="absolute top-0 left-0 w-full h-full bg-[#bfbfbf] rounded-full animate-scale-down">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2">
                      <div className="absolute top-0 left-0 w-full h-full rounded-full bg-conic-contrast animate-spin [animation-duration:3s]"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[7px] h-[7px] bg-[#bfbfbf] rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#a6a6a6] rounded-full"></div>
                    </div>
                  </div>
                  {/* <div className="absolute top-full left-1/2 -translate-x-1/2 translate-y-1 h-4 w-[1px] animate-opacity-in">
                    <div className="absolute top-0 left-0 h-full w-full bg-[#bfbfbf]"></div>
                    <div className="absolute -bottom-3">KN0</div>
                  </div> */}
                </div>
              </div>
            </div>
            <Line className="left-5 md:-left-8">HRO</Line>
          </div>
        </div>
      </div>

      <div className="relative ml-6 max-w-[600px] md:mx-auto px-4 md:px-0 z-30">
        <span className="inline-block bg-background border px-3 py-2 rounded text-muted-foreground text-xs md:text-sm shadow-super">2018 &mdash; Present</span>
      </div>

      <div className="relative ml-6 max-w-[600px] md:mx-auto mb-24 px-4 md:px-0 z-30 mt-2">
        <div className="space-y-2">
          {jobs.map(job => (
            <a key={job.company} href={job.url} target="_blank" className="group grid grid-cols-[70px_1fr] items-center gap-4 w-full px-4 py-3 mb-2 border rounded focus:outline-none bg-background overflow-hidden">
              <div className="w-[70px] h-[70px] bg-background rounded-[1px] shadow-logo flex items-center justify-center">
                <div className="relative w-6 h-6">
                  {job.bg}
                  <img src={job.logoUrl} className="rounded-sm relative md:group-hover:scale-105 transition-transform duration-300 delay-75 dark:hidden text-transparent" alt="BetterHelp logo" />
                </div>
              </div>
              <div className="relative">
                <div className="flex items-center md:items-end justify-between">
                  <h2 className="text-gray-0 m-0 text-[18px] md:text-[22px] leading-none" style={{ textRendering: "optimizeLegibility" }}>{job.company}</h2>
                  <div className="relative flex justify-end gap-2 items-center pr-1 md:group-hover:-translate-x-[50px] transition-transform duration-300">
                    <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.21931 1.26524C4.21938 1.03323 4.28323 0.8057 4.40387 0.607519C4.52452 0.409339 4.69732 0.248135 4.90339 0.141525C5.10945 0.0349151 5.34086 -0.0129985 5.57232 0.00302076C5.80378 0.01904 6.02639 0.0983757 6.2158 0.232357C6.40522 0.366339 6.55417 0.549811 6.64636 0.762721C6.73855 0.975632 6.77044 1.20979 6.73855 1.4396C6.70666 1.66941 6.61221 1.88603 6.46552 2.06579C6.31884 2.24555 6.12556 2.38153 5.90681 2.45887V2.81212C5.90681 3.18508 5.75866 3.54276 5.49493 3.80649C5.23121 4.07021 4.87353 4.21837 4.50056 4.21837H2.25056C2.10138 4.21837 1.95831 4.27763 1.85282 4.38312C1.74733 4.48861 1.68806 4.63168 1.68806 4.78087V5.41537C1.9697 5.51489 2.20709 5.71078 2.35826 5.96841C2.50943 6.22604 2.56465 6.52882 2.51416 6.82322C2.46367 7.11763 2.31072 7.38471 2.08235 7.57725C1.85398 7.76979 1.5649 7.87539 1.26619 7.87539C0.967485 7.87539 0.678397 7.76979 0.450027 7.57725C0.221656 7.38471 0.0687093 7.11763 0.0182207 6.82322C-0.0322678 6.52882 0.0229534 6.22604 0.174123 5.96841C0.325293 5.71078 0.562677 5.51489 0.844315 5.41537V2.45887C0.562834 2.35935 0.325597 2.16353 0.174533 1.90601C0.0234692 1.64849 -0.0316944 1.34586 0.0187919 1.05161C0.0692782 0.75735 0.222164 0.490415 0.450427 0.29798C0.678691 0.105545 0.967634 3.91124e-07 1.26619 3.91124e-07C1.56475 3.91124e-07 1.85369 0.105545 2.08195 0.29798C2.31022 0.490415 2.4631 0.75735 2.51359 1.05161C2.56407 1.34586 2.50891 1.64849 2.35785 1.90601C2.20678 2.16353 1.96955 2.35935 1.68806 2.45887V3.49162C1.86548 3.41421 2.057 3.37438 2.25056 3.37462H4.50056C4.64975 3.37462 4.79282 3.31535 4.89831 3.20987C5.0038 3.10438 5.06306 2.9613 5.06306 2.81212V2.45887C4.81625 2.3716 4.60256 2.20995 4.45145 1.99618C4.30034 1.78241 4.21924 1.52703 4.21931 1.26524ZM0.844315 1.26524C0.844315 1.37713 0.888762 1.48444 0.967879 1.56355C1.047 1.64267 1.1543 1.68712 1.26619 1.68712C1.37808 1.68712 1.48538 1.64267 1.5645 1.56355C1.64362 1.48444 1.68806 1.37713 1.68806 1.26524C1.68806 1.15335 1.64362 1.04605 1.5645 0.966932C1.48538 0.887815 1.37808 0.843368 1.26619 0.843368C1.1543 0.843368 1.047 0.887815 0.967879 0.966932C0.888762 1.04605 0.844315 1.15335 0.844315 1.26524ZM5.48494 0.843368C5.37305 0.843368 5.26575 0.887815 5.18663 0.966932C5.10751 1.04605 5.06306 1.15335 5.06306 1.26524C5.06306 1.37713 5.10751 1.48444 5.18663 1.56355C5.26575 1.64267 5.37305 1.68712 5.48494 1.68712C5.59683 1.68712 5.70413 1.64267 5.78325 1.56355C5.86237 1.48444 5.90681 1.37713 5.90681 1.26524C5.90681 1.15335 5.86237 1.04605 5.78325 0.966932C5.70413 0.887815 5.59683 0.843368 5.48494 0.843368ZM1.26619 6.18712C1.1543 6.18712 1.047 6.23157 0.967879 6.31068C0.888762 6.3898 0.844315 6.4971 0.844315 6.60899C0.844315 6.72088 0.888762 6.82819 0.967879 6.9073C1.047 6.98642 1.1543 7.03087 1.26619 7.03087C1.37808 7.03087 1.48538 6.98642 1.5645 6.9073C1.64362 6.82819 1.68806 6.72088 1.68806 6.60899C1.68806 6.4971 1.64362 6.3898 1.5645 6.31068C1.48538 6.23157 1.37808 6.18712 1.26619 6.18712Z" fill="var(--gray-75)"></path>
                    </svg>
                    <p className="text-[10px] md:text-xs text-muted-foreground mb-[2px] tracking-tighter">{job.startDate} &mdash; {job.endDate}</p>
                  </div>
                </div>
                <div className="md:flex items-center justify-between">
                  <span className="text-xs block md:text-sm text-foreground/75">{job.title}</span>
                  <div className="relative flex gap-1 mt-[3px] -ml-1 md:group-hover:-translate-x-[50px] transition-transform duration-300 delay-75">
                    <div className="text-xs text-muted-foreground max-w-[7.5rem] md:max-w-full text-nowrap truncate bg-border/50 border px-2 py-1 leading-none rounded-[8px] md:rounded-[10px]">{job.location}</div>
                  </div>
                </div>
                <div className="absolute -right-[55px] top-1/2 group -translate-y-1/2 flex items-center justify-center text-muted-foreground hover:text-foreground bg-muted h-9 w-9 rounded-full border rotate-90 md:group-hover:-translate-x-[55px] md:group-hover:rotate-0 transition-transform duration-300 delay-75 ">
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 1H8M8 1V5.66667M8 1L3.33333 5.66667L1 8" className="stroke-current transition duration-200"></path>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
        <Line className="left-1 md:-left-6">HST</Line>
      </div>

      <div className="relative ml-6 max-w-[600px] md:mx-auto pl-6 pr-4 md:px-0">
        <h2 className="text-2xl mb-4">About me</h2>
        <p className="mb-4 leading-7 text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatem officia mollitia maiores hic sit, eum ratione quod. Impedit, illo fuga sunt labore expedita ut! Eaque, aliquam accusantium odit aperiam minus sunt nesciunt? Vero ullam, sequi accusantium aliquid doloribus architecto.</p>
        <p className="mb-4 leading-7 text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe vero consequatur odio eos qui possimus nesciunt quas expedita voluptas?</p>
        <Line className="left-1 md:-left-6">ABT</Line>
      </div>

      <div className="relative max-w-[600px] md:mx-auto -mt-8 -mb-4 pl-10 pr-4 md:px-0 ">
        <div className="pt-12 pb-16">
          <a href="/">
            <blockquote className="leading-7 bg-background border rounded overflow-hidden shadow-super">
              <svg className="opacity-75" width="100%" height="24px" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="pattern-75" patternUnits="userSpaceOnUse" width="4" height="4">
                    <g clip-path="url(#clip0)">
                      <path d="M1 -1L5 3" stroke-width="0.5"></path>
                      <path d="M-1 1L3 5" stroke-width="0.5"></path>
                    </g>
                  </pattern>
                  <clipPath id="clip0">
                    <rect width="4" height="4" fill="white"></rect>
                  </clipPath>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-75)"></rect>
              </svg>
              <div className="pt-6 pb-8 px-10 md:py-12 md:px-14">
                <p className="relative text-lg mb-3 [font-family:var(--font-heading)]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, id?</p>
                <p className="relative text-lg mb-4 [font-family:var(--font-heading)]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut laudantium inventore repudiandae odit minus placeat explicabo.</p>
                <footer className="flex items-center gap-3 text-sm mt-10">
                  <img src="/1611002298561.jpeg" alt="" className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="mr-2 text-foreground/80">Lorem, ipsum.</div>
                    <div className="text-foreground/50">Dolor sit.</div>
                  </div>
                  <div className="ml-auto mr-2">
                    <div className="relative h-6 w-6">
                      <img src="https://pssbvzyatajutwslvzgk.supabase.co/storage/v1/object/public/logos/vercel.svg" alt="" className="absolute top-0 left blur-lg opacity-50" />
                      <img src="https://pssbvzyatajutwslvzgk.supabase.co/storage/v1/object/public/logos/vercel.svg" alt="" className="absolute top-0 left-0" />
                    </div>
                  </div>
                </footer>
              </div>
            </blockquote>
          </a>
          <Line className="left-5 md:-left-8">REC</Line>
        </div>
      </div>

      <div className="relative ml-6 max-w-[600px] md:mx-auto pl-6 pr-4 md:px-0 mb-8">
        <h2 className="text-2xl mb-4">Writing</h2>
        <div className="text-muted-foreground">
          <p className="mb-4 leading-7">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <p className="mb-4 leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugit atque dolor est consequuntur alias odio tempore porro mollitia nihil.</p>
          <p className="mb-4 leading-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate ipsam tempora deleniti corporis ratione itaque non deserunt. Rerum.</p>
          <p className="mb-4 leading-7">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem odio esse vitae non. Id sequi aperiam temporibus cum error quae inventore reprehenderit hic beatae doloremque, alias soluta nostrum, expedita nam labore. Temporibus mollitia dolore corporis!</p>
        </div>
        <Line className="left-1 md:-left-6">WRI</Line>
      </div>

      <div className="relative ml-6 max-w-[600px] md:mx-auto pl-6 pr-4 md:px-0 mb-20">
        <h2 className="text-2xl mb-4">Connect with me</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <a href="https://github.com/jrcairns" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="underline inline-flex items-center">
                https://github.com/jrcairns
                <ExternalLink className="h-3 w-3 ml-1" />
              </span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/_justincairns" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="underline inline-flex items-center">
                https://twitter.com/_justincairns
                <ExternalLink className="h-3 w-3 ml-1" />
              </span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/justin-cairns-9ba580177/" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="underline inline-flex items-center">
                https://www.linkedin.com/in/justin-cairns-9ba580177/
                <ExternalLink className="h-3 w-3 ml-1" />
              </span>
            </a>
          </li>
        </ul>
        <Line className="left-1 md:-left-6">CON</Line>
      </div>

      <footer>
        <div className="relative ml-6 max-w-[600px] md:mx-auto pl-6 pr-4 md:px-0 items-center justify-between">
          <div>
            <span className="block [font-family:var(--font-heading)]">
              <div className="text-3xl md:text-4xl leading-none md:leading-none font-light" style={{ textRendering: "optimizeLegibility" }}>Justin</div>
              <div className="relative -left-1 inline-block text-3xl md:text-4xl text-light leading-none md:leading-none font-light">Cairns
                <div className="absolute top-0 -right-3 font-mono text-[8px] md:text-[9px] text-muted-foreground">
                  DEV
                </div>
              </div>
            </span>
            <p className="mt-2 text-muted-foreground max-w-80">Design engineer</p>
          </div>
          <Line className="left-1 md:-left-6">FOT</Line>
        </div>
        <div className="relative ml-6 max-w-[600px] md:mx-auto pl-6 pr-4 md:px-0 items-center justify-between mt-8 mb-20">
          <div className="text-sm md:text-base text-foreground">© Copyright</div>
          <div className="flex gap-1 mt-1 text-muted-foreground">
            <div className="text-xs md:text-sm bg-muted border px-2 pt-[3px] pb-[2px] md:py-[2px] leading-none rounded-[8px] md:rounded-[10px]">{new Date().getFullYear()}</div>
          </div>
          <Line className="left-1 md:-left-6">COP</Line>
        </div>
        <div className="flex h-24">
          <div className="w-1/2 opacity-50">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="pattern-50" patternUnits="userSpaceOnUse" width="4" height="4"><g clip-path="url(#clip0)"><path d="M1 -1L5 3" className="stroke-[#a6a6a6]" stroke-width="0.5"></path><path d="M-1 1L3 5" className="stroke-[#a6a6a6]" stroke-width="0.5"></path></g></pattern><clipPath id="clip0"><rect width="4" height="4" fill="white"></rect></clipPath></defs><rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-50)"></rect>
            </svg>
          </div>
          <div className="w-1/2 scale-x-[-1]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="pattern-50" patternUnits="userSpaceOnUse" width="4" height="4"><g clip-path="url(#clip0)"><path d="M1 -1L5 3" className="stroke-[#a6a6a6]" stroke-width="0.5"></path><path d="M-1 1L3 5" className="stroke-[#a6a6a6]" stroke-width="0.5"></path></g></pattern><clipPath id="clip0"><rect width="4" height="4" fill="white"></rect></clipPath></defs><rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-50)"></rect></svg>
          </div>
        </div>
      </footer>

      <form className="fixed bottom-2 md:bottom-5 flex justify-center w-full z-30">
        <label className="bg-background/80 backdrop-blur-md rounded relative w-full mx-2 md:w-[620px] animate-wipe-up" htmlFor="subscribe">
          <div className="absolute w-full h-full rounded shadow-email animate-delay-opacity pointer-events-none"></div>
          <input id="subscribe" type="email" placeholder="justin@example.com" className="bg-transparent border w-full h-14 px-6 py-2 text-sm md:text-base rounded focus:outline-none focus:ring-1 focus:ring-foreground placeholder:text-muted-foreground/50" name="subscribe" />
          <Button className="absolute top-1/2 right-2 -translate-y-1/2 border shadow-super">
            Subscribe
          </Button>
        </label>
      </form>
    </div>
  );
}


const jobs = [
  {
    company: "BetterHelp",
    title: "Senior Frontend Software Engineer",
    location: "Mountain View, US",
    startDate: "2022",
    endDate: "Present",
    logoUrl: "/bh.jpeg",
    url: "https://betterhelp.com",
    bg: (<img className="absolute top-0 left-0 blur-lg opacity-25 md:group-hover:opacity-75 transition-opacity text-transparent" src="/bh.jpeg" />)
  },
  {
    company: "Coinsmart",
    title: "Frontend Software Engineer",
    location: "Toronto, CA",
    startDate: "2021",
    endDate: "2022",
    logoUrl: "/coinsmart.jpeg",
    url: "https://coinsmart.com",
    bg: (<div className="absolute top-0 left-0 blur-lg opacity-25 md:group-hover:opacity-75 transition-opacity text-transparent bg-gradient-to-bl from-[#E35D6D] to-[#6244EA] w-6 h-6" />)
  },
  {
    company: "After Digital",
    title: "Frontend Software Engineer",
    location: "Glasgow, UK",
    startDate: "2019",
    endDate: "2021",
    logoUrl: "/afterdigital.jpeg",
    url: "https://afterdigital.co.uk",
    bg: (<img className="absolute top-0 left-0 blur-lg opacity-25 md:group-hover:opacity-75 transition-opacity text-transparent" src="/afterdigital.jpeg" />)
  },
]