const handler = async (req, res) => {
    switch (req.method) {
        case "POST":
            res.status(200).json({ success: true, Hello: "hi" })
            break;
        default:
            res.status(200).json({ success: false, Hello: "bye" })
            break;
    }
}

export default handler
