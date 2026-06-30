# gdsc-open-project-ps-3

### AI-Powered Repository Visualizer

RepoLens is an AI-powered repository visualization tool that helps developers understand unfamiliar codebases through interactive dependency graphs, repository metrics, and AI-generated code explanations.

The application performs static code analysis to construct a dependency graph, computes file-level metrics, and leverages **Google Gemini AI** to generate concise explanations for individual source files. It provides an intuitive interface for exploring repository architecture and understanding relationships between components.

---

# 📷 Screenshots

> Replace the image paths below with your screenshots.

## Dashboard

![Dashboard](screenshots/dashboard.png)

---

## Focus Mode

![Focus Mode](screenshots/focus-mode.png)

---

## AI Inspector

![AI Inspector](screenshots/ai-inspector.png)

---

## Search

![Search](screenshots/search.png)

---

## API Documentation

![Swagger](screenshots/swagger.png)

---

# ✨ Key Highlights

- 🕸 Interactive dependency graph visualization
- 🤖 AI-powered source code explanations using Gemini
- 🎯 Focus Mode for dependency exploration
- 🔍 Instant repository search
- 📈 Repository-level code metrics
- 🎨 Complexity-based node coloring
- 🌙 Modern dark-themed responsive UI
- ⚡ AI response caching for faster repeated requests
- 🌍 Multi-language repository scanning

---

# 🚀 Features

## 📂 Repository Analysis

- Analyze local repositories
- Recursive directory scanning
- Configurable maximum file limit
- Ignore migration files
- Ignore test files
- Multi-language repository scanning

---

## 🕸 Interactive Dependency Graph

- Interactive graph visualization
- Dependency mapping
- Zoom, pan and minimap support
- Search functionality
- Focus Mode for dependency exploration
- Complexity-based node coloring

---

## 🤖 AI Inspector

Generate AI explanations for any source file.

Each explanation contains:

- Purpose
- Responsibilities
- Important Functions / Classes
- Potential Improvements
- Estimated Complexity

AI summaries are cached locally to reduce repeated API requests.

---

## 📈 Repository Metrics

Each file includes:

- Lines of Code (LOC)
- Number of Functions
- Number of Classes
- Loops
- Branches
- Try Blocks
- Estimated Complexity

Repository overview includes:

- Total Files
- Total LOC
- Total Functions
- Total Classes
- Average Complexity

---

## 🌍 Multi-language Support

Repository scanning currently supports:

- Python
- JavaScript
- TypeScript
- React
- Java
- C
- C++
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
GDSC-OPEN-PROJECT-PS-3/
│
├── backend/
│   ├── app/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── models/
│   │   └── main.py
│
├── frontend/
│   ├── api/
│   ├── adapters/
│   ├── components/
│   ├── pages/
│   └── styles/
│
└── README.md
```

---

# ⚙ Prerequisites

Before running the project, ensure you have:

- Python 3.11+
- Node.js 18+
- npm
- Google Gemini API Key

---

# 🚀 Installation

## Clone Repository

```bash
git clone <repository-url>

cd gdsc-open-project-ps-3
```

---

## Backend Setup

```bash
cd backend

python -m venv venv
```

Activate virtual environment

### Linux / macOS

```bash
source venv/bin/activate
```

### Windows

```bash
venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Create a `.env` file

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

# ▶ Usage

1. Start the backend server.
2. Start the frontend.
3. Enter the path of a local repository.
4. Configure analysis options if required.
5. Click **Analyze Repository**.
6. Explore the dependency graph.
7. Search for files.
8. Click any node to enter **Focus Mode**.
9. View AI-generated explanations in the AI Inspector.

---

# 🔌 API Endpoints

## Analyze Repository

```
POST /graph
```

Returns:

- Nodes
- Dependency edges
- Repository metrics

---

## Generate AI Summary

```
GET /summary
```

Returns an AI-generated explanation for a selected file.

---

# 📌 Assumptions

- Repository is available locally.
- Source files are accessible.
- A valid Gemini API key is configured.
- Internet connectivity is available for AI summary generation.
- Dependency graph visualization currently supports Python repositories.
- AI summaries are cached locally to reduce repeated API requests.

---

# 💡 Challenges Faced

- Building an accurate dependency graph from repository imports.
- Keeping large repository graphs readable and interactive.
- Integrating Gemini AI while handling API rate limits and caching.
- Supporting repository scanning across multiple programming languages.

---

# 🚀 Future Improvements

- GitHub repository import
- Folder picker support
- JavaScript dependency graph generation
- Java dependency graph generation
- Folder-level visualization
- Export graph as PNG/PDF
- Circular dependency detection
- Repository architecture summary
- Code smell analysis

---

# 👥 Team

**Team RepoLens**

- Falguni Dhingra
- Garvita Kothari

---

# 📄 License

This project was developed as part of the **GDSC Open Project (PS-3)**.