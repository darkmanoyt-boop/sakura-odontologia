# Sakura Odontologia — versão responsiva

Site institucional estático em HTML5, CSS3 e JavaScript puro. Preparado para publicação no Cloudflare Pages/Workers Static Assets ou hospedagem estática equivalente.

## Estrutura

- `index.html`: conteúdo semântico, SEO inicial e dados estruturados.
- `css/`: variáveis, layout, componentes, identidade visual e refinamentos responsivos.
- `js/`: navegação mobile, seletor de áreas de cuidado, configuração de contato e aviso de privacidade.
- `assets/images/`: logotipo e fotografias reais selecionadas da clínica, otimizadas em WebP.

## Visualização local

Abra `index.html` em um navegador. Para simular um servidor local, execute `python -m http.server 8000` na pasta `sakura-odontologia` e acesse `http://localhost:8000`.

O arquivo `Sakura-preview-mobile.html` (entregue separadamente) é uma prévia autocontida: CSS, JavaScript e imagens incorporados para abrir diretamente em um celular.

## Publicação

Envie a pasta `sakura-odontologia` inteira ao repositório GitHub, mantendo os caminhos relativos. O ponto de entrada é `index.html`. Não envie apenas o HTML isolado: os arquivos CSS, JS e imagens são necessários para a versão de produção.

## Configuração de contato

Edite `js/config.js` para definir o número oficial de WhatsApp e a mensagem inicial. O link de WhatsApp permanece inativo até a confirmação do número. O telefone atual exibido é `(11) 4634-3413`.

## Observações

- Não há backend, banco de dados, agenda online ou ferramenta de analytics.
- Os serviços são apresentados como áreas de cuidado e devem ser confirmados pela clínica antes da publicação definitiva.
- O aviso de privacidade usa armazenamento local apenas para memorizar a escolha do visitante.
- Testar em Safari iOS, Chrome Android e navegadores desktop antes da publicação final.
