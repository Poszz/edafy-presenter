'use strict';

// Preload runs in a privileged context (Node + browser).
// Expose only what the renderer actually needs via contextBridge.
// For this presentation app no IPC is required, so the preload is minimal.

const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  platform: process.platform,
});
