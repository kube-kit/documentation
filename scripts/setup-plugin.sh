#!/bin/bash
# filepath: scripts/setup-plugin.sh

echo "🔧 Setting up custom GitBook plugin..."

SRC="_plugins/gitbook-plugin-kubekit-custom"
DEST="node_modules/gitbook-plugin-kubekit-custom"

# Remove old plugin to ensure latest version
if [ -d "$DEST" ]; then
    echo "🗑️ Removing old plugin version..."
    rm -rf "$DEST"
else 
    echo "No existing plugin version found. Proceeding..."
fi

# Copy fresh plugin from source
echo "📦 Copying plugin files..."
cp -r "$SRC" "$DEST"

echo "✓ Plugin setup complete!"