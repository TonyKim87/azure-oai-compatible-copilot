# ☁️ Azure OpenAI Provider for Copilot

[![CI](https://github.com/TonyKim87/azure-oai-compatible-copilot/actions/workflows/release.yml/badge.svg)](https://github.com/TonyKim87/azure-oai-compatible-copilot/actions)
[![Version](https://img.shields.io/visual-studio-marketplace/v/tony-kim.azure-oai-compatible-copilot?color=blue&label=Version)](https://marketplace.visualstudio.com/items?itemName=tony-kim.azure-oai-compatible-copilot)
[![Downloads](https://img.shields.io/visual-studio-marketplace/d/tony-kim.azure-oai-compatible-copilot?color=green&label=Downloads)](https://marketplace.visualstudio.com/items?itemName=tony-kim.azure-oai-compatible-copilot)
[![License](https://img.shields.io/github/license/TonyKim87/azure-oai-compatible-copilot?color=orange&label=License)](https://github.com/TonyKim87/azure-oai-compatible-copilot/blob/main/LICENSE)

Use Azure OpenAI models like GPT-4, GPT-4 Turbo, GPT-3.5 Turbo and more in VS Code with GitHub Copilot Chat powered by your Azure OpenAI resource 🔥

---

## ⚡ Quick Start
1. Install the Azure OpenAI Provider for Copilot extension [here](https://marketplace.visualstudio.com/items?itemName=tony-kim.azure-oai-compatible-copilot).
2. Open VS Code Settings and configure your Azure OpenAI settings:
   - `baseUrl`: `https://<RESOURCE>.openai.azure.com/openai/deployments/<MODEL>`
   - `azureResourceName`: Your Azure OpenAI resource name
   - `azureApiVersion`: API version (e.g., `2024-02-15-preview`)
   - `models`: Your deployed models list
3. Open VS Code's chat interface.
4. Click the model picker and select "Manage Models...".
5. Choose "Azure OpenAI" provider.
6. Enter your Azure OpenAI API key — it will be saved locally.
7. Select the models you want to add to the model picker.

## ✨ Why Use Azure OpenAI Provider in Copilot
- **Enterprise-grade security**: Use your own Azure OpenAI resource with enterprise compliance
- **Cost control**: Leverage your Azure credits and billing management
- **Model variety**: Access to latest GPT-4, GPT-4 Turbo, GPT-3.5 Turbo models
- **Vision support**: Works with GPT-4 Vision models for image analysis
- **Custom deployments**: Use your custom fine-tuned models

---

## 🔧 Configuration

### Settings
Configure the following in VS Code Settings (File → Preferences → Settings):

- **Azure Resource Name**: Your Azure OpenAI resource name
- **Azure API Version**: API version (default: `2024-02-15-preview`)
- **Models**: Choose one of the following configuration methods:

#### Option 1: Simple Model Names (Recommended)
Use comma-separated model names for quick setup:
- **Model Names**: `azureoai.modelNames`

#### Option 2: Detailed Model Configuration
Use detailed model configuration for advanced settings:
- **Models**: `azureoai.models`

### Example Configuration

#### Simple Configuration (Recommended)
```json
{
  "azureoai.azureResourceName": "myresource",
  "azureoai.azureApiVersion": "2024-02-15-preview",
  "azureoai.modelNames": "gpt-4,gpt-35-turbo,gpt-4-vision"
}
```

#### Advanced Configuration
```json
{
  "azureoai.azureResourceName": "myresource",
  "azureoai.azureApiVersion": "2024-02-15-preview",
  "azureoai.models": [
    {
      "id": "gpt-4",
      "owned_by": "Azure OpenAI",
      "context_length": 128000,
      "vision": false
    },
    {
      "id": "gpt-4-vision",
      "owned_by": "Azure OpenAI",
      "context_length": 128000,
      "vision": true
    }
  ]
}
```

> **Note**: You can use both configuration methods simultaneously. The extension will combine models from both settings.

---

## Requirements
- VS Code 1.104.0 or higher
- Azure OpenAI resource with deployed models
- Azure OpenAI API key

## 🛠️ Development
```bash
git clone https://github.com/TonyKim87/azure-oai-compatible-copilot
cd azure-oai-compatible-copilot
npm install
npm run compile
```
Press F5 to launch an Extension Development Host.

Common scripts:
- Build: `npm run compile`
- Watch: `npm run watch`
- Lint: `npm run lint`
- Format: `npm run format`
- Publish: `npx @vscode/vsce package -o extension.vsix`

---

## 📚 Azure OpenAI Setup Guide

1. **Create Azure OpenAI Resource**:
   - Go to Azure Portal → Create Resource → Azure OpenAI
   - Choose your subscription, resource group, and region
   - Select pricing tier

2. **Deploy Models**:
   - In Azure AI Studio, go to Deployments
   - Create new deployment for GPT-4, GPT-3.5-turbo, etc.
   - Note the deployment names for configuration

3. **Get API Key**:
   - Go to your Azure OpenAI resource → Keys and Endpoint
   - Copy one of the API keys

4. **Configure Extension**:
   - Use the deployment names as model IDs
   - Set resource name and API version in settings

---

## Support & License
- Open issues: https://github.com/TonyKim87/azure-oai-compatible-copilot/issues
- License: MIT License Copyright (c) 2025 Tony Kim
