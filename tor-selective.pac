function FindProxyForURL(url, host) {
    // Nếu là voz.vn hoặc ipleak.net, sử dụng Tor
    if (shExpMatch(host, "voz.vn") || shExpMatch(host, "ipleak.net")) {
        return "SOCKS5 127.0.0.1:9050";
    }

    // Mọi trang khác kết nối trực tiếp
    return "DIRECT";
}
