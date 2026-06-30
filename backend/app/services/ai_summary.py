import os

from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel("gemini-2.5-flash")


def generate_summary(file_content):
    prompt = f"""
You are an expert software engineer.

Analyze the following source code.

Return ONLY valid JSON.

The JSON must have exactly this structure:

{{
  "purpose": "...",
  "responsibilities": [
    "...",
    "..."
  ],
  "important_functions": [
    "...",
    "..."
  ],
  "potential_improvements": [
    "...",
    "..."
  ],
  "estimated_complexity": "Low | Medium | High"
}}

Do not wrap the JSON in markdown.

Source Code:

{file_content}
"""
    response = model.generate_content(prompt)

    import json

    text = response.text.strip()

    if text.startswith("```json"):
        text = text.replace("```json", "").replace("```", "").strip()

    return json.loads(text)