# 📊 Repository Visualizer with AI Inspector

A modern repository visualization tool that analyzes a source code repository, generates an interactive dependency graph, computes code metrics, and provides AI-powered file explanations using Google's Gemini API.

Built with **FastAPI + React + React Flow + Gemini AI**.

---

## ✨ Features

### 📂 Repository Analysis
- Analyze local source code repositories
- Recursive repository scanning
- Ignore migrations and test files
- Supports configurable repository size

### 🕸 Interactive Dependency Graph
- Visual graph of repository structure
- File dependency visualization
- Search files instantly
- Focus Mode:
  - Click any node to highlight its direct dependencies
  - Fade unrelated files for easier navigation
- Complexity-based node coloring

### 🤖 AI Inspector
- AI-generated explanation for every source file
- Displays:
  - Purpose
  - Responsibilities
  - Important Functions
  - Potential Improvements
  - Estimated Complexity
- Smart caching to avoid repeated API calls

### 📈 Code Metrics
For every file:
- Lines of Code (LOC)
- Functions
- Classes
- Loops
- Branches
- Try Blocks
- Estimated Complexity

Repository overview:
- Total files
- Total LOC
- Total functions
- Total classes
- Average complexity

### 🌍 Multi-language Support
Repository scanning supports:

- Python (.py)
- JavaScript (.js)
- TypeScript (.ts)
- React (.jsx/.tsx)
- Java (.java)
- C / C++
- C#
- Go
- Rust
- PHP
- Kotlin
- Swift
- HTML
- CSS
- SQL
- Shell Scripts

> Dependency graph generation is currently implemented for Python repositories.

---

# 🛠 Tech Stack

## Frontend

- React
- React Flow
- Axios
- CSS

## Backend

- FastAPI
- Python
- AST
- Google Gemini API

---

# 📁 Project Structure

```
repository-visualizer/
│
├── backend/
│   ├── api/
│   ├── services/
│   ├── utils/
│   ├── models/
│   └── main.py
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── adapters/
│   ├── api/
│   └── styles/
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone <repository-url>

cd repository-visualizer
```

---

## Backend Setup

Create a virtual environment

```bash
python -m venv .venv
```

Activate it

Windows

```bash
.venv\Scripts\activate
```

Linux / macOS

```bash
source .venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Create a `.env`

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Run backend

```bash
uvicorn app.main:app --reload
```

Backend runs on

```
http://127.0.0.1:8000
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 📖 Usage

1. Launch backend
2. Launch frontend
3. Enter a local repository path
4. Click **Analyze Repository**
5. Explore the dependency graph
6. Click any file to open the AI Inspector
7. Use Search or Focus Mode to inspect specific files

---

# 📷 Features Demonstrated

- Repository scanning
- Dependency graph generation
- AI-powered code explanation
- Interactive graph navigation
- Complexity visualization
- Repository statistics
- Search
- Focus Mode
- Smart AI cache

---

# ⚙ Assumptions

- Repository exists locally.
- Source files are readable.
- Gemini API key is configured.
- Python dependency visualization is currently supported.

---

# 🚀 Future Improvements

- Folder picker support
- GitHub repository import
- Dependency visualization for JavaScript and Java
- Folder-level graph
- Export graph as PNG/PDF
- Repository comparison
- Code smell detection
- Circular dependency detection
- AI architecture summary
- Automatic layout algorithms

---

# 👨‍💻 Demo Checklist

The demo includes:

- Repository analysis
- Interactive dependency graph
- Search functionality
- Focus Mode
- AI Inspector
- Repository metrics
- Backend API demonstration
- Gemini integration
- Code walkthrough

---

# 📜 License

This project was developed as part of the **MDG Build & Ship Assignment**.