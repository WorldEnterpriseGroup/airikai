# AIRI KAI Project Instructions

## Project Overview

AIRI KAI (airikai.com) is an AI-focused enterprise solutions website showcasing innovative artificial intelligence solutions for modern businesses.

## Repository Structure

- **Main Branch**: `gh-pages` (for GitHub Pages deployment)
- **Domain**: airikai.com
- **Organization**: WorldEnterpriseGroup

## Key Files

- `index.html` - Main landing page
- `index2.html` - Alternative homepage design
- `media.html` - Media gallery page
- `assets/` - CSS, JavaScript, and image assets
- `blog/` - Blog posts and articles
- `certifications/` - Certification information
- `courses/` - Course content and offerings
- `events/` - Event listings and information
- `media/` - Media files and resources
- `portfolio/` - Portfolio showcase

## Development Guidelines

1. **GitHub Pages**: This site is deployed via GitHub Pages from the `gh-pages` branch
2. **Static Site**: Pure HTML/CSS/JS - no build process required
3. **Responsive Design**: Ensure all changes maintain mobile responsiveness
4. **Performance**: Optimize images and assets for fast loading

## Content Management

- Blog posts should be added to the `blog/` directory
- Media files go in the `media/` directory
- Portfolio items belong in the `portfolio/` directory
- Keep file names descriptive and URL-friendly

## Deployment

Changes pushed to the `gh-pages` branch are automatically deployed to airikai.com via GitHub Pages.

## DNS Configuration

The domain airikai.com should have the following DNS records:
- A records pointing to GitHub Pages IPs:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- CNAME record: www.airikai.com → worldenterprisegroup.github.io

## Contact

This project is maintained by World Enterprise Group.

## Future Enhancements

- Consider implementing a static site generator for easier content management
- Add analytics tracking
- Implement SEO optimizations
- Create XML sitemap
- Add structured data markup for better search visibility