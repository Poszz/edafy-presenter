'use strict';

const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

function createWindow() {
  const win = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 800,
    minHeight: 600,
    backgroundColor: '#1a1025',
    titleBarStyle: process.platform === 'darwin' ? 'hiddenInset' : 'hidden',
    frame: process.platform === 'darwin', // Frameless on Windows/Linux for kiosk-style presentation
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
    show: false, // Wait until ready-to-show to avoid flash
  });

  // Hide menu bar on Windows/Linux
  if (process.platform !== 'darwin') {
    win.setMenuBarVisibility(false);
    win.setAutoHideMenuBar(true);
  }

  // Graceful show — avoids white flash on load
  win.once('ready-to-show', () => {
    win.show();
    // Auto fullscreen for presentation mode
    if (process.platform !== 'darwin') {
      win.setFullScreen(true);
    }
  });

  if (isDev) {
    win.loadURL('http://localhost:5173');
    win.webContents.openDevTools();
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  // Open external links in the system browser, not Electron
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      shell.openExternal(url);
    }
    return { action: 'deny' };
  });
}

// Build a minimal native menu
function buildMenu() {
  const template = [
    ...(process.platform === 'darwin'
      ? [
          {
            label: app.name,
            submenu: [
              { role: 'about' },
              { type: 'separator' },
              { role: 'hide' },
              { role: 'hideOthers' },
              { role: 'unhide' },
              { type: 'separator' },
              { role: 'quit' },
            ],
          },
        ]
      : []),
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' },
        ...(isDev ? [{ type: 'separator' }, { role: 'toggleDevTools' }] : []),
      ],
    },
    {
      label: 'Presentation',
      submenu: [
        {
          label: 'Enter Fullscreen',
          accelerator: 'F11',
          click(_, win) {
            if (win) win.setFullScreen(!win.isFullScreen());
          },
        },
      ],
    },
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

app.whenReady().then(() => {
  buildMenu();
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
