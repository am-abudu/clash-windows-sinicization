const render = [
  {
    reg: /"General"/g,
    value: '"通用"',
    type: "render"
  },
  {
    reg: /"Proxies"/g,
    value: '"代理"',
    type: "render"
  },
  {
    reg: /"Profiles"/g,
    value: '"配置文件"',
    type: "render"
  },
  {
    reg: /"Logs"/g,
    value: '"日志"',
    type: "render"
  },
  {
    reg: /"Connections"/g,
    value: '"连接统计"',
    type: "render"
  },
  {
    reg: /"Settings"/g,
    value: '"设置"',
    type: "render"
  },
  {
    reg: /"Feedback"/g,
    value: '"反馈"',
    type: "render"
  },
  {
    reg: /"Connected"/g,
    value: '"运行中"',
    type: "render"
  },
  {
    reg: /"Disconnected"/g,
    value: '"连接断开"',
    type: "render"
  },
  {
    reg: /"Installing"/g,
    value: '"正在安装"',
    type: "render"
  },
  {
    reg: /"Uninstalling"/g,
    value: '"正在卸载"',
    type: "render"
  },
  {
    reg: /"Port"/g,
    value: '"端口"',
    type: "render"
  },
  {
    reg: /Allow LAN/g,
    value: "允许局域网连接",
    type: "render"
  },
  {
    reg: /Core Version/g,
    value: "Clash核心版本",
    type: "render"
  },
  {
    reg: /Home Directory/g,
    value: "主目录",
    type: "render"
  },
  {
    reg: /Open Folder/g,
    value: "打开文件夹",
    type: "render"
  },
  {
    reg: /UWP Loopback/g,
    value: "UWP 网络回环",
    type: "render"
  },
  {
    reg: /Launch Helper/g,
    value: "启动助手",
    type: "render"
  },
  {
    reg: /TAP Device/g,
    value: "虚拟网卡",
    type: "render"
  },
  {
    reg: /\sManage/g,
    value: " 管理",
    type: "render"
  },
  {
    reg: /TAP device management/g,
    value: "虚拟网卡管理",
    type: "render"
  },
  {
    reg: /An adapter named "cfw-tap" will route your data into clash\./g,
    value: "名为“cfw tap”的适配器将把数据路由到clash中。",
    type: "render"
  },
  {
    reg: /If the installation box pops up, keep clicking "Next" until the installation is complete\./g,
    value: "如果弹出安装框，请一直单击“下一步”，直到安装完成。",
    type: "render"
  },
  {
    reg: /"Install"/g,
    value: '"安装"',
    type: "render"
  },
  {
    reg: /"Remove"/g,
    value: '"卸载"',
    type: "render"
  },
  {
    reg: /General YAML/g,
    value: "通用配置",
    type: "render"
  },
  {
    reg: /Text Mode Edit/g,
    value: "以文本方式编辑",
    type: "render"
  },
  {
    reg: /"Mixin"/g,
    value: '"混合模式"',
    type: "render"
  },
  {
    reg: /Mixin allows you to overwrite the original configuration file\./g,
    value: "混合模式允许您覆盖原始配置文件。",
    type: "render"
  },
  {
    reg: /"System Proxy"/g,
    value: '"系统代理"',
    type: "render"
  },
  {
    reg: /System Proxy:/g,
    value: "系统代理：",
    type: "render"
  },
  {
    reg: /"On"/g,
    value: '"开"',
    type: "render"
  },
  {
    reg: /"Off"/g,
    value: '"关"',
    type: "render"
  },
  {
    reg: /Start with Windows/g,
    value: "随Windows启动",
    type: "render"
  },
  {
    reg: /"Docs"/g,
    value: '"文档"',
    type: "render"
  },
  {
    reg: /Global Mode/g,
    value: "全局模式",
    type: "render"
  },
  {
    reg: /Rule Mode/g,
    value: "规则模式",
    type: "render"
  },
  {
    reg: /Direct Mode/g,
    value: "直连模式",
    type: "render"
  },
  {
    reg: /Script Mode/g,
    value: "脚本模式",
    type: "render"
  },
  {
    reg: /Test latency/g,
    value: "延迟测试",
    type: "render"
  },
  {
    reg: /No provider in this profile\./g,
    value: "此配置文件中没有提供程序。",
    type: "render"
  },
  {
    reg: /Download from a URL/g,
    value: "订阅地址",
    type: "render"
  },
  {
    reg: /"Download"/g,
    value: '"下载"',
    type: "render"
  },
  {
    reg: /"Success!"/g,
    value: '"成功！"',
    type: "render"
  },
  {
    reg: /"Import"/g,
    value: '"导入"',
    type: "render"
  },
  {
    reg: /Request Logs/g,
    value: "请求日志",
    type: "render"
  },
  {
    reg: /"mode:/g,
    value: '"模式：',
    type: "render"
  },
  {
    reg: /"Clear"/g,
    value: '"清空"',
    type: "render"
  },
  {
    reg: /"Stop"/g,
    value: '"停止"',
    type: "render"
  },
  {
    reg: /"Start"/g,
    value: '"开始"',
    type: "render"
  },
  {
    reg: /Empty log list/g,
    value: "啥也没有 嘤嘤嘤",
    type: "render"
  },
  {
    reg: /Refresh your browser to make requests\./g,
    value: "刷新连接再来看看吧。",
    type: "render"
  },
  {
    reg: /"Total:/g,
    value: '"总计：',
    type: "render"
  },
  {
    reg: /Upload Speed/g,
    value: "上传速度",
    type: "render"
  },
  {
    reg: /Download Speed/g,
    value: "下载速度",
    type: "render"
  },
  {
    reg: /Upload Traffic/g,
    value: "上传流量",
    type: "render"
  },
  {
    reg: /Download Traffic/g,
    value: "下载流量",
    type: "render"
  },
  {
    reg: /"Time"/g,
    value: '"时间"',
    type: "render"
  },
  {
    reg: /Close All/g,
    value: "全部关闭",
    type: "render"
  },
  {
    reg: /Reset All Settings/g,
    value: "重置全部设置",
    type: "render"
  },
  {
    reg: /"Appearance"/g,
    value: '"外观"',
    type: "render"
  },
  {
    reg: /"Theme"/g,
    value: '"主题"',
    type: "render"
  },
  {
    reg: /"Light"/g,
    value: '"浅色"',
    type: "render"
  },
  {
    reg: /"Dark"/g,
    value: '"深色"',
    type: "render"
  },
  {
    reg: /Follow System Theme/g,
    value: "跟随系统主题",
    type: "render"
  },
  {
    reg: /Font Family/g,
    value: "字体",
    type: "render"
  },
  {
    reg: /Default Icon Path/g,
    value: "默认图标",
    type: "render"
  },
  {
    reg: /System Proxy On Icon Path/g,
    value: "系统代理图标",
    type: "render"
  },
  {
    reg: /"Notifications"/g,
    value: '"通知"',
    type: "render"
  },
  {
    reg: /System Proxy Bypass/g,
    value: "不代理",
    type: "render"
  },
  {
    reg: /Domain or IPNet/g,
    value: "域名或IP",
    type: "render"
  },
  {
    reg: /Profile Mixin/g,
    value: "混合模式",
    type: "render"
  },
  {
    reg: /"Type"/g,
    value: '"类型"',
    type: "render"
  },
  {
    reg: /Proxy Item Width/g,
    value: "代理宽度",
    type: "render"
  },
  {
    reg: /Order By/g,
    value: "排序方式",
    type: "render"
  },
  {
    reg: /"Default"/g,
    value: '"默认"',
    type: "render"
  },
  {
    reg: /"Latency"/g,
    value: '"延迟"',
    type: "render"
  },
  {
    reg: /"Alphabet"/g,
    value: '"名称"',
    type: "render"
  },
  {
    reg: /Latency Test URL/g,
    value: "延迟测试地址",
    type: "render"
  },
  {
    reg: /Latency Test Timeout/g,
    value: "延迟测试超时时间",
    type: "render"
  },
  {
    reg: /Break When Proxy Change/g,
    value: "代理修改时停止",
    type: "render"
  },
  {
    reg: /Break When Profile Change/g,
    value: "配置修改时停止",
    type: "render"
  },
  {
    reg: /Break When Mode Change/g,
    value: "模式修改时停止",
    type: "render"
  },
  {
    reg: /Display Type/g,
    value: "显示类型",
    type: "render"
  },
  {
    reg: /Keep Disconnected/g,
    value: "保持断开",
    type: "render"
  },
  {
    reg: /"Outbound"/g,
    value: '"出站"',
    type: "render"
  },
  {
    reg: /"Parsers"/g,
    value: '"解析器"',
    type: "render"
  },
  {
    reg: /Folder Path/g,
    value: "文件夹路径",
    type: "render"
  },
  {
    reg: /Profiles folder path/g,
    value: "配置文件路径",
    type: "render"
  },
  {
    reg: /Request Headers/g,
    value: "请求头",
    type: "render"
  },
  {
    reg: /Select After Updated/g,
    value: "更新后选择",
    type: "render"
  },
  {
    reg: /"Record"/g,
    value: '"记录"',
    type: "render"
  },
  {
    reg: /recording\.\.\./g,
    value: "记录中...",
    type: "render"
  },
  {
    reg: /"Developer"/g,
    value: '"开发者"',
    type: "render"
  },
  {
    reg: /"Relevance"/g,
    value: '"关于"',
    type: "render"
  },
  {
    reg: /"Advertisement"/g,
    value: '"广告"',
    type: "render"
  },
  {
    reg: /"Thanks"/g,
    value: '"鸣谢"',
    type: "render"
  },
  {
    reg: /"Downloading"/g,
    value: '"更新中"',
    type: "render"
  },
  {
    reg: /"Error!"/g,
    value: '"错误！"',
    type: "render"
  }
];

const main = [
  {
    reg: /"Global"/g,
    value: '"全局"',
    type: "main"
  },
  {
    reg: /"Rule"/g,
    value: '"规则"',
    type: "main"
  },
  {
    reg: /"Direct"/g,
    value: '"直连"',
    type: "main"
  },
  {
    reg: /"Script"/g,
    value: '"脚本"',
    type: "main"
  },
  {
    reg: /"Dashboard"/g,
    value: '"打开软件"',
    type: "main"
  },
  {
    reg: /System Proxy/g,
    value: "系统代理",
    type: "main"
  },
  {
    reg: /"Mixin"/g,
    value: '"混合模式"',
    type: "main"
  },
  {
    reg: /Proxy Mode/g,
    value: "代理模式",
    type: "main"
  },
  {
    reg: /"Global"/g,
    value: '"全局代理"',
    type: "main"
  },
  {
    reg: /"Rule"/g,
    value: '"规则模式"',
    type: "main"
  },
  {
    reg: /"Direct"/g,
    value: '"直连"',
    type: "main"
  },
  {
    reg: /"Script"/g,
    value: '"脚本"',
    type: "main"
  },
  {
    reg: /Force Quit/g,
    value: "强制退出",
    type: "main"
  },
  {
    reg: /"Quit"/g,
    value: '"退出"',
    type: "main"
  }
];

module.exports = [...render, ...main];
