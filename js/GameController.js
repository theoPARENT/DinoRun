start()

function start() {

    let app = new PIXI.Application({width : 500, height: 500})

    document.body.appendChild(app.view)
    //////////////////  AJOUT DES ASSETS ET PLAYER    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    //let background = PIXI.sprite.from('/assets/background.png')
    let player = PIXI.Sprite.from('./wil-quinn-player1-walk.gif')

    app.stage.addChild(player)



}