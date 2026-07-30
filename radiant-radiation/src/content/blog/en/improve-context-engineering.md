---
title: 'Context Engineering Starts with Data Quality'
description: 'How better context leads to better LLM responses.'
pubDate: 'Aug 08 2025'
heroImage: '../../../../public/images/1756124357783.png'
lang: "en"
---

Continuing the discussion on **Context Engineering**, let's talk about one of its most important building blocks: providing high-quality context for your **Generative AI** applications.

Not every OCR engine produces the same results. And not every extracted dataset prepares an LLM to generate high-quality answers.

In many LLM projects, I see teams using the **Read** model from **Azure AI Document Intelligence** to extract text and immediately build a vector database.

Does it work? Up to a point.

But if the context provided to the LLM is shallow, we shouldn't expect deep or accurate responses.

A model can only reason over the information it receives. If all we provide is plain text stripped from its original structure, we're limiting the model's ability to truly understand the document.

Just as data engineering projects depend on high-quality data, LLM applications depend on high-quality context.

When we switch to the **Layout** model, the difference becomes clear. Structured extraction—including tables, document hierarchy, and layout information—enriches the knowledge base and ultimately improves the quality of the LLM's responses.

Instead of extracting only text, we're also capturing relationships between pieces of information, visual organization, and semantic structure.

The result is more accurate answers that better match what users are actually looking for.

Leveraging the document's original structure to enrich the extracted data helps:

- Reduce ambiguity.
- Improve response accuracy.
- Provide richer context for the model.

Although this may seem like a purely technical implementation detail, it's actually a fundamental aspect of **Context Engineering**: ensuring that the model receives the right context to generate better answers.

So here's my question:

**Are you feeding your LLM the bare minimum... or the context it actually needs?**