import { db } from '~/server/db'

export const dynamic = "force-dynamic"

export default async function HomePage() {
    const images = await db.query.images.findMany({
        orderBy: (model, { desc }) => desc(model.id)
    })

    return (
        <main>
            <div className="flex flex-wrap gap-4">
                {images.map((image, index) => (
                    <div key={image.id + index} className="w-48 h-20">
                        <img src={image.url} alt={"image " + image.id} className="w-48 h-20 object-cover" />
                        <div>{image.name}</div>
                    </div>
                ))}
            </div>
        </main>
    );
}
