input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("\"clap clap clap\"")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
})
basic.showLeds(`
    # . . # .
    . # # . .
    . # # . .
    # . . # .
    . . . . #
    `)
