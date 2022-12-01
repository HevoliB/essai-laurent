input.onButtonPressed(Button.A, function () {
    led.unplot(xposition, yposition)
    xposition += -1
    led.plot(xposition, yposition)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Super Fille")
})
input.onButtonPressed(Button.B, function () {
    led.unplot(xposition, yposition)
    xposition += 1
    led.plot(xposition, yposition)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    yposition += 1
    led.plot(xposition, yposition)
})
let yposition = 0
let xposition = 0
basic.clearScreen()
xposition = 0
yposition = 0
led.plot(xposition, yposition)
