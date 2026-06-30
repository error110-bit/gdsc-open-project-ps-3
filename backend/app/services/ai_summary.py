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

Return ONLY plain text.

Structure your answer exactly like this:

Purpose:
...

Responsibilities:
- ...
- ...

Important Functions or Classes:
- ...

Potential Improvements:
- ...

Estimated Complexity:
Low / Medium / High

Source Code:

{file_content}
"""

    response = model.generate_content(prompt)

    return response.text