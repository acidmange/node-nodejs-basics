# Node.js basics

This project demonstrates proficiency with Node.js core modules by implementing various tasks without external libraries. The solutions strictly follow best practices for asynchronous operations and leverage modern Node.js features (v22.14.0+).

## Key Functionality

### 📁 File System Operations
- `npm run fs:create` - Safely creates files with collision protection
- `npm run fs:copy` - Recursive folder duplication with error handling
- `npm run fs:rename` - Atomic file renaming with validation
- `npm run fs:delete` - Secure file deletion with existence checks
- `npm run fs:list` - Directory content enumeration
- `npm run fs:read` - Stream-based file reading

### 🖥 Command Line Interface
- `npm run cli:env` - RSS_ prefixed environment variable parser (`RSS_name=value`)
- `npm run cli:args` - Command-line argument processor (`--prop value → prop is value`)

### 🔄 Module Conversion
- `npm run modules` - Executes converted CommonJS → ESM module

### 🔐 Hashing
- `npm run hash` - SHA256 file hashing using streams

### 🌊 Stream Processing
- `npm run streams:read` - Readable stream file output
- `npm run streams:write` - Writable stream stdin capture
- `npm run streams:transform` - Transform stream for text reversal

### 📦 Compression
- `npm run zip:compress` - Gzip compression pipeline
- `npm run zip:decompress` - Gzip decompression with streams

### ⚡ Worker Threads
- `npm run wt` - Thread pool manager with result aggregation (uses CPU cores)

### 🧩 Child Processes
- `npm run cp` - IPC channel implementation between processes

## Technical Specifications
- **Runtime**: Node.js v22.14.0+
- **Dependencies**: Zero external libraries
- **Paradigm**: 100% asynchronous operations
- **Error Handling**: Consistent FS operation failure patterns
- **Stream Processing**: Proper backpressure management
- **Worker Optimization**: Logical CPU core utilization

## Usage Examples
```bash
# Process environment variables
npm run cli:env

# Parse command-line arguments
npm run cli:args -- --name John --age 30

# Execute worker thread demo
npm run wt

# Stream transformations
echo "Hello" | npm run streams:transform
