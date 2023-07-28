import dbConnect from "@/backend/config/dbConnect"
import Url from "@/backend/models/ShortUrl";
const handler = async (req, res) => {
    await dbConnect()
    switch (req.method) {
        case "POST":
            const findUrl = await Url.find({ slug: req.body.slug })
            if (findUrl[0]) {
                res.status(200).json({ success: false })

            } else {
                const url = await Url.create({
                    url: req.body.url,
                    slug: req.body.slug
                })
                res.status(200).json({ success: true, url })
            }
            break;
        default:
            break;
    }
}
export default handler