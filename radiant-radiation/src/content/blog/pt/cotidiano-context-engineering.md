---
title: 'Cotidiano, Engenharia de Contexto e qual seu impacto'
description: 'O que é Engenharia de Contexto na prática e como pode ser aplicada.'
pubDate: 'Aug 01 2025'
heroImage: '../../../../public/images/1754066678093.jpeg'
lang: "pt-BR"
---

Nos últimos dois anos, estive envolvido em diversos projetos com clientes relacionados à Generative AI e quero começar a compartilhar aqui algumas experiências práticas, não apenas para dividir aprendizados, mas também para ouvir outras perspectivas.

Um dos fatores críticos de sucesso em projetos com LLMs (Large Language Models) está diretamente relacionado à qualidade das respostas geradas. Entender como a LLM responde ao prompt e saber melhorar essas respostas faz toda a diferença. Isso exige não apenas pensar no prompt em si, mas também em todo o contexto que envolve a geração da resposta.

Cada decisão ao longo do projeto, desde a coleta e estruturação dos dados até a definição de mensagens do sistema (system message), memória e fluxos de interação, impacta diretamente no comportamento do modelo. Por vezes, uma pequena mudança no contexto pode alterar significativamente a resposta final.

É nesse ponto que entra a disciplina de Context Engineering.

O Context Engineering atua em todas as etapas de um projeto com LLMs: da criação e montagem do contexto à recuperação de informações externas, passando por estratégias de memória, avaliação e refinamento. Ele é o elo que conecta dados, modelos e interação de forma sistemática.

Muitas vezes, o projeto pode estar tecnicamente bem implementado, mas esbarra em uma pergunta simples do usuário, como: “Em qual página do documento X está essa informação?”. Nesse momento, percebemos que não basta retornar o documento completo, é necessário garantir que o modelo possa compreender, localizar e retornar exatamente o que foi solicitado.

Isso nos leva a questionamentos como:

- “O número da página foi extraído pelo OCR?”
- “Esse dado foi estruturado de forma acessível no contexto para a LLM?”
- “O OCR foi pré-processado para identificar campos-chave?”

Essas reflexões nos impulsionam a desenvolver novas técnicas de prompting, uso de memória persistente, recuperação de conhecimento (RAG, GraphRAG, AgenticRAG), agentes especializados, arquitetura de agentes, avaliação de respostas, entre outros. Aos poucos, o projeto deixa de ser uma linha reta e se transforma em uma malha complexa, onde não existe uma única forma certa, mas sim a forma mais eficaz para aquele cenário.

E aí te pergunto: você já enfrentou desafios parecidos em seus projetos com LLMs? Como tem estruturado o contexto para obter respostas mais precisas?

O que me inspirou a escrever esse post foi ler o artigo "A Survey of Context Engineering for Large Language Models", para quem quiser conferir o artigo: [2507.13334v2] [A Survey of Context Engineering for Large Language Models](https://arxiv.org/abs/2507.13334).