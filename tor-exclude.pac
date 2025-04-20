function FindProxyForURL(url, host) {
    // Log host để kiểm tra
    if (shExpMatch(host, "*.ipleak.net") || shExpMatch(host, "*.youtube.com")) {
        return "DIRECT";
    }
    return "SOCKS5 127.0.0.1:9050";
}
