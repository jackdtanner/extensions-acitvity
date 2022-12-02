namespace SpriteKind {
    export const Foot_Ball = SpriteKind.create()
    export const Goal = SpriteKind.create()
    export const Obstacle = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.stopDart()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
})
sprites.onOverlap(SpriteKind.Foot_Ball, SpriteKind.Obstacle, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Foot_Ball, SpriteKind.Goal, function (sprite, otherSprite) {
    game.splash("Goal!")
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let myDart: Dart = null
info.startCountdown(60)
scene.setBackgroundColor(6)
myDart = darts.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . e e e . . . . 
    . . . . . . e e e e d e e . . . 
    . . . . . e e d d d d d e e . . 
    . . . . e e d d d d d d d e . . 
    . . . . e d d d d d d d d e . . 
    . . . e e d d d d d d d d e . . 
    . . . e d d d d d d d d d e . . 
    . . . e d d d d d d d d d e . . 
    . . . e e e d d d d d e e e . . 
    . . . . . e e e e e e e . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Foot_Ball)
myDart.setTrace()
myDart.controlWithArrowKeys()
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . . . . 1 . . . . . 1 . . 
    . . . . . . . . 1 . . . . 1 . . 
    . . . . . . . . . 1 . . . 1 . . 
    . . . . . . . . 1 . 1 . . 1 . . 
    . . . . . . . 1 . . . 1 . 1 . . 
    . . . . . . . 1 . . . . 1 1 . . 
    . . . . . . . 1 1 1 1 1 1 1 . . 
    . . . . . . . 1 . . . . 1 1 . . 
    . . . . . . . 1 . . . 1 . 1 . . 
    . . . . . . . . 1 . 1 . . 1 . . 
    . . . . . . . . . 1 . . . 1 . . 
    . . . . . . . . 1 . . . . 1 . . 
    . . . . . . . 1 . . . . . 1 . . 
    . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
    `, SpriteKind.Goal)
mySprite.setPosition(150, 110)
let myDart2 = darts.create(img`
    . . . . . 6 f c e e e e 
    . . . . 6 7 7 6 e e e e 
    . . . 6 7 7 7 6 6 6 e e 
    . . 6 7 7 6 8 e 6 7 7 6 
    . . . 6 6 8 e e 7 7 6 8 
    . . . . . . e e 7 7 e e 
    . . . . . . e e 6 e e e 
    . . . . . . e e e e e e 
    . . . . . . e e e e e e 
    . . . . . . e e e e e e 
    . . . . . . c e e e e e 
    . . . . . . c e e e e e 
    . . . . . . f e e e e e 
    . . . . . 6 f e e e e e 
    . . . . 6 7 7 6 e e e e 
    . . . 6 7 7 7 6 6 6 e e 
    . . 6 7 7 6 e e 6 7 7 7 
    . . . 6 6 8 e e 7 7 6 8 
    . . . . . . e e 7 7 e e 
    . . . . . . e e 6 e e e 
    . . . . . . e e e e e e 
    . . . . . . e e e e e e 
    `, SpriteKind.Obstacle)
let myDart3 = darts.create(img`
    . . . . . 6 f c e e e e 
    . . . . 6 7 7 6 e e e e 
    . . . 6 7 7 7 6 6 6 e e 
    . . 6 7 7 6 8 e 6 7 7 6 
    . . . 6 6 8 e e 7 7 6 8 
    . . . . . . e e 7 7 e e 
    . . . . . . e e 6 e e e 
    . . . . . . e e e e e e 
    . . . . . . e e e e e e 
    . . . . . . e e e e e e 
    . . . . . . c e e e e e 
    . . . . . . c e e e e e 
    . . . . . . f e e e e e 
    . . . . . 6 f e e e e e 
    . . . . 6 7 7 6 e e e e 
    . . . 6 7 7 7 6 6 6 e e 
    . . 6 7 7 6 e e 6 7 7 7 
    . . . 6 6 8 e e 7 7 6 8 
    . . . . . . e e 7 7 e e 
    . . . . . . e e 6 e e e 
    . . . . . . e e e e e e 
    . . . . . . e e e e e e 
    `, SpriteKind.Obstacle)
let myDart4 = darts.create(img`
    . . . . . 6 f c e e e e 
    . . . . 6 7 7 6 e e e e 
    . . . 6 7 7 7 6 6 6 e e 
    . . 6 7 7 6 8 e 6 7 7 6 
    . . . 6 6 8 e e 7 7 6 8 
    . . . . . . e e 7 7 e e 
    . . . . . . e e 6 e e e 
    . . . . . . e e e e e e 
    . . . . . . e e e e e e 
    . . . . . . e e e e e e 
    . . . . . . c e e e e e 
    . . . . . . c e e e e e 
    . . . . . . f e e e e e 
    . . . . . 6 f e e e e e 
    . . . . 6 7 7 6 e e e e 
    . . . 6 7 7 7 6 6 6 e e 
    . . 6 7 7 6 e e 6 7 7 7 
    . . . 6 6 8 e e 7 7 6 8 
    . . . . . . e e 7 7 e e 
    . . . . . . e e 6 e e e 
    . . . . . . e e e e e e 
    . . . . . . e e e e e e 
    `, SpriteKind.Obstacle)
myDart2.setPosition(102, 39)
myDart3.setPosition(59, 96)
myDart4.setPosition(29, 31)
game.onUpdateInterval(500, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    mySprite2.setVelocity(randint(-90, -30), randint(0, scene.screenHeight()))
})
game.onUpdateInterval(500, function () {
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c . . . . . . 
        . . . . . . a b a a . . . . . . 
        . . . . . c b a f c a c . . . . 
        . . . . c b b b f f a c c . . . 
        . . . . b b f a b b a a c . . . 
        . . . . c b f f b a f c a . . . 
        . . . . . c a a c b b a . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    mySprite3.setVelocity(randint(-90, 30), randint(0, scene.screenHeight()))
})
