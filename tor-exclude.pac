function FindProxyForURL(url, host) {
    // Nếu là vnexpress.net hoặc youtube.com, kết nối trực tiếp
    if (shExpMatch(host, "ipleak.net") || shExpMatch(host, "m.youtube.com")) {
        return "DIRECT";
    }

    // Mọi trang khác sử dụng Tor
    return "SOCKS5 127.0.0.1:9050";
}
