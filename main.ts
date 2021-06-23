namespace SpriteKind {
    export const exit = SpriteKind.create()
    export const exit2 = SpriteKind.create()
    export const exit3 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.exit3, function (sprite, otherSprite) {
    game.over(true, effects.smiles)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.exit2, function (sprite, otherSprite) {
    mySprite.setPosition(10000, 10000)
    if (game.ask("即將前往最後一關")) {
        出口2.setPosition(1000, 1000)
        tiles.setTilemap(tilemap`層級2`)
        scene.setTile(11, img`
            b d d d d d d c d 1 1 1 1 1 1 c 
            d b b b b b b c 1 d d d d d d c 
            d b b b b b b c 1 d d d d d d c 
            d b b b b b b c 1 d d d d d d c 
            d b b b b b b c 1 d d d d d d c 
            d b b b b b b c 1 d d d d d d c 
            d b b b b b b b 1 d d d d d d d 
            c c c c c c b a c c c c c c d a 
            d 1 1 1 1 1 1 c b d d d d d d c 
            1 d d d d d d c d b b b b b b c 
            1 d d d d d d c d b b b b b b c 
            1 d d d d d d c d b b b b b b c 
            1 d d d d d d c d b b b b b b c 
            1 d d d d d d c d b b b b b b c 
            1 d d d d d d d d b b b b b b b 
            c c c c c c d a b c c c c c c a 
            `, false)
        info.startCountdown(210)
        scene.setTile(9, img`
            . f f . . f f . 
            . f f f f f f . 
            f f f f f f f f 
            f f f f f f f f 
            f f f d d f f f 
            f d d d d d d f 
            . d f d d f d . 
            3 d d d d d d 3 
            d d d d d d d d 
            9 9 9 9 9 4 9 9 
            9 9 9 9 9 5 8 9 
            d 9 9 9 9 9 5 d 
            d 9 9 9 9 9 9 d 
            d 8 8 8 8 8 8 d 
            . 8 8 8 8 8 8 . 
            . 8 8 . . 8 8 . 
            . d d . . d d . 
            `, false)
        tiles.placeOnTile(主角, tiles.getTileLocation(0, 2))
        出口3 = sprites.create(img`
            2 2 2 2 7 2 7 2 7 2 2 2 7 2 2 2 
            2 7 7 7 7 2 7 2 7 7 2 7 7 7 2 7 
            2 7 7 7 7 2 7 2 7 7 2 7 7 7 2 7 
            2 7 7 7 7 2 7 2 7 7 2 7 7 7 2 7 
            2 7 7 7 7 2 7 2 7 7 2 7 7 7 2 7 
            2 7 7 7 7 2 7 2 7 7 2 7 7 7 2 7 
            2 7 7 7 7 2 7 2 7 7 2 7 7 7 2 7 
            2 2 2 2 7 7 2 7 7 7 2 7 7 7 2 7 
            2 7 7 7 7 2 7 2 7 7 2 7 7 7 2 7 
            2 7 7 7 7 2 7 2 7 7 2 7 7 7 2 7 
            2 7 7 7 7 2 7 2 7 7 2 7 7 7 2 7 
            2 7 7 7 7 2 7 2 7 7 2 7 7 7 2 7 
            2 7 7 7 7 2 7 2 7 7 2 7 7 7 2 7 
            2 7 7 7 7 2 7 2 7 7 2 7 7 7 2 7 
            2 7 7 7 7 2 7 2 7 7 2 7 7 7 2 7 
            2 2 2 2 7 2 7 2 7 2 2 2 7 7 2 7 
            `, SpriteKind.exit3)
        出口3.setPosition(768, 733)
        mySprite3 = sprites.create(img`
            .........ffffffffffff..............
            .......ffffffffffffffff............
            .....ffffffffffffffffffff..........
            ....fffffffffffffffffffff..........
            ...ffffffffffffffffffffffff........
            ...fffffffffffffffffffffffff.......
            ..fffffffffffffffffffffffffff......
            ..fffffffffdfffffffffdfffffff......
            ..fffffddffdffdfffdffdfffffff......
            ..fffffdddddddddddddddfffffff......
            ..fffdfffffffddddffffffdfffff......
            ..fffdfdddddfddddfddddfdddfff......
            ..fffdddddddddddddddddddddfff......
            ..fddfffffffffdffffffffffddff......
            dddddf11ffff1fdf11fffff1fdddfdd....
            ddffff11ffff1fff11fffff1fdddddd....
            dddddf11ffff1fdf11fffff1fffffdd....
            dddddf11ff1f1fdf11ff1ff1fdddddd....
            ..dddfffffffffdffffffffffdddd......
            ..daaaddddddddddddddddddaaadd......
            ..daaaddddddffddffdddfddaaadd......
            ..daaaddfddddddddddddffdaaadd......
            ...dddffffffffffffffffdddddd.......
            ...ddddddf2222222333fddddddd.......
            ....dddddffffffff333fdddddd........
            .....dddddddddddd333dddddd.........
            ......ddddddddddddddddddd..........
            ...................................
            ...................................
            ...................................
            `, SpriteKind.Enemy)
        mySprite3.setPosition(430, 630)
        mySprite3.follow(主角, 55)
        mySprite3.setVelocity(30, 30)
        mySprite4 = sprites.create(img`
            .......ee......................
            .......eee.fffff...............
            ........eeefffff...............
            .........eefffff...............
            .........ff88888ff.............
            .......fffffffffffff...........
            ......fffffffffffffff..........
            .....fffffffffffffffff.........
            ....fffffffffffffffffff........
            ....ffffffffdffffffffff........
            ...ffffffffdddddffffffff.......
            ...ffffffddddddddfffffff.......
            ..fffffddddddddddddffffff......
            ..fffddddffddddffddddffff......
            ..ffdddddddddddddddddddff......
            ..ffddfffffffdfffffffdddf......
            ..ffddf1fff1fdf1fff1fdddf......
            .ddffff1fff1fff1fff1ffffdd.....
            .dddddf11111fdf11111fddddd.....
            .dddddfffffffdfffffffddddd.....
            .dddddddddddddddddddddddd......
            ....d55ddddffdffddddd55d.......
            ....d55ddfddddddddfdd55d.......
            ....ddddffffffffffffdddd.......
            ....dddddff222222f3ddddd.......
            .....dddddff2222ffddddd........
            .....ddddddffffffddddd.........
            ......ddddddddddddddd..........
            ........dddddddddddd...........
            .........dddddddddd............
            ..........fffffff..............
            ..........fffffff..............
            ...........fffff...............
            ............fff................
            ............fff................
            ...........fff.................
            ...............................
            ...............................
            ...............................
            `, SpriteKind.Enemy)
        mySprite4.setPosition(57, 728)
        mySprite4.follow(主角, 55)
        mySprite4.setVelocity(30, 30)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.exit, function (sprite, otherSprite) {
    mySprite.setPosition(10000, 10000)
    if (game.ask("即將前往下一關")) {
        tiles.setTilemap(tilemap`第二關`)
        出口.setPosition(1000, 1000)
        scene.setTile(11, img`
            b d d d d d d d d d d d d d d c 
            d b b b b b b b b b b b b b b c 
            d b b b b b b b b b b b b b b c 
            d b b b b b b b b b b b b b b c 
            d b b b b b b b b b b b b b b c 
            d b b b b b b b b b b b b b b c 
            d b b b b b b b b b b b b b b c 
            d b b b b b b b b b b b b b b c 
            d b b b b b b b b b b b b b b c 
            d b b b b b b b b b b b b b b c 
            d b b b b b b b b b b b b b b c 
            d b b b b b b b b b b b b b b c 
            d b b b b b b b b b b b b b b c 
            d b b b b b b b b b b b b b b c 
            d b b b b b b b b b b b b b b c 
            c c c c c c c c c c c c c c c a 
            `, false)
        info.startCountdown(150)
        scene.setTile(9, img`
            . f f . . f f . 
            . f f f f f f . 
            f f f f f f f f 
            f f f f f f f f 
            f f f d d f f f 
            f d d d d d d f 
            . d f d d f d . 
            3 d d d d d d 3 
            d d d d d d d d 
            9 9 9 9 9 4 9 9 
            9 9 9 9 9 5 8 9 
            d 9 9 9 9 9 5 d 
            d 9 9 9 9 9 9 d 
            d 8 8 8 8 8 8 d 
            . 8 8 8 8 8 8 . 
            . 8 8 . . 8 8 . 
            . d d . . d d . 
            `, false)
        tiles.placeOnTile(主角, tiles.getTileLocation(0, 2))
        出口2 = sprites.create(img`
            ...........ccccc66666...........
            ........ccc4444444444666........
            ......cc444444444bb4444466......
            .....cb4444bb4444b5b444444b.....
            ....eb4444b5b44444b44444444b....
            ...ebb44444b4444444444b444446...
            ..eb6bb444444444bb444b5b444446..
            ..e6bb5b44444444b5b444b44bb44e..
            .e66b4b4444444444b4444444b5b44e.
            .e6bb444444444444444444444bb44e.
            eb66b44444bb444444444444444444be
            eb66bb444b5b44444444bb44444444be
            fb666b444bb444444444b5b4444444bf
            fcb666b44444444444444bb444444bcf
            .fbb6666b44444444444444444444bf.
            .efbb66666bb4444444444444444bfe.
            .86fcbb66666bbb44444444444bcc688
            8772effcbbbbbbbbbbbbbbbbcfc22778
            87722222cccccccccccccccc22226678
            f866622222222222222222222276686f
            fef866677766667777776667777fffef
            fbff877768f86777777666776fffffbf
            fbeffeefffeff7766688effeeeefeb6f
            f6bfffeffeeeeeeeeeeeeefeeeeebb6e
            f66ddfffffeeeffeffeeeeeffeedb46e
            .c66ddd4effffffeeeeeffff4ddb46e.
            .fc6b4dddddddddddddddddddb444ee.
            ..ff6bb444444444444444444444ee..
            ....ffbbbb4444444444444444ee....
            ......ffebbbbbb44444444eee......
            .........fffffffcccccee.........
            ................................
            `, SpriteKind.exit2)
        出口2.setPosition(768, 720)
        mySprite2 = sprites.create(img`
            ........ffffffffff........
            .....ffffffffffffff.......
            ....fffffffffffffffff.....
            ...fffffffffffffffffff....
            ..fffdddddffffddddffff....
            ..ffdddddddffdddddddfff...
            ..ffdddddddddddddddddff...
            ..fdddddddddddddddddddf...
            ..fdddddddddddddddddddf...
            ..fddfffffddddffffddddf...
            ..fddfdddfddddfddfddddf...
            ..fdddddddddddddddddddf...
            ..fddd11f1dddd1f11ddddf...
            dddddd1ff1dddd1ff1ddddddd.
            ddddddddddddddddddddddddd.
            ddddddddddddddddddddddddd.
            ..d444ddddddddddddd444d...
            ..d444ddddfdddfdddd444d...
            ..d444ddddddddddddd444d...
            ..ddddddddddddddddddddd...
            ..ddddddddddddddfdddddd...
            ..ddddddffffffffffddddd...
            ..ddddddf2222222fdddddd...
            ...dddddfffffffffddddd....
            ....ddddddddddddddddd.....
            .....dddddddfffddddd......
            ......ddddddddddddd.......
            ..........................
            `, SpriteKind.Enemy)
        mySprite2.setPosition(204, 584)
        mySprite2.follow(主角, 55)
        mySprite2.setVelocity(30, 30)
        mySprite5 = sprites.create(img`
            ......ffffffffffffff.....
            ....ffffffffffffffffff...
            ...ffffffffffffffffffff..
            ...ffffffffffffffffffff..
            ...ffddddddfffffddddfff..
            ..ffdddddddddddddddddfff.
            ..ffddfffddddddddfffddff.
            ..ffddfddddddddddddfddff.
            ..ffdddfffffddfffffdddff.
            ..ffdddf111fddf111fdddff.
            .ddfffff1f1fddf1f1fffffdd
            .ddddddf111ffff111fdddddd
            .ddddddfffffddfffffdddddd
            .dddddddddddddddddddddddd
            ...d333ddddddddddd333dd..
            ...d333dddffdffddd333dd..
            ...d333ddddddddddd333dd..
            ...dddddfdddddddfdddddd..
            ...ddddffdddddddffddddd..
            ....ddddfffffffffddddd...
            ....ddddf2233322fddddd...
            .....dddfffffffffdddd....
            .......dddddddddddd......
            .........................
            .........................
            `, SpriteKind.Enemy)
        mySprite5.setPosition(768, 300)
        mySprite5.follow(主角, 55)
        mySprite5.setVelocity(30, 30)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let mySprite5: Sprite = null
let mySprite2: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let 出口3: Sprite = null
let 出口2: Sprite = null
let 主角: Sprite = null
let mySprite: Sprite = null
let 出口: Sprite = null
info.startCountdown(90)
出口 = sprites.create(img`
    .............beebbbb............
    ............eebbbb4bb...........
    ............eb344bb4bb..........
    ............e44334bb4bb.........
    ............eb433344b4be........
    ............4eb43344444be.......
    ...........bd4eb43333344bb......
    ..........b455d4443333444bb.....
    ..........4d5555d444333444bb....
    .........4555555dd4b4443444be...
    ........bd5555d555d4bb444444ee..
    ........b55ddd665555bb4b44444ee.
    .......bd5555677655554ebb44444eb
    .......43222558855555d4eeb44b4ee
    ......b422332ddd555222d4eebbb4be
    ......be22232ed55522332db4ebbbbe
    .....bde22222e555e22232edd4bbbbe
    .....b52e222e3555e22222eddd4ebee
    ....bd552eee355552e222e355544eee
    ....665dd5555555552eee355dd4deee
    ...6776555555555555555551554d4ee
    ...4885222555dddd6655551544d4eee
    ..b45522332555dd677611d444ddeee.
    ..4d5222232e55555881d44ddd4eee..
    .bdd5e22222e555115114d54d4ee....
    .b55d2e222e351144d1d55eeee......
    bd5ddd2eee3d444555dd4e..........
    b555115dddd55d544eede...........
    4511d444d5544ee...4de...........
    41d4555d4ee........44...........
    41554eede.......................
    44ee...4e.......................
    `, SpriteKind.exit)
出口.setPosition(392, 360)
mySprite = sprites.create(img`
    ......ffffffffffffff.....
    ....ffffffffffffffffff...
    ...ffffffffffffffffffff..
    ...ffffffffffffffffffff..
    ...ffddddddfffffddddfff..
    ..ffdddddddddddddddddfff.
    ..ffddfffddddddddfffddff.
    ..ffddfddddddddddddfddff.
    ..ffdddfffffddfffffdddff.
    ..ffdddf111fddf111fdddff.
    .ddfffff1f1fddf1f1fffffdd
    .ddddddf111ffff111fdddddd
    .ddddddfffffddfffffdddddd
    .dddddddddddddddddddddddd
    ...d333ddddddddddd333dd..
    ...d333dddffdffddd333dd..
    ...d333ddddddddddd333dd..
    ...dddddfdddddddfdddddd..
    ...ddddffdddddddffddddd..
    ....ddddfffffffffddddd...
    ....ddddf2233322fddddd...
    .....dddfffffffffdddd....
    .......dddddddddddd......
    .........................
    .........................
    `, SpriteKind.Enemy)
mySprite.setPosition(385, 385)
mySprite.setVelocity(30, 30)
主角 = sprites.create(img`
    . f f . . f f . 
    . f f f f f f . 
    f f f f f f f f 
    f f f f f f f f 
    f f f d d f f f 
    f d d d d d d f 
    . d f d d f d . 
    3 d d d d d d 3 
    d d d d d d d d 
    9 9 9 9 9 4 9 9 
    9 9 9 9 9 5 8 9 
    d 9 9 9 9 9 5 d 
    d 9 9 9 9 9 9 d 
    d 8 8 8 8 8 8 d 
    . 8 8 8 8 8 8 . 
    . 8 8 . . 8 8 . 
    . d d . . d d . 
    `, SpriteKind.Player)
主角.setPosition(14, 20)
controller.moveSprite(主角, 100, 100)
scene.cameraFollowSprite(主角)
scene.setTileMap(assets.image`第1關`, TileScale.Eight)
scene.setTile(11, img`
    b d d d d d d c d 1 1 1 1 1 1 c 
    d b b b b b b c 1 d d d d d d c 
    d b b b b b b c 1 d d d d d d c 
    d b b b b b b c 1 d d d d d d c 
    d b b b b b b c 1 d d d d d d c 
    d b b b b b b c 1 d d d d d d c 
    d b b b b b b b 1 d d d d d d d 
    c c c c c c b a c c c c c c d a 
    d 1 1 1 1 1 1 c b d d d d d d c 
    1 d d d d d d c d b b b b b b c 
    1 d d d d d d c d b b b b b b c 
    1 d d d d d d c d b b b b b b c 
    1 d d d d d d c d b b b b b b c 
    1 d d d d d d c d b b b b b b c 
    1 d d d d d d d d b b b b b b b 
    c c c c c c d a b c c c c c c a 
    `, false)
scene.setTile(14, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 6 7 7 6 6 6 7 6 7 7 6 7 
    7 7 7 6 d 6 6 6 d d 6 d 6 d 7 6 
    7 6 7 d d d d d d d d d d d d d 
    7 6 6 d d d d d d d d d d b d d 
    7 7 6 d d d d d d d d d d d d d 
    7 7 d d d d d d d d d d d d d d 
    7 6 d d d d b b d d d d d d d d 
    7 6 d d d d b b d d d 1 d d d d 
    7 7 6 d d d d d d d d d d d d d 
    7 6 d d d d d d d d d d d d 1 d 
    7 d d d d d d d d d 1 1 d d d d 
    7 6 d d d d d d d d 1 1 d d d d 
    7 7 6 d d d d d d d d d d d d d 
    7 6 d d b d d d d d d d d d d b 
    7 6 d d d d d d d d d d d d d d 
    `, true)
scene.setTile(2, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    d 6 7 6 6 7 7 7 6 d 6 7 6 7 7 7 
    d d 6 6 d d 6 6 6 d d 6 d 6 7 7 
    d d d d d d d d d d d d d d 6 7 
    d d d d b d d d d d 1 1 d d 6 7 
    d d d d d d d d d d 1 1 d 6 7 7 
    1 d d d d d d d 1 d d d d d 6 7 
    d d d d d d d d d d d d d d 6 7 
    d d d d d d d d d b d d 6 7 7 7 
    d d d b b d d d d d d d d 6 7 7 
    d d d b b d d d d d d d d d 6 7 
    d d d d d d d d d d d d d d 6 7 
    d d d d d d d d d d 1 d d 6 7 7 
    d d d d d d d d d d d d d 6 6 7 
    d d d d d b d d d d d d d d d 7 
    d d d d d d d d d d d d d d 6 7 
    `, true)
scene.setTile(4, img`
    d d d d d d d d d d d d d d 6 7 
    b d d d d d d d d d d d d d 6 7 
    d d d d d 1 d d d d d d d 6 7 7 
    d d d d d d d d d d d d d d 6 7 
    d d d d d d d d d b b d d d d 7 
    d d d d d d d d d b b d d d 6 7 
    d d d d d d d d d d d d d 6 7 7 
    d 1 1 d d d d d d d d d d d 6 7 
    d 1 1 d d d d 1 d d d d d d 6 7 
    d d d d d d d d d d d d d d 7 7 
    d d d d d d d d d d d d d 6 7 7 
    d d b d d d d d d d d 1 d 6 6 7 
    d d d d d d d d d d d d d 7 6 7 
    6 7 d 6 d 6 d d 6 6 6 d 6 7 7 7 
    7 6 7 7 6 7 6 6 6 7 7 6 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, true)
scene.setTile(7, img`
    7 6 d d d d d d d d d d d d d d 
    7 d d d d d d d d d d d d d d d 
    7 6 6 d d d d d d d 1 1 d d d d 
    7 7 6 d d d 1 d d d 1 1 d d d d 
    7 6 d d d d d d d d d d d d d d 
    7 6 d d d d d d d d d d d d d d 
    7 7 6 d d d d d d d d d d d d b 
    7 7 7 6 d d d d d d d d d d d d 
    7 6 d d d d d d d d d b d d d d 
    7 6 d d b b d d d d d d d d d d 
    7 7 6 d b b d d d d d d d 1 1 d 
    7 6 d d d d d d d d d d d 1 1 d 
    7 6 d d d d d d d d d d d d d d 
    7 7 6 d 6 d d 6 6 6 d d 6 6 d d 
    7 7 7 6 7 6 d 6 7 7 7 6 6 7 6 d 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, true)
scene.setTile(1, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    6 6 7 6 7 6 7 6 6 d 6 7 7 6 7 7 
    d d 6 7 7 6 7 d d d 7 6 d 6 7 6 
    d d d d d d 6 d d d d d d d 6 d 
    d d d d d d d d d d d d d d d d 
    d 1 1 d 1 d d d d d 1 d d d d d 
    d 1 1 d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d b d d d d d d d 1 d 
    d d d d d d d d d d d d d d d d 
    d d b d d d d d d d d b b d d d 
    d d d d d d d d d d d b b d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d d 1 d d d d d d d d 
    d d d d d d d d d d d d d d 1 d 
    `, true)
scene.setTile(3, img`
    d d d d d d d d d d d d d d 6 7 
    d d d d d d d d d d d d d d 6 7 
    d d 1 d d d d d d d d d d 6 7 7 
    d 1 1 1 d d d d b d d d d d 6 7 
    d d 1 d d d d d d d d d d d d 7 
    d d d d d d d d d d d d d d 6 7 
    d d d d d d d d d d d 1 d 6 7 7 
    d d d d d d d d d d d d d 6 6 7 
    1 d d d d d d d d d d d d d 6 7 
    d d d d b b d d d d d d 6 7 7 7 
    d d d d b b d d d d d d d 6 6 7 
    d d d d d d d d d d d d d d 7 7 
    d d d d d d d d d d b d d d d 7 
    d d d d d d d d d d d d d 6 6 7 
    d d 1 d d d d d d d d d d 6 7 7 
    d d d d d d d d d d d d d d 6 7 
    `, true)
scene.setTile(8, img`
    d 1 d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d b d d d d d 1 1 d d 
    d d d d d d d d d d d d 1 1 d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d 1 d d d b b d d d d d d d d d 
    d d d d d b b d d d d d d d b d 
    d d d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d b d d d d d d d 1 d d d d 
    d d d d d d d d d d d d d d d d 
    d 6 d d d d d d d 6 d d d d d d 
    6 7 6 d 6 7 d d d 7 6 7 7 6 d d 
    7 7 6 7 7 6 d 6 6 7 6 7 6 7 6 6 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, true)
scene.setTile(5, img`
    7 7 6 d d d 1 1 d d d d d d d d 
    7 6 6 d d d 1 1 d d d d d d d d 
    7 7 7 6 d d d d d d 1 d d d d d 
    7 6 6 d d d d d d d d d d d d d 
    7 7 6 6 d d d d d d d d d d d d 
    7 7 6 d d d d b d d d d d d d d 
    7 7 d d d d d d d d d d d d d 1 
    7 6 d d d d d d d d d d d d d d 
    7 6 d d d d d d d d d d b b d d 
    7 7 6 d d d d d d d d d b b d d 
    7 6 d d d d d d d 1 d d d d d d 
    7 d d b d d d d 1 1 1 d d d d d 
    7 6 d d d d d d d 1 d d d d d d 
    7 7 6 d d d d d d d d d d d d d 
    7 6 6 6 d d d d b d d d d d d d 
    7 7 d d d d d d d d d d d d d 1 
    `, true)
scene.setTile(1, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    6 6 7 6 7 6 7 6 6 d 6 7 7 6 7 7 
    d d 6 7 7 6 7 d d d 7 6 d 6 7 6 
    d d d d d d 6 d d d d d d d 6 d 
    d d d d d d d d d d d d d d d d 
    d 1 1 d 1 d d d d d 1 d d d d d 
    d 1 1 d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d b d d d d d d d 1 d 
    d d d d d d d d d d d d d d d d 
    d d b d d d d d d d d b b d d d 
    d d d d d d d d d d d b b d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d d 1 d d d d d d d d 
    d d d d d d d d d d d d d d 1 d 
    `, true)
scene.setTile(10, img`
    d d d d d d d d d d d d d d d d 
    d d d 1 1 d d d d d d d d b d d 
    d d d 1 1 d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d b d d d d d d b b d d d d d 
    d d d d d d d d d b b d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d b d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    1 1 d d d d d d d d d d d d d d 
    1 1 d d d d d d d d d d b d d d 
    d d d d d d 1 d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d b d 
    `, true)
scene.setTile(9, img`
    . f f . . f f . 
    . f f f f f f . 
    f f f f f f f f 
    f f f f f f f f 
    f f f d d f f f 
    f d d d d d d f 
    . d f d d f d . 
    3 d d d d d d 3 
    d d d d d d d d 
    9 9 9 9 9 4 9 9 
    9 9 9 9 9 5 8 9 
    d 9 9 9 9 9 5 d 
    d 9 9 9 9 9 9 d 
    d 8 8 8 8 8 8 d 
    . 8 8 8 8 8 8 . 
    . 8 8 . . 8 8 . 
    . d d . . d d . 
    `, false)
game.onUpdate(function () {
	
})
game.onUpdate(function () {
	
})
game.onUpdateInterval(10000, function () {
    mySprite.follow(主角, 55)
})
