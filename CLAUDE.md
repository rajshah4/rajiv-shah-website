# Claude Code Context

## Repository Structure

This is Rajiv Shah's personal website. It works in conjunction with the blog source repo at `~/Code/rajistics_blog`.

- **Website repo** (`rajiv-shah-website`): Next.js site deployed on Vercel
- **Blog repo** (`rajistics_blog`): Quarto source files for blog posts

## Blog Publishing Workflow

### Updating a Blog Post

1. **Edit source files** in `~/Code/rajistics_blog` (`.md`, `.qmd`, or `.ipynb`)

2. **Add images** directly to `~/Code/rajiv-shah-website/public/blog/images/`
   - Images are static assets and don't go through Quarto
   - Reference them in markdown as: `https://rajivshah.com/blog/images/filename.jpg`

3. **Render the full site** (not individual files):
   ```bash
   cd ~/Code/rajistics_blog
   quarto render
   ```
   - This outputs to `../rajiv-shah-website/public/blog/` (configured in `_quarto.yml`)
   - **Important**: Run `quarto render` (full site), not `quarto render <file>`, to update the index page and listings

4. **Commit and push**:
   ```bash
   # Commit blog source changes
   cd ~/Code/rajistics_blog
   git add <changed-files>
   git commit -m "Description of changes"

   # Commit and push website (triggers Vercel deploy)
   cd ~/Code/rajiv-shah-website
   git add -A
   git commit -m "Description of changes"
   git push
   ```

### Notes

- Quarto regenerates notebook cell IDs on each render - these are harmless metadata changes
- The `_quarto.yml` in the blog repo configures output to go directly to the website's `public/blog/` directory
- Vercel auto-deploys when changes are pushed to main

## Vercel Configuration

- Node.js version: 22.x (specified in `.nvmrc`)
- Framework: Next.js
- Auto-deploys on push to main branch
