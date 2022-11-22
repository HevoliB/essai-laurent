input.onButtonPressed(Button.A, function () {
    led.unplot(xposition, 0)
    xposition += -1
    led.plot(xposition, 0)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(xposition, 0)
    xposition += 1
    led.plot(xposition, 0)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    yposition += 1
    xposition = 0
    led.plot(xposition, yposition)
})
let yposition = 0
let xposition = 0
basic.clearScreen()
xposition = 0
yposition = 0
led.plot(0, 0)
