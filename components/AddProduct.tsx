'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useId } from 'react'
import { Checkbox } from './ui/checkbox'
import { useToast } from './ui/use-toast'

const formSchema = z.object({
    name: z
        .string()
        .min(2, {
            message: 'Name must be at least 2 characters.',
        })
        .max(255, { message: 'Name can contain max 255 characters.' }),
    prize: z.string({
        required_error: 'Prize is required',
        invalid_type_error: 'Prize must be a number',
    }),
    availability: z.boolean(),
})

export function AddProduct() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            prize: '',
            availability: true,
        },
    })
    const { toast } = useToast()
    const handleSaveData = async (values: any) => {
        const response = await fetch('/api/saveData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: values }),
        })

        if (response.ok) {
            toast({
                variant: 'default',
                description: 'Data saved successfully!',
                color: 'green',
                className: 'border-green-400',
            })
        } else {
            toast({ variant: 'destructive', description: 'Request failed!' })
        }
    }

    function onSubmit(values: z.infer<typeof formSchema>) {
        handleSaveData(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    key={useId()}
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Product name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter product name"
                                    maxLength={255}
                                    alt="name"
                                    autoComplete="name"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    key={useId()}
                    control={form.control}
                    name="prize"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Prize</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter prize"
                                    alt="prize"
                                    maxLength={255}
                                    type="number"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    key={useId()}
                    control={form.control}
                    name="availability"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Availability</FormLabel>
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
