# Sakura Odontologia — Front-end V3

Evolução digital da identidade visual original da Sakura Odontologia. A proposta preserva a flor de cerejeira e o mascote dentário da marca, com uma aplicação contemporânea em rosa suave, coral, branco e tons neutros. A geometria da recepção é utilizada como assinatura visual secundária.

## Estrutura

- `index.html` — estrutura semântica, conteúdo e metadados.
- `css/variables.css` — variáveis de base.
- `css/layout.css` — estrutura e responsividade.
- `css/components.css` — componentes de interface.
- `css/identity-v3.css` — direção visual da versão 3.
- `js/config.js` — configurações editáveis de contato.
- `js/main.js` — navegação e interação da lista de cuidados.
- `js/cookies.js` — aviso de privacidade com preferência local.
- `assets/images/` — arquivos de imagem da marca.

## Executar localmente

Abra `index.html` no navegador. Para desenvolvimento, recomenda-se usar uma extensão de servidor local, como Live Server.

## Publicar na Cloudflare

Conecte o repositório GitHub à Cloudflare Pages/Workers Static Assets e configure o diretório de saída como a raiz do projeto (pasta que contém `index.html`). Não há etapa de build nem dependências npm nesta versão.

## Antes da publicação comercial

1. Confirmar com a clínica o número oficial de WhatsApp e preencher `whatsappNumber` em `js/config.js`.
2. Confirmar tratamentos, endereço completo, horários e informações profissionais.
3. Substituir imagens de referência por fotografias fornecidas ou autorizadas pela clínica.
4. Validar textos e informações de saúde com a responsável técnica.

## Tecnologias

HTML5, CSS3 e JavaScript puro. Sem backend, banco de dados ou serviços externos obrigatórios. As fontes web são carregadas do Google Fonts; fontes de sistema são usadas como fallback.
