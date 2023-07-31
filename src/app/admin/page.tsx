import {prisma} from "@/../route"


export default async function Page() {

        const postItem = await prisma.post.findMany({})

    return (
        <div className="min-h-screen">
            {postItem.map((item) =>
                <div className="flex flex-row gap-3">
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                    <p>{item.kontak}</p>
                    <p>{String(item.published)}</p>
                </div>
            )}
        </div>
    )
}