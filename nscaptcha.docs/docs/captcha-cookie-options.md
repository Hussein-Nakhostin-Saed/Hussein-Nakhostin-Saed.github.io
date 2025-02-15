---
sidebar_position: 5
title: CaptchaCookieOptions
---

# Understanding the `CaptchaCookieOptions` Class

This document provides a detailed explanation of the `CaptchaCookieOptions` class. It is intended for developers who are using this class to configure the cookie settings specifically for captcha functionality within their applications.

## `CaptchaCookieOptions` Class Overview

The `CaptchaCookieOptions` class inherits from the standard ASP.NET Core `CookieOptions` class. It allows you to customize the cookie that stores the captcha challenge data.  It adds one specific property on top of the base `CookieOptions`:

## Properties

The `CaptchaCookieOptions` class contains the following properties:

### `Name` (string)

This property gets or sets the name of the captcha cookie.  The default value is "CK".  You can change this to a different name if needed.

## Inheritance from `CookieOptions`

Because `CaptchaCookieOptions` inherits from `CookieOptions`, you have access to all the standard cookie configuration options provided by the base class.  This includes, but is not limited to:

*   **`Domain`**:  The domain for the cookie.
*   **`Expires`**: The expiration date and time for the cookie.
*   **`HttpOnly`**:  Whether the cookie is only accessible via HTTP (recommended for security).
*   **`MaxAge`**: The maximum age of the cookie.
*   **`Path`**: The path for the cookie.
*   **`SameSite`**: The SameSite attribute of the cookie (important for security).
*   **`Secure`**: Whether the cookie requires a secure connection (HTTPS).

For a complete list of properties and their descriptions, please refer to the official ASP.NET Core documentation for the `CookieOptions` class.

## Usage Example

```csharp
builder.Services.AddCaptcha((options, cookieOptions) =>
{
    // ... captcha options ...

    cookieOptions.Name = "my-custom-captcha-cookie"; // Set a custom name
    cookieOptions.HttpOnly = true;               // Essential for security
    cookieOptions.SameSite = SameSiteMode.Lax;    // Adjust as needed
    // ... other cookie options ...
});
```
In this example, we're configuring the captcha cookie within the `AddCaptcha` service registration.  We're setting the `Name` to "my-custom-captcha-cookie", setting `HttpOnly` to `true` (a security best practice), and setting the `SameSite` attribute. You can set other `CookieOptions` properties as needed.

## Key Considerations
- **Security**: Setting `cookieOptions.HttpOnly = true` is highly recommended. This prevents client-side JavaScript from accessing the cookie, reducing the risk of XSS attacks. The `SameSite` attribute is also crucial for preventing CSRF attacks. Choose the appropriate value (`SameSiteMode.Lax`, `SameSiteMode.Strict`, or `SameSiteMode.None`) based on your application's requirements. If you use `SameSiteMode.None`, you must also set `cookieOptions.Secure = true`.
- **Cookie Name**: While the default cookie name ("CK") might be sufficient, consider using a more descriptive name for clarity and maintainability.
- **Other Cookie Options**: Explore the other properties available in the `CookieOptions` class to fine-tune the cookie's behavior, such as its expiration, domain, and path.
- **Placement**: Ensure you configure the `CaptchaCookieOptions` within the `AddCaptcha` method (or wherever you're registering the captcha service) and pass it to the `cookieOptions` parameter.

By understanding the `CaptchaCookieOptions` class and its relationship to the standard `CookieOptions`, you can effectively control the behavior and security of the cookie used for your captcha implementation.  Always prioritize security best practices when configuring cookies.