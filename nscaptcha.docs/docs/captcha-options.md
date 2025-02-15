---
sidebar_position: 4
title: CaptchaOptions
---

# Understanding the `CaptchaOptions` Class

This document provides a detailed explanation of the `CaptchaOptions` class and its properties.  It is intended for developers who are using this class to configure the captcha functionality within their applications.

## `CaptchaOptions` Class Overview

The `CaptchaOptions` class is the central configuration point for customizing the captcha generation process.  It contains properties that control various aspects of the captcha, including its content (characters), font, style, noise, and other settings.

## Properties

The `CaptchaOptions` class contains the following properties:

### `Content` (`CaptchaContent` type)

This property provides access to the `CaptchaContent` object, which is used to configure the characters that appear in the captcha.  See the `CaptchaContent` section below for more details.

### `Font` (`CaptchaFont` type)

This property provides access to the `CaptchaFont` object, which is used to configure the font of the captcha text.  See the `CaptchaFont` section below for more details.

### `Style` (`CaptchaStyle` type)

This property provides access to the `CaptchaStyle` object, which is used to configure the visual style of the captcha, such as its dimensions, colors, and line thickness. See the `CaptchaStyle` section below for more details.

### `Noise` (`CaptchaNoise` type)

This property provides access to the `CaptchaNoise` object, which is used to configure the noise applied to the captcha image, such as the noise rate, line count, and rotation. See the `CaptchaNoise` section below for more details.

### `EncoderType` (`EncoderTypes` enum)

This property specifies the image encoder type to use for the captcha.  It can be set to either `EncoderTypes.Png` (default) or `EncoderTypes.Jpeg`.

### `MaximumCaptchaAttempts` (int)

This property sets the maximum number of captcha attempts allowed.  The default value is 5.  After exceeding this number of attempts, the user might be blocked or require additional verification.

### `CaptchaLifeTime` (`TimeSpan`)

This property defines the lifetime of the captcha.  The default value is 10 minutes.  After this time has elapsed, the captcha will expire and will no longer be valid.

## Nested Configuration Classes

The `CaptchaOptions` class uses nested classes to organize the configuration options.

### `CaptchaContent`

This class controls the content of the captcha:

*   **`IncludeUpperCaseLetters`**:  Whether to include uppercase letters (read-only).
*   **`IncludeLowerCaseLetters`**: Whether to include lowercase letters (read-only).
*   **`IncludeDigits`**: Whether to include digits (read-only).
*   **`IncludeSymbols`**: Whether to include symbols (read-only).
*   **`Length`**: The length of the captcha string (read-only).
*   **`UseLetters(bool useUpperCase, bool uselowerCase)`**: Configures the captcha to use letters.
*   **`UseDigits()`**: Configures the captcha to use digits.
*   **`UseSymbols()`**: Configures the captcha to use symbols.
*   **`WithLength(int length)`**: Configures the length of the captcha.

### `CaptchaFont`

This class controls the font of the captcha text:

*   **`FontStyle`**: The font style (read-only).
*   **`FontSize`**: The font size (read-only).
*   **`FontFamilies`**: The font families to use (read-only).
*   **`AddStyle(FontStyle style)`**: Sets the font style.
*   **`Resize(float size)`**: Sets the font size.
*   **`AddFontFamily(params string[] fontFamilies)`**: Sets the font families.

### `CaptchaNoise`

This class controls the noise applied to the captcha image:

*   **`NoiseRate`**: The noise rate (read-only).
*   **`LineCount`**: The number of lines (read-only).
*   **`MaxRotationDegrees`**: The maximum rotation degrees (read-only).
*   **`FixRate(ushort rate)`**: Sets a fixed noise rate.
*   **`FixLines(byte count)`**: Sets a fixed number of lines.
*   **`MaxRotate(byte degree)`**: Sets the maximum rotation degrees.

### `CaptchaStyle`

This class controls the visual style of the captcha:

*   **`Width`**: The width of the captcha image (read-only).
*   **`Height`**: The height of the captcha image (read-only).
*   **`TextColor`**: The text colors (read-only).
*   **`LinesColors`**: The line colors (read-only).
*   **`NoiseColors`**: The noise colors (read-only).
*   **`BackgroundColors`**: The background colors (read-only).
*   **`MinLineThickness`**: The minimum line thickness (read-only).
*   **`MaxLineThickness`**: The maximum line thickness (read-only).
*   **`FixDimensions(ushort width, ushort height)`**: Sets the dimensions.
*   **`FixNoiseLinesDiameter(float minLineThickness, float maxLineThickness)`**: Sets the line thickness.
*   **`AddTextColors(params System.Drawing.Color[] colors)`**: Adds text colors.
*   **`AddNoiseLinesColors(params System.Drawing.Color[] colors)`**: Adds line colors.
*   **`AddNoiseDotsColors(params System.Drawing.Color[] colors)`**: Adds noise colors.
*   **`AddBackgroundColors(params System.Drawing.Color[] colors)`**: Adds background colors.

## Usage Example

```csharp
builder.Services.AddCaptcha(options =>
{
    options.Content.UseLetters(true, true).WithLength(8); // Use both upper and lowercase letters, length 8
    options.Font.Resize(32).AddFontFamily("Arial", "Verdana"); // Font size 32, Arial or Verdana
    options.Style.FixDimensions(200, 60).AddNoiseLinesColors(Color.Red, Color.Blue); // Dimensions 200x60, red and blue noise lines
    options.Noise.FixRate(500).MaxRotate(10); // Noise rate 500, max rotation 10 degrees
    options.MaximumCaptchaAttempts = 3; // Max 3 attempts
    options.CaptchaLifeTime = TimeSpan.FromMinutes(5); // Lifetime 5 minutes
});
```

This example demonstrates how to configure the `CaptchaOptions` using the builder pattern (chaining method calls).  You can customize each aspect of the captcha by using the appropriate properties and methods.  Remember to consult the documentation for a full list of available options and their effects.