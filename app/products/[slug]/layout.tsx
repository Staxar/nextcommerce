export default function DetailsLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <section className="items-center justify-center p-12">
            {children}
        </section>
    )
}
