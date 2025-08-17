# I’d truly appreciate it if you credit my work. If you’d like to support me further, you can buy me a coffee

# Profile Card Customization Guide

This profile card is designed to be easily customizable by editing the `data/profile-config.json` file. No coding knowledge required!

## How to Customize

### 1. Personal Information
Edit the `profile` section in `data/profile-config.json`:

\`\`\`json
"profile": {
  "name": "Your Name",
  "title": "Your Job Title", 
  "description": "Your description here",
  "profileImage": "/images/your-photo.png",
  "hireUrl": "/contact"
}
\`\`\`

### 2. Social Media Links
Add or remove social platforms in the `socialLinks` array:

\`\`\`json
"socialLinks": [
  {
    "platform": "twitter",
    "url": "https://twitter.com/yourusername"
  }
]
\`\`\`

**Available platforms:** twitter, linkedin, github, instagram, email

### 3. Customization Options
Toggle features on/off:

\`\`\`json
"customization": {
  "showSocialLinks": true,
  "showHireButton": true,
  "cardMaxWidth": "lg",
  "animationDuration": 0.5
}
\`\`\`

## Quick Setup Steps

1. Replace the image in `public/images/avatar.png` with your photo
2. Edit `data/profile-config.json` with your information
3. Save the file - changes will appear automatically!

## Tips

- Keep descriptions under 150 characters for best appearance
- Use high-quality square images (400x400px recommended)
- Test your social media links to ensure they work
- Use professional email addresses for the email platform
