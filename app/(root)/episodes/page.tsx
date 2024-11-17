export default async function Episodes({ searchParams }: {
    searchParams: Promise<{ query?: string }>
}) {
    console.log(searchParams)
    return (
        <>
            <section className="section_container">
                <h1 className="md:text-4xl font-bold">
                    Episodes
                </h1>
                <div className="py-4">
                    <input
                        className='my-2 p-2 w-full border rounded'
                        placeholder='Search'
                    >
                    </input>
                </div>
                <div>
                    {/* nextjs paginated list  */}
                    <div className="bg-[#fefe21] p-4">
                        <div className="text-sm text-slate-400">
                            Nov 19, 2024
                        </div>
                        <div className="font-bold text-lg">
                            Final Fantasy 7, Crisis Core, and the Confusing Remake
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className="max-w-6xl mx-auto pt-8"> */}
        </>
    );
}
