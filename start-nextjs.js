#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Start Next.js development server
const nextProcess = spawn('npx', ['next', 'dev', '--port', '3000'], {
  cwd: process.cwd(),
  stdio: 'inherit',
  env: { ...process.env, NODE_ENV: 'development' }
});

nextProcess.on('error', (error) => {
  console.error('Failed to start Next.js:', error);
  process.exit(1);
});

nextProcess.on('exit', (code) => {
  console.log(`Next.js process exited with code ${code}`);
  process.exit(code);
});

// Handle process termination
process.on('SIGINT', () => {
  nextProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  nextProcess.kill('SIGTERM');
});