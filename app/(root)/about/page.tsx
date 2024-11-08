export default async function About({ searchParams }: {
    searchParams: Promise<{ query?: string }>
}) {
    console.log(searchParams)
    return (
        <>
            <div className="mx-auto pt-8">
                {/* <div className="max-w-6xl mx-auto pt-8"> */}
                About Content Goes Here
            </div>
        </>
    );
}
