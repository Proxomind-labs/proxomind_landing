# ProxoMind - Advanced AI & Computer Vision Solutions

A beautiful, modern website for ProxoMind, an AI SaaS company specializing in advanced LLM and computer vision projects.

## Features

- Stunning 3D visualizations using Three.js and React Three Fiber
- Responsive design that works on all devices
- Smooth animations and transitions
- Contact form with email sending capability
- Modern UI with gradient effects and glass morphism
- Sections for Home, Features, About, Projects, and Contact

## Technology Stack

### Frontend
- React 18 with TypeScript
- Vite for fast development and building
- Three.js for 3D graphics
- @react-three/fiber and @react-three/drei for React Three integration
- Framer Motion for animations
- Tailwind CSS-inspired styling (custom CSS)
- React Router for navigation

### Backend
- Node.js with Express
- Nodemailer for email sending
- CORS middleware
- Environment variable configuration with dotenv

## Project Structure

```
proxomind_website/
├── public/                 # Static assets
├── src/                    # Frontend source code
│   ├── components/         # Reusable components
│   │   ├── Header.tsx      # Site header with navigation
│   │   ├── Hero.tsx        # Hero section with 3D visualization
│   │   ├── Features.tsx    # Features/services section
│   │   ├── About.tsx       # About us section
│   │   ├── Projects.tsx    # Projects/case studies section
│   │   ├── Contact.tsx     # Contact form with email functionality
│   │   └── Footer.tsx      # Site footer
│   ├── styles/             # CSS stylesheets
│   ├── App.tsx             # Main App component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── backend/                # Backend source code
│   ├── controllers/        # Request handlers
│   │   └── mailController.js # Email sending logic
│   ├── routes/             # API routes
│   │   └── mailRoutes.js   # Email routes
│   ├── utils/              # Utility functions
│   ├── .env                # Environment variables
│   ├── server.js           # Express server
│   └── package.json        # Backend dependencies
├── index.html              # HTML template
├── package.json            # Frontend dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## Setup and Installation

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Frontend Setup
1. Navigate to the project root directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. The frontend will be available at http://localhost:5173

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on the example below (or use the provided one):
   ```
   # Email Configuration
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password

   # Server Configuration
   PORT=5000
   NODE_ENV=development
   ```
4. Start the backend server:
   ```bash
   npm start
   ```
   or
   ```bash
   node server.js
   ```
5. The backend will be available at http://localhost:5000

### Environment Variables

The backend requires the following environment variables in a `.env` file:

- `SMTP_HOST`: SMTP server host (e.g., smtp.gmail.com)
- `SMTP_PORT`: SMTP server port (e.g., 587)
- `SMTP_SECURE`: Whether to use secure connection (true/false)
- `SMTP_USER`: SMTP username/email
- `SMTP_PASS`: SMTP password or app-specific password
- `PORT`: Port to run the server on (default: 5000)
- `NODE_ENV`: Environment (development/production)

## API Endpoints

### Email Service
- **POST** `/api/mail/send`
  - Sends an email to anand@proxomind.com
  - Request Body:
    ```json
    {
      "name": "Sender Name",
      "email": "sender@example.com",
      "subject": "Email Subject",
      "message": "Email message content"
    }
    ```
  - Response:
    ```json
    {
      "success": true,
      "message": "Email sent successfully",
      "info": {
        "messageId": "<message-id>",
        "response": "250 2.0.0 OK"
      }
    }
    ```

## Building for Production

To build the frontend for production:
```bash
npm run build
```

The built files will be in the `dist/` directory.

To preview the production build:
```bash
npm run preview
```

## Design Choices

### Color Scheme
- Primary: Indigo (#6366f1) to Violet (#8b5cf6) gradient
- Background: Dark navy (#0f0f23) to slightly lighter navy (#1a1a2e)
- Accents: Pink (#ec4899) for highlights
- Text: Light gray (#e2e8f0) for primary text, muted gray (#94a3b8) for secondary

### Typography
- Font family: Inter, system-ui fallback
- Clear hierarchy with appropriate heading sizes
- Ample whitespace for readability

### 3D Visualization
The hero section features a neural network-inspired 3D visualization:
- Central sphere representing the core AI/node
- Orbiting spheres representing connected nodes/data points
- Connections between nodes showing relationships
- Interactive orbit controls for exploration
- Emissive materials for a glowing, tech-forward feel

### Responsiveness
The design is fully responsive with breakpoints at:
- 1024px: Tablet layout adjustments
- 768px: Mobile layout (stacked columns)
- 640px: Small mobile adjustments

## Email Functionality

The contact form sends emails to anand@proxomind.com through the backend API. The email includes:
- Sender's name and email address
- Subject line
- Formatted message content
- Professional HTML styling
- Clear identification as coming from the ProxoMind website form

## Deployment

### Frontend
The frontend can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

### Backend
The backend can be deployed to any Node.js hosting service:
- Vercel (serverless functions)
- Netlify Functions
- AWS Lambda
- Google Cloud Functions
- Traditional VPS/Droplet
- Heroku
- Render.com

## Future Enhancements

1. Add real-time validation to the contact form
2. Implement file upload capability for project inquiries
3. Add admin dashboard to view form submissions
4. Integrate analytics for tracking user engagement
5. Add multilingual support
6. Implement dark/light mode toggle
7. Add blog section with markdown support
8. Integrate with CRM systems for lead management
9. Add testimonials/client logos section
10. Implement lazy loading for images and components

## License

This project is proprietary and confidential to ProxoMind.

## Contact

For inquiries, please contact: anand@proxomind.com
