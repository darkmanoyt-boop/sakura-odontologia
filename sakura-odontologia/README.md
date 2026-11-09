# Sakura Odontologia — Front-end V2

Protótipo institucional estático desenvolvido em HTML5, CSS3 e JavaScript puro. A V2 reconstrói a direção visual com foco arquitetônico, usando uma composição geométrica original inspirada na parede da recepção da clínica.

## Estrutura

- `index.html`: conteúdo, estrutura semântica, metadados e dados estruturados iniciais.
- `css/variables.css`: paleta, tipografia e variáveis globais.
- `css/layout.css`: composição, seções, responsividade e estados de layout.
- `css/components.css`: aviso de privacidade e componentes auxiliares.
- `js/config.js`: configurações de contato que precisam de confirmação.
- `js/main.js`: menu móvel, seletor interativo de áreas e configuração de WhatsApp.
- `js/cookies.js`: persistência local do fechamento do aviso de privacidade.
- `assets/images/logo-sakura.jpg`: logotipo fornecido para o protótipo.

## Como visualizar

Abra `index.html` em um navegador ou execute um servidor local na pasta do projeto, por exemplo:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Antes de publicar

1. Confirmar com a clínica o número oficial do WhatsApp e preencher `js/config.js`.
2. Confirmar telefone, endereço completo, horários, responsável técnico e registros profissionais.
3. Validar todos os tratamentos/áreas apresentados com a clínica.
4. Substituir imagens de referência por fotografias originais com autorização de uso. Os prints do Google Maps não devem ser publicados como imagens próprias nem ter atribuições removidas.
5. Revisar os dados estruturados, política de privacidade e aviso de cookies conforme os recursos efetivamente instalados.
6. Revisar a apresentação em navegadores e dispositivos reais antes da publicação definitiva.

## Escopo

Esta versão é somente front-end. Não possui backend, banco de dados, sistema de agendamento, formulário conectado ou analytics. O seletor de áreas altera apenas o conteúdo visual da página.

## Observação sobre conteúdo odontológico

As áreas apresentadas são uma proposta inicial de navegação e precisam ser confirmadas pela clínica antes de publicação. Conteúdo institucional e publicitário deve ser validado pelo responsável técnico e estar de acordo com as normas profissionais aplicáveis.
