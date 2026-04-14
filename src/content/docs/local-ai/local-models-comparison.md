---
title: Running Local AI Models — Ollama vs LM Studio vs vLLM
description: A comparison of the best tools for running AI models locally, with setup instructions for each
---

Running AI models on your own hardware gives you privacy, no API costs, and offline access. This guide compares the three most popular tools and helps you pick the right one.

## Quick Comparison

| Feature | Ollama | LM Studio | vLLM |
|---------|--------|-----------|------|
| **Best for** | CLI users, developers | Beginners, model exploration | Production serving |
| **Interface** | Terminal + REST API | GUI app | API server |
| **Setup difficulty** | Easy | Very easy | Moderate |
| **Platform** | macOS, Linux, Windows | macOS, Linux, Windows | Linux (NVIDIA GPU required) |
| **GPU support** | Apple Silicon, NVIDIA | Apple Silicon, NVIDIA | NVIDIA, AMD, Intel |
| **Model format** | GGUF (auto-download) | GGUF (Hugging Face browser) | All formats |
| **Multi-GPU** | Limited | No | Yes |
| **Cost** | Free | Free | Free |

## When to Use What

- **Ollama** — You want a simple CLI tool to run models locally and integrate via API
- **LM Studio** — You want a visual app to browse, download, and chat with models
- **vLLM** — You're deploying models on GPU servers for production use

## Ollama — Best for Developers

The simplest way to run LLMs from the terminal. See the [full Ollama tutorial](/local-ai/install-ollama/) for detailed setup.

```bash
# Install
brew install ollama      # macOS
curl -fsSL https://ollama.com/install.sh | sh  # Linux

# Run a model
ollama run llama3.1:8b
```

**Strengths:**
- One command to download and run any model
- REST API for integrating with your apps
- Great ecosystem (Open WebUI, Continue, LangChain)
- Works well on Apple Silicon Macs

**Limitations:**
- No GUI — terminal only
- Limited multi-GPU support
- Not ideal for high-throughput production serving

## LM Studio — Best for Beginners

A desktop app with a beautiful UI for downloading and chatting with models.

### Setup

1. Download from [lmstudio.ai](https://lmstudio.ai/)
2. Install and launch the app
3. Browse models in the **Discover** tab
4. Click **Download** on any model
5. Go to the **Chat** tab and start talking

### Key Features

- **Model browser** — search and download models from Hugging Face with one click
- **Side-by-side comparison** — run two models and compare their responses
- **Local API server** — compatible with the OpenAI API format
- **No terminal needed** — everything is point-and-click

### Running the Local API Server

LM Studio can act as a drop-in replacement for the OpenAI API:

1. Go to the **Developer** tab
2. Load a model
3. Click **Start Server**
4. Use it with any OpenAI-compatible library:

```python
from openai import OpenAI

client = OpenAI(
    base_url="http://localhost:1234/v1",
    api_key="lm-studio"  # any string works
)

response = client.chat.completions.create(
    model="loaded-model-name",
    messages=[
        {"role": "user", "content": "Hello!"}
    ]
)

print(response.choices[0].message.content)
```

**Strengths:**
- Most beginner-friendly option
- Great for evaluating and comparing models before deploying elsewhere
- OpenAI-compatible API server built in

**Limitations:**
- Desktop app only (no headless/server mode)
- No multi-GPU support
- Heavier resource usage than Ollama

## vLLM — Best for Production

High-performance inference engine designed for serving models at scale.

### Setup (requires NVIDIA GPU with CUDA)

```bash
pip install vllm
```

### Start the Server

```bash
vllm serve meta-llama/Llama-3.1-8B-Instruct
```

This starts an OpenAI-compatible API at `http://localhost:8000`.

### Use with Python

```python
from openai import OpenAI

client = OpenAI(
    base_url="http://localhost:8000/v1",
    api_key="token"  # any string works
)

response = client.chat.completions.create(
    model="meta-llama/Llama-3.1-8B-Instruct",
    messages=[
        {"role": "user", "content": "Hello!"}
    ]
)

print(response.choices[0].message.content)
```

**Strengths:**
- Fastest inference with PagedAttention memory management
- Continuous batching for handling many concurrent requests
- Multi-GPU and multi-node support
- Supports NVIDIA, AMD ROCm, Intel XPU, and TPU

**Limitations:**
- Requires NVIDIA GPU (or AMD/Intel for some features)
- Linux only (no macOS or Windows)
- More complex setup than Ollama or LM Studio
- Not great for casual/personal use

## Hardware Recommendations

### For Casual Use (Ollama / LM Studio)

| Hardware | What you can run |
|----------|-----------------|
| 8 GB RAM | 3B models (basic tasks) |
| 16 GB RAM | 7–8B models (good quality) |
| 32 GB RAM | 13–14B models (great quality) |
| 64 GB RAM | 70B models (near-GPT-4) |
| M1/M2/M3/M4 Mac | Great performance with Metal acceleration |

### For Production (vLLM)

| GPU | VRAM | What you can run |
|-----|------|-----------------|
| RTX 4060 | 8 GB | 7B models |
| RTX 4090 | 24 GB | 13B models, 70B quantized |
| A100 | 80 GB | 70B models at full precision |
| 2x A100 | 160 GB | 405B models |

## Model Format Guide

| Format | Compatibility | Notes |
|--------|--------------|-------|
| **GGUF** | Ollama, LM Studio | Universal — works on CPU, GPU, Apple Silicon |
| **AWQ** | vLLM | GPU-only, better throughput on NVIDIA |
| **GPTQ** | vLLM | GPU-only, widely available on Hugging Face |

**Rule of thumb:** Use GGUF for flexibility, AWQ for maximum GPU throughput.

## Useful Links

- [Ollama](https://ollama.com/) — [Model Library](https://ollama.com/library)
- [LM Studio](https://lmstudio.ai/) — [Documentation](https://lmstudio.ai/docs)
- [vLLM](https://docs.vllm.ai/) — [GitHub](https://github.com/vllm-project/vllm)
- [Hugging Face Models](https://huggingface.co/models) — Browse all open-source models
