# Migration Tracking: projects.rajivshah.com → rajivshah.com

This document tracks all content migrated from projects.rajivshah.com to rajivshah.com for future 301 redirect configuration.

## SportVu Analysis Pages

| Old URL | New URL | Status |
|---------|---------|--------|
| `https://projects.rajivshah.com/sportvu/EDA_NBA_SportVu.html` | `https://rajivshah.com/blog/sportvu/EDA_NBA_SportVu.html` | ✅ Migrated |
| `https://projects.rajivshah.com/sportvu/PBP_NBA_SportVu.html` | `https://rajivshah.com/blog/sportvu/PBP_NBA_SportVu.html` | ✅ Migrated |
| `https://projects.rajivshah.com/sportvu/Chull_NBA_SportVu.html` | `https://rajivshah.com/blog/sportvu/Chull_NBA_SportVu.html` | ✅ Migrated |
| `https://projects.rajivshah.com/sportvu/Velocity_NBA_SportVu.html` | `https://rajivshah.com/blog/sportvu/Velocity_NBA_SportVu.html` | ✅ Migrated |
| `https://projects.rajivshah.com/sportvu/Traj_NBA_SportVu.html` | `https://rajivshah.com/blog/sportvu/Traj_NBA_SportVu.html` | ✅ Migrated |
| `https://projects.rajivshah.com/sportvu/Traj_RNN.html` | `https://rajivshah.com/blog/sportvu/Traj_RNN.html` | ✅ Migrated |

## Project Demos

| Old URL | New URL | Status |
|---------|---------|--------|
| `https://projects.rajivshah.com/rldemo/` | `https://rajivshah.com/projects/rldemo/` | ✅ Migrated |

## Redirect Configuration (LIVE)

301 redirects configured on projects.rajivshah.com Nginx server (`/etc/nginx/sites-available/projects.rajivshah.com`):

```nginx
# Redirects to new site
location /blog {
  return 301 https://rajivshah.com$request_uri;
}

location /sportvu {
  return 301 https://rajivshah.com/blog$request_uri;
}
```

**Status:** ✅ Active as of Dec 31, 2025

## Notes

- All SportVu HTML files are R Markdown notebook outputs (large files: 600 KB - 3.3 MB each)
- RL Demo includes index.html + 5 JavaScript dependencies
- Blog sitemap updated in `next-sitemap.config.js` and `robots.txt` for SEO
- NBA_SportVu GitHub README.md updated with new links
