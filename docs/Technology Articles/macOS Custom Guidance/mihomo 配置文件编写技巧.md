绝大部分 mihomo 配置文件都可以沿用默认值或者参照任意知名配置模板。下文中所有引用的配置均为默认值。

#### TCP Keep Alive

```yaml
keep-alive-interval: 15
keep-alive-idle: 15
disable-keep-alive: false
```

Go 语言的 Keep Alive 原理是在连接沉寂 `idle` 秒后尝试向链接的对方发送数据包验证链接是否保持活跃；如果没有收到回应，将从此开始每间隔 `interval` 秒再次尝试发送数据包验证链接是否活跃，直到尝试次数达到指定数量（mihomo 配置文件中无法更改该数量）。

显然，提升 `interval` 能够大大减少发送数据包造成的频繁唤醒，从而优化 mihomo 内核的耗电情况。但是提升 `interval` 也会大大延长 TCP 链接在内存中存在的时间，导致内核同时保持巨量的链接占用大量内存。

mihomo 官方文档描述，安卓设备上 `disable-keep-alive` 会被强制设置为 `true` 。如果你需要在移动设备上达成极致省电的目标，可能可以考虑官方的这种做法。