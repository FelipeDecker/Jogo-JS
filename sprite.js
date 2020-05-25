function Sprite(x, y, largura, altura){
    this.x = x
    this.y = y
    this.largura = largura
    this.altura = altura

    this.desenha = function(xCanvas, yCanvas){
        ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura)

    }
}

var backGround = new Sprite(0, 0, 600, 600)

var boneco = new Sprite(618, 16, 87, 87)

var perdeu = new Sprite(603, 478, 397, 358)

var jogar = new Sprite(603, 127, 397, 347)

var novo = new Sprite(68, 721, 287, 93)

var spriteRecord = new Sprite(28, 879, 441, 95)

var spriteChao = new Sprite(0, 604, 600, 54)

var obstaculoVermelho = new Sprite(662, 867, 50, 120)

var obstaculoRosa = new Sprite(719, 867, 50, 120)

var obstaculoAzul = new Sprite(779, 867, 50, 120)

var obstaculoVerde = new Sprite(839, 867, 50, 120)

var obstaculoAmarelo = new Sprite(898, 867, 50, 120)
