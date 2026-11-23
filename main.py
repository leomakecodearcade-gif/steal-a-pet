def on_overlap_tile(sprite4, location4):
    tiles.set_tile_at(location4, assets.tile("""
        myTile3
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile5
        """),
    on_overlap_tile)

def on_overlap_tile2(sprite2, location2):
    tiles.set_tile_at(location2, assets.tile("""
        myTile1
        """))
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.dark_ground_south,
    on_overlap_tile2)

def on_b_pressed():
    if info.score() < 2:
        game.splash("")
        game.reset()
    sprites.destroy(myEnemy)
    tiles.set_current_tilemap(tilemap("""
        level3
        """))
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_overlap_tile3(sprite5, location5):
    tiles.set_tile_at(location5, assets.tile("""
        myTile
        """))
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.dark_ground_north_west0,
    on_overlap_tile3)

def on_overlap_tile4(sprite, location):
    info.change_score_by(1)
    if info.score() == 1:
        tiles.set_tile_at(location, assets.tile("""
            myTile
            """))
        game.splash("PUFFER - COMMON")
    if info.score() == 2:
        tiles.set_tile_at(location, assets.tile("""
            myTile0
            """))
        game.splash("BUNBUN - COMMON")
    if info.score() == 3:
        tiles.set_tile_at(location, assets.tile("""
            myTile1
            """))
        game.splash("ZOZO - COMMON")
    if info.score() == 3:
        sprites.destroy(myEnemy)
        tiles.set_current_tilemap(tilemap("""
            level2
            """))
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.chest_closed,
    on_overlap_tile4)

def on_overlap_tile5(sprite3, location3):
    tiles.set_tile_at(location3, assets.tile("""
        myTile0
        """))
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.dark_ground_east,
    on_overlap_tile5)

def on_on_overlap(sprite6, otherSprite):
    info.change_life_by(-1)
    mySprite.set_position(149, 2)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap)

myEnemy: Sprite = None
mySprite: Sprite = None
mySprite = sprites.create(img("""
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
        """),
    SpriteKind.player)
myEnemy = sprites.create(img("""
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
        """),
    SpriteKind.enemy)
myEnemy.set_position(84, 93)
myEnemy.follow(mySprite, 100)
tiles.set_current_tilemap(tilemap("""
    level1
    """))
scene.camera_follow_sprite(mySprite)
controller.move_sprite(mySprite)
info.set_score(3)
info.set_life(3)