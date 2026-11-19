const fileUpload = (req, res) => {
    try {
        let { file, body } = req;
        console.log(body);
        console.log(file);

        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        else {
            return res.status(200).json({ message: 'File uploaded successfully', file: req.file });
        }
    } catch (error) {
        return res.status(500).json({ error: 'File upload failed' });
    }
};

module.exports = { fileUpload };