import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const {
            fullName,
            dateOfBirth,
            email,
            phoneNumber,
            sports,
            sportsClub,
            position,
            trainingGoals,
            preferredTrainingDays,
            additionalMessage,
            packageId,
            packageTitle,
        } = data;

        console.log("data: ", data, process.env.EMAIL_USER, process.env.EMAIL_PASS)

        // 1. Create a Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Use 'gmail' for Gmail or configure for your service
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your app password
            },
        });

        // 2. Define the email content
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER, // Recipient email address
            subject: `New Booking Request: ${packageTitle} (ID: ${packageId})`,
            html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Booking Request – Sayes Performance</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    * {
      box-sizing: border-box;
    }
    
    body {
      margin: 0;
      padding: 0;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      line-height: 1.6;
    }
    
    .wrapper {
      padding: 40px 20px;
      min-height: 100vh;
    }
    
    .card {
      max-width: 650px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 20px rgba(0, 0, 0, 0.1);
      position: relative;
    }
    
    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
    }
    
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 30px 25px;
      color: #ffffff;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    
    .header::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
      background-size: 20px 20px;
      animation: float 20s infinite linear;
    }
    
    @keyframes float {
      0% { transform: translateX(-50px) translateY(-50px); }
      100% { transform: translateX(50px) translateY(50px); }
    }
    
    .header-content {
      position: relative;
      z-index: 2;
    }
    
    .header h1 {
      margin: 0 0 8px 0;
      font-size: 28px;
      font-weight: 700;
      text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    
    .header p {
      margin: 0;
      font-size: 16px;
      opacity: 0.9;
      font-weight: 400;
    }
    
    .banner {
      background: linear-gradient(90deg, #ff6b6b, #ee5a24);
      padding: 16px 25px;
      color: #ffffff;
      font-weight: 600;
      text-align: center;
      font-size: 15px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      box-shadow: inset 0 -2px 0 rgba(0,0,0,0.1);
    }
    
    .body {
      padding: 30px 25px;
      background: #fafafa;
    }
    
    .section {
      background: #ffffff;
      border: none;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    
    .section:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    }
    
    .section h2 {
      margin: 0 0 20px 0;
      font-size: 20px;
      font-weight: 700;
      color: #2c3e50;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    .section h2::after {
      content: '';
      flex: 1;
      height: 2px;
      background: linear-gradient(90deg, #667eea, transparent);
      border-radius: 2px;
    }
    
    .label {
      font-size: 13px;
      color: #6c757d;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 6px;
      letter-spacing: 0.5px;
    }
    
    .value {
      font-size: 16px;
      color: #2c3e50;
      font-weight: 500;
      margin-bottom: 16px;
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 20px;
      margin-top: 12px;
    }
    
    .grid-item {
      padding: 16px;
      background: #f8f9fa;
      border-radius: 8px;
      border-left: 4px solid #667eea;
      transition: all 0.2s ease;
    }
    
    .grid-item:hover {
      background: #e9ecef;
      border-left-color: #ff6b6b;
    }
    
    .grid-item .label {
      margin-bottom: 4px;
    }
    
    .grid-item .value {
      margin-bottom: 0;
      font-size: 15px;
    }
    
    .message-content {
      background: #f8f9ff;
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid #667eea;
      margin: 0;
      font-style: italic;
      font-size: 16px;
      color: #495057;
      line-height: 1.7;
    }
    
    .footer {
      background: linear-gradient(135deg, #2c3e50, #34495e);
      padding: 25px;
      color: #bdc3c7;
      text-align: center;
      font-size: 14px;
    }
    
    .footer strong {
      color: #f39c12;
      font-size: 16px;
      display: block;
      margin-bottom: 5px;
    }
    
    .status-badge {
      display: inline-block;
      background: linear-gradient(135deg, #2ecc71, #27ae60);
      color: white;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-left: 10px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    @media (max-width: 600px) {
      .wrapper {
        padding: 20px 10px;
      }
      
      .header {
        padding: 25px 20px;
      }
      
      .header h1 {
        font-size: 24px;
      }
      
      .body {
        padding: 20px 10px;
      }
      
      .section {
        padding: 14px;
      }
      
      .grid {
        grid-template-columns: 1fr;
        gap: 15px;
      }
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="card">
      <div class="header">
        <div class="header-content">
          <h1>🏆 Sayes Performance</h1>
          <p>Unleash Your Athletic Potential</p>
        </div>
      </div>
      
      <div class="banner">
        🎯 New Booking Request Received <span class="status-badge">Pending Review</span>
      </div>
      
      <div class="body">
        <!-- Package Details -->
        <div class="section">
          <h2>📦 Package Details</h2>
          <div>
            <div class="label">Package Title</div>
            <div class="value">Elite Performance Package</div>
          </div>
          <div>
            <div class="label">Package ID</div>
            <div class="value">SP-2024-001</div>
          </div>
        </div>
        
        <!-- Athlete Information -->
        <div class="section">
          <h2>👤 Athlete Information</h2>
          <div class="grid">
            <div class="grid-item">
              <div class="label">Full Name</div>
              <div class="value">Alex Johnson</div>
            </div>
            <div class="grid-item">
              <div class="label">Date of Birth</div>
              <div class="value">March 15, 1995</div>
            </div>
            <div class="grid-item">
              <div class="label">Email Address</div>
              <div class="value">alex.johnson@email.com</div>
            </div>
            <div class="grid-item">
              <div class="label">Phone Number</div>
              <div class="value">+1 (555) 123-4567</div>
            </div>
            <div class="grid-item">
              <div class="label">Primary Sports</div>
              <div class="value">Basketball, Swimming</div>
            </div>
            <div class="grid-item">
              <div class="label">Sports Club</div>
              <div class="value">Elite Sports Academy</div>
            </div>
            <div class="grid-item">
              <div class="label">Position</div>
              <div class="value">Point Guard</div>
            </div>
            <div class="grid-item">
              <div class="label">Preferred Days</div>
              <div class="value">Mon, Wed, Fri</div>
            </div>
          </div>
          <div style="margin-top: 20px;">
            <div class="label">Training Goals</div>
            <div class="value">Improve speed and endurance for competitive performance</div>
          </div>
        </div>
        
        <!-- Additional Message -->
        <div class="section">
          <h2>💬 Additional Message</h2>
          <p class="message-content">
            "Looking forward to starting my training journey and reaching new performance levels!"
          </p>
        </div>
      </div>
      
      <div class="footer">
        <strong>Sayes Performance</strong>
        <div>© 2025 Sayes Performance. Empowering athletes worldwide.</div>
      </div>
    </div>
  </div>
</body>
</html>
`

        };

        // 3. Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Booking submitted successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error submitting booking:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
