from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import torch
import json
import re

model_name = "google/flan-t5-small"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSeq2SeqLM.from_pretrained(model_name)

def extract_info(cv_text):
    prompt = (
        "Extract the following information from this CV text as JSON with the exact keys: "
        '"name", "gender", "nationality", "date_of_birth", "marital_status", "education_career", "job_experiences" (list of objects with position, company, start_year, end_year, responsibilities), "biography" (very smallparagraph of text), "skills", "languages", "years_of_experience", "certifications_and_diplomas". \n\n"'
        "If value not found, use \"not mentioned\".\n\n"
        "Example output:\n"
        "{\n"
        "  \"name\": \"John Doe\",\n"
        "  \"gender\": \"Male\",\n"
        "..."
        "}\n\n"
        "CV text:\n" + cv_text + "\n\n"
        "Output:"
    )
    model.eval()
    inputs = tokenizer(prompt, return_tensors="pt", truncation=True)
    with torch.no_grad():
        outputs = model.generate(**inputs, max_new_tokens=50, do_sample=False,temperature=0.2)
    response_text = tokenizer.decode(outputs[0], skip_special_tokens=True)

    # Try to extract JSON using regex
    try:
        json_match = re.search(r"\{.*\}", response_text, re.DOTALL)
        if json_match:
            extracted_data = json.loads(json_match.group())
            return json.dumps(extracted_data, indent=2)
        else:
            raise ValueError("No JSON object found.")
    except Exception as e:
        return f"Failed to parse JSON:\n{str(e)}\n\nRaw model output:\n{response_text}"
