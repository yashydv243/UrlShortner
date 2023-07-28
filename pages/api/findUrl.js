import dbConnect from "@/backend/config/dbConnect"
import Url from "@/backend/models/ShortUrl";
const handler = async (req, res) => {
    await dbConnect()
    switch (req.method) {
        case "POST":
            const findSlug = await Url.find({ slug: req.body.slug })
            if (findSlug[0]) {
                res.status(200).json({ success: true, url: findSlug[0].url })
            }else{
                res.status(400).json({ success: false })
            }
            break;
        default:
            break;
    }
}

export default handler