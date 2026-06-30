import json
import os
import re

from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel("gemini-2.5-flash")


def generate_summary(file_content):

    # Prevent huge prompts
    file_content = file_content[:20000]

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

Do not include markdown.

Source Code:

{file_content}
"""

    response = model.generate_content(prompt)

    text = response.text.strip()

    # Remove markdown fences if present
    text = re.sub(r"^```json", "", text)
    text = re.sub(r"^```", "", text)
    text = re.sub(r"```$", "", text)
    text = text.strip()

    try:
        return json.loads(text)

    except Exception:

        print("\nGemini returned invalid JSON:\n")
        print(text)
        print()

        return {
            "purpose": "AI summary could not be generated.",
            "responsibilities": [],
            "important_functions": [],
            "potential_improvements": [
                "Gemini returned an invalid response."
            ],
            "estimated_complexity": "Unknown",
        }