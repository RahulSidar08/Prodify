
#  PRODIFY

PRODIFY is a full-stack e-commerce-style web app that allows users to browse products and admins to manage products. Built using the MERN stack with modern tools and clean UI.


 #  Features


- 🔐 Authentication: Register, login, and logout using secure cookies

- 👥 Role-Based Access Control:

        Users can view and browse all listed products

        Admins can create, edit, and delete products

- 🧾 React Hook Form: For form validation and handling

- ☁️ Cloudinary Integration: Upload product images from the frontend and store them on Cloudinary

- 📂 Multer Middleware: Handle file uploads in Node.js

- ⚡ Clean RESTful APIs with Express and MongoDB

- 🎨 Tailwind CSS: Responsive and modern UI







## Tech Stack

- Frontend: React.js, Tailwind CSS, React Hook Form, Axios

- Backend: Node.js, Express.js, MongoDB, Mongoose, Cloudinary, Multer

- Auth: JWT + Cookies (secure session handling)


## Running Tests

Clone the Repository

```bash
https://github.com/RahulSidar08/Prodify.git
```
Backend Setup

```bash
cd backend
npm install
```

Create a .env file inside the backend directory with the following:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```
Run the server:
```bash
npm run dev
```

Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open your browser and visit:
```bash
http://localhost:5173
```
