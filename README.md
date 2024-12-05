# Form Builder Backend API

A robust Node.js backend service for the Form Builder application that handles dynamic form creation, management, and response processing. This backend supports multiple question types including Categorization, Cloze (Fill in the blanks), and Comprehension questions.

## 🚀 Features

- **Dynamic Form Management**: Create and manage forms with multiple question types
- **Image Upload Support**: Integrated with Cloudinary for image storage
- **Multiple Question Types**:
  - Categorize: Match items to their categories
  - Cloze: Fill in the blanks with provided options
  - Comprehension: Answer questions based on a passage
- **RESTful API**: Well-structured endpoints following REST principles
- **MongoDB Integration**: Flexible document storage with Mongoose ODM
- **CORS Enabled**: Cross-Origin Resource Sharing support for frontend integration

## 🛠️ Technical Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Image Storage**: Cloudinary
- **File Upload**: Multer middleware
- **Environment Variables**: dotenv
- **CORS**: cors middleware

## 📋 Prerequisites

Before running the application, ensure you have:

- Node.js (v14 or higher)
- MongoDB instance (local or Atlas)
- Cloudinary account for image storage
- npm or yarn package manager

## 🔧 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd form-app-server
```

2. Install dependencies:

```bash
npm install
```

3. Configure Environment Variables:
   Create a `.env` file in the root directory with the following configuration:

```env
# MongoDB Configuration
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>
# Example: mongodb+srv://john:pass123@cluster0.mongodb.net/formbuilder

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Server Configuration (optional)
PORT=4000
NODE_ENV=development

# CORS Configuration (optional)
ALLOWED_ORIGINS=http://localhost:3000,https://yourfrontend.com
```

### Environment Variables Explanation:

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string. Can be local or Atlas URI | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `CLOUDINARY_CLOUD_NAME` | Your Cloudinary cloud name from dashboard | `myapp-cloud` |
| `CLOUDINARY_API_KEY` | Cloudinary API key from dashboard | `123456789012345` |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret from dashboard | `abcdefghijklmnopqrstuvwxyz123` |
| `PORT` | Port number for the server (optional) | `4000` |
| `NODE_ENV` | Environment mode (optional) | `development` or `production` |
| `ALLOWED_ORIGINS` | Comma-separated list of allowed CORS origins (optional) | `http://localhost:3000,https://myapp.com` |

### Important Notes:

- Never commit your `.env` file to version control
- Keep your Cloudinary and MongoDB credentials secure
- In production, use secure environment variable management
- Make sure to add `.env` to your `.gitignore` file

## 🔗 API Documentation

- **Swagger**: Accessible via `/api-docs` endpoint
- **Postman Collection**: Available for testing via Postman

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 📝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## 📞 Contact

For any questions or inquiries, please contact the project maintainers at [your-email@example.com](mailto:your-email@example.com).

## 📅 Release History

- **v1.0.0**: Initial release
- **v1.1.0**: Added image upload support
- **v1.2.0**: Added multiple question types
- **v1.3.0**: Added RESTful API documentation
- **v1.4.0**: Added environment variable configuration
- **v1.5.0**: Added CORS support

## 📚 References

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Cloudinary](https://cloudinary.com/)
- [Multer](https://github.com/expressjs/multer)
- [dotenv](https://github.com/motdotla/dotenv)
- [cors](https://github.com/expressjs/cors)

## 📜 Code of Conduct

Please read the [Code of Conduct](CODE_OF_CONDUCT.md) before contributing to this project.

## 📄 Copyright

Copyright © 2023 Your Name. All rights reserved.