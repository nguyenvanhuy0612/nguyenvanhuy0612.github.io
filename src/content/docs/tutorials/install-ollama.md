---
title: How to Install Ollama — Run LLMs Locally
description: Step-by-step guide to install Ollama and run large language models on your own machine
---

[Ollama](https://ollama.com/) lets you run large language models (like Llama, Mistral, Gemma, Phi) locally on your computer. No cloud, no API keys, completely private.

## Requirements

- **RAM**: minimum 16 GB (budget ~0.6 GB per billion parameters at q4 quantization)
- macOS (Apple Silicon recommended), Linux, or Windows
- A 7B model needs about 4–6 GB of memory

## Step 1: Install Ollama

### macOS

```bash
brew install ollama
```

Or download from [ollama.com/download](https://ollama.com/download).

### Linux

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

### Windows

```powershell
winget install Ollama.Ollama
```

Or download the installer from [ollama.com/download](https://ollama.com/download).

## Step 2: Start the Ollama Service

```bash
ollama serve
```

On macOS, the Ollama app starts the service automatically when launched. On Linux, the install script sets up a systemd service.

Verify it's running:

```bash
ollama list
```

## Step 3: Pull and Run a Model

Pull a model (this downloads it — only needed once):

```bash
# Small and fast (4.7 GB)
ollama pull llama3.2:3b

# Good balance of speed and quality (4.9 GB)
ollama pull llama3.1:8b

# Larger, more capable (26 GB — needs 32 GB RAM)
ollama pull llama3.1:70b-q4_K_M
```

Start a chat:

```bash
ollama run llama3.1:8b
```

Type your message and press Enter. Type `/bye` to exit.

## Step 4: Apple Silicon Optimization (macOS)

If you're on an M1/M2/M3/M4 Mac, enable Metal acceleration for up to 2.8x faster inference:

```bash
export OLLAMA_METAL=1
```

Add this to your `~/.zshrc` to make it permanent.

## Step 5: Use the REST API

Ollama exposes a local API at `http://localhost:11434`:

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.1:8b",
  "prompt": "Explain Docker in 3 sentences",
  "stream": false
}'
```

This lets you integrate Ollama with any app, script, or tool.

## Popular Models

| Model | Size | Best for |
|-------|------|----------|
| `llama3.2:3b` | 2 GB | Fast responses, lower hardware |
| `llama3.1:8b` | 4.9 GB | General purpose, good quality |
| `mistral:7b` | 4.1 GB | Strong reasoning, code |
| `gemma2:9b` | 5.4 GB | Google's model, good at tasks |
| `codellama:13b` | 7.4 GB | Code generation |
| `llama3.1:70b-q4_K_M` | 26 GB | Near-GPT-4 quality |

Browse all models at [ollama.com/library](https://ollama.com/library).

## Performance Tuning

Set these environment variables to tune for your hardware:

```bash
# Number of parallel requests (default: 1)
export OLLAMA_NUM_PARALLEL=2

# Max models loaded in memory at once (default: 1)
export OLLAMA_MAX_LOADED_MODELS=1
```

## Add a Chat UI

For a browser-based chat interface (like ChatGPT), install [Open WebUI](https://github.com/open-webui/open-webui):

```bash
docker run -d -p 3000:8080 \
  --add-host=host.docker.internal:host-gateway \
  -v open-webui:/app/backend/data \
  --name open-webui \
  ghcr.io/open-webui/open-webui:main
```

Then open `http://localhost:3000` in your browser.

## Useful Commands

```bash
ollama list              # Show downloaded models
ollama show llama3.1:8b  # Show model details
ollama rm mistral:7b     # Delete a model
ollama ps                # Show running models
ollama pull model:tag    # Download/update a model
```

## Useful Links

- [Ollama Documentation](https://github.com/ollama/ollama/blob/main/README.md)
- [Model Library](https://ollama.com/library)
- [REST API Reference](https://github.com/ollama/ollama/blob/main/docs/api.md)
- [Open WebUI](https://github.com/open-webui/open-webui)
