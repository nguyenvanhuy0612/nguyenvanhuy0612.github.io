---
title: "How to Install OpenClaw - Personal AI Assistant"
description: "Step-by-step guide to install and set up OpenClaw, the open-source AI agent that works with WhatsApp, Telegram, Slack, and more"
date: 2026-04-09
tags: [ai, openclaw, setup]
---

[OpenClaw](https://openclaw.ai/) is a free, open-source AI agent that acts as your personal assistant through messaging apps like WhatsApp, Telegram, Slack, Discord, and more. It runs locally on your machine and connects to LLMs like Claude, GPT, or Gemini to actually do things — manage emails, calendars, and much more.

## Requirements

- **Node.js 24** (recommended) or Node.js 22.14+
- An API key from one of the supported LLM providers (Anthropic, OpenAI, Google, or MiniMax)
- macOS, Linux, or Windows (WSL2)
- About 15-20 minutes

## Step 1: Install Node.js

If you don't have Node.js installed, grab it from [nodejs.org](https://nodejs.org/).

Verify your version:

```bash
node --version
# Should be v22.14+ or v24+
```

## Step 2: Install OpenClaw

Choose one of these methods:

**One-line installer (macOS/Linux):**

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

**PowerShell (Windows WSL2):**

```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
```

**Via npm or pnpm:**

```bash
npm install -g openclaw@latest
# or
pnpm add -g openclaw@latest
```

## Step 3: Run the Onboarding Wizard

The easiest way to set everything up is the guided wizard:

```bash
openclaw onboard --install-daemon
```

This will walk you through:

1. **Choosing a model provider** — pick Anthropic (Claude), OpenAI (GPT), Google (Gemini), or MiniMax
2. **Setting your API key** — paste your key when prompted
3. **Configuring the Gateway** — this is the local server that routes messages between you and the AI
4. **Setting up channels** — connect WhatsApp, Telegram, Slack, or other messaging apps

## Step 4: Verify It's Running

After onboarding completes, check that the Gateway is running:

```bash
openclaw status
```

The Gateway listens on port `18789` by default. Make sure this port is open if you're running on a VPS.

## Step 5: Connect a Messaging App

Follow the prompts from the onboarding wizard to pair your first messaging channel. For example, for WhatsApp you'll scan a QR code, similar to WhatsApp Web.

Once connected, send a message to your bot and it should respond using your configured LLM.

## Tips

- **Skills marketplace**: OpenClaw has 500+ pre-built skills on [clawhub.com](https://clawhub.com). Your agent can discover and install new skills on its own.
- **Self-hosted**: Everything runs on your machine. Your data stays with you.
- **Multiple channels**: You can connect many messaging apps at once — they all route through the same Gateway.

## Useful Links

- [Official Documentation](https://docs.openclaw.ai)
- [GitHub Repository](https://github.com/openclaw/openclaw)
- [Getting Started Guide](https://github.com/openclaw/openclaw/blob/main/docs/start/getting-started.md)
