input.onGesture(Gesture.Shake, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.showIcon(IconNames.No)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(500)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(500)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    pins.servoWritePin(AnalogPin.P0, 180)
    for (let index = 0; index < 10; index++) {
        music.playTone(523, music.beat(BeatFraction.Whole))
        basic.pause(500)
    }
    reset()
})
function reset () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    pins.servoWritePin(AnalogPin.P0, 270)
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 5, NeoPixelMode.RGB)
reset()
