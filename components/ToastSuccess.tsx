'use client'

import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

export function ToastSuccess() {
    const { toast } = useToast()

    return (
        <Button
            variant="outline"
            className="border-lime-200"
            onClick={() => {
                toast({
                    description: 'Your message has been sent.',
                })
            }}
        >
            Show Toast
        </Button>
    )
}
