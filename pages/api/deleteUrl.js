import dbConnect from "@/backend/config/dbConnect"
import Url from "@/backend/models/ShortUrl";
const handler = async (req, res) => {
    await dbConnect()
    switch (req.method) {
        case "POST":
            console.log(req.body.slug);
            const update = await Url.findOneAndDelete({ slug: req.body.slug })
            res.status(200).json({ success: true })
            break;
        default:
            break;
    }
}

export default handler