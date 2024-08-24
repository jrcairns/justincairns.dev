'use client'

import { useFormStatus } from 'react-dom'
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <Button
            type="submit"
            className="relative z-10 inline-flex items-center px-3 py-2 border rounded text-xs md:text-sm shadow-super"
            disabled={pending}
        >
            {pending ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                </>
            ) : (
                'Submit'
            )}
        </Button>
    )
}