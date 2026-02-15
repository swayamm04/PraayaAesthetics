# Deploying to Render (Static Site)

This guide explains how to deploy your Next.js application as a static site on Render.

## Prerequisites

1.  A [Render](https://render.com/) account.
2.  Your code pushed to a GitHub repository.

## Step-by-Step Guide

1.  **Log in to Render** and go to your Dashboard.
2.  Click **New +** and select **Static Site**.
3.  Connect your GitHub account.
4.  Select the **PraayaAesthetics** repository.
5.  Configure the build settings:
    *   **Name**: `praaya-aesthetics` (or any name you prefer)
    *   **Branch**: `main`
    *   **Root Directory**: (Leave blank)
    *   **Build Command**: `npm run build`
    *   **Publish Directory**: `out`
6.  Click **Create Static Site**.

## Troubleshooting: Dependency Conflicts

If you see an error like `Conflicting peer dependency: react@18.3.1` (common with React 19), you need to tell Render to ignore legacy peer dependencies.

1.  Go to the **Environment** tab of your Static Site in Render.
2.  Click **Add Environment Variable**.
3.  Key: `NPM_FLAGS`
4.  Value: `--legacy-peer-deps`
5.  Save changes.
6.  Go to **Events** and manually **Trigger Deploy** (Clear build cache & deploy).

## Verifying the Deployment

Render will start building your site. You can watch the logs in the dashboard. Once the build finishes, your site will be live at the provided URL (e.g., `https://praaya-aesthetics.onrender.com`).

## Important Note

Since this is a static export:
*   `next/image` requires `unoptimized: true` (already configured).
*   API Routes and Server-Side Rendering (SSR) features are not supported.
