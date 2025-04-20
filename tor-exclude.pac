function FindProxyForURL(url, host) {
    // loại trừ tên miền
if (dnsDomainIs(host, "ipleak.net") || dnsDomainIs(host, "youtube.com")) {
    return "DIRECT";
}
    return "SOCKS5 127.0.0.1:9050";
}
