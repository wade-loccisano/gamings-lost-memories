export default async function Episodes({ searchParams }: {
    searchParams: Promise<{ query?: string }>
}) {
    console.log(searchParams)
    return (
        <>
            {/* <div className="max-w-6xl mx-auto pt-8"> */}
            <div className="mx-auto pt-8">
                Episode List Goes Here
            </div>
        </>
    );
}
