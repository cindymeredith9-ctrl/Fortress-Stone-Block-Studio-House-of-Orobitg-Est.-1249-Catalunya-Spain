/**
 * VIDEO LIBRARY DOCUMENTATION
 * House of Orobitg™ - Est. 1249 Catalunya
 * 
 * HOW TO ADD REAL VIDEOS:
 * 
 * The TutorialAcademyScreen has 17 video placeholders.
 * To add real videos, you need to:
 * 
 * 1. Upload your videos to YouTube (recommended) or Vimeo
 * 2. Get the video embed URLs
 * 3. Update the video data in /src/app/components/fortress/TutorialAcademyScreen.tsx
 * 
 * Current video placeholders:
 * - VID_001: Introduction to Fortress Stone™ Blocks (4:30)
 * - VID_002: Understanding the IL-2 Interlock System (5:15)
 * - VID_003: Block Anatomy & Components (6:00)
 * - VID_004: Reading Block Specifications (3:45)
 * - VID_005: Foundation Preparation Basics (12:30)
 * - VID_006: Block Assembly Techniques (15:00)
 * - VID_007: Installing Door Frames (10:20)
 * - VID_008: Window Opening Methods (9:45)
 * - VID_009: Interior Wall Design (8:30)
 * - VID_010: Electrical Chase Planning (7:15)
 * - VID_011: Plumbing Integration (11:00)
 * - VID_012: Structural Engineering Calculations (18:45)
 * - VID_013: Advanced Corner Techniques (14:30)
 * - VID_014: Safe Room Construction (22:00)
 * - VID_015: Military-Grade Reinforcement (25:15)
 * - VID_016: Fire-Resistant Systems (16:30)
 * - VID_017: Master Artisan Techniques (28:00)
 * 
 * EXAMPLE:
 * Replace videoUrl: '' with videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
 * 
 * The app will automatically display a video player when a URL is provided.
 * If no URL is provided, it shows a "Coming Soon" placeholder.
 */

export const VIDEO_SETUP_INSTRUCTIONS = `
To enable videos in your app:

1. Create or film your tutorial videos
2. Upload to YouTube or Vimeo
3. Edit /src/app/components/fortress/TutorialAcademyScreen.tsx
4. Add the embed URLs to each video object

Example:
{
  id: 'VID_001',
  title: 'Introduction to Fortress Stone™ Blocks',
  videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',  // <-- Add your video ID here
  ...
}

The app is already set up to display videos - you just need to add your URLs!
`;
