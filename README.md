# Aplicação de Realidade Aumentada para HiLo Card

Esta aplicação web permite detectar cartões HiLo através da câmera do smartphone e exibir um modelo 3D sobre o cartão.

## Funcionalidades

- Detecção de HiLo Card usando AR.js
- Exibição de modelo 3D sobre o cartão detectado
- Interface simples e intuitiva
- Funciona em navegadores modernos em dispositivos móveis

## Requisitos

- Navegador moderno com suporte a WebRTC (Chrome, Firefox, Safari)
- Acesso à câmera do dispositivo
- Conexão à internet

## Como usar

1. Acesse a aplicação através do seu smartphone
2. Permita o acesso à câmera quando solicitado
3. Aponte a câmera para um cartão HiLo
4. O modelo 3D será exibido sobre o cartão quando detectado

## Configuração para desenvolvimento

### Pré-requisitos
- Servidor web local (pode ser usado o Live Server do VS Code)

### Instalação
1. Clone este repositório
```bash
git clone https://github.com/seu-usuario/hilo-ar-app.git
cd hilo-ar-app
```

2. Inicie um servidor local na pasta do projeto
```bash
# Se tiver o Node.js instalado
npx http-server

# Ou use a extensão Live Server do VS Code
```

3. Acesse a aplicação em um dispositivo móvel através do IP local
```
http://seu-ip-local:porta
```

## Personalização

### Alterando o modelo 3D
1. Substitua o arquivo `models/hilo3dmodel.glb` pelo seu próprio modelo 3D no formato GLB
2. Ajuste a escala e posição no arquivo `index.html` conforme necessário

### Alterando o padrão de reconhecimento
1. Crie um novo padrão utilizando uma ferramenta como [AR.js Marker Training](https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html)
2. Substitua o arquivo `patterns/hilo-pattern.patt` pelo seu novo padrão
3. Atualize o caminho no arquivo `index.html` se necessário

## Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

## Créditos
- [A-Frame](https://aframe.io/)
- [AR.js](https://github.com/AR-js-org/AR.js) 