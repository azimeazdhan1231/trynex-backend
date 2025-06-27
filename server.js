
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
require('dotenv').config();

const app = express();

// Security middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});
app.use('/api/', limiter);

// CORS Configuration - Allow only your Netlify site
const corsOptions = {
  origin: [
    'https://trynex.netlify.app',
    'https://www.trynex.netlify.app',
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:5000'
  ],
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
};
app.use(cors(corsOptions));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB Connection
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb+srv://azimeazdhantarafdar:azimeazdhan@cluster0.b6bt3fc.mongodb.net/trynex?retryWrites=true&w=majority&appName=Cluster0';
    
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('🍃 MongoDB Connected Successfully');
    
    // Initialize default admin user
    await initializeAdmin();
    
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    process.exit(1);
  }
};

// Initialize default admin user
const initializeAdmin = async () => {
  try {
    const Admin = require('./models/Admin');
    const bcrypt = require('bcryptjs');
    
    const adminExists = await Admin.findOne({ username: 'admin' });
    
    if (!adminExists) {
      const hashedPassword = await bcrypt.hash('admin123', 12);
      
      const defaultAdmin = new Admin({
        username: 'admin',
        email: 'admin@trynex.com',
        password: hashedPassword,
        role: 'super_admin'
      });
      
      await defaultAdmin.save();
      console.log('✅ Default admin user created - Username: admin, Password: admin123');
    } else {
      console.log('✅ Admin user already exists');
    }
  } catch (error) {
    console.error('❌ Error initializing admin:', error.message);
  }
};

// Import Routes
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const adminRoutes = require('./routes/admin');
const uploadRoutes = require('./routes/upload');

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/upload', uploadRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'TryNex Backend Server Running',
    timestamp: new Date().toISOString(),
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
  });
});

// Admin Panel - Serve static HTML for admin interface
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'admin-login.html'));
});

app.get('/admin/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'admin-dashboard.html'));
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    message: 'The requested endpoint does not exist'
  });
});

// Global error handler
app.use((error, req, res, next) => {
  console.error('❌ Global Error:', error);
  
  const status = error.statusCode || 500;
  const message = error.message || 'Internal Server Error';
  
  res.status(status).json({
    error: message,
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
  });
});

// Start server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  
  app.listen(PORT, '0.0.0.0', () => {
    console.log('🚀 TryNex Backend Server Started');
    console.log(`📡 Server running on port ${PORT}`);
    console.log(`🌐 API available at: http://localhost:${PORT}/api`);
    console.log(`👨‍💼 Admin panel at: http://localhost:${PORT}/admin`);
    console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  });
};

startServer().catch(console.error);

module.exports = app;
