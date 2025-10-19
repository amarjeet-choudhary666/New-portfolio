# Contact Form Error Fix Guide

## 🚨 Current Issue
"Failed to send message. Please try again or contact me directly."

## 🔧 Root Cause
The EmailJS Service ID is not properly configured.

## ✅ Solution Steps

### 1. Get Your EmailJS Service ID
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Navigate to "Email Services"
3. Find your service (usually Gmail, Outlook, etc.)
4. Copy the **Service ID** (it looks like `service_xxxxxxx`)

### 2. Update Environment Variables
Update your `.env.local` file with the correct Service ID:

```env
VITE_EMAILJS_PUBLIC_KEY=DRzrGp01XHDINJptR
VITE_EMAILJS_SERVICE_ID=your_actual_service_id_here
VITE_EMAILJS_TEMPLATE_ID=template_4pw8vn9
```

### 3. Verify EmailJS Template
Make sure your EmailJS template uses these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Message content
- `{{to_name}}` - Your name (Amarjeet)

### 4. Test Locally
1. Save the `.env.local` file
2. Restart your development server: `npm run dev`
3. Test the contact form

### 5. Deploy to Vercel
1. Add environment variables in Vercel dashboard:
   - Go to your Vercel project settings
   - Navigate to "Environment Variables"
   - Add all three variables:
     - `VITE_EMAILJS_PUBLIC_KEY`
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`
2. Redeploy your project

## 🔍 Common Issues

### Issue 1: Service ID Not Found
- **Error**: "Service ID not found"
- **Fix**: Double-check your Service ID in EmailJS dashboard

### Issue 2: Template Variables Missing
- **Error**: Email sends but content is empty
- **Fix**: Ensure template uses correct variable names

### Issue 3: CORS Issues
- **Error**: "Access blocked by CORS"
- **Fix**: Add your domain to EmailJS allowed origins

### Issue 4: Rate Limiting
- **Error**: "Too many requests"
- **Fix**: EmailJS has rate limits, wait a few minutes

## 📧 Alternative Contact Methods
While fixing EmailJS, you can add these alternatives:

```jsx
// Add to contact info
{
  icon: Mail,
  label: 'Direct Email',
  value: 'amarjeetchoudhary647@gmail.com',
  href: 'mailto:amarjeetchoudhary647@gmail.com'
}
```

## 🚀 Quick Fix for Production
If you need immediate fix, you can temporarily disable EmailJS and use mailto:

```jsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Temporary mailto solution
  const subject = encodeURIComponent('Portfolio Contact Form');
  const body = encodeURIComponent(`
    Name: ${formData.from_name}
    Email: ${formData.from_email}
    Message: ${formData.message}
  `);
  
  window.location.href = `mailto:amarjeetchoudhary647@gmail.com?subject=${subject}&body=${body}`;
};
```

## ✅ Verification Checklist
- [ ] Service ID copied from EmailJS dashboard
- [ ] Environment variables updated
- [ ] Template variables match
- [ ] Local testing successful
- [ ] Vercel environment variables added
- [ ] Project redeployed
- [ ] Production testing successful