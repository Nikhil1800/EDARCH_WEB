# EDARCH Website

## Current State
New project with brochure images staged in /assets/uploads/.

## Requested Changes (Diff)

### Add
- Multi-page React website for EDARCH (Entrepreneurship Development And Rehabilitation Centre for the Handicapped)
- Light, attractive color scheme (soft blues, whites, light grays, accent green/yellow)
- Navigation bar with EDARCH brand name, links to all pages, mobile hamburger menu

**Pages:**
1. **Home** - Hero with large EDARCH cover brochure image (/assets/uploads/Edarch1Page-1.jpeg), tagline "Alone we are less, United we are best, EDARCH has proved this", stats bar charts showing: Years of Service, Divyang Persons Trained, Industrial Tie-ups, Products Manufactured
2. **About** - President bio with photo from brochure, Future Plans, Immediate Plans sections
3. **Overview** - EDARCH concept description, Why EDARCH bullet points, 4-step vocational training process with brochure images (/assets/uploads/Edarch4Page-2.jpeg)
4. **Recognitions** - Award photos grid using /assets/uploads/Edarch3Page-3.jpeg, Products Manufactured section, EDARCH Activities section
5. **Appeal** - Full appeal/donation call-to-action from brochure content
6. **Contact** - Display: Registered Office address (3rd floor, 212-A, Narayan Peth, above Dena Bank, Kelkar Road, Pune 411030), phone (+91-20-24457636, +91-20-24454927), EDARCH Center (+91-20-24455697), President Dilip Deshpande (+91 98230 82671 / +91 98905 25254), email info@edarch.org, website www.edarch.org. Plus contact form (name, email, subject, message) submitting to backend.

**Bar Charts on Home page:**
- Years of Service: 25+
- Divyang Persons Trained: 500+
- Industrial Partners: 10+
- Products Made: 3+

**All brochure images used:**
- /assets/uploads/Edarch1Page-1.jpeg (cover / home hero)
- /assets/uploads/Edarch1Page-1-6.jpeg (cover duplicate)
- /assets/uploads/Edarch2Page-4.jpeg (about/contact page)
- /assets/uploads/Edarch2Page-1-8.jpeg (about duplicate)
- /assets/uploads/Edarch3Page-3.jpeg (recognitions page)
- /assets/uploads/Edarch3Page-1-5.jpeg (recognitions duplicate)
- /assets/uploads/Edarch4Page-2.jpeg (overview/vocational page)
- /assets/uploads/Edarch4Page-1-7.jpeg (overview duplicate)

### Modify
- N/A (new project)

### Remove
- N/A

## Implementation Plan
1. Backend: ContactMessage type with submitContactMessage() and getContactMessages() functions
2. Frontend: React Router v6 with pages: Home, About, Overview, Recognitions, Appeal, Contact
3. Bar charts using recharts or CSS-animated progress bars
4. Light color palette: white backgrounds, soft blue/teal accents, green-yellow highlights
5. Brochure images embedded in relevant page sections
6. Footer with contact info
