import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import { sendEmail } from "./email";
import { z } from "zod";

// Schema for validating contact form data
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API route to handle contact form submissions
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate the incoming data
      const validatedData = contactSchema.parse(req.body);
      const { name, email, subject, message } = validatedData;
      
      // Send email to site owner
      const recipientEmail = "susmitaph@gmail.com";
      const emailSent = await sendEmail({
        to: recipientEmail,
        from: recipientEmail, // SendGrid requires verified sender email
        subject: `Portfolio Contact: ${subject}`,
        text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
        `,
        html: `
<strong>From:</strong> ${name} (${email})<br>
<strong>Subject:</strong> ${subject}<br><br>
<strong>Message:</strong><br>
${message.replace(/\n/g, '<br>')}
        `
      });
      
      if (emailSent) {
        res.status(200).json({ 
          success: true, 
          message: 'Message sent successfully!'
        });
      } else {
        // If email service is not available, still acknowledge the submission
        // but log a warning
        console.warn('Email service not available, but form submission received');
        res.status(200).json({ 
          success: true, 
          message: 'Message received, but email delivery is currently unavailable.'
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      let errorMessage = 'Failed to send message. Please try again later.';
      
      // If it's a validation error, provide more specific feedback
      if (error instanceof z.ZodError) {
        errorMessage = error.errors.map(e => e.message).join(', ');
      }
      
      res.status(400).json({ 
        success: false, 
        message: errorMessage
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
