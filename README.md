# Junting Wu · Academic homepage

参考 [Julie Zhu 的主页](https://qianyu-zhu.github.io/)和 [al-folio](https://github.com/alshedivat/al-folio) 的静态个人网站。首页包含个人简介和 Selected Publications，另有独立的 Publications 页面。网站支持手机浏览及深浅色切换。 [访问网站](https://jonathanjtt.github.io/)

## 更新内容

- 在 `index.html` 修改简介和研究方向。替换首页照片时，更新 `assets/profile.jpg`，并在 `index.html` 中填写新照片的宽度、高度和替代文字。
- 在 `index.html` 的 Selected Publications 区块或 `publications/index.html` 的列表中添加论文。每篇论文使用一个 `<li>`，并填写标题、作者、稿件状态或发表信息以及 PDF 链接。首页的论文标题使用 `<h3>`，独立论文页使用 `<h2>`。

```html
<ul class="publication-list" role="list">
  <li>
    <h2>Paper title</h2>
    <p>Author names</p>
    <p class="publication-meta">Venue, year</p>
    <a class="publication-link" href="https://example.com/paper.pdf">PDF</a>
  </li>
</ul>
```

## 本地预览

在仓库目录运行 `python3 -m http.server 8000`，然后打开 [本地主页](http://localhost:8000/)。

## GitHub Pages

在仓库的 **Settings → Pages** 选择 **Deploy from a branch**，将发布来源设为 `main` 分支的 `/(root)`。后续推送到 `main` 的更新会自动发布。
