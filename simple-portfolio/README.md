# Simple Portfolio Website

A clean, modern, and responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

- ✨ **Modern Design** - Clean and professional layout
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎨 **Smooth Animations** - Engaging scroll animations and effects
- 🚀 **Fast Loading** - No heavy frameworks, just vanilla JavaScript
- 💫 **Interactive Elements** - Animated particles, typing effect, and more
- 🎯 **Easy to Customize** - Simple code structure, easy to modify

## Sections

1. **Home/Hero** - Eye-catching introduction with typing effect
2. **About** - Brief introduction about yourself
3. **Skills** - Showcase your technical skills
4. **Projects** - Display your portfolio projects
5. **Contact** - Contact form for visitors to reach you

## How to Use

### 1. Customize the Content

Open `index.html` and update the following:

- **Your Name**: Replace "YOUR NAME" with your actual name
- **Title/Role**: Update "English Teacher | Web Developer | Tech Enthusiast"
- **About Section**: Edit the paragraphs in the about section
- **Skills**: Add or remove skill cards
- **Projects**: Update project information, links, and technologies
- **Social Links**: Update the `href="#"` with your actual social media URLs

### 2. Customize Colors

Open `style.css` and modify the CSS variables at the top:

```css
:root {
    --primary-color: #6c63ff;
    --secondary-color: #3f3d56;
    --accent-color: #ff6584;
    /* ... more colors */
}
```

### 3. Add Your Photo

Replace the placeholder icon in the About section:

```html
<!-- In index.html, find this section and replace with: -->
<div class="about-image">
    <img src="your-photo.jpg" alt="Your Name">
</div>
```

Then add this CSS to `style.css`:

```css
.about-image img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}
```

### 4. Add Real Project Images

Replace the icon placeholders with actual project screenshots:

```html
<div class="project-image">
    <img src="project-screenshot.jpg" alt="Project Name">
</div>
```

Add this CSS:

```css
.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

## Running the Website

### Option 1: Open Directly
Simply open `index.html` in your web browser.

### Option 2: Use a Local Server

Using Python:
```bash
python3 -m http.server 8000
```

Using Node.js (with http-server):
```bash
npx http-server -p 8000
```

Then visit: `http://localhost:8000`

## Deployment

### Deploy to Netlify

1. Create a free account at [Netlify](https://www.netlify.com/)
2. Drag and drop the `simple-portfolio` folder
3. Your site will be live in seconds!

### Deploy to GitHub Pages

1. Create a GitHub repository
2. Push your code
3. Go to Settings > Pages
4. Select your branch and save
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Deploy to Vercel

1. Create a free account at [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Deploy with one click!

## Customization Tips

### Change Typing Effect Text

Edit the phrases in `script.js`:

```javascript
const phrases = ['Hi There! 👋', 'Welcome to My Portfolio', 'Let\'s Build Something Amazing'];
```

### Add More Skills

Copy and paste a skill card in `index.html`:

```html
<div class="skill-card">
    <i class="fab fa-python"></i>
    <h3>Python</h3>
</div>
```

Find more icons at [Font Awesome](https://fontawesome.com/icons)

### Add More Projects

Duplicate a project card in `index.html` and update the content.

### Modify Contact Form

The form currently shows an alert. To send real emails, you can:

1. Use a service like [Formspree](https://formspree.io/)
2. Use [EmailJS](https://www.emailjs.com/)
3. Connect to your own backend server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons

## License

Free to use for personal and commercial projects.

## Need Help?

Feel free to modify and customize this template to match your personal brand!

---

**Made with ❤️ for aspiring developers**
