# Restful API Server-side

Sistema desenvolvido para tratar requisições HTTP e reproduzir videos em uma Raspberry Pi 3.

# Packages importantes

Para instalação e manupilação dos pacotes é preciso instalar o `NPM`, caso não tenha instalado.

## node-omxplayer

Middleware para integração com omx-player.

```shell
npm install node-omx --save
```

## Express
Framework para desenvolvimento de aplicaçãos NodeJS.

```shell
npm install express --save
```

## Nodemon

```shell
npm install nodemon --save
```

## Consign

Scaneia, recupera e inicializa todos o módulos de rotas, views e outros, atribuindo à aplicação. Autoload de rotas, views e config.

```shell
npm install consign --save
```

## Body-Parser

```shell
npm install body-parser --save
```

# Child-Process

```shell
npm install child_process --save
```

# Configuração de tela

Para configurar a tela da Raspberry será preciso editar alguns arquivos e fazer adaptações.

## Rotacionando a tela
Editar o arquivo `/boot/config.txt`.

```shell
sudo nano /boot/config.txt
```
E aí adicionar a linha com `display_rotate = 0`, por exemplo, no final do arquivo.

Opções:
```shell
display_rotate=0 	Normal (0 degrees)
display_rotate=1 	90 degrees
display_rotate=2 	180 degrees
display_rotate=3 	270 degrees

NOTE: You can rotate both the image and touch interface 180º by entering lcd_rotate=2 instead
display_rotate=0x10000 horizontal flip
display_rotate=0x20000 vertical flip
```