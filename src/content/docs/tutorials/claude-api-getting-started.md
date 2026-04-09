---
title: Getting Started with the Claude API
description: How to set up and make your first API call to Claude using Python and the Anthropic SDK
---

The [Claude API](https://platform.claude.com/docs/en/home) lets you integrate Claude into your own apps, scripts, and workflows. This tutorial walks you through setup to first API call.

## Requirements

- Python 3.8+ (or Node.js 18+ for the TypeScript SDK)
- An Anthropic account

## Step 1: Get Your API Key

1. Go to [console.anthropic.com](https://console.anthropic.com/)
2. Sign up or log in
3. Navigate to **API Keys** in the sidebar
4. Click **+ Create Key**
5. Name your key and copy it immediately — it's shown only once

## Step 2: Install the SDK

### Python

```bash
pip install anthropic
```

### Node.js / TypeScript

```bash
npm install @anthropic-ai/sdk
```

## Step 3: Set Your API Key

Store it as an environment variable (don't hardcode it in your code):

```bash
export ANTHROPIC_API_KEY="sk-ant-your-key-here"
```

Add this to your `~/.zshrc` or `~/.bashrc` to make it permanent.

## Step 4: Make Your First API Call

### Python

```python
import anthropic

client = anthropic.Anthropic()

message = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "What is the capital of France?"}
    ]
)

print(message.content[0].text)
```

### Node.js

```javascript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const message = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 1024,
  messages: [
    { role: "user", content: "What is the capital of France?" },
  ],
});

console.log(message.content[0].text);
```

Run it:

```bash
python your_script.py
# or
node your_script.mjs
```

## Step 5: Use Streaming for Long Responses

Streaming shows the response word by word instead of waiting for the full response:

### Python

```python
import anthropic

client = anthropic.Anthropic()

with client.messages.stream(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Write a short poem about coding"}
    ]
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
```

## Step 6: System Prompts

Give Claude a persona or instructions that apply to the whole conversation:

```python
message = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    system="You are a helpful coding assistant. Always include code examples.",
    messages=[
        {"role": "user", "content": "How do I read a JSON file in Python?"}
    ]
)
```

## Available Models

| Model | ID | Best for |
|-------|-----|----------|
| Claude Opus 4.6 | `claude-opus-4-6` | Most capable, complex tasks |
| Claude Sonnet 4.6 | `claude-sonnet-4-6` | Best balance of speed and quality |
| Claude Haiku 4.5 | `claude-haiku-4-5-20251001` | Fastest, cheapest, simple tasks |

**Recommendation:** Start with Sonnet. Upgrade to Opus if quality isn't sufficient, or drop to Haiku for high-volume, low-complexity tasks.

## Tips

- **Max tokens** controls the maximum response length, not the prompt length
- **Temperature** (0.0–1.0) controls randomness — lower is more deterministic
- **Multi-turn conversations** — add multiple messages with alternating `user` and `assistant` roles
- **Rate limits** — new accounts start with lower limits; they increase with usage

## Useful Links

- [Official API Documentation](https://platform.claude.com/docs/en/home)
- [API Quickstart](https://platform.claude.com/docs/en/get-started)
- [Python SDK on GitHub](https://github.com/anthropics/anthropic-sdk-python)
- [Node.js SDK on GitHub](https://github.com/anthropics/anthropic-sdk-node)
- [Pricing](https://www.anthropic.com/pricing)
