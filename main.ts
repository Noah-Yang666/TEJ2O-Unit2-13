/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Noah Yang
 * Created on: April 2026
 * This program uses loops to count down
*/

// variables needed
let loopCounter: number = 4
let neopixelStrip: neopixel.Strip = null 

// setting up
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

// pressing A and running loop
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    loopCounter = 4
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.show()
    while (loopCounter >= 0) {
        neopixelStrip.setPixelColor(loopCounter, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        basic.showNumber(loopCounter)
        loopCounter = loopCounter - 1
        basic.clearScreen()
        basic.pause(1000)
    }
    basic.clearScreen()
    neopixelStrip.clear()
    neopixelStrip.show()
    basic.showIcon(IconNames.Happy)
})
