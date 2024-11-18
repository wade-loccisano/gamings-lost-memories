export default async function About({ searchParams }: {
    searchParams: Promise<{ query?: string }>
}) {
    console.log(searchParams)
    const description: string = `
    Gaming's Lost Memories is a video game podcast covering everything from the most niche JRPG to some of gaming's largest video game franchises. BigReed shares his personal memories and stories that have been lost to the tides of time and provides important context to the history of these gaming events. BigReed is a former Video Game reviewer and author and has been gaming for over 30 years. Bring your nostalgia hats!
    `
    return (
        <>
            <div className="bg-[#F4F2F1]">
                <section className="section_container">
                    <h1 className="md:text-4xl font-bold">
                        About
                    </h1>
                    <div className="py-4">
                        {description}
                    </div>
                </section>
            </div>
        </>
    );
}
