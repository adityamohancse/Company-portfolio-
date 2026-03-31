# 🚀 Deploy Your Portfolio to GitHub Pages

Complete guide to upload and deploy your portfolio on GitHub.

## 📋 Prerequisites

- GitHub account (create at https://github.com)
- Git installed on your computer (download from https://git-scm.com)

---

## 🎯 Step 1: Get Web3Forms Access Key (2 minutes)

Your contact form needs an access key to work:

1. Go to: **https://web3forms.com/**
2. Scroll down to "Get Started"
3. Enter your email: **mohanjhaaditya74@gmail.com**
4. Click "Create Access Key"
5. Copy the access key (looks like: `abc123def456...`)
6. Open `index.html` in a text editor
7. Find line ~590 (the form section)
8. Replace `YOUR_ACCESS_KEY_HERE` with your actual key:
   ```html
   <input type="hidden" name="access_key" value="your-actual-key-here">
   ```
9. Save the file

**✅ Contact form is now configured!**

---

## 🎯 Step 2: Create GitHub Repository (3 minutes)

1. Go to: **https://github.com/new**
2. Fill in:
   - Repository name: `portfolio` (or any name you like)
   - Description: "My professional portfolio website"
   - ✅ Public (required for free GitHub Pages)
   - ❌ Don't check "Add a README" (we already have one)
3. Click **"Create repository"**

---

## 🎯 Step 3: Upload Files to GitHub (5 minutes)

### Option A: Using Git (Command Line)

Open Command Prompt/Terminal in your portfolio folder:

```bash
# Navigate to your portfolio folder
cd "F:\Company Portfolio"

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Portfolio website"

# Add remote repository (replace USERNAME with your GitHub username)
git remote add origin https://github.com/adityamohancse/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Option B: Using GitHub Website (Easier)

1. On your new repository page, click **"uploading an existing file"**
2. Drag and drop these files:
   ```
   ✅ index.html
   ✅ style.css
   ✅ main.js
   ✅ favicon.svg
   ✅ README.md
   ```
3. Click **"Commit changes"**

---

## 🎯 Step 4: Enable GitHub Pages (2 minutes)

1. In your repository, click **"Settings"** (top menu)
2. Scroll down and click **"Pages"** (left sidebar)
3. Under "Source":
   - Branch: Select **"main"**
   - Folder: Select **"/ (root)"**
4. Click **"Save"**
5. Wait 2-3 minutes for deployment

**🎉 Your site will be live at:**
```
https://adityamohancse.github.io/portfolio/
```

---

## 🎯 Step 5: Test Your Website

1. Visit your GitHub Pages URL
2. Check all sections load correctly
3. **Test the contact form:**
   - Fill in all fields
   - Click "Send Message"
   - Check your email: mohanjhaaditya74@gmail.com
   - (First email may take 5-10 minutes)

---

## 🔧 Updating Your Portfolio

Whenever you make changes:

### Using Git:
```bash
git add .
git commit -m "Updated portfolio content"
git push
```

### Using GitHub Website:
1. Click on the file you want to edit
2. Click the pencil icon (Edit)
3. Make changes
4. Click "Commit changes"

Changes go live automatically in 1-2 minutes!

---

## 🎨 Custom Domain (Optional)

Want `yourname.com` instead of GitHub URL?

1. Buy domain from Namecheap, GoDaddy, etc.
2. In repository Settings → Pages
3. Enter your domain in "Custom domain"
4. Update DNS settings at your domain registrar:
   - Add CNAME record pointing to: `adityamohancse.github.io`

---

## ✅ What You Get FREE:

- ✅ Unlimited bandwidth
- ✅ Free SSL certificate (HTTPS)
- ✅ Fast global CDN
- ✅ Automatic deployments
- ✅ Version control
- ✅ 100% free forever

---

## 🆘 Troubleshooting

**Site not loading?**
- Wait 5 minutes after enabling Pages
- Check Settings → Pages shows green checkmark
- Clear browser cache

**Contact form not working?**
- Verify you added the Web3Forms access key
- Check spam folder for emails
- Verify email address in Web3Forms dashboard

**Files not uploading?**
- Make sure files are in root folder (not subfolder)
- Don't upload `contact.php` (not needed for GitHub Pages)

---

## 🎉 You're Done!

Your portfolio is now:
- ✅ Hosted on GitHub
- ✅ Live on the internet
- ✅ Has working contact form
- ✅ Professional URL
- ✅ Free SSL/HTTPS

Share your link: `https://adityamohancse.github.io/portfolio/`

---

**Need help? Just ask!** 🚀
