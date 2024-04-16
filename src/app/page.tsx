import { db } from '~/server/db'

export const dynamic = "force-dynamic"

const mockUrls = [
    'https://utfs.io/f/79a19855-dc92-4a3c-895c-2b29ea65c723-czuhp7.jpeg',
    'https://utfs.io/f/fbd89100-e948-43b3-a424-6321c467e7af-czuhp5.jpeg',
    'https://utfs.io/f/b31ad8a4-9a31-49c8-b4de-23cb74043b29-2pkutv.jpeg',
    'https://utfs.io/f/ae26ff68-33d2-45b8-aa06-3fb6a023c006-czuhp6.jpeg',
    'https://utfs.io/f/db4d1ba7-3825-43f6-bdbd-9c7309d6d986-czuhp4.jpeg'
]

const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url
}))


export default async function HomePage() {
    const posts = await db.query.posts.findMany()

    console.log(posts)

    return (
        <main>
            <div className="flex flex-wrap gap-4">
                {posts.map((post) => (
                    <div key={post.id}>{post.name}</div>
                ))}
                {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
                    <div key={image.id + index} className="w-48 h-20">
                        <img src={image.url} alt={"image " + image.id} className="w-48 h-20 object-cover" />
                    </div>
                ))}
            </div>
        </main>
    );
}
