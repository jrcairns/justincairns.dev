import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <div className="sm:max-w-xs w-full sm:mx-auto lg:rounded-xl flex flex-col px-4 sm:px-0">
            <div className="flex">
                <Link href="/" className="flex items-baseline space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                    <span className="text-xl leading-none">&larr;</span>
                    <span className="leadign-none block">Back</span>
                </Link>
            </div>
            <main className="mt-8">
                <ul className="space-y-2">
                    <li className="flex space-x-4 items-center w-full">
                        <Button asChild variant="secondary" className="h-auto w-full justify-center border flex items-center">
                            <a target="_blank" href={`${process.env.NEXT_PUBLIC_CALENDAR_URL}`} className="w-full space-x-2 flex items-center">
                                <span>Book an intro call</span>
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </Button>
                    </li>
                    <li className="flex space-x-4 items-center w-full">
                        <Button asChild variant="secondary" className="h-auto w-full justify-center border flex items-center">
                            <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="w-full space-x-2 flex items-center">
                                <span>Send me an email</span>
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </Button>
                    </li>
                </ul>
            </main>
        </div>
    )
}