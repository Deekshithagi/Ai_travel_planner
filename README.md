#  AI-Powered Travel Planner  
A full-stack MERN web application that generates personalized travel itineraries using **AI model (OpenRouter Integration)**.  
Users can **register, log in, input trip details, and instantly receive an AI-generated travel plan** which is also saved to the database.

---

##  Features

###  Authentication  
- Register & Login functionality  
- JWT-based token authentication  
- Protected backend routes  

###  AI Travel Plan Generation  
- Generates a customized itinerary using OpenRouter’s AI models  
- Takes destination, budget, days, and interests  
- Returns structured AI-generated text  

###  Database & User Data  
- MongoDB stores user accounts and itineraries  
- Each itinerary is linked to a user via email  
- Passwords securely hashed  

###  Frontend UI  
- Built with React.js  
- Clean, responsive interface  
- Background image support  
- React Router navigation  

---

##  Tech Stack

**Frontend:**  
- React.js  
- Axios  
- React Router  
- CSS  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- JWT Authentication  
- Bcrypt  

**AI Integration:**  
- OpenRouter API  
- Model used: `mistralai/mistral-7b-instruct`

---

## Project Structure
```
ai-travel-planner/
│
├── client/
│ ├── public/
│ │ └── img/
│ └── src/
│ ├── components/
│ │ ├── LoginForm.js
│ │ ├── RegisterForm.js
│ │ ├── TravelForm.js
│ │ └── Itinerary.js
│ ├── App.js
│ ├── App.css
│ └── index.js
│
├── server/
│ ├── controllers/
│ │ ├── authController.js
│ │ └── plannerController.js
│ ├── middleware/
│ │ └── authMiddleware.js
│ ├── models/
│ │ ├── User.js
│ │ └── Plan.js
│ ├── routes/
│ │ ├── auth.js
│ │ └── planner.js
│ ├── index.js
│ ├── package.json
│ └── .env
```


---

##  How It Works

### 1️⃣ User Authentication  
- User registers → credentials stored securely  
- Passwords hashed with bcrypt  
- JWT token generated upon login  
- Token sent with every request to protected routes  

### 2️⃣ User Inputs Travel Details  
User enters destination, budget, interests, and days.

### 3️⃣ Backend Validates Token  
`protect` middleware decodes the JWT token and extracts the user's email.

### 4️⃣ Backend Calls OpenRouter API  

### 5️⃣ AI Generates a Travel Plan
AI returns a fully structured itinerary
Itinerary is saved in MongoDB
Response sent back to frontend

### 6️⃣ React Displays the Plan
Displayed beautifully using an Itinerary component.

---
## Installation & Setup
### Clone the repository
git clone https://github.com/your-username/ai-travel-planner.git
cd ai-travel-planner

### Backend Setup
cd server
npm install
npm start

### Create .env file:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
OPENROUTER_API_KEY=your_openrouter_key

### Frontend Setup
cd client  
npm install  
npm start

---
## Future Enhancements

- Save & view past itineraries  
- Add travel cost estimation  
- Real-time AI chat assistant  
- Hotel/Flight API integration  
- Multi-user collaboration on itineraries
---
## Acknowledgements

- OpenRouter AI
- MongoDB & Mongoose
- React & Node.js communities

