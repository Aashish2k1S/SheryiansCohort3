# Day 8: File Handling (Multer & Middleware)

## 1. Project Architecture

Separating `app.js` (Express setup, routes, middleware) from `server.js` (starting the server with `app.listen`) keeps your endpoints decoupled, cleaner to maintain, and easier to test.

```text
├── server.js            # Imports app.js and starts the server
└── src/
    ├── app.js           # Express config, middleware, and route mounting
    ├── config/
    │   └── multer.js    # Multer storage configuration
    ├── routes/
    │   └── file.route.js
    ├── controllers/
    └── models/

```

---

## 2. Middleware (The Gatekeeper)

Middleware sits between an incoming request (`req`) and your final route handler (`res`). It takes three arguments: `(req, res, next)`.

> **Golden Rule:** You can only send a response **once** per request. Either stop the request in the middleware (e.g., send an error) **or** call `next()` to pass it forward—never both.

```js
app.get('/',
  // 1. Middleware
  (req, res, next) => {
    console.log('Middleware executed');

    const isAuthorized = true;
    if (isAuthorized) {
      next(); // Pass control to the next middleware or route handler
    } else {
      res.status(403).send('Forbidden'); // Stop here and respond
    }
  },
  // 2. Final Route Handler
  (req, res) => {
    res.send('Hello, World!');
  }
);

```

---

## 3. Multer (File Upload Middleware)

**Multer** is Express middleware used to handle file/media uploads (`multipart/form-data`) in APIs. It gives you two main storage strategies:

| Storage Type | Where it Saves | File Format | Best Used For |
| --- | --- | --- | --- |
| **`diskStorage`** | Local server / project folder | Saved directly to disk | Local storage, simple apps |
| **`memoryStorage`** | Server RAM (temporary) | `Buffer` (in `req.file.buffer`) | Cloud uploads (S3, Cloudinary, ImageKit) |

### Option A: `diskStorage` (Local Storage)

Saves files directly to your machine/server. You control the folder (`destination`) and the file naming (`filename`).

**1. Configure Multer (`src/config/multer.js`):**

```js
const multer = require('multer');

const storageForLocal = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Folder where files will be saved
  },
  filename: (req, file, cb) => {
    // Tip: Validate file size, type, or naming conventions here
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storageForLocal });

module.exports = upload;

```

**2. Use it in a Route (`src/routes/file.route.js`):**
Use `upload.single('fieldName')` as middleware before your route handler. Multer attaches the uploaded file to `req.file` and text fields to `req.body`.

```js
const express = require('express');
const upload = require('../config/multer');

const router = express.Router();

router.post('/', upload.single('file'), (req, res) => {
  try {
    const body = req.body; // Text fields
    const file = req.file; // Uploaded file metadata

    console.log({ body, file });

    return res.status(200).json({
      data: body,
      message: 'File uploaded successfully'
    });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

```

### Option B: `memoryStorage` (Cloud Storage)

Holds the file in memory as a **Buffer** instead of writing it to your hard drive, making it fast to forward to cloud providers (AWS S3, Cloudinary, ImageKit).

```js
const multer = require('multer');

const storageForMemory = multer.memoryStorage();
const upload = multer({ storage: storageForMemory });

module.exports = upload;

```