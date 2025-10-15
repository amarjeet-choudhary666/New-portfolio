# EmailJS Setup Guide

## 1. EmailJS Configuration

Your EmailJS is already configured with:
- **Public Key**: `DRzrGp01XHDINJptR`
- **Template ID**: `template_4pw8vn9`

## 2. Missing Service ID

You need to add your EmailJS Service ID to the `.env.local` file:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id_here
```

## 3. Email Template Format

Your EmailJS template should use these variables:

```
Hello Amarjeet,

You get a new message from {{from_email}}

You got a new message from {{from_name}}:

{{message}}

Best wishes,
EmailJS team
```

## 4. Template Variables

The contact form sends these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - The message content
- `{{to_name}}` - Your name (hardcoded as "Amarjeet")

## 5. How to Find Your Service ID

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Navigate to "Email Services"
3. Copy your service ID
4. Update the `.env.local` file with the correct service ID

## 6. Testing

Once you add the correct service ID, the contact form will:
- ✅ Send emails using your EmailJS template
- ✅ Show success/error messages
- ✅ Reset the form after successful submission
- ✅ Handle errors gracefully