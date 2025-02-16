---
sidebar_position: 6
title: ICaptchaTokenCache
---
# `ICaptchaTokenCache` Interface

This document explains the `ICaptchaTokenCache` interface and how to implement it to customize the storage and retrieval of captcha tokens. This is intended for developers who need more control over how captcha tokens are handled.

## `ICaptchaTokenCache` Interface Overview

The `ICaptchaTokenCache` interface defines the methods required for caching captcha tokens.  Implementing this interface allows you to use different caching mechanisms, such as in-memory storage, distributed caches (Redis, Memcached), or databases.  This is crucial for scalability and performance in production environments.

## Interface Methods

The `ICaptchaTokenCache` interface defines the following methods:

### `Cache(string key, string value)`

This method caches a captcha token.

*   `key`: The unique key associated with the token.  This key is typically derived from the user's session or some other identifier.
*   `value`: The captcha token to be cached.  This is the actual value generated for the captcha challenge.
*   **`CaptchaException`**:  Implementations should throw a `CaptchaException` if an error occurs during the caching process (e.g., storage failure, invalid input).

### `Token Retrieve(string key)`

This method retrieves a cached captcha token.

*   `key`: The key of the token to retrieve.
*   **Returns:** The cached captcha token as a `Token` object (or null if no token is found). The `Token` class will likely have properties like `Value` (the string token), and potentially a timestamp or other metadata.
*   **`CaptchaException`**: Implementations should throw a `CaptchaException` if an error occurs during retrieval (e.g., storage access failure, invalid key).

### `void Clear(string key)`

This method removes a cached captcha token.

*   `key`: The key of the token to clear.
*   **`CaptchaException`**: Implementations should throw a `CaptchaException` if an error occurs during clearing (e.g., storage access failure, invalid key).

## Implementing `ICaptchaTokenCache`

To create a custom captcha token cache, you need to create a class that implements the `ICaptchaTokenCache` interface and provides concrete implementations for the methods described above.

**Example Implementation (using an in-memory dictionary - for demonstration purposes only, not suitable for production):**

```csharp
public class InMemoryCaptchaTokenCache : ICaptchaTokenCache
{
    private readonly Dictionary<string, Token> _cache = new Dictionary<string, Token>();

    public void Cache(string key, string value)
    {
        try
        {
            _cache[key] = new Token { Value = value, Timestamp = DateTime.UtcNow }; // Store token with timestamp
        }
        catch (Exception ex)
        {
            throw new CaptchaException("Error caching token", ex);
        }
    }

    public Token Retrieve(string key)
    {
        try
        {
            if (_cache.TryGetValue(key, out var token))
            {
                return token;
            }
            return null;
        }
        catch (Exception ex)
        {
            throw new CaptchaException("Error retrieving token", ex);
        }
    }

    public void Clear(string key)
    {
        try
        {
            _cache.Remove(key);
        }
        catch (Exception ex)
        {
            throw new CaptchaException("Error clearing token", ex);
        }
    }
}

// Example Token class
public class Token
{
    public string Value { get; set; }
    public DateTime Timestamp { get; set; } // Add a timestamp
    // ... other metadata
}
```

## Registering Your Custom Cache
After implementing `ICaptchaTokenCache`, you need to register it with your application's service collection.  Use the `AddCaptchaTokenCacheService` method in your `Program.cs` (for .NET 6 and later) or `Startup.cs` (for older ASP.NET versions):

```csharp
builder.Services.AddCaptcha(options => { /* ... captcha options ... */ })
       .AddCaptchaTokenCacheService<InMemoryCaptchaTokenCache>(); // Register your custom cache
```
This will register your custom implementation with the key "TokenCache", overriding the default `InMemoryCaptchaTokenCacheService` if you haven't implemented it manually.

## Important Considerations
- **Production-Ready Cache:** The in-memory example provided is not suitable for production environments. In a production setting, you should use a distributed cache (like Redis or Memcached) or a database for storing captcha tokens. In-memory storage is lost when the application restarts or scales horizontally.
- **CaptchaException:**  It is crucial to handle potential exceptions during caching, retrieval, and clearing and wrap them in a `CaptchaException`. This provides a consistent way for the captcha library to handle errors.
- **Token Class:** The example `Token` class includes a `Timestamp`. This is highly recommended to implement a time-based expiration for your captcha tokens. You can then check the timestamp in your `Retrieve` method to ensure the token hasn't expired.
- **Key Design:** Carefully design the keys you use for caching. They should be unique and ideally related to the user's session or request.
- **Security:** Ensure that your caching mechanism is secure and protected from unauthorized access. If you're using a distributed cache or database, follow security best practices for those systems.
- **Dependency Injection:** Ensure that your custom `ICaptchaTokenCache` implementation is properly registered with your dependency injection container.

By following these guidelines, you can effectively implement and use a custom captcha token cache that meets the specific requirements of your application.  Remember to choose a caching mechanism that is appropriate for your environment and prioritize security best practices.