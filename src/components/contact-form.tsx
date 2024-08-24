'use client'

import { useState } from 'react';
import { submitContactForm } from '@/app/actions/contact';
import { SubmitButton } from './submit-button';
import { DialogClose } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

export function ContactForm() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (formData: FormData) => {
        const result = await submitContactForm(formData);
        if (result.success) {
            setFormSubmitted(true);
        }
    };

    if (formSubmitted) {
        return (
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Thank you!</h2>
                <p className="text-muted-foreground">Your message has been sent successfully. I&apos;ll get back to you soon.</p>
            </div>
        );
    }

    return (
        <div>
            <p className="font-semibold mb-1">Send me a message</p>
            <p className="mb-4 text-muted-foreground">Leave your information below, and I&apos;ll follow up shortly. Reach out directly on <a className="inline-flex underline hover:text-foreground transition-colors" href="https://www.linkedin.com/in/justin-cairns-9ba580177/" target="_blank">Linkedin <ExternalLink className="h-3 w-3 ml-px" /></a> or <a href="https://x.com/_justincairns" target="_blank" className="inline-flex underline hover:text-foreground transition-colors">X <ExternalLink className="ml-px h-3 w-3" /></a> for a quicker response.</p>
            <ul className="pl-3.5 mb-4 list-disc text-muted-foreground space-y-2 text-sm">
                <li>Full-time & contract positions</li>
                <li>Short-term freelance <div className="text-xs text-muted-foreground inline text-nowrap truncate bg-border/50 border px-1.5 py-0.5 leading-none rounded-[8px] md:rounded-[10px]">40hr+</div></li>
                <li>React architecture consultation <div className="text-xs text-muted-foreground inline text-nowrap truncate bg-border/50 border px-1.5 py-0.5 leading-none rounded-[8px] md:rounded-[10px]">12hr+</div></li>
            </ul>
            <form action={handleSubmit}>
                <input
                    required
                    id="name"
                    type="text"
                    placeholder="Name"
                    className="mb-2 bg-background border w-full h-10 px-4 py-2 text-sm md:text-base rounded focus:outline-none focus:ring-1 focus:ring-foreground placeholder:text-muted-foreground/50"
                    name="name"
                />
                <input
                    required
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="mb-2 bg-background border w-full h-10 px-4 py-2 text-sm md:text-base rounded focus:outline-none focus:ring-1 focus:ring-foreground placeholder:text-muted-foreground/50"
                    name="email"
                />
                <input
                    id="link"
                    type="text"
                    placeholder="Link to job post (optional)"
                    className="bg-background border w-full h-10 px-4 py-2 text-sm md:text-base rounded focus:outline-none focus:ring-1 focus:ring-foreground placeholder:text-muted-foreground/50"
                    name="link"
                />
                <div className="flex mt-4 space-x-2 justify-end">
                    <DialogClose className="rounded px-3 py-2 inline-block text-xs md:text-sm text-muted-foreground/50 hover:text-muted-foreground focus:text-muted-foreground transition-colors focus:outline-none focus:ring-1 focus:ring-foreground">Cancel</DialogClose>
                    <SubmitButton />
                </div>
            </form>
        </div>
    );
}