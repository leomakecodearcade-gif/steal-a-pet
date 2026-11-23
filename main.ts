namespace SpriteKind {
    export const pet = SpriteKind.create()
}
function LEVEL_NUMERO_3 () {
    tiles.setCurrentTilemap(tilemap`level2`)
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite)
    mySprite9 = sprites.create(img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `, SpriteKind.Enemy)
    mySprite10 = sprites.create(img`
        ........................
        ............cc..........
        ............ccc.........
        ........ccc.ccccccc.....
        ........ccccc555555cc...
        ........ccb5555555555c..
        .....ccc.b55555ff15555c.
        .....cccb5555555ff55555c
        ......cb555555555555d55c
        ....c.b555555555bb55555c
        ....ccb555ddd5555b13bbc.
        ....ccd55ddddd555b3335c.
        .....cdd5ddddddd55b335c.
        ...c.bddddb555bbbd555c..
        ...ccdddddbb55555bccc...
        ...ccdddddddcc555bcc....
        ...ccddddddddbcccbcccc..
        .ccbddddddd55dbbbbc55c..
        ccddddddddd555dbbcc5c...
        cddddddbbbdd555bbccc....
        .ccddddbbbbdd55bcc......
        ...cccbbbbbdddbcddcc....
        .....cccccdd555dcccc....
        ..........cccccc........
        `, SpriteKind.Enemy)
    mySprite9.setPosition(34, 22)
    mySprite10.setPosition(128, 94)
    mySprite9.follow(mySprite, 50)
    mySprite10.follow(mySprite, 50)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundSouth, function (sprite2, location2) {
    tiles.setTileAt(location2, assets.tile`myTile1`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() < 3) {
        game.splash("")
        game.reset()
    }
    info.changeScoreBy(1)
    sprites.destroy(myEnemy)
    sprites.destroy(mySprite5)
    tiles.setCurrentTilemap(tilemap`level3`)
    info.setLife(3)
    if (info.score() == 4) {
        level_numero_2()
    }
    if (info.score() == 8) {
        LEVEL_NUMERO_3()
    }
    if (info.score() == 12) {
        LEVEL_NUMERO_LEGENDARY()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() >= 3 && petscalled == false) {
        petscalled = true
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 8 8 8 8 8 8 8 f . . . 
            . . . f 8 8 8 8 8 8 8 8 8 f . . 
            . . f 8 8 8 8 8 8 8 9 8 8 8 f . 
            . . f 8 8 8 5 5 8 9 8 8 8 8 f . 
            . . f 8 8 f 5 f 5 8 8 8 8 8 f . 
            . . f 8 8 5 5 5 5 8 8 8 8 8 f . 
            . . f 8 8 8 5 5 8 8 8 8 8 8 f . 
            . . . f 8 8 8 8 8 8 8 8 8 f . . 
            . . . . f 8 8 8 8 8 8 8 f . . . 
            . . . . . f f f f f f f . . . . 
            `, SpriteKind.pet)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 4 4 4 . . . . . . . . 4 4 4 . 
            . 4 1 4 4 . . . . . . 4 4 1 4 . 
            . . 4 1 4 4 4 4 4 4 4 4 1 4 4 . 
            . . 4 4 1 1 1 1 1 1 1 1 1 4 . . 
            . . . 4 5 f 1 1 1 f 5 1 4 . . . 
            . . . 4 e 1 1 1 1 1 e 4 . . . . 
            . . . 4 1 1 1 1 1 1 1 4 . . . . 
            . . . . 4 4 1 1 1 4 4 . . . . . 
            . . . . . . 4 4 4 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.pet)
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . d d d d d d d d d d d . . 
            . . . d d d d d d d d d d d . . 
            . . . d d d e d d d e d d d . . 
            . . . d d d e d d d e d d d . . 
            . . . d d d e d d d e d d d . . 
            . . . d d d d d d d d d d d . . 
            . . . d d d d d e d d d d d . . 
            . . . . . . d d d d d . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.pet)
        mySprite2.follow(mySprite, 55)
        mySprite3.follow(mySprite, 65)
        mySprite4.follow(mySprite, 75)
        mySprite2.setFlag(SpriteFlag.GhostThroughWalls, true)
        mySprite3.setFlag(SpriteFlag.GhostThroughWalls, true)
        mySprite4.setFlag(SpriteFlag.GhostThroughWalls, true)
    }
    if (info.score() == 7 && level_2 == false) {
        sprites.destroyAllSpritesOfKind(SpriteKind.pet)
        level_2 = true
        mySprite7 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 4 4 4 4 4 4 4 . . . . . . . . 
            . 4 e e e e e 4 4 4 . . . . . . 
            . 4 e 5 e 5 e e e 4 . . . . . . 
            . 4 e e e e e e e 4 4 . . . . . 
            . 4 e 5 5 5 5 e e e 4 . . . . . 
            . 4 e e e e e e e 4 4 . . . . . 
            . 4 . . . . . . . 4 . . . . . . 
            . 4 . . . . . . . 4 . . . . . . 
            . 4 . . . . . . . 4 . . . . . . 
            . 4 4 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.pet)
        mySprite6 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 . . . . 2 2 . . . . . 
            . . 2 f 2 . . . . 2 f 2 . . . . 
            . . 2 f f 3 . . 3 f f 2 . . . . 
            . . 2 f f f 3 3 f f f 2 . . . . 
            . . . 2 f f f f f f 2 2 . . . . 
            . . . 2 2 f f f f 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.pet)
        mySprite8 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . f 1 1 1 1 f . . . . . . 
            . . . f 1 f 1 1 f 1 f . . . . . 
            . . . f 1 f 1 1 f 1 f . . . . . 
            . . . f 1 2 f f 2 1 f . . . . . 
            . . . . f 1 1 1 1 f . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . f 2 1 2 1 f . . . . . . 
            . f f f 2 1 2 1 2 1 f f f . . . 
            . . . f 1 2 1 2 1 2 f . . . . . 
            . . . f 2 1 2 1 2 1 f . . . . . 
            . . . f 1 2 1 2 1 2 f . . . . . 
            `, SpriteKind.pet)
        mySprite7.follow(mySprite, 55)
        mySprite6.follow(mySprite, 65)
        mySprite8.follow(mySprite, 75)
        mySprite7.setFlag(SpriteFlag.GhostThroughWalls, true)
        mySprite6.setFlag(SpriteFlag.GhostThroughWalls, true)
        mySprite8.setFlag(SpriteFlag.GhostThroughWalls, true)
    }
    if (info.score() == 11 && LEVELOLOLOLOLOLOLOL_LLOOLL_3_SENSIBILE_RIGHT == false) {
        sprites.destroyAllSpritesOfKind(SpriteKind.pet)
        LEVELOLOLOLOLOLOLOL_LLOOLL_3_SENSIBILE_RIGHT = true
        mySprite7 = sprites.create(assets.image`myImage`, SpriteKind.pet)
        mySprite6 = sprites.create(assets.image`myImage1`, SpriteKind.pet)
        mySprite8 = sprites.create(assets.image`myImage3`, SpriteKind.pet)
        mySprite7.follow(mySprite, 55)
        mySprite6.follow(mySprite, 65)
        mySprite8.follow(mySprite, 75)
        mySprite7.setFlag(SpriteFlag.GhostThroughWalls, true)
        mySprite6.setFlag(SpriteFlag.GhostThroughWalls, true)
        mySprite8.setFlag(SpriteFlag.GhostThroughWalls, true)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundNorthWest0, function (sprite5, location5) {
    tiles.setTileAt(location5, assets.tile`myTile`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundNorthWest1, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile14`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    info.changeScoreBy(1)
    if (info.score() == 9) {
        tiles.setTileAt(location, assets.tile`myTile12`)
        game.splash("SHARK SQAUSH - EPIC")
    }
    if (info.score() == 10) {
        tiles.setTileAt(location, assets.tile`myTile13`)
        game.splash("MONKBCK - EPIC")
    }
    if (info.score() == 11) {
        tiles.setTileAt(location, assets.tile`myTile14`)
        game.splash("OWOWOWO - EPIC")
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.changeScoreBy(1)
    if (info.score() == 1) {
        tiles.setTileAt(location, assets.tile`myTile`)
        game.splash("PUFFER - COMMON")
    }
    if (info.score() == 2) {
        tiles.setTileAt(location, assets.tile`myTile0`)
        game.splash("KITEY CAT - COMMON")
    }
    if (info.score() == 3) {
        tiles.setTileAt(location, assets.tile`myTile1`)
        game.splash("ZOZO - COMMON")
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundEast, function (sprite3, location3) {
    tiles.setTileAt(location3, assets.tile`myTile0`)
})
function LEVEL_NUMERO_LEGENDARY () {
    tiles.setCurrentTilemap(tilemap`level6`)
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite)
    mySprite11 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . c a a a a . . . . . . 
        . . . . . a a f f b a . . . . . 
        . . . . c a b f f c b . . . . . 
        . . . . c b b b a f c b . . . . 
        . . . . c b a c a b b b . . . . 
        . . . . . b b f f a a c . . . . 
        . . . . . . a a b b c . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite12 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . c a a a a . . . . . . . 
        . . . . a a f f b a . . . . . . 
        . . . c a b f f c b . . . . . . 
        . . . c b b b a f c b . . . . . 
        . . . c b a c a b b b . . . . . 
        . . . . b b f f a a c . . . . . 
        . . . . . a a b b c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite13 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . c a a a c . . . . . . . 
        . . . c c f a b b c . . . . . . 
        . . . b f f b f a a . . . . . . 
        . . . b b a b f f a . . . . . . 
        . . . c b f b b a c . . . . . . 
        . . . . b a f c c . . . . . . . 
        . . . . . b b c . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite11.follow(mySprite, 40)
    mySprite12.follow(mySprite, 50)
    mySprite13.follow(mySprite, 40)
    mySprite11.setPosition(27, 25)
    mySprite12.setPosition(123, 26)
    mySprite13.setPosition(132, 74)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundSouthEast0, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile10`)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    pauseUntil(() => level == 2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundNorthEast0, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile9`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundNorth, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile12`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundWest, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile13`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    info.changeScoreBy(1)
    if (info.score() == 5) {
        tiles.setTileAt(location, assets.tile`myTi`)
        game.splash("JUB NUB - RARE ")
    }
    if (info.score() == 6) {
        tiles.setTileAt(location, assets.tile`myTile9`)
        game.splash("LIPSTICK - RARE")
    }
    if (info.score() == 7) {
        tiles.setTileAt(location, assets.tile`myTile10`)
        game.splash("MR. FUNKY FROW - COMMON")
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite6, otherSprite) {
    info.changeLifeBy(-1)
    mySprite.setPosition(27, 26)
    if (info.life() == 0) {
        music.play(music.stringPlayable("C C C C C C C C ", 120), music.PlaybackMode.UntilDone)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundSouthWest0, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTi`)
})
function level_numero_2 () {
    tiles.setCurrentTilemap(tilemap`level5`)
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite)
    mySprite5 = sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c 1 b b b 1 b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b 1 f f 1 c b b b b f . . . . 
        f f 1 f f 1 f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Enemy)
    mySprite.setPosition(19, 14)
    mySprite5.setPosition(80, 60)
    mySprite5.follow(mySprite, 75)
}
let mySprite13: Sprite = null
let mySprite12: Sprite = null
let mySprite11: Sprite = null
let mySprite8: Sprite = null
let mySprite6: Sprite = null
let mySprite7: Sprite = null
let mySprite4: Sprite = null
let mySprite2: Sprite = null
let mySprite3: Sprite = null
let mySprite5: Sprite = null
let mySprite10: Sprite = null
let mySprite9: Sprite = null
let level = 0
let myEnemy: Sprite = null
let mySprite: Sprite = null
let LEVELOLOLOLOLOLOLOL_LLOOLL_3_SENSIBILE_RIGHT = false
let level_2 = false
let petscalled = false
petscalled = false
level_2 = false
LEVELOLOLOLOLOLOLOL_LLOOLL_3_SENSIBILE_RIGHT = false
mySprite = sprites.create(img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `, SpriteKind.Player)
myEnemy = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
myEnemy.setPosition(84, 93)
myEnemy.follow(mySprite, 100)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
level = 1
if (info.score() == 3) {
    level += 1
}
info.setScore(7)
info.setLife(3)
