# Sakura Odontologia — primeira versão do front-end

Protótipo institucional estático, construído com HTML5, CSS3 e JavaScript puro. Não há backend, banco de dados, sistema de agendamento, analytics ou dependências externas.

## Estrutura

- `index.html`: conteúdo, estrutura semântica, SEO inicial e dados estruturados.
- `css/variables.css`: cores, tipografia e medidas globais.
- `css/layout.css`: estrutura de página e responsividade.
- `css/components.css`: componentes, tratamentos, contato, cookies e diálogos.
- `js/config.js`: configurações que dependem de confirmação da clínica.
- `js/main.js`: menu móvel e preparação do link de WhatsApp.
- `js/cookies.js`: aviso e preferência local de privacidade.
- `assets/images/`: logo fornecida e imagem de referência da recepção.

## Antes de publicar

1. **Imagem da recepção:** o arquivo `recepcao-referencia.png` é uma imagem enviada pelo usuário a partir de uma captura de referência do Google Maps. Está no protótipo apenas para avaliação visual. Substituir por fotografia original fornecida pela clínica ou licenciada para uso comercial. Não remover atribuições, controles ou marcas de origem de imagens do Google Maps.
2. **Logotipo:** confirmar com a clínica que o arquivo fornecido é a versão oficial autorizada para uso no site. Solicitar SVG ou PNG em alta resolução, se disponível.
3. **Tratamentos:** confirmar a lista de procedimentos e especialidades que a clínica efetivamente oferece. A relação atual é preliminar.
4. **Contato:** confirmar se (11) 4634-3413 continua ativo e informar o número oficial de WhatsApp. O campo `whatsappNumber` em `js/config.js` está vazio deliberadamente; o botão já está preparado e será ativado quando o número for configurado.
5. **Endereço e horários:** inserir endereço completo, horário de funcionamento e informações de responsável técnico somente após validação pela clínica.
6. **Privacidade:** revisar política de privacidade, aviso de cookies e eventuais integrações antes de publicação. Nesta versão não são usados analytics, publicidade ou cookies não essenciais.
7. **Revisão profissional:** validar informações e textos de divulgação odontológica com a clínica e seu responsável técnico, observando as normas do CFO.

## Pré-visualizar

Abra `index.html` em um navegador moderno. Não é necessário instalar pacotes ou iniciar servidor.
