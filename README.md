# Todd Morse Portfolio - Deployment Guide

## 🎯 What You Have

A complete, integrated portfolio website with:
- Professional homepage with your design philosophy
- Comprehensive About page with 15 years experience
- 3 detailed case study pages with design briefs
- All linked to your existing live demos
- Clean navigation throughout
- Mobile-responsive design

---

## 📦 File Structure

```
integrated-portfolio/
├── index.html                    ← Homepage (landing page)
├── about.html                    ← About you page
├── case-studies/
│   ├── sleep-science.html        ← Sleep Science case study + launch button
│   ├── ai-ethics.html            ← AI Ethics case study + launch button
│   └── deepfake-deposit.html     ← Deepfake case study + launch button
├── images/
│   └── hero-image.jpg            ← Your LinkedIn hero image
└── assets/
    └── css/
        └── styles.css            ← Shared stylesheet
```

---

## 🚀 DEPLOYMENT INSTRUCTIONS

### Option 1: Complete Replacement (RECOMMENDED - Simplest)

**This replaces your React site with the new simple HTML portfolio.**

1. **Go to GitHub:**
   - Visit: https://github.com/tfmorse/todd-morse-portfolio

2. **Delete Old Files:**
   - Delete everything EXCEPT the `.git` folder (if you see it)
   - Specifically delete:
     - index.html (the old React version)
     - Any React-related files
     - AI-Ethics folder
     - assets folder
     - images folder
     - Any package.json, node_modules, etc.

3. **Upload New Files:**
   - Click "Add file" → "Upload files"
   - Drag ALL files and folders from this `integrated-portfolio` folder
   - Make sure you upload:
     - index.html
     - about.html
     - case-studies/ (entire folder)
     - images/ (entire folder)
     - assets/ (entire folder)
   
4. **Commit Changes:**
   - Scroll down
   - Type commit message: "Complete portfolio redesign with case studies"
   - Click "Commit changes"

5. **Verify GitHub Pages:**
   - Go to Settings → Pages
   - Make sure Source is set to: Branch `main`, Folder `/ (root)`
   - Save if needed

6. **Wait & Test:**
   - Wait 2-3 minutes for GitHub to build
   - Visit: https://tfmorse.github.io/todd-morse-portfolio/
   - Navigate through all pages to verify

---

### Option 2: Keep React Site, Add New Section (More Complex)

**Only choose this if you want to maintain the React infrastructure.**

This requires converting the HTML files to React components. I can help you with this, but Option 1 is much simpler and gives you the same result.

---

## ✅ POST-DEPLOYMENT CHECKLIST

After uploading, verify:

- [ ] Homepage loads at: https://tfmorse.github.io/todd-morse-portfolio/
- [ ] Hero image displays correctly
- [ ] Navigation works (Home, About, Projects links)
- [ ] About page shows your information
- [ ] All 3 case study pages load
- [ ] "Launch Demo" buttons on case studies work:
  - [ ] Sleep Science → Opens https://tfmorse.github.io/demo_3/
  - [ ] AI Ethics → Opens https://tfmorse.github.io/
  - [ ] Deepfake → Opens your React scenario at #/scenario-demo
- [ ] Site looks good on mobile (test on your phone)
- [ ] Email link works: tfmorse@gmail.com
- [ ] LinkedIn link works: https://linkedin.com/in/toddfmorse

---

## 🔗 WHERE YOUR DEMOS LIVE

Your three demos remain in their current locations:

1. **Sleep Science (Storyline):**
   - Hosted at: https://tfmorse.github.io/demo_3/
   - NOT moving—portfolio just links to it

2. **AI Ethics Training:**
   - Hosted at: https://tfmorse.github.io/
   - NOT moving—portfolio just links to it

3. **Deepfake Deposit (JS Scenario):**
   - Currently in your React app at: /#/scenario-demo
   - Two options:
     - **Option A:** Keep it in React (link stays as-is)
     - **Option B:** Extract it and host separately (requires more work)

---

## 📱 Testing Your Portfolio

After deployment, test these scenarios:

### Desktop Browser:
1. Navigate to homepage
2. Click "View My Work" button
3. Click on each project card
4. On case study pages, click "Launch Demo"
5. Use "← Back to Projects" navigation
6. Test "Next Project" arrows
7. Click "About" in nav
8. Click email and LinkedIn buttons

### Mobile Phone:
1. Visit the URL on your phone
2. Check that navigation menu works
3. Verify text is readable
4. Test that buttons are tappable
5. Try launching demos

---

## 🎨 WHAT'S DIFFERENT FROM YOUR OLD SITE

### What Changed:
- **React replaced with simple HTML** - easier to maintain
- **Professional design brief pages** added for each demo
- **About page** with your 15 years experience and design philosophy
- **New hero image** from LinkedIn
- **Clear navigation** between all sections
- **Mobile-responsive** design throughout

### What Stayed the Same:
- **Your demos** still hosted where they were
- **GitHub Pages** hosting
- **Your repository** name and URL

### What You Gained:
- ✅ Senior-level positioning
- ✅ Context for each project (design briefs)
- ✅ Professional about page
- ✅ Easy to maintain (just HTML/CSS)
- ✅ No React complexity
- ✅ Faster loading

---

## 🆘 TROUBLESHOOTING

### "Page shows old React site"
**Fix:** Clear browser cache (Ctrl+Shift+Delete) or try incognito window

### "Hero image not loading"
**Fix:** Make sure you uploaded the `images/` folder with hero-image.jpg

### "Case study pages show 404"
**Fix:** Make sure you uploaded the entire `case-studies/` folder

### "Navigation links broken"
**Fix:** Make sure all files are in the root directory (not in a subfolder)

### "Demos don't launch"
**Fix:** These open external URLs. Make sure:
- demo_3 repo is published
- tfmorse.github.io repo is published
- React scenario still exists at #/scenario-demo

---

## 📈 NEXT STEPS

### Week 1 (Now):
- [x] Deploy new portfolio
- [ ] Test all links
- [ ] Share URL with one trusted colleague for feedback

### Week 2:
- [ ] Add any additional projects
- [ ] Consider adding downloadable PDFs (storyboards, scripts)
- [ ] Create a resume PDF and link from About page

### Week 3:
- [ ] Consider adding a blog or resources section
- [ ] Add testimonials if you have them
- [ ] Consider adding Camtasia walkthrough videos

---

## 🎓 MAINTENANCE GUIDE

### To Update Your About Page:
1. Go to repo → `about.html`
2. Click pencil icon to edit
3. Make changes
4. Commit changes
5. Wait 2 minutes for site to update

### To Add a New Project:
1. Copy one of the case study files
2. Rename it (e.g., `new-project.html`)
3. Update the content
4. Add a project card to `index.html`
5. Upload to repo

### To Change Colors:
1. Go to `assets/css/styles.css`
2. Edit the `:root` variables at the top
3. Commit changes

---

## 📞 SUPPORT

If you get stuck:
- Check the troubleshooting section above
- Review GitHub Pages docs: https://docs.github.com/en/pages
- Test in incognito/private browsing mode
- Clear your browser cache

---

## 🎉 YOU'RE DONE!

Once deployed, you have a professional portfolio that:
- Positions you as a senior instructional designer
- Shows strategic thinking, not just outputs
- Easy to share with recruiters and hiring managers
- Simple to maintain going forward

**Your URL:** https://tfmorse.github.io/todd-morse-portfolio/

Good luck with your job search! 🚀
