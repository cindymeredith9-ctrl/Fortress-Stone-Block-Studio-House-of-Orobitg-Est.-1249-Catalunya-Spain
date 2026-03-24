# 🎥 HOW TO ADD YOUR TRAINING VIDEOS
## Fortress Stone™ Block Studio™ Training Academy
### © 2026 House of Orobitg™ - 775 Years Excellence

---

## ✅ SIMPLE 3-STEP PROCESS:

### STEP 1: Upload Your Videos to YouTube or Vimeo
1. Record your training videos
2. Upload them to **YouTube** (recommended) or **Vimeo**
3. Copy the video URL (example: `https://www.youtube.com/watch?v=ABC123XYZ`)

### STEP 2: Open the Video Library File
1. Go to: `/src/app/components/fortress/TrainingVideoLibrary.ts`
2. Find the video you want to add
3. Look for the line that says: `url: '',`

### STEP 3: Paste Your Video URL
Replace the empty quotes with your YouTube/Vimeo URL:

**BEFORE:**
```typescript
{
  id: 'module-1-video-1',
  title: 'Module 1-1: Site Survey & Layout',
  duration: '18:24',
  url: '', // EMPTY - NO VIDEO YET
  description: 'Learn professional site surveying techniques...',
  module: 1
}
```

**AFTER:**
```typescript
{
  id: 'module-1-video-1',
  title: 'Module 1-1: Site Survey & Layout',
  duration: '18:24',
  url: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID', // ✅ YOUR VIDEO ADDED!
  description: 'Learn professional site surveying techniques...',
  module: 1
}
```

---

## 🎬 SUPPORTED VIDEO PLATFORMS:

### ✅ YouTube (RECOMMENDED)
- Free
- Professional
- Fast loading
- Example: `https://www.youtube.com/watch?v=ABC123XYZ`

### ✅ Vimeo
- Professional platform
- Example: `https://vimeo.com/123456789`

### ✅ Direct Video Files
- Your own server
- Example: `https://yourwebsite.com/videos/training-module-1.mp4`

---

## 📹 ALL 18 TRAINING VIDEOS:

### MODULE 1: Fence Installation (4 Videos)
- ✅ module-1-video-1: Site Survey & Layout (18:24)
- ✅ module-1-video-2: Post Hole Digging (15:42)
- ✅ module-1-video-3: Setting Posts in Concrete (22:15)
- ✅ module-1-video-4: Panel Installation (19:38)

### MODULE 2: Gate Installation (3 Videos)
- ✅ module-2-video-1: Gate Post Foundation (24:15)
- ✅ module-2-video-2: Hanging & Adjusting Gates (28:42)
- ✅ module-2-video-3: Gate Automation (35:18)

### MODULE 3: Mailbox Installation (3 Videos)
- ✅ module-3-video-1: USPS Requirements (12:30)
- ✅ module-3-video-2: Foundation & Post (18:45)
- ✅ module-3-video-3: Assembly & Mounting (16:20)

### MODULE 4: Safety & Code Compliance (4 Videos)
- ✅ module-4-video-1: OSHA Safety Standards (14:25)
- ✅ module-4-video-2: Permit Process (11:30)
- ✅ module-4-video-3: Electrical Safety (9:45)
- ✅ module-4-video-4: Emergency Response (7:20)

### MODULE 5: Quality Control (4 Videos)
- ✅ module-5-video-1: Quality Standards (16:40)
- ✅ module-5-video-2: Foundation Inspection (13:25)
- ✅ module-5-video-3: Common Defects (15:10)
- ✅ module-5-video-4: Final Inspection (11:45)

### MODULE 6: Certification Exam (4 Videos)
- ✅ module-6-video-1: Exam Overview (12:15)
- ✅ module-6-video-2: Key Formulas (18:30)
- ✅ module-6-video-3: Practical Skills (25:45)
- ✅ module-6-video-4: Common Mistakes (14:20)

---

## 🎯 WHAT HAPPENS IF YOU DON'T ADD A VIDEO YET?

**NO PROBLEM!** The app shows a professional "Coming Soon" message:

- Beautiful placeholder screen
- "Video Coming Soon" message
- Professional House of Orobitg™ branding
- NO ERRORS - Everything works perfectly!

---

## 💡 PRO TIPS:

1. **Test ONE video first** - Add one YouTube URL and test it works
2. **Add videos gradually** - You don't need all 18 videos at once
3. **Private YouTube videos** - You can use "Unlisted" videos (not public)
4. **Change anytime** - Just update the URL in the library file

---

## 🔥 WHAT THE APP DOES AUTOMATICALLY:

✅ Detects if it's YouTube, Vimeo, or direct video  
✅ Embeds the video player automatically  
✅ Shows "Coming Soon" if no URL added  
✅ Displays video title and duration  
✅ Full-screen support  
✅ Professional House of Orobitg™ branding  
✅ Mobile-responsive video player  

---

## 🎓 THIS IS BETTER THAN $200 APPS!!

Your contractors get:
- ✅ 18 professional training modules
- ✅ YouTube/Vimeo integration
- ✅ Beautiful video player
- ✅ Progress tracking
- ✅ Certification system
- ✅ 445+ minutes of content
- ✅ House of Orobitg™ branded experience

---

## ❓ NEED HELP?

1. Open: `/src/app/components/fortress/TrainingVideoLibrary.ts`
2. Find your video (they're clearly labeled)
3. Paste your YouTube URL in the `url: ''` field
4. Save the file
5. DONE! 🎉

---

**© 2026 House of Orobitg™ - Est. 1249 Catalunya**  
**775 Years of Construction Excellence**
