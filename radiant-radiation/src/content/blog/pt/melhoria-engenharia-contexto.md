---
title: 'Qualidade para Engenharia de Contexto'
description: 'Como melhorar a Engenharia de Contexto e obter respostas melhores.'
pubDate: 'Aug 08 2025'
heroImage: '../../../../public/images/1756124357783.png'
lang: "pt-BR"
---

Continuando a falar sobre **Context Engineering** e como podemos fornecer dados de qualidade para nossos projetos de **GenAI**.

Nem todo OCR é igual. E nem todo dado extraído prepara bem um LLM para responder.

Em muitos projetos com LLMs, vejo equipes usando o modelo **Read** do **Azure Document Intelligence** para extrair texto e já partir para montar uma base vetorial.

Funciona? Até certo ponto, sim.

Mas se o contexto entregue à LLM é raso, não dá pra esperar uma resposta profunda.

O modelo só consegue devolver o que foi oferecido e se oferecemos apenas texto desconectado da estrutura original, estamos limitando a capacidade real de resposta.

Logo, da mesma forma como em projeto de dados devemos trabalhar bem com os nossos dados para fornecer dados de qualidades para os projetos, devemos fornecer contexto de qualidade.

Ao utilizar o modelo **Layout**, percebemos o quanto a extração estruturada, como: tabelas, hierarquia visual e zonas do documento, assim enriquecendo a base e como consequência enriquecendo a performance da LLM.

Além do que capturar texto, passamos a capturar relações entre os dados, organização visual e semântica.

Isso se traduz em respostas mais precisas, alinhadas ao que o usuário espera receber.

Adicionar novos campos com base na estrutura real do documento ajuda a:

- Reduzir ambiguidade;
- Melhorar a precisão;
- Contextualizar melhor o conteúdo.

Esse tipo de decisão, aparentemente técnica, é uma parte essencial do que chamamos de **Context Engineering**, a prática de garantir que o modelo receba o insumo certo para gerar respostas melhores.

**E você? Está alimentando sua LLM com o mínimo… ou com o contexto que ela realmente precisa?**
