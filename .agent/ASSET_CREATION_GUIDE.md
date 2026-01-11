# 🎨 Asset Creation Guide
**Required Assets for Optimization Completion**

---

## 📹 **1. Hero Video Poster Image**

### **What You Need:**
A poster image that displays while the hero video loads.

### **How to Create:**

#### **Option A: Extract from Video (Recommended)**
```bash
# Using FFmpeg (install from ffmpeg.org)
ffmpeg -i public/assets/rumbar-1.mp4 -ss 00:00:02 -vframes 1 -q:v 2 public/assets/hero-poster.jpg
```

#### **Option B: Use Screenshot**
1. Play the video in your browser
2. Pause at a visually appealing frame (around 2-3 seconds)
3. Take a screenshot
4. Crop to 16:9 aspect ratio
5. Save as `public/assets/hero-poster.jpg`

### **Optimization:**
```bash
# Compress the image (using ImageMagick or online tool)
# Target: < 200KB
# Dimensions: 1920×1080 (Full HD)
```

### **Online Tools:**
- TinyPNG: https://tinypng.com/
- Squoosh: https://squoosh.app/
- Compressor.io: https://compressor.io/

---

## 🎬 **2. Compress Hero Video**

### **Current Issue:**
The hero video may be too large, causing slow initial page loads.

### **Target:**
- **Size**: < 2MB
- **Format**: MP4 (H.264)
- **Quality**: Good enough for background video

### **How to Compress:**

#### **Using FFmpeg (Best Quality/Size Ratio)**
```bash
ffmpeg -i public/assets/rumbar-1.mp4 \
  -vcodec h264 \
  -crf 28 \
  -preset slow \
  -vf "scale=1920:1080" \
  -movflags +faststart \
  -an \
  public/assets/rumbar-1-compressed.mp4
```

**Explanation:**
- `-crf 28`: Quality (18-28 is good, higher = smaller file)
- `-preset slow`: Better compression (takes longer)
- `-vf "scale=1920:1080"`: Resize to Full HD
- `-movflags +faststart`: Optimize for web streaming
- `-an`: Remove audio (not needed for muted video)

#### **Using HandBrake (GUI Tool)**
1. Download HandBrake: https://handbrake.fr/
2. Open your video
3. Select "Web" preset
4. Adjust quality slider to 28
5. Set dimensions to 1920×1080
6. Disable audio track
7. Export

#### **Online Tools:**
- CloudConvert: https://cloudconvert.com/mp4-converter
- FreeConvert: https://www.freeconvert.com/video-compressor
- Clideo: https://clideo.com/compress-video

### **After Compression:**
1. Check file size (should be < 2MB)
2. Test video quality (should still look good)
3. Replace original or rename:
   ```bash
   mv public/assets/rumbar-1-compressed.mp4 public/assets/rumbar-1.mp4
   ```

---

## 🖼️ **3. Social Media Images**

### **Open Graph Image** (Facebook, LinkedIn)
- **Filename**: `public/assets/og-image.jpg`
- **Dimensions**: 1200×630 pixels
- **Aspect Ratio**: 1.91:1
- **File Size**: < 300KB
- **Format**: JPG

**Content Ideas:**
- Restaurant exterior with logo
- Signature dish with branding
- Interior ambiance shot
- Collage of food + atmosphere

### **Twitter Card Image**
- **Filename**: `public/assets/twitter-card.jpg`
- **Dimensions**: 1200×600 pixels
- **Aspect Ratio**: 2:1
- **File Size**: < 300KB
- **Format**: JPG

**Note**: Can be the same as OG image, just slightly different crop.

### **Design Tools:**
- **Canva**: https://www.canva.com/ (free templates)
- **Figma**: https://www.figma.com/ (professional design)
- **Photopea**: https://www.photopea.com/ (free Photoshop alternative)

### **Templates:**
Search for "Open Graph template" or "Twitter Card template" in Canva.

---

## 📸 **4. Restaurant Images** (Optional)

For the structured data schema, you referenced:
- `public/assets/restaurant-1.jpg`
- `public/assets/restaurant-2.jpg`
- `public/assets/restaurant-3.jpg`

### **What to Include:**
1. **Exterior**: Front of restaurant, signage
2. **Interior**: Dining area, bar area
3. **Food**: Signature dishes, plated beautifully

### **Specifications:**
- **Dimensions**: 1200×800 pixels (3:2 ratio)
- **File Size**: < 500KB each
- **Format**: JPG
- **Quality**: High (these appear in Google search)

---

## 🚀 **Quick Start Checklist**

### **Minimum Required (to avoid errors):**
- [ ] `public/assets/hero-poster.jpg` (1920×1080, <200KB)

### **Recommended (for full optimization):**
- [ ] Compress `public/assets/rumbar-1.mp4` to <2MB
- [ ] `public/assets/og-image.jpg` (1200×630, <300KB)
- [ ] `public/assets/twitter-card.jpg` (1200×600, <300KB)

### **Optional (for enhanced SEO):**
- [ ] `public/assets/restaurant-1.jpg` (1200×800, <500KB)
- [ ] `public/assets/restaurant-2.jpg` (1200×800, <500KB)
- [ ] `public/assets/restaurant-3.jpg` (1200×800, <500KB)

---

## 🛠️ **Temporary Workaround**

If you don't have these assets yet, you can temporarily use placeholder images:

### **1. Use existing image as poster:**
```tsx
// In Home.tsx, change poster to an existing image
poster="/assets/background3.jpg"
```

### **2. Comment out missing OG images:**
```html
<!-- In index.html, comment out or change to existing images -->
<meta property="og:image" content="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=1200&h=630&fit=crop" />
```

### **3. Use Unsplash placeholders:**
```html
<meta property="og:image" content="https://source.unsplash.com/1200x630/?caribbean,restaurant" />
```

---

## 📊 **Asset Size Budget**

| Asset | Target Size | Priority |
|-------|-------------|----------|
| Hero Poster | < 200KB | HIGH |
| Hero Video | < 2MB | HIGH |
| OG Image | < 300KB | MEDIUM |
| Twitter Card | < 300KB | MEDIUM |
| Restaurant Photos | < 500KB each | LOW |

**Total Budget**: ~4MB for all assets

---

## 🎯 **Quality Guidelines**

### **Images:**
- Use JPG for photos (better compression)
- Use PNG for graphics with transparency
- Optimize with TinyPNG or Squoosh
- Maintain aspect ratios

### **Video:**
- H.264 codec (best compatibility)
- CRF 28 (good quality/size balance)
- 1920×1080 max (Full HD)
- Remove audio (saves space)
- Enable fast start (web streaming)

---

## 💡 **Pro Tips**

1. **Batch Processing**: Use ImageMagick to resize/compress multiple images at once
   ```bash
   mogrify -resize 1200x800 -quality 85 *.jpg
   ```

2. **WebP Format**: Consider creating WebP versions for even better compression
   ```bash
   cwebp -q 80 input.jpg -o output.webp
   ```

3. **Lazy Loading**: All images use lazy loading, so quality can be slightly higher

4. **CDN**: Consider uploading final assets to Cloudinary for automatic optimization

---

## 📞 **Need Help?**

If you need assistance creating these assets:
1. Share your existing photos/videos
2. I can help with FFmpeg commands
3. I can guide you through Canva templates
4. I can recommend professional services

---

*Once you have these assets, simply place them in the `public/assets/` directory and the optimizations will be complete!*
