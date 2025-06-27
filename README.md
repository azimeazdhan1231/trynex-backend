
# TryNex Lifestyle E-commerce Backend

A complete Node.js + Express backend for TryNex Lifestyle e-commerce platform with MongoDB integration and admin panel.

## 🚀 Features

- **RESTful API** for products, orders, reviews, and banners
- **MongoDB** integration with Mongoose ODM
- **JWT Authentication** for secure admin access
- **File Upload** system with Multer
- **Admin Panel** with dashboard and management tools
- **CORS Configuration** for Netlify frontend
- **Rate Limiting** for API security
- **Input Validation** and error handling

## 📁 Project Structure

```
📂 backend/
 ├── 📂 routes/           # API route handlers
 ├── 📂 models/           # MongoDB schemas
 ├── 📂 middleware/       # Authentication middleware
 ├── 📂 views/            # Admin panel HTML pages
 ├── 📂 uploads/          # File upload directory
 ├── .env.example         # Environment variables template
 ├── server.js            # Main server file
 └── package.json         # Dependencies
```

## 🛠 Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
Create a `.env` file:
```env
MONGO_URI=mongodb+srv://azimeazdhantarafdar:azimeazdhan@cluster0.b6bt3fc.mongodb.net/trynex?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=development
PORT=5000
```

### 3. Run Locally
```bash
npm run dev
```

Server will start at: `http://localhost:5000`

## 📊 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/featured` - Get featured products
- `GET /api/products/:id` - Get single product
- `GET /api/products/category/:category` - Get products by category

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get order by ID
- `GET /api/orders/number/:orderNumber` - Get order by number

### Admin Authentication
- `POST /api/admin/login` - Admin login
- `GET /api/admin/analytics` - Dashboard analytics

### File Upload
- `POST /api/upload/image` - Upload single image
- `POST /api/upload/images` - Upload multiple images

## 👨‍💼 Admin Panel

Access the admin panel at: `http://localhost:5000/admin`

**Default Admin Credentials:**
- Username: `admin`
- Password: `admin123`

### Admin Features:
- Dashboard with analytics
- Product management (CRUD)
- Order management
- Review moderation
- Banner/slider management
- User management

## 🌐 Deployment on Render

### 1. Connect Repository
- Link your GitHub repository to Render
- Select "Web Service" deployment

### 2. Build Settings
```
Build Command: npm install
Start Command: npm start
```

### 3. Environment Variables
Add these in Render dashboard:
```
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret
NODE_ENV=production
```

### 4. Deploy
- Click "Deploy" and wait for build completion
- Your API will be available at: `https://your-app-name.onrender.com`

## 🔗 Frontend Integration

Update your Netlify frontend to use the deployed backend URL:

```javascript
// In your frontend API configuration
const API_BASE_URL = 'https://your-backend-url.onrender.com/api';
```

## 🔒 Security Features

- **Helmet** for security headers
- **CORS** configured for specific origins
- **Rate Limiting** to prevent abuse
- **JWT** authentication for admin routes
- **bcrypt** password hashing
- **Input validation** and sanitization

## 📝 Database Schema

### Products
- Name, description (Bengali/English)
- Price, original price, discount
- Category, images
- Featured flag, stock status
- Customization options

### Orders
- Customer information
- Items with quantities and customization
- Order status tracking
- Total amount calculation

### Admins
- Username, email, encrypted password
- Role-based access (admin/super_admin)
- Login tracking

## 🔧 Development

### Run in Development Mode
```bash
npm run dev
```

### Database Operations
- MongoDB Atlas handles database management
- Automatic admin user creation on first run
- Data persistence and backup through MongoDB Atlas

## 📞 Support

For any issues or questions:
- Check server logs for errors
- Verify MongoDB connection
- Ensure environment variables are set correctly
- Check CORS configuration for frontend integration

## 🎯 Next Steps

1. **Deploy to Render** following the deployment guide
2. **Update frontend** to use the new backend URL
3. **Test all functionality** including admin panel
4. **Set up monitoring** and logging for production
5. **Configure SSL** and security certificates

Your TryNex backend is now ready for production! 🚀
