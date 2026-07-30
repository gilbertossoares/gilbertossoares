---
title: 'Which Generative AI Model Should I Use for My Project?'
description: 'How do I choose the right AI model?'
pubDate: 'Aug 25 2025'
heroImage: '../../../../public/images/1756124357783.png'
lang: "en"
---

I've previously written about **context engineering** and how it serves as the foundation for building successful AI applications. Today, I want to discuss another critical aspect of any generative AI initiative: **choosing the right model**.

Before making that decision, we first need to understand the **project requirements**. In other words: **what role will generative AI play in your solution?**

## 📌 When to Use SLMs (Small Language Models)

If your application requires **fast responses**, **low operational cost**, and possibly **light customization** (such as fine-tuning for a specific domain), an **SLM** may be the best choice.

Key advantages of SLMs:

- Lower memory and GPU/CPU requirements, making deployment easier in resource-constrained environments.
- Excellent performance on domain-specific tasks when trained with specialized datasets.
- Greater privacy and governance, since they can run entirely within restricted environments.

You can experiment with SLMs locally using **Azure AI Foundry Local**. Here's the quick start guide with prerequisites:

[Get started with Foundry Local - Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-local/get-started)

**Practical example:** an internal chatbot that answers employees' frequently asked questions quickly and at a low cost.

## 📌 When to Use LLMs (Large Language Models)

If your project requires an AI with **broad general knowledge**, capable of handling multiple topics, **generating creative content**, and adapting to different contexts, you're entering the territory of **LLMs**.

Models such as **GPT-4o** provide:

- Strong generalization across a wide range of domains.
- High-quality content generation, whether creative, technical, or explanatory.
- Multimodal capabilities in many scenarios (text, images, and audio).

**Practical example:** a customer support assistant that answers questions across multiple domains while also helping generate marketing content.

## 📌 When to Use Reasoning Models

What if your application requires **deep analysis**, **logical reasoning**, **multi-step problem solving**, **hypothesis comparison**, or **strategic planning**? In these cases, **reasoning models** (such as **GPT-o3**) are typically the better option.

Key characteristics:

- Ability to solve complex, multi-step problems.
- Strong reasoning capabilities for analytical tasks.
- Greater depth in technical or critical analysis.
- Excellent performance in decision-support scenarios such as strategic planning, legal analysis, or financial assessments.

**Practical example:** an AI agent that suggests differential diagnoses in healthcare while explaining the reasoning behind its conclusions.

## 📌 What About Multimodal Models?

So far we've focused on **text**, but many real-world applications also involve **audio, images, and video**.

That's where **multimodal models** come in, enabling AI to understand and generate multiple types of data within a single workflow.

Advantages of multimodal models:

- Enable richer and more natural user experiences (for example, speaking with an AI assistant while it analyzes an image).
- Support advanced workflows such as document understanding (text + images) or automatic video summarization.
- Expand the range of AI applications, particularly in healthcare, education, and customer service.

**Practical example:** a system that analyzes a medical report in PDF format (including both text and images) and explains the findings in plain language for the patient.

## 🚀 Conclusion

There is no **one-size-fits-all** solution. The right choice depends on the **role you expect the model to play**, the **cost constraints**, the **required response speed**, and the **depth of reasoning** your application needs.

This article provides a starting point for making that decision. In more advanced architectures, it's often possible—and beneficial—to **combine multiple models** within an **AI agent architecture**, leveraging the strengths of each one (a topic for a future post 😉).

All the technologies mentioned here are available through **Azure AI Foundry**.

👉 Have you ever had to choose between an SLM, an LLM, a reasoning model, or a multimodal model for a project? How did you make that decision?