# Junting Wu · Academic homepage

参考 [Julie Zhu 的主页](https://qianyu-zhu.github.io/)和 [al-folio](https://github.com/alshedivat/al-folio) 的静态个人网站。网站包含 About、News 和 Publications，支持手机浏览及深浅色切换。 [访问网站](https://jonathanjtt.github.io/)

## 更新内容

- 在 `index.html` 修改简介和研究方向。把照片放到 `assets/profile.jpg`，再把 `profile-placeholder` 整块替换成 `<img class="profile-photo" src="assets/profile.jpg" alt="你的姓名">`。
- 在 `index.html` 的 News 区块用以下列表替换占位段落。每条近况使用一个 `<li>`。

```html
<ul class="news-list" role="list">
  <li><time datetime="2026-11-23">Nov 23, 2026</time><span>在这里写近况。</span></li>
</ul>
```

- 在 `publications/index.html` 用以下列表替换占位段落。每篇论文使用一个 `<li>`，将示例链接改成论文的真实地址。

```html
<ul class="publication-list" role="list">
  <li>
    <h2><a href="https://example.com/paper">Paper title</a></h2>
    <p>Author names</p>
    <p class="publication-meta">Venue, year</p>
  </li>
</ul>
```

## 本地预览

在仓库目录运行 `python3 -m http.server 8000`，然后打开 [本地主页](http://localhost:8000/)。

## GitHub Pages

在仓库的 **Settings → Pages** 选择 **Deploy from a branch**，将发布来源设为 `main` 分支的 `/(root)`。后续推送到 `main` 的更新会自动发布。
